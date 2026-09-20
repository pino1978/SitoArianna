import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const adminRoot = join(dist, 'admin');
const beacon = `<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"345b0816f47f418489ac7846829acca6"}'></script>`;

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
    if (!html.includes('</head>')) throw new Error(`Missing </head> in ${path}`);
    await writeFile(path, html.replace('</head>', `${beacon}</head>`));
  }
}

await walk(dist);
console.log('Cloudflare Web Analytics injected into public HTML pages.');
