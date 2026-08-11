# Brand Assets

Questo progetto tratta gli asset grafici come sorgenti replicabili, non come immagini finali isolate.

## Regole

- Il brand principale e Arianna Milano.
- `Ying · 鹰` e firma secondaria.
- SVG finali per logo, lettering, icone e segni non devono contenere raster.
- SVG finali non devono dipendere da font esterni.
- Le immagini raster sono ammesse per fotografie, hero e placeholder media.

## Asset Principali

- `public/assets/images/hero.png`: background temporaneo della hero.
- `public/assets/svg/logo-arianna-milano.svg`: monogramma AM vettoriale.
- `public/assets/svg/signature-ying.svg`: firma secondaria Ying.
- `public/assets/svg/ideogram-ying.svg`: segno vettoriale per l'ideogramma.
- `public/assets/svg/lettering-liberta.svg`: lettering approvato copiato da `../brand/lettering/liberta.svg`.
- `public/assets/svg/lettering-focus.svg`: esempio coerente del sistema.
- `public/assets/svg/lettering-disciplina.svg`: esempio coerente del sistema.
- `public/assets/svg/stat-*.svg`: icone statistiche vettoriali.
- `public/assets/textures/*.svg`: texture e segni decorativi.

## Rigenerazione Lettering

Il sistema lettering vive in `../brand/lettering/lettering-system.md`.

Per creare una nuova parola:

1. usare `liberta.svg`, `focus.svg` e `disciplina.svg` come riferimenti;
2. mantenere inclinazione leggera verso destra;
3. usare tratti pieni/sottili alternati, terminali netti e baseline fluida;
4. esportare solo path vettoriali;
5. salvare prima in `../brand/generated/`;
6. promuovere in `../brand/lettering/` solo dopo review;
7. copiare nel sito solo gli asset approvati.

Non usare una parola brush come PNG. Non generare una parola isolata senza documentare come produrre parole sorelle con lo stesso stile.
