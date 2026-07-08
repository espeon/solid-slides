#!/usr/bin/env node
// tools/screenshot.mjs
//
// Launch the slide deck (or attach to a running dev server) and capture
// a PNG at the given slide/step. Output path is printed on stdout for
// easy parsing by an agent.
//
// Usage:
//   pnpm screenshot -- --slide=2 --step=1
//   node tools/screenshot.mjs --slide=2 --step=1 --width=1920 --height=1080
//
// Env:
//   SCREENSHOT_PORT   port to expect the dev server on (default 3000)
//   SCREENSHOT_URL    full base URL, overrides SCREENSHOT_PORT
//   SCREENSHOT_OUT    output path (default screenshots/slide-<n>-step-<m>.png)
//   SCREENSHOT_SPAWN  if "false", never spawn the dev server

import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import puppeteer from "puppeteer";

const arg = (name, fallback) => {
  const a = process.argv.find((x) => x.startsWith(`--${name}=`));
  return a ? a.slice(name.length + 3) : fallback;
};

const slide = Math.max(0, parseInt(arg("slide", "0"), 10) || 0);
const step = Math.max(0, parseInt(arg("step", "0"), 10) || 0);
const width = parseInt(arg("width", "1920"), 10);
const height = parseInt(arg("height", "1080"), 10);
const waitMs = parseInt(arg("wait", "900"), 10);
const shouldSpawn = (process.env.SCREENSHOT_SPAWN ?? "true") !== "false";

const port = parseInt(process.env.SCREENSHOT_PORT || "3000", 10);
const baseUrl = process.env.SCREENSHOT_URL || `http://localhost:${port}`;
const outFile = resolve(
  process.env.SCREENSHOT_OUT || `screenshots/slide-${slide}-step-${step}.png`
);
// baseUrl may already have its own search params (e.g. ?deck=sizing). In
// that case the hash is appended directly, otherwise we need a `/` between
// host and hash.
const base = baseUrl.replace(/\/$/, "");
const hash = `?slide=${slide}&step=${step}`;
const url = base.includes("?") ? `${base}#/${hash}` : `${base}/#/${hash}`;

const log = (...a) => console.log("[screenshot]", ...a);
const err = (...a) => console.error("[screenshot]", ...a);

async function isPortListening(port) {
  return new Promise((resolve) => {
    const probe = createServer();
    probe.once("error", () => resolve(true));
    probe.once("listening", () => probe.close(() => resolve(false)));
    probe.listen(port, "127.0.0.1");
  });
}

async function waitForHttp(url, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status < 500) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`server at ${url} did not respond within ${timeoutMs}ms`);
}

async function spawnDevServer() {
  log("starting `pnpm dev`");
  const child = spawn("pnpm", ["dev"], {
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, FORCE_COLOR: "0" },
  });
  child.stdout.on("data", (d) => process.stdout.write(`[dev] ${d}`));
  child.stderr.on("data", (d) => process.stderr.write(`[dev] ${d}`));
  return child;
}

async function main() {
  log(`slide=${slide} step=${step} viewport=${width}x${height}`);
  log(`url: ${url}`);
  log(`out: ${outFile}`);

  const alreadyRunning = await isPortListening(port);
  let server = null;
  let spawnedByUs = false;

  if (alreadyRunning) {
    log(`port ${port} already in use, attaching to existing server`);
  } else if (!shouldSpawn) {
    throw new Error(`port ${port} is not listening and SCREENSHOT_SPAWN=false`);
  } else {
    server = await spawnDevServer();
    spawnedByUs = true;
  }

  try {
    await waitForHttp(baseUrl, 30000);

    await mkdir(dirname(outFile), { recursive: true });

    const browser = await puppeteer.launch({ headless: true });
    try {
      const page = await browser.newPage();
      await page.setViewport({ width, height, deviceScaleFactor: 1 });
      await page.goto(url, { waitUntil: "networkidle0", timeout: 15000 });
      // view transitions are 280-380ms; give them room to finish
      await new Promise((r) => setTimeout(r, waitMs));
      await page.screenshot({ path: outFile });
      log(`wrote ${outFile}`);
      process.stdout.write(`${outFile}\n`);
    } finally {
      await browser.close();
    }
  } finally {
    if (spawnedByUs && server && !server.killed) {
      try { server.kill("SIGTERM"); } catch {}
      // give it a moment to die cleanly
      await new Promise((r) => setTimeout(r, 200));
      if (!server.killed) {
        try { server.kill("SIGKILL"); } catch {}
      }
    }
  }
}

main().catch((e) => {
  err(e.message);
  process.exit(1);
});
