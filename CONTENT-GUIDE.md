# Content Guide

## Dove aggiornare i contenuti

- Profilo atleta: `src/data/profile.json`
- Statistiche e risultati: `src/data/results.json`
- Media gallery: `src/data/media.json`
- Voci di navigazione: `src/data/navigation.json`

## Statistiche

Le statistiche della hero sono in `results.heroStats`.

Ogni valore ha `isPlaceholder`. Quando i dati vengono verificati, aggiornare il valore e impostare `isPlaceholder` a `false`. Aggiornare anche `statsArePlaceholders` e `statsNote`.

Non pubblicare numeri come definitivi se non sono confermati.

## Risultati

Inserire solo eventi, podi, vittorie e partecipazioni verificabili.

Per ogni risultato aggiungere:

- nome evento
- luogo
- livello o ambito
- nota breve
- eventuale fonte o materiale documentale in una futura estensione dati

Non usare immagini AI per simulare podi, gare reali, medaglie reali o risultati non documentati.

## Media

Quando arrivano materiali reali:

1. Salvare il file ottimizzato in `src/assets/images/`.
2. Aggiornare `src/data/media.json`.
3. Scrivere un alt text specifico.
4. Impostare `isPlaceholder` a `false`.
5. Evitare dati personali, indirizzi, scuola, telefono o informazioni non autorizzate.

La hero attiva e `src/assets/images/hero-ary13-shift-left-medium.png`.
L'immagine originale e conservata in `src/assets/images/hero-ary13.png`.

## Contatti

Non creare una pagina contatti dedicata. Usare solo l'email discreta nel footer.
