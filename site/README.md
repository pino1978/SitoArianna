# Sito Arianna Milano

Progetto Astro/statico premium per il sito ufficiale di Arianna Milano.

Il vecchio prototipo statico `index.html` resta nella cartella come riferimento visuale legacy. La nuova implementazione e in `src/` e viene servita da Astro.

## Avvio

Installare le dipendenze e avviare Astro:

```powershell
npm install
npm run dev
```

Poi visitare `http://127.0.0.1:4173/`.

Build statica:

```powershell
npm run build
```

## Struttura

- `src/pages/index.astro`: homepage single page/finta multipage.
- `src/components/`: componenti Hero, Header, statistiche, card media e titoli sezione.
- `src/data/`: contenuti aggiornabili senza CMS.
- `src/styles/`: token e CSS globali.
- `public/assets/images/hero.png`: background temporaneo della hero.
- `public/assets/svg/`: logo, firma, lettering, icone e segni vettoriali.
- `BRAND-ASSETS.md`: regole per SVG e lettering replicabile.
- `CONTENT-GUIDE.md`: guida aggiornamento contenuti.
- `ACCESSIBILITY.md`: note accessibilita.

## Struttura sito progettata

Versione iniziale: home narrativa a sezioni, con navigazione ad anchor.

- Hero: copertina cinematografica fedele al mockup, con Arianna Milano come brand principale e Ying come firma secondaria.
- Profilo: chi e Arianna, storia sportiva, societa, maestro, disciplina, categoria e valori personali.
- Risultati: archivio progressivo di gare, podi, medaglie e obiettivi, separando dati reali da placeholder.
- Media: foto e video organizzati per gare, allenamenti, ritratti e momenti editoriali.
- Footer: firma Ying discreta, navigazione essenziale ed email famiglia.

Evoluzione prevista: quando ci saranno contenuti reali sufficienti, `Profilo`, `Risultati` e `Media` potranno diventare pagine dedicate mantenendo la stessa gerarchia di navigazione.

## Regole media

- Foto reali richieste: gare, podi, allenamenti, ritratti ufficiali.
- AI consentita: placeholder iniziali e sfondi non documentali.
- AI non consentita: risultati, medaglie, eventi specifici, persone reali non autorizzate.

## Architettura

Scelta attuale: Astro statico con home finta multipage.

Motivo: esperienza premium e immersiva oggi, evoluzione semplice verso multipage o SSG quando saranno disponibili piu contenuti reali.
