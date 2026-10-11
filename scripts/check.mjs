import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';

const PAGES = ['/', '/pt-br/'];
const server = spawn('npx', ['astro', 'preview', '--port', '4329'], { stdio: 'ignore' });
await new Promise((resolve) => setTimeout(resolve, 2500));
const origin = 'http://localhost:4329';
const browser = await chromium.launch();
const problems = [];
for (const path of PAGES) {
  for (const [width, height, js] of [[1440, 900, true], [390, 844, true], [390, 844, false]]) {
    const page = await browser.newPage({ viewport: { width, height }, javaScriptEnabled: js });
    page.on('request', (request) => {
      const url = request.url();
      if (!url.startsWith(origin) && !url.startsWith('data:')) problems.push(`${path} @${width}: third-party request ${url}`);
    });
    await page.goto(origin + path, { waitUntil: 'networkidle' });
    const result = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - window.innerWidth,
      broken: [...document.images].filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.getAttribute('src')),
    }));
    if (result.overflow > 0) problems.push(`${path} @${width}${js ? '' : ' no-js'}: horizontal overflow ${result.overflow}px`);
    for (const src of result.broken) problems.push(`${path} @${width}: broken image ${src}`);
    await page.close();
  }
}
await browser.close();
server.kill();
for (const problem of problems) console.error(problem);
process.exit(problems.length > 0 ? 1 : 0);
