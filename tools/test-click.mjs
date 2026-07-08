// tools/test-click.mjs
// Debug: open the gallery, inspect the box, click it, log everything.

import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 500));

  console.log("before:", page.url());

  const boxInfo = await page.evaluate(() => {
    const box = document.querySelector('[data-testid="deck-box-atproto"]');
    if (!box) return { found: false };
    return {
      found: true,
      tag: box.tagName,
      href: box.getAttribute("href"),
      children: box.children.length,
      rect: box.getBoundingClientRect().toJSON(),
    };
  });
  console.log("box:", boxInfo);

  // Listen for navigation
  page.on("framenavigated", (frame) => {
    console.log("navigated:", frame.url());
  });
  page.on("request", (req) => {
    if (req.resourceType() === "document") {
      console.log("doc request:", req.url());
    }
  });

  await page.click('[data-testid="deck-box-atproto"]');
  await new Promise((r) => setTimeout(r, 1500));

  console.log("after:", page.url());

  await browser.close();
} catch (e) {
  console.error(e);
  await browser.close();
  process.exit(1);
}
