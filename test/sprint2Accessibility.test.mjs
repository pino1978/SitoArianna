import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const layout = await readFile(new URL("../src/layouts/BaseLayout.astro", import.meta.url), "utf8");
const header = await readFile(new URL("../src/components/Header.astro", import.meta.url), "utf8");

test("è presente uno skip link globale verso main", () => {
  assert.match(layout, /class="skip-link" href="#main" data-interactive/);
  assert.match(layout, /\.skip-link:focus\{transform:translateY\(0\)\}/);
});

test("reduced motion è gestito globalmente", () => {
  assert.match(layout, /@media\(prefers-reduced-motion:reduce\)/);
  assert.match(layout, /animation-duration:\.01ms!important/);
  assert.match(layout, /transition-duration:\.01ms!important/);
});

test("menu mobile gestisce focus, Tab ed Escape", () => {
  assert.match(header, /requestAnimationFrame\(\(\)=>menu\.querySelector\('a'\)\?\.focus\(\)\)/);
  assert.match(header, /event\.key==='Tab'/);
  assert.match(header, /event\.key==='Escape'/);
  assert.match(header, /toggle\.focus\(\)/);
});

test("selettore lingua sposta il focus sulla prima opzione", () => {
  assert.match(header, /options\.querySelector\('button'\)\?\.focus\(\)/);
});
