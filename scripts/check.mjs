import { chromium } from '@playwright/test';
import { preview } from 'astro';

const PAGES = ['/', '/pt-br/', '/privacy/', '/terms/', '/pt-br/privacidade/', '/pt-br/termos/'];
const origin = 'http://localhost:4329';

async function waitForServer() {
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    try {
      if ((await fetch(origin)).status === 200) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error(`preview server did not answer 200 at ${origin} within 15s`);
}

const problems = [];
let browser;
let server;
try {
  server = await preview({ server: { port: 4329 }, logLevel: 'silent' });
  await waitForServer();
  browser = await chromium.launch();
  for (const path of PAGES) {
    for (const [width, height, js] of [[1440, 900, true], [390, 844, true], [390, 844, false]]) {
      const label = `${path} @${width}${js ? '' : ' no-js'}`;
      const page = await browser.newPage({ viewport: { width, height }, javaScriptEnabled: js });
      page.on('request', (request) => {
        const url = request.url();
        if (!url.startsWith(origin) && !url.startsWith('data:')) problems.push(`${label}: third-party request ${url}`);
      });
      page.on('requestfailed', (request) => {
        if (request.url().startsWith(origin)) problems.push(`${label}: request failed ${request.url()}`);
      });
      page.on('response', (response) => {
        if (response.status() >= 400) problems.push(`${label}: HTTP ${response.status()} ${response.url()}`);
      });
      await page.goto(origin + path, { waitUntil: 'networkidle' });
      const result = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        broken: [...document.images].filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.getAttribute('src')),
      }));
      if (result.overflow > 0) problems.push(`${label}: horizontal overflow ${result.overflow}px`);
      for (const src of result.broken) problems.push(`${label}: broken image ${src}`);
      await page.close();
    }
  }
} catch (error) {
  problems.push(String(error));
} finally {
  await browser?.close();
  await server?.stop();
}
for (const problem of problems) console.error(problem);
process.exit(problems.length > 0 ? 1 : 0);
