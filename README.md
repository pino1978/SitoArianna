# Arianna Milano - sito ufficiale

Sito statico Astro per Arianna Milano, giovane atleta agonista di Sanda.

Il progetto e una homepage single page premium, con navigazione ad anchor e contenuti aggiornabili da file JSON.

## Avvio locale

```bash
npm install
npm run dev
```

URL locale predefinito: `http://127.0.0.1:4321`.

## Build

```bash
npm run build
npm run preview
```

La build statica viene generata in `dist/` ed e compatibile con Cloudflare Pages, Netlify, Vercel o hosting statico tradizionale.

## Docker

Sviluppo:

```bash
docker compose up web
```

Produzione locale:

```bash
docker compose --profile prod up --build prod
```

Il container di produzione serve la build Astro statica con Nginx su `http://127.0.0.1:8080`.

## Contenuti

- Profilo atleta: `src/data/profile.json`
- Statistiche e risultati: `src/data/results.json`
- Media gallery: `src/data/media.json`
- Navigazione: `src/data/navigation.json`
- Immagini: `src/assets/images/`

La hero attiva usa `src/assets/images/hero-ary13-shift-left-medium.png`.
L'immagine sorgente originale e conservata in `src/assets/images/hero-ary13.png`.

## Produzione

Il sito non deve contenere puntamenti a path assoluti locali. Gli asset usati dai componenti vengono importati tramite percorsi relativi al progetto e risolti dalla build Astro.
