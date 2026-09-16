import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("configura redirect palmares e cache immutable senza applicarla ad HTML", async () => {
  const config = await readFile(new URL("../netlify.toml", import.meta.url), "utf8");
  assert.match(config, /from = "\/palmares\/"[\s\S]*?to = "\/risultati\/"[\s\S]*?status = 301[\s\S]*?force = true/);
  assert.match(config, /for = "\/_astro\/\*"[\s\S]*?Cache-Control = "public, max-age=31536000, immutable"/);
  assert.doesNotMatch(config, /for = "\/\*"[\s\S]*?immutable/);
});

test("include Road to Greece una sola volta nella sitemap", async () => {
  const sitemap = await readFile(new URL("../src/pages/sitemap.xml.js", import.meta.url), "utf8");
  const matches = sitemap.match(/loc: `\$\{SITE\}\/road-to-greece\/`/g) || [];
  assert.equal(matches.length, 1);
  assert.match(sitemap, /lastmod: "2026-09-13"/);
});
