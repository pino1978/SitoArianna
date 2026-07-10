# Brand Generation Guide - Arianna Milano

## Principio Single Source Of Truth

`brand-kit.md` e la fonte autorevole per identita, posizionamento, emozioni, direzione visuale, palette, fotografia, layout, lettering, logo, firma Ying e qualita attesa.

Questa guida non ridefinisce il brand. Definisce solo il processo operativo per produrre asset coerenti.

## Principio Design System First

Non creare asset isolati.

Prima di generare un asset, verificare se esiste un sistema grafico di riferimento:

- lettering system;
- logo system;
- icon system;
- texture system;
- image direction.

Se il sistema non esiste, progettarlo, documentarlo e creare esempi base prima di produrre l'asset finale.

## Workflow Di Generazione Asset

1. Leggere `brand-kit.md`.
2. Leggere `requirements.md`, se rilevante per il contenuto.
3. Leggere il documento di sistema relativo alla categoria richiesta.
4. Verificare se l'asset richiesto e una estensione coerente del sistema.
5. Produrre prima una bozza in `brand/generated/` se l'asset non e ancora validato.
6. Spostare l'asset nella cartella definitiva solo dopo review.
7. Aggiornare il documento di sistema se emergono nuove regole riutilizzabili.
8. Aggiornare il worklog se l'asset entra nel sito o in un deliverable.

## Cartelle

- `brand/logo/`: loghi e wordmark approvati.
- `brand/lettering/`: lettering approvati.
- `brand/lettering/examples/`: esempi base del sistema lettering.
- `brand/textures/`: texture, brush, sfondi e pattern.
- `brand/icons/`: icone e micro-segni grafici.
- `brand/images/`: immagini approvate come asset di brand.
- `brand/generated/`: bozze, prove e asset temporanei.

## Naming

Usare nomi:

- lowercase;
- senza accenti;
- senza spazi;
- con trattini solo se necessari.

Esempi:

- `liberta.svg`
- `determinazione.svg`
- `hero-background-next-release.png`

## Regole SVG

Gli SVG approvati devono:

- essere vettoriali puri;
- non contenere testo editabile;
- non dipendere da font esterni;
- non contenere raster;
- avere `viewBox` corretto;
- essere leggibili, puliti e riutilizzabili nel sito;
- evitare codice superfluo;
- usare titoli e descrizioni solo quando l'asset e informativo.

## Esportazione

Formato principale:

- SVG per lettering, logo, icone e segni vettoriali.

Formati opzionali:

- PNG o WebP solo per preview, social o fallback raster.

Non creare metadata JSON per ogni asset statico.

## Asset Temporanei E Approvati

`brand/generated/` e riservata a materiali non approvati o temporanei.

Quando un asset viene approvato:

1. spostarlo nella cartella definitiva;
2. rimuovere eventuali bozze obsolete;
3. aggiornare i riferimenti nel sito;
4. registrare la decisione nel worklog o in un documento di decisione, se rilevante.

## Review

Ogni asset va verificato contro:

- coerenza con `brand-kit.md`;
- coerenza con il sistema grafico di riferimento;
- qualita premium;
- leggibilita;
- accessibilita quando usato nel sito;
- manutenibilita;
- assenza di elementi fuori tono.

## Se Il Sistema Non Esiste

Non improvvisare l'asset finale.

Creare prima:

1. documento di sistema;
2. criteri di qualita;
3. esempi base;
4. asset richiesto.

## Se Il Brand Kit Deve Evolvere

Aggiornare `brand-kit.md` solo quando cambia una regola di identita o direzione visuale.

Non usare il Brand Kit per decisioni tecniche, naming file o workflow operativo.
