# Cloudflare Web Analytics

## Decisione

Il sito usa Cloudflare Web Analytics come soluzione analytics iniziale.

Motivazioni:
- costo zero;
- approccio privacy-first;
- nessun CMS o backend analytics aggiuntivo;
- page view, visitatori, referrer, paese, device/browser/OS;
- Real User Monitoring e Core Web Vitals;
- complessità operativa minima.

Non viene installato GA4 in parallelo. GA4 sarà rivalutato solo in presenza di requisiti concreti di event tracking avanzato, funnel, conversion attribution o advertising.

## Architettura

Il sito resta ospitato su Netlify. Per siti non proxati da Cloudflare, Web Analytics richiede l'inserimento manuale del beacon JavaScript fornito dalla dashboard Cloudflare.

L'integrazione nel layout è predisposta tramite la variabile pubblica di build:

`PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN`

Il beacon viene emesso soltanto quando la variabile contiene un token non vuoto. In assenza del token la build e il sito continuano a funzionare normalmente e non viene effettuato alcun tracking.

## Attivazione

1. Accedere a Cloudflare.
2. Aprire Web Analytics.
3. Aggiungere il sito `ariannamilano.it`.
4. Copiare il Site Token indicato nello snippet Cloudflare.
5. In Netlify aggiungere la variabile d'ambiente `PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` con il Site Token come valore.
6. Eseguire un nuovo deploy del branch desiderato.
7. Visitare il sito e verificare dopo alcuni minuti che Cloudflare riceva i dati.

Non inserire il token direttamente nel codice: la configurazione resta separata dal repository e può essere attivata/disattivata senza modificare i componenti.

## Ambito

Il beacon è centralizzato in `src/layouts/BaseLayout.astro`, quindi copre tutte le pagine pubbliche che usano il layout comune.

La console `/admin` non usa `BaseLayout` e non viene inclusa nelle statistiche pubbliche.

## Privacy e manutenzione

Cloudflare Web Analytics dichiara di non raccogliere o utilizzare dati personali dei visitatori e di non tracciare individualmente gli utenti attraverso le proprietà dei clienti. La conformità del sito deve comunque essere valutata considerando l'insieme dei servizi presenti e l'informativa privacy deve restare aggiornata.

Non aggiungere un secondo sistema analytics senza una nuova decisione architetturale.
