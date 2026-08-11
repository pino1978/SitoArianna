# Arianna Milano - sito ufficiale

Sito statico Astro per Arianna Milano, giovane atleta agonista di Sanda.

Il progetto è pensato come homepage single page premium, con navigazione ad anchor e struttura pronta per evolvere in multipagina e multilingua IT/EN.

## Avvio locale

```bash
npm install
npm run dev
```

URL locale predefinito: `http://127.0.0.1:4321`

## Build

```bash
npm run build
npm run preview
```

La build statica viene generata in `dist/` ed è compatibile con Cloudflare Pages, Netlify e Vercel.

## Struttura principale

- `src/pages/index.astro`: homepage single page.
- `src/components/`: componenti Astro riutilizzabili.
- `src/data/`: contenuti versionati in JSON.
- `src/styles/`: token e CSS globale.
- `src/assets/images/hero.png`: unico background raster della hero.
- `src/assets/svg/`: loghi, lettering, icone e segni vettoriali.
- `brand/`: sorgenti e documentazione del sistema visivo.

## Note importanti

La hero usa `hero.png` solo come immagine di background full-bleed. Testi, CTA, statistiche, overlay e firma Yīng sono layer separati.

Le statistiche sono attualmente placeholder editoriali e sono marcate in `src/data/results.json`.
