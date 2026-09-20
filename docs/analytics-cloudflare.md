# Website Analytics — Cloudflare Web Analytics

## Decisione
Cloudflare Web Analytics è il sistema analytics ufficiale del sito. Non viene affiancato a GA4.

## Configurazione
- Provider: Cloudflare Web Analytics
- Site token: `345b0816f47f418489ac7846829acca6`
- Beacon: `https://static.cloudflareinsights.com/beacon.min.js`
- Hosting pubblico: Netlify
- DNS/hosting non devono essere migrati a Cloudflare.

## Implementazione
Durante la build Netlify, dopo `npm run build`, lo script `scripts/inject-cloudflare-analytics.mjs` inserisce il beacon Cloudflare nel `<head>` di tutte le pagine HTML pubbliche generate in `dist`.

La directory `/admin` è esclusa dal tracking: l'uso della console editoriale non deve alterare le statistiche del sito pubblico.

L'injector è idempotente: se il beacon è già presente non viene duplicato.

## Dati attesi
Cloudflare Web Analytics fornisce statistiche aggregate di traffico, pagine/percorsi, referrer, paese, dispositivo, browser, sistema operativo e Real User Monitoring/Core Web Vitals secondo le capacità del servizio.

## Privacy
La configurazione è intenzionalmente minimale: nessun GA4, nessun advertising/remarketing e nessun event tracking aggiuntivo in questa fase. La privacy policy del sito deve descrivere correttamente l'uso di Cloudflare Web Analytics.

## Verifica post-deploy
1. Verificare che la build Netlify termini con `Cloudflare Web Analytics injected into public HTML pages.`
2. Aprire una pagina pubblica e verificare nel sorgente la presenza di `static.cloudflareinsights.com/beacon.min.js`.
3. Verificare che `/admin` non contenga il beacon.
4. Controllare la ricezione dei primi dati nella dashboard Cloudflare Web Analytics.
