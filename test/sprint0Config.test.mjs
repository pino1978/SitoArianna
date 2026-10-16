import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("configura redirect palmares e cache immutable senza applicarla ad HTML", async () => {
  const config = await readFile(new URL("../netlify.toml", import.meta.url), "utf8");
  assert.match(config, /from = "\/palmares\/"[\s\S]*?to = "\/risultati\/"[\s\S]*?status = 301[\s\S]*?force = true/);
  assert.match(config, /for = "\/_astro\/\*"[\s\S]*?Cache-Control = "public, max-age=31536000, immutable"/);
  assert.doesNotMatch(config, /for = "\/\*"[\s\S]*?immutable/);
});

test("Road to Greece non è più nella sitemap e viene reindirizzata", async () => {
  const sitemap = await readFile(new URL("../src/pages/sitemap.xml.js", import.meta.url), "utf8");
  const config = await readFile(new URL("../netlify.toml", import.meta.url), "utf8");
  const home = await readFile(new URL("../src/pages/index.astro", import.meta.url), "utf8");
  assert.doesNotMatch(sitemap, /road-to-greece/);
  assert.doesNotMatch(home, /RoadToGreeceBanner/);
  assert.match(config, /from = "\/road-to-greece\/\*"[^]*?to = "\/profilo\/"[^]*?status = 301/);
});
