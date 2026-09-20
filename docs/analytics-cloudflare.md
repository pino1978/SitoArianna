# Website Analytics — Cloudflare Web Analytics

## Decisione
Cloudflare Web Analytics è il sistema analytics ufficiale del sito. Non viene affiancato a GA4.

## Configurazione
- Provider: Cloudflare Web Analytics
- Site token: configurato nel build injector
- Beacon: `https://static.cloudflareinsights.com/beacon.min.js`
- Hosting pubblico: Netlify
- DNS/hosting non devono essere migrati a Cloudflare.

## Implementazione
Durante la build Netlify, dopo `npm run build`, lo script `scripts/inject-cloudflare-analytics.mjs` inserisce il beacon Cloudflare nel `<head>` di tutte le pagine HTML pubbliche generate in `dist`.

La directory `/admin` è esclusa dal tracking: l'uso della console editoriale non deve alterare le statistiche del sito pubblico.

L'injector è idempotente: se il beacon è già presente non viene duplicato.

## Privacy
Configurazione minimale: nessun GA4, advertising, remarketing o event tracking aggiuntivo in questa fase. La privacy policy del sito deve descrivere correttamente l'uso di Cloudflare Web Analytics.

## Verifica post-deploy
1. Verificare che la build Netlify termini con `Cloudflare Web Analytics injected into public HTML pages.`
2. Aprire una pagina pubblica e verificare nel sorgente la presenza di `static.cloudflareinsights.com/beacon.min.js`.
3. Verificare che `/admin` non contenga il beacon.
4. Controllare la ricezione dei primi dati nella dashboard Cloudflare Web Analytics.
