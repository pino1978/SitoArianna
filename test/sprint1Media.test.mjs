import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

test("tutte le foto pubbliche hanno dimensioni reali e varianti responsive valide", async () => {
  const media = JSON.parse(await readFile(new URL("../src/data/media.json", import.meta.url), "utf8"));
  const photos = media.filter((item) => item.tipo === "foto" && item.visibile && !item.isPlaceholder && item.url);
  assert.equal(photos.length, 14);
  for (const photo of photos) {
    assert.ok(Number.isInteger(photo.width) && photo.width > 0, `${photo.id}: width mancante`);
    assert.ok(Number.isInteger(photo.height) && photo.height > 0, `${photo.id}: height mancante`);
    for (const variant of photo.varianti || []) {
      assert.ok(variant.width < photo.width, `${photo.id}: variante non più piccola dell'originale`);
      const variantUrl = new URL(`../public${variant.url}`, import.meta.url);
      const metadata = await stat(variantUrl);
      assert.ok(metadata.size > 100, `${photo.id}: variante vuota o non valida`);
      const bytes = await readFile(variantUrl);
      assert.equal(bytes.subarray(0, 4).toString("ascii"), "RIFF", `${photo.id}: header WebP RIFF non valido`);
      assert.equal(bytes.subarray(8, 12).toString("ascii"), "WEBP", `${photo.id}: firma WebP non valida`);
    }
  }
});

test("il titolo raster della Hero non è un elemento immagine nel markup", async () => {
  const hero = await readFile(new URL("../src/components/Hero.astro", import.meta.url), "utf8");
  assert.doesNotMatch(hero, /<img[^>]+class=["']hero-title-image/);
  assert.match(hero, /@media \(max-width: 640px\)[\s\S]*?\.hero-title-image \{ display: none; \}/);
});
