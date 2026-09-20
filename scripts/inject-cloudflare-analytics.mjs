import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const adminRoot = join(dist, 'admin');
const beacon = `<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"345b0816f47f418489ac7846829acca6"}'></script>`;
let injected = 0;
let skipped = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (path === adminRoot) continue;
      await walk(path);
      continue;
    }
    if (!entry.name.endsWith('.html')) continue;
    const html = await readFile(path, 'utf8');
    if (html.includes('static.cloudflareinsights.com/beacon.min.js')) continue;
    // Some generated redirect/legacy HTML (for example /palmares/) has no <head>.
    // It is not a real public content page, so it must not make the production build fail.
    if (!html.includes('</head>')) {
      skipped += 1;
      console.warn(`Cloudflare Web Analytics skipped (no </head>): ${path}`);
      continue;
    }
    await writeFile(path, html.replace('</head>', `${beacon}</head>`));
    injected += 1;
  }
}

await walk(dist);
console.log(`Cloudflare Web Analytics injected into ${injected} public HTML page(s); skipped ${skipped}.`);
