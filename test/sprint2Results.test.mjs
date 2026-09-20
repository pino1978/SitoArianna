import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/pages/risultati.astro", import.meta.url), "utf8");

test("Risultati usa una tabella semantica su desktop", () => {
  assert.match(source, /<table class="results-table">/);
  assert.match(source, /<caption class="sr-only">/);
  assert.match(source, /<th scope="col">Anno<\/th>/);
  assert.match(source, /<tbody>\{rows\.map\(r=><tr data-row/);
});

test("Risultati diventa card responsive sotto 821px", () => {
  assert.match(source, /@media\(max-width:820px\)[\s\S]*?\.results-table tr\{display:grid/);
  assert.match(source, /data-label="Competizione"/);
  assert.doesNotMatch(source, /\.table-wrap\{overflow-x:auto\}/);
});

test("Il piazzamento deriva dalla medaglia e non è fisso", () => {
  assert.match(source, /placementByMedal=\{gold:"1°",silver:"2°",bronze:"3°"\}/);
  assert.match(source, /\{r\.placement\}/);
  assert.doesNotMatch(source, /<span>1°<\/span>/);
});

test("I filtri espongono label accessibili e il conteggio è annunciato", () => {
  assert.match(source, /aria-label="Filtra per disciplina"/);
  assert.match(source, /aria-label="Filtra per medaglia"/);
  assert.match(source, /aria-label="Filtra per luogo"/);
  assert.match(source, /aria-live="polite"/);
});
