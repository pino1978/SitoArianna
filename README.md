# Sito Arianna Milano

Sito ufficiale di Arianna Milano, giovane atleta agonista di Sanda.

Il progetto nasce come portfolio sportivo e archivio documentale: deve raccontare un percorso di crescita serio, costante e verificabile, senza presentare Arianna come fenomeno, promessa annunciata o futura campionessa.

## Direzione

- Brand principale: Arianna Milano.
- Firma personale secondaria: Ying / ideogramma dell'aquila.
- Target prioritario: selezionatori, federazioni, allenatori, direttori tecnici, organizzatori e societa sportive.
- Tono: determinazione, talento, crescita, disciplina e maturita sportiva.
- Contatti: solo email famiglia/partnership nel footer.
- CMS tradizionale: non previsto.

## Aggiornamento contenuti

I contenuti modificabili sono in file statici versionabili:

- `src/data/profile.json`: profilo, bio, dati atleta, stats principali.
- `src/data/results.json`: risultati, partecipazioni, vittorie, statistiche riepilogative.
- `src/data/media.json`: video, gallery e note sulla provenienza delle immagini.
- `public/assets`: immagini usate dal sito.

Per aggiungere una nuova parola in stile brush, creare un componente in `src/assets/svg` usando `BrushWordmark` da `src/assets/svg/BrushLettering.tsx`.

## Immagini

Fase iniziale:

- hero, ritratti, combattimenti e gallery possono usare immagini generate.
- risultati ufficiali, foto podio e contenuti federali dovranno essere sostituiti da materiale reale appena disponibile.
- non usare AI per documenti ufficiali, loghi federali, attestati, classifiche, badge o prove di risultato.

## Sviluppo

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Docker

```bash
docker build -t sito-arianna:latest .
docker run --rm -p 8080:80 sito-arianna:latest
```

Oppure:

```bash
docker compose up --build
```
