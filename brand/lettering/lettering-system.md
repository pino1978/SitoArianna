# Lettering System - Arianna Milano

## Scopo

Il lettering Arianna Milano e un sistema grafico, non una somma di parole disegnate una per una.

Serve a portare energia controllata, gesto atletico e qualita editoriale dentro titoli, dettagli hero, sezioni speciali e asset social.

## Ruolo Nel Brand

Il lettering sostiene il brand principale Arianna Milano.

Non sostituisce il nome Arianna Milano.

Non sostituisce la firma Ying.

Deve funzionare come accento visivo premium: memorabile, riconoscibile, ma sempre subordinato alla narrazione di Arianna.

## Rapporto Con Ying

Ying / 鹰 e una firma identitaria secondaria.

Il lettering puo richiamare energia, precisione e gesto del pennello, ma non deve diventare calligrafia cinese o decorazione folkloristica.

## Filosofia Visiva

Il sistema deve evocare:

- energia controllata;
- disciplina;
- movimento;
- gesto atletico;
- eleganza editoriale;
- accenno al pennello orientale.

Non deve sembrare:

- graffiti;
- tattoo;
- firma romantica;
- font script generico;
- lettering fantasy;
- logo da palestra;
- MMA/UFC;
- scrittura casuale.

## Inclinazione

Inclinazione leggera verso destra.

La parola deve suggerire avanzamento, non instabilita.

## Ritmo

Il ritmo deve alternare:

- entrate rapide;
- curve ampie;
- accelerazioni brevi;
- chiusure nette.

Evitare tratti tutti uguali o troppo separati.

## Connessione Delle Lettere

Le lettere devono sembrare parte di un gesto unico o di pochi gesti coordinati.

Le connessioni possono essere suggerite da:

- baseline fluida;
- sovrapposizioni controllate;
- legature tra aste e curve;
- sottolineatura integrata.

## Pressione Del Pennello

Usare alternanza di pressione:

- pieni generosi nelle aste principali;
- pieni medi nelle curve;
- tratti sottili negli ingressi e nelle uscite;
- terminali asciutti.

## Alternanza Pieni/Vuoti

Il lettering deve respirare.

Non riempire tutto lo spazio.

Mantenere vuoti interni riconoscibili per leggibilita e qualita premium.

## Terminali

I terminali devono essere:

- netti;
- leggermente tagliati;
- dinamici;
- mai arricciati in modo romantico.

## Sottolineatura

La sottolineatura e consentita quando:

- nasce dal gesto finale;
- sostiene la parola;
- non sembra decorazione separata.

## Texture

Texture leggere sono consentite solo se non compromettono la leggibilita.

Per gli SVG del sito preferire tracciati puliti e ottimizzati.

## Colore

Colore primario:

- oro satinato.

Varianti ammesse:

- oro caldo;
- oro scuro;
- avorio caldo per versioni su fondo scuro;
- grafite per versioni su fondo chiaro.

Non usare rosso dominante.

## Proporzioni

Il lettering deve essere piu largo che alto.

Rapporto consigliato:

- larghezza: 3.5x - 5x altezza.

La x-height visuale deve restare compatta.

## Varianti Consentite

- Hero accent.
- Section accent.
- Social crop.
- Monocromatico chiaro.
- Monocromatico scuro.

## Errori Da Evitare

- Tratti separati senza ritmo.
- Script generico.
- Effetto graffiti.
- Effetto tattoo.
- Pennellata orientale stereotipata.
- Troppa decorazione.
- Troppa aggressivita.
- Scarsa leggibilita.

## Criteri Di Qualita

Un asset lettering e approvabile quando:

- sembra parte di un sistema;
- comunica energia controllata;
- rimane premium;
- e leggibile;
- non domina il brand principale;
- puo essere replicato su altre parole;
- funziona nel sito e in crop social;
- non introduce estetiche vietate dal Brand Kit.

## Procedura Per Nuova Parola

1. Leggere `brand-kit.md`.
2. Leggere questo documento.
3. Verificare se esistono esempi simili in `examples/`.
4. Disegnare la parola come estensione del sistema.
5. Usare file SVG vettoriale senza testo editabile.
6. Salvare in `brand/generated/` se e una bozza.
7. Spostare in `brand/lettering/` solo dopo review.
8. Aggiornare gli esempi solo se la parola introduce una variante riutilizzabile.

## Esempi Approvati / Operativi

- `liberta.svg`: asset hero approvato e usato nel sito.
- `focus.svg`: esempio operativo per parole corte con ritmo compatto.
- `disciplina.svg`: esempio operativo per parole lunghe con baseline ampia.

Questi file devono essere usati come riferimento per generare nuove parole nello stesso sistema, mantenendo proporzioni larghe, tratti puliti e assenza di raster.

## Prima Implementazione Digitale

Per la prima versione del sito sono stati generati tre esempi coerenti:

- `brand/lettering/liberta.svg`
- `brand/lettering/focus.svg`
- `brand/lettering/disciplina.svg`

I file finali sono path SVG, senza raster e senza dipendenza da font esterni.

Metodo usato:

1. Composizione della parola con font sorgente locale.
2. Conversione del testo in tracciato con `System.Drawing.Drawing2D.GraphicsPath`.
3. Esportazione dei path in SVG con `viewBox` normalizzato.
4. Applicazione di colore oro satinato tramite `currentColor`.
5. Per `LIBERTÀ`, aggiunta di una sottolineatura vettoriale manuale coerente con il gesto finale.

Font sorgente della prima release:

- `LIBERTÀ`: Brush Script MT, convertito in path.
- `FOCUS`: Arial Narrow, convertito in path.
- `DISCIPLINA`: Arial Narrow, convertito in path.

Questi font sono una sorgente tecnica di generazione. Per una produzione pubblica definitiva e completamente redistribuibile, rigenerare gli SVG da font open-source self-hosted o da tracciati custom, mantenendo proporzioni, inclinazione e pressione descritte qui.

## Parametri Visivi Da Replicare

- Rapporto larghezza/altezza: da 3.5:1 a 5:1.
- Inclinazione: leggera avanzata verso destra.
- Pressione: piena sulle aste principali, sottile su ingressi e uscite.
- Terminali: tagliati, asciutti, non romantici.
- Baseline: dinamica ma controllata.
- Colore hero: oro satinato `#b98632` o `#d9a441`.
- Uso: accento visuale, non titolo informativo lungo.
