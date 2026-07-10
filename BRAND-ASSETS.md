# Brand Assets

## Principio

Arianna Milano è il brand principale. `Yīng · 鹰` è una firma identitaria secondaria e non deve diventare il logo dominante.

Gli asset grafici finali sono SVG vettoriali puri: non contengono raster incorporati e non dipendono da font esterni nel file finale.

## Asset principali

- `src/assets/svg/logo-arianna-milano.svg`: wordmark vettoriale Arianna Milano.
- `src/assets/svg/signature-ying.svg`: firma secondaria `Yīng · 鹰`.
- `src/assets/svg/ideogram-ying.svg`: ideogramma `鹰`.
- `src/assets/svg/lettering-liberta.svg`: lettering brush oro per la hero.
- `src/assets/svg/lettering-focus.svg`: esempio lettering/titolo vettoriale.
- `src/assets/svg/lettering-disciplina.svg`: esempio lettering/titolo vettoriale.
- `src/assets/svg/stat-years.svg`: icona anni di pratica.
- `src/assets/svg/stat-trophy.svg`: icona gare disputate.
- `src/assets/svg/stat-podium.svg`: icona podi.
- `src/assets/svg/stat-medal.svg`: icona medaglie d'oro.
- `src/assets/textures/brush-circle.svg`: tratto circolare hero.
- `src/assets/textures/gold-line.svg`: divider oro.

Le copie di lavoro e archivio sono anche in `brand/logo/`, `brand/lettering/`, `brand/icons/` e `brand/textures/`.

## Metodo di generazione

Gli SVG testuali sono stati convertiti in path vettoriali tramite `System.Drawing.Drawing2D.GraphicsPath` su Windows. Il font resta una sorgente di generazione, ma il file SVG finale non contiene testo vivo e non carica font esterni.

Font sorgente usati per questa prima versione:

- Wordmark Arianna Milano: Arial Narrow, convertito in path.
- Firma e ideogramma Yīng: Microsoft YaHei, convertito in path.
- `LIBERTÀ`: Brush Script MT, convertito in path, con sottolineatura vettoriale dedicata.
- `FOCUS` e `DISCIPLINA`: Arial Narrow, convertiti in path come esempi coerenti.

Per una release pubblica definitiva è consigliato sostituire i font di sistema con una famiglia open-source self-hosted o con lettering custom tracciato, mantenendo lo stesso processo di conversione in path.

## Regole d'uso

- Non usare raster per testi grafici.
- Non incorporare immagini dentro gli SVG.
- Mantenere nomi lowercase, senza spazi e senza accenti.
- Usare `aria-hidden="true"` sugli SVG decorativi.
- Usare `alt` descrittivo quando l'SVG comunica informazione o brand.
- Non aggiungere aquila, scritta "Aquila" o sigillo rosso come elementi dominanti nella hero.
