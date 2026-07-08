#!/usr/bin/env node
// tools/screenshot-tall.mjs
// Captures a full-height screenshot of the gallery.

import puppeteer from "puppeteer";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const outFile = resolve(
  process.env.SCREENSHOT_OUT || "screenshots/gallery-full.png"
);
const baseUrl = process.env.SCREENSHOT_URL || "http://localhost:3000";
const width = parseInt(process.env.SCREENSHOT_WIDTH || "1920", 10);
const captureHeight = parseInt(process.env.SCREENSHOT_FULL_HEIGHT || "1600", 10);

const url = baseUrl.includes("?")
  ? `${baseUrl}#/`
  : `${baseUrl}/#/`;

const browser = await puppeteer.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.setViewport({ width, height: captureHeight, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 15000 });
  await new Promise((r) => setTimeout(r, 900));
  await mkdir(dirname(outFile), { recursive: true });
  await page.screenshot({ path: outFile });
  console.log(outFile);
} finally {
  await browser.close();
}
