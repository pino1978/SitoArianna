# Backlog audit ariannamilano.it

**Baseline:** audit del 13 settembre 2026  
**Branch di sviluppo:** `dev`  
**Workflow:** sviluppo → verifiche indipendenti → push su `dev` → validazione → merge separato in `main`

## Governance

- **Product Owner:** mantiene priorità e valore, accetta o respinge le Story e tutela il posizionamento dell'atleta.
- **Scrum Master:** controlla Definition of Ready/Done, dipendenze, impedimenti e aggiornamento del backlog.
- **Orchestratore tecnico:** coordina implementazione e gate specialistici.
- **Regola di chiusura:** nessuna voce passa a completata senza evidenza e OK dei reviewer pertinenti.

## Stati

- `[ ]` Da fare
- `[~]` In lavorazione
- `[!]` Implementata, verifica finale pendente
- `[x]` Completata e verificata
- `[-]` Esclusa con decisione documentata

## Definition of Ready

- obiettivo, impatto e criteri di accettazione chiari;
- dipendenze e configurazioni esterne identificate;
- branch e file interessati noti;
- nessun conflitto con privacy e sicurezza della minore.

## Definition of Done

- criteri di accettazione soddisfatti;
- test automatici pertinenti superati;
- build di produzione completata;
- regressione desktop/mobile eseguita quando applicabile;
- review indipendenti concluse senza rilievi bloccanti;
- evidenze annotate nel backlog;
- push effettuato su `dev` solo dopo il gate finale.

## Correzione precedente all'audit

- [x] **FIX-001 — Footer mobile su una riga** — commit `9a639d7ee4ab6c66326a247eb7fd32b91c994819`.

## Epic E0 — Stabilità, sicurezza e SEO urgente · Sprint 0

### US-001 — Filtri Media disponibili su mobile · P1

Come visitatore mobile voglio aprire e usare i filtri della Gallery.

- [x] ST-001.1 Aggiungere l'abilitazione interattiva al comando mobile.
- [x] ST-001.2 Verificare apertura/chiusura, `aria-expanded` e controlli a larghezza inferiore a 640 px.
- [x] ST-001.3 Eseguire regressione statica su desktop e mobile.

**Accettazione:** pulsante e filtri funzionanti da tastiera e touch; nessun filtro nascosto o bloccato.

### US-002 — Console limitata agli editor autorizzati · P1

Come proprietario voglio che un account Identity valido non sia sufficiente ad amministrare il sito.

- [x] ST-002.1 Centralizzare autorizzazione server-side.
- [x] ST-002.2 Consentire ruoli `admin`/`editor` o email nella allowlist configurata.
- [x] ST-002.3 Testare risposte 401, 403 e accesso autorizzato su tutte le funzioni `admin-*`.
- [x] ST-002.4 Confermare operativamente che Netlify Identity sia `invite-only` — live `disable_signup:true`.
- [x] ST-002.5 Configurare ruolo o `ADMIN_ALLOWED_EMAILS` nell'ambiente prima dell'uso della console — attestazione owner.

**Accettazione:** anonimo=401, autenticato non abilitato=403, autorizzato=risposta applicativa prevista.

### US-003 — Serializzazione CMS resistente a stored XSS · P1

- [x] ST-003.1 Escapare `<`, `>`, `&`, U+2028 e U+2029 nel JSON inserito nell'HTML.
- [x] ST-003.2 Aggiungere test di round-trip e payload `</script>` — 2/2 test superati localmente.
- [x] ST-003.3 Confermare build e rieseguire il test nel gate Security.

**Accettazione:** i contenuti non possono chiudere il tag script e il JSON rimane decodificabile.

### TASK-004 — Redirect SEO `/palmares/` · P1

- [x] Aggiungere redirect Netlify forzato 301 verso `/risultati/`.
- [x] Verificare status e `Location` su deploy preview — 301, `Location: /risultati/`.

### TASK-005 — Road to Greece nella sitemap · P1

- [x] Aggiungere `/road-to-greece/` con `lastmod` esplicito.
- [x] Validare XML generato e presenza di una sola entry canonica.

### TASK-006 — Cache immutable degli asset Astro · P1

- [x] Configurare `Cache-Control: public, max-age=31536000, immutable` per `/_astro/*`.
- [x] Verificare staticamente che HTML e Admin non ereditino la cache immutable.
- [x] Verificare gli header sulla deploy preview — `public,max-age=31536000,immutable`.

### Gate Sprint 0

- [x] Security review indipendente — codice PASS; configurazione live PASS (`disable_signup:true`).
- [x] Review funzionale, SEO e configurazione indipendente.
- [x] Build, test e diff review indipendenti.
- [x] Configurazioni esterne annotate come completate o impedimenti espliciti.
- [x] Push su `dev` — commit remoto `2ef5df2`.

## Epic E1 — Prestazioni percepite · Sprint 1

### US-101 — Hero Home leggera e responsive · P1

- [x] Inventariare i tre livelli e misurare la baseline.
- [x] Generare AVIF/WebP desktop e mobile.
- [x] Rimuovere il titolo raster dal markup immagine e impedirne il download mobile.
- [x] Verificare fedeltà visiva e LCP — deploy preview senza overflow; hero responsive visibile e asset AVIF/WebP attivi.

**Accettazione:** peso complessivo hero 500–800 KB, nessuna regressione visiva.

### US-102 — Immagini principali ottimizzate · P2

- [x] Ottimizzare hero Risultati.
- [x] Ottimizzare le due immagini `ProfileFeature` della Home.
- [x] Applicare dimensioni e formati responsive.

### US-103 — Terze parti fuori dal critical path · P2

- [x] Caricare Google Translate al primo gesto dell'utente.
- [x] Verificare funzionamento del selettore e impatto privacy — nessuna richiesta Google prima del gesto; script caricato all'apertura del selettore.

### US-104 — Immagini remote stabili · P2

- [x] Aggiungere `width`/`height` reali alle 14 foto pubbliche.
- [x] Aggiungere `srcset`/`sizes` e 21 varianti responsive, senza upscaling.
- [x] Verificare CLS e traffico mobile — dimensioni intrinseche presenti e variante locale da 640 px selezionata nel deploy preview.

### TASK-105 — Pulizia asset Road to Greece · P2

- [x] Generare inventario referenze.
- [x] Eliminare solo gli asset dimostrati obsoleti — circa 22 MB rimossi.
- [x] Verificare build e route interessate.

### Gate Sprint 1

- [x] Performance e asset review indipendente.
- [x] Visual review statica responsive indipendente.
- [x] QA, test, build e diff review indipendenti.
- [x] Push su `dev` — commit remoto `af544f9`.
- [x] Runtime gate su deploy preview — PASS dell'orchestratore.

### Evidenze Sprint 1

| Controllo | Baseline | Risultato |
|---|---:|---:|
| Hero Home desktop | 10,86 MB | circa 214 KB AVIF |
| Hero Home mobile | fino a 10,86 MB potenziali | circa 8 KB AVIF |
| Hero Risultati | 2,19 MB | circa 115 KB AVIF desktop |
| ProfileFeature | 4,80 MB | circa 99 KB AVIF desktop |
| Foto remote | 0/14 con dimensioni | 14/14 con dimensioni reali |
| Varianti foto | assenti | 21 WebP responsive validati |
| Road to Greece | circa 24 MB | circa 22 MB obsoleti rimossi |
| Test | 8 | 10/10 superati |
| Build | 26 pagine | 26 pagine generate |
| Layout deploy preview | non verificato | Home, Risultati, Media e Road to Greece senza overflow |
| Google Translate | script nel critical path | nessuna richiesta prima del gesto; caricamento dopo apertura |

## Epic E2 — UX mobile e accessibilità · Sprint 2

### US-201 — Risultati leggibili su ogni dispositivo · P1

- [ ] Tabella HTML semantica da 821 px.
- [ ] Card verticali sotto 821 px.
- [ ] Test screen reader, tastiera e filtri.

### US-202 — Esperienza Media mobile · P1/P2

- [ ] Progettare evidenza non duplicata e archivio responsive.
- [ ] Unificare viewer Home/Media e adattarlo al rapporto video.
- [ ] Collegare card/caption alle pagine dettaglio.

### US-203 — Modali accessibili · P1

- [ ] Focus iniziale, trap Tab, Escape e ripristino focus.
- [ ] Rendere inerte il contenuto sottostante o usare `<dialog>`.

### US-204 — Navigazione accessibile · P2

- [ ] Skip link globale e `main#main` coerente.
- [ ] Menu mobile con gestione completa del focus.
- [ ] Un solo selettore lingua, utilizzabile da tastiera.
- [ ] Regola globale `prefers-reduced-motion`.

### US-205 — Profilo mobile più leggibile · P2

- [ ] Ridurre la citazione in hero a 4–5 righe.
- [ ] Spostare il testo completo nella sezione successiva.
- [ ] Inserire un invito allo scroll chiaro.

## Epic E3 — Manutenibilità e qualità operativa · Sprint 3

### TASK-301 — Architettura CSS

- [ ] Separare base/header/footer dai fogli pagina.
- [ ] Ridurre `!important` e override sovrapposti.

### TASK-302 — Semplificazione frontend

- [ ] Rimuovere gradualmente il meccanismo globale `site-locked`.
- [ ] Rendere i contenuti CMS direttamente in build.
- [ ] Consolidare Admin v2/v3 e rimuovere legacy/tmp/patch note.
- [ ] Verificare e rimuovere librerie realmente inutilizzate.

### TASK-303 — Pipeline qualità

- [ ] Aggiungere test, build e controlli TypeScript/Astro.
- [ ] Aggiungere test responsive e accessibilità.
- [ ] Aggiungere link check e Lighthouse CI con budget.

### TASK-304 — Hardening produzione

- [ ] Introdurre header di sicurezza, iniziando da CSP Report-Only.
- [ ] Correggere il fallback 404.
- [ ] Rimuovere `no-store` da Risultati quando stabilizzata.
- [ ] Consolidare la terminologia “Palmarès”/“Risultati”.

## Registro impedimenti e decisioni

| Data | Tipo | Voce | Stato | Nota |
|---|---|---|---|---|
| 2026-09-13 | Impedimento | ST-002.4 | Risolto | Identity live verificata con `disable_signup:true`. |
| 2026-09-13 | Configurazione | ST-002.5 | Risolto | Owner conferma autorizzazione account tramite ruolo/allowlist. |

## Evidenze Sprint 0

| Voce | Evidenza | Esito |
|---|---|---|
| ST-001.1 | Attributo `data-interactive` aggiunto; diff check locale | Implementata |
| ST-003.2 | Test Node su round-trip ed escaping XSS | 2/2 superati |
| Build iniziale | Dipendenze non installate nel checkout | Risolto |
| Lockfile | `npm install` e verifica successiva con `npm ci` | Superata |
| Test | Suite Sprint 0 completa | 8/8 superati |
| Build | Build Astro di produzione | 26 pagine generate |
| TypeScript | Controllo statico indipendente | Superato |
| Security code review | Auth e serializzazione | Superata |
| Security live | Netlify Identity | Superata: `disable_signup:true` |
| Deploy preview | Redirect `/palmares/` | 301 verso `/risultati/` |
| Deploy preview | Cache `/_astro/*` | Annuale e immutable |
| Deploy preview | Sitemap | Road to Greece presente con `lastmod` |
| Deploy preview | Media mobile | Toggle filtri abilitato nel markup distribuito |
| Deploy preview | Admin anonimo | 401 verificato |
