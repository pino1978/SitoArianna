# Content Guide

I contenuti aggiornabili sono in `src/data/`.

## Profilo

Aggiornare `src/data/profile.json` per dati atleta, societa sportiva, maestro, categoria, testo introduttivo ed email famiglia.

Non inserire telefono, indirizzo, scuola o dati personali sensibili.

## Risultati

Aggiornare `src/data/results.json`.

Il flag `statsArePlaceholders` indica se le statistiche sono provvisorie. Prima della pubblicazione ufficiale, validare ogni numero con fonti o archivio famiglia.

Non usare immagini AI per simulare podi, medaglie o gare reali.

## Media

Aggiornare `src/data/media.json`.

Regole:

- foto reali per gare, podi, allenamenti e ritratti ufficiali quando disponibili;
- AI solo per placeholder e background non documentali;
- ogni item deve avere `alt` chiaro;
- sostituire i placeholder in `public/assets/images/` mantenendo nomi file lowercase, senza spazi e senza accenti.

## Navigazione

Aggiornare `src/data/navigation.json`.

Non aggiungere una pagina Contatti dedicata: il contatto resta nel footer.
