# Worklog Register - Sito Arianna

## 2026-07-09 - Nuovo approccio hero con background hero4 e layer aquila

Autore: Orchestratore Factory

Factory coinvolta:
- Orchestratore
- Art Director
- UI/UX Designer
- Visual Asset Specialist
- Frontend Engineer
- QA Engineer

Attivita:
- Creato checkpoint Git della versione precedente con ideogramma destro.
- Impostato `hero4-bg.png` come background fotografico principale della hero.
- Inserito `aq1-layer-source.png` come layer grafico destro al posto dell'ideogramma puntuale.
- Ritarate scala, posizione, opacita, maschere e blend del layer aquila per evitare effetto poster.
- Alleggerite le velature sul soggetto per mantenere Arianna protagonista.
- Verificata la resa desktop e mobile.

Deliverable:
- `src/assets/images/hero4-bg.png`
- `src/assets/images/aq1-layer-source.png`
- `src/components/Hero.astro`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review desktop generato: `.codex-hero4-aq1-review-3.png`.
- Screenshot di review mobile generato: `.codex-hero4-aq1-mobile-review-1.png`.

Tempo: 0.45 ore

## 2026-07-08 - Sostituzione titolo hero con PNG trasparente

Autore: Software Factory

Factory coinvolta:
- Orchestrator
- Art Director
- UI Designer
- Frontend Engineer
- QA Designer

Attivita:
- Verificato che i nuovi file PNG forniti abbiano trasparenza reale.
- Copiato nel progetto l'asset `5b7af78744eb4aaa9d28285cf1f072c5 (1).png`.
- Sostituito il titolo hero composto da testo/SVG con il PNG trasparente temporaneo.
- Mantenuto un `h1` accessibile nascosto per SEO e screen reader.
- Regolata la scala del PNG, margini verticali, subcopy e CTA per evitare sovrapposizione con la barra statistiche.
- Rifinita la posizione del PNG: ridotto, alzato e spostato leggermente a sinistra.
- Eseguita build Astro.

Deliverable:
- `src/assets/images/hero-title-liberta.png`
- `src/components/Hero.astro`
- `src/styles/global.css`

Esito:
- PNG trasparente inserito nella hero.
- Build completata con successo.

Tempo: 0.35 ore

## 2026-07-07 - Correzione icone e allineamenti barra statistiche

Autore: Software Factory

Factory coinvolta:
- Orchestrator
- UI Designer
- SVG Specialist
- Frontend Engineer
- QA Designer

Attivita:
- Recepita segnalazione: icone e allineamenti della barra statistiche non aderenti al mockup.
- Ridisegnate le SVG statistiche con tratti oro dedicati, sostituendo il primo simbolo non coerente.
- Corretto il layout interno dei singoli stat item: icona e numero sulla stessa riga, label sotto con larghezza costante.
- Sostituiti i bordi dei singoli item con separatori verticali controllati via pseudo-elementi.
- Rifinito il logo alto sinistra riducendo la dimensione e la safe area header.
- Eseguita build Astro e controllo visuale desktop.

Deliverable:
- `src/assets/svg/stat-years.svg`
- `src/assets/svg/stat-trophy.svg`
- `src/assets/svg/stat-podium.svg`
- `src/assets/svg/stat-medal.svg`
- `src/styles/global.css`

Esito:
- Barra statistiche piu coerente con il mockup: icone oro, label non schiacciate, separatori regolari.
- Build completata con successo.

Tempo: 0.35 ore

## 2026-07-07 - Riallineamento sovrapponibile hero

Autore: Software Factory

Factory coinvolta:
- Orchestrator
- UI Designer
- Typography Specialist
- Frontend Engineer
- QA Designer

Attivita:
- Rianalizzato `mockup-reference-hero.png` come master proporzionale.
- Riallineata la colonna testuale sinistra alla safe area del mockup.
- Abbassata la headline per aderire meglio alla quota verticale del riferimento.
- Portata la hero a occupare l'intera viewport, come composizione master.
- Estesa e riposizionata la barra statistiche per avvicinarla alla fascia numerica del mockup.
- Aumentata la presenza visuale di icone e numeri nella barra statistiche.
- Eseguita build Astro e QA visuale su screenshot desktop proporzionale al mockup.

Deliverable:
- `src/styles/global.css`

Esito:
- Hero piu sovrapponibile al mockup specifico su blocco testo e barra statistiche.
- Build completata con successo.

Tempo: 0.25 ore

## 2026-07-07 - Correzione allineamento menu hero

Autore: Software Factory

Factory coinvolta:
- Orchestrator
- UI Designer
- Frontend Engineer
- QA Designer

Attivita:
- Recepita segnalazione: risultava allineata a destra solo la lingua, non l'intero menu.
- Corretto il layout della navigazione desktop impostando la nav come grid item allineato a destra.
- Verificata compilazione Astro.

Deliverable:
- `src/styles/global.css`

Esito:
- Menu desktop allineato a destra prima del selettore lingua.
- Build completata con successo.

Tempo: 0.1 ore

## 2026-07-07 - Rifinitura header e statistiche hero

Autore: Software Factory

Factory coinvolta:
- Orchestrator
- UI Designer
- Frontend Engineer
- QA Designer

Attivita:
- Spostato il menu desktop a destra e ridotta la spaziatura tra le voci.
- Compattata la navigation bar mantenendo il selettore lingua.
- Riallineata la barra statistiche hero al mockup: blocchi piu stretti, icone oro visibili, tipografia numerica piu compatta.
- Portata la hero su coordinate piu sovrapponibili al mockup specifico: safe area laterali ridotte, header assoluto, copy abbassata, barra statistiche sollevata dal bordo inferiore.
- Ottimizzata la resa mobile della barra numeri in due colonne leggibili.
- Eseguita build Astro e QA visuale desktop/mobile.

Deliverable:
- `src/styles/global.css`

Esito:
- Menu desktop piu compatto e allineato a destra.
- Barra statistiche piu vicina al mockup hero.
- Build completata con successo.

Tempo: 0.25 ore

## 2026-07-07 - Implementazione hero, highlights e profilo

Autore: Software Factory

Factory coinvolta:
- Orchestrator
- Digital Experience Architect
- Frontend Engineer
- Accessibility Specialist
- QA Designer
- Knowledge Manager

Attivita:
- Recepita delega operativa: l'Orchestratore prende le decisioni senza ulteriori conferme ordinarie.
- Scelta tecnica di fase: mantenere Astro per evitare migrazione React prematura e preservare velocita, static build e componentizzazione esistente.
- Rimossa dalla hero la firma Ying a destra, in coerenza con `mockup-reference-hero.png`.
- Trasformato il lato destro della navbar in selettore lingua.
- Aggiunto componente `HighlightsStrip` subito sotto la hero.
- Aggiunto componente `ProfileFeature` a due pannelli per Arianna e Ying, senza aquila, senza parola Aquila e senza sigillo rosso.
- Riscritta la home Astro per sequenza hero, highlights, profilo e sezioni successive.
- Aggiornati gli stili responsive per desktop e mobile verticale.
- Eseguita build Astro e screenshot QA desktop/mobile con Chrome headless.

Deliverable:
- `src/components/Hero.astro`
- `src/components/Header.astro`
- `src/components/HighlightsStrip.astro`
- `src/components/ProfileFeature.astro`
- `src/pages/index.astro`
- `src/styles/global.css`
- `dist/`

Esito:
- Build completata con successo.
- Hero coerente con mockup specifico: nessun segno Ying laterale, nessuna aquila, nessun sigillo rosso.
- Highlights e profilo introdotti come componenti riusabili.
- Restano da sostituire i placeholder quando saranno disponibili foto/video reali.

Tempo: 1.1 ore

## 2026-07-07 - Discovery hero e profilo da mockup ufficiali

Autore: Software Factory

Factory coinvolta:
- Orchestrator
- UX Architect
- UI Designer
- Art Director
- Typography Specialist
- SVG Specialist
- Motion Designer
- Frontend Architect
- Accessibility Specialist
- Responsive Design Specialist
- Design System Architect
- QA Designer
- Knowledge Manager

Attivita:
- Recepita autorizzazione a usare come equivalenti gli standard Factory e Brand gia presenti.
- Analizzati i mockup ufficiali `mockup-reference.png`, `mockup-reference-hero.png` e `mockup-reference-profilo.png`.
- Raccolte e consolidate le risposte discovery del committente.
- Stabilito che per la hero prevale il mockup specifico `mockup-reference-hero.png`.
- Confermata rimozione da hero/profilo di aquila, parola Aquila e sigillo rosso.
- Confermato uso temporaneo della fotografia hero attuale e accettazione dei placeholder AI pubblicabili.
- Confermato che testi, CTA, statistiche e valori devono essere configurabili.
- Confermato scope UX/UI corrente: hero, nav, statistiche, highlights e profilo.
- Rinviata alla Technical Architecture la decisione finale su stack, Tailwind, Framer Motion, Docker e struttura applicativa.

Deliverable:
- `requirements.md`
- `project-status.md`
- `worklogs/worklog-register.md`

Esito:
- Discovery hero/profilo consolidata.
- Nessuna implementazione eseguita.
- Prossimo passo: UX/UI Design dettagliato prima del gate di implementazione.

Tempo: 0.4 ore

## 2026-06-30 - Ricostruzione hero da mockup allegato

Autore: Software Factory

Factory coinvolta:
- Orchestrator
- Digital Experience Architect
- Brand/Lettering Designer
- Frontend Engineer
- Accessibility Specialist
- QA Engineer / Knowledge Manager

Attivita:
- Cancellate le issue locali precedenti in `epics/`, `stories/` e `subtasks/`.
- Create le nuove issue locali `ARI-EPIC-002`, `ARI-STORY-002`, `ARI-SUB-010` - `ARI-SUB-015`.
- Letti Brand Kit, guida di generazione brand e sistema lettering.
- Analizzato il mockup allegato in componenti: header, brand lockup, nav, headline, lettering, CTA, statistiche, background, firma destra, overlay, scroll indicator e segni decorativi.
- Verificato e riusato il lettering `Liberta` senza creare metadata JSON.
- Aggiornata la hero del sito con background approvato `hero-background-next-release.png`.
- Aggiunti nav Contatti, scroll indicator, icone statistiche CSS e curve decorative oro/rosso.
- Mantenuta a destra la firma Ying / 鹰 pulita, senza uccello, senza parola Aquila e senza sigillo rosso.
- Eseguita review statica di accessibilita e QA vincoli.

Deliverable:
- `site/index.html`
- `site/assets/styles.css`
- `epics/ARI-EPIC-002-hero-faithful-brandkit.md`
- `stories/ARI-STORY-002-implement-hero-mockup.md`
- `subtasks/ARI-SUB-010-read-factory-brand.md`
- `subtasks/ARI-SUB-011-analyze-mockup.md`
- `subtasks/ARI-SUB-012-prepare-lettering-assets.md`
- `subtasks/ARI-SUB-013-implement-hero.md`
- `subtasks/ARI-SUB-014-accessibility-review.md`
- `subtasks/ARI-SUB-015-qa-knowledge.md`

Esito:
- Hero completata localmente.
- Tutte le issue locali create per il ciclo sono chiuse.
- Verificata assenza nel deliverable `site/` di elementi testuali vietati e metadata JSON.
- Browser integrato non disponibile per screenshot live: resta raccomandata review visuale utente.

Tempo: 2.35 ore

## 2026-06-26 - Presa in carico factory

Autore: Software Factory

Factory coinvolta:
- Software Factory
- Business Analyst
- Product Owner
- UX/UI Designer
- Frontend Engineer
- Accessibility Specialist
- QA Engineer
- Knowledge Manager

Attivita:
- Recepito il vincolo operativo: ogni azione richiesta per il sito Arianna deve essere presa in carico tramite Software Factory Virtual Team.
- Verificati gli artefatti di factory: operating model, registry factory, definition of ready, definition of done.
- Verificati gli artefatti di progetto: requirements, discovery summary, solution design, solution design checklist, project status.
- Riallineato lo stato del progetto alla fase Solution Design, con Solution Design Gate aperto.
- Identificati i mockup HTML esistenti in `Downloads/Sito Arianna` come input da valutare prima di eventuali interventi operativi.

Esito:
- Presa in carico completata.
- Nessuna modifica operativa al sito eseguita.
- Prossima azione raccomandata: validare il Solution Design Gate oppure richiedere una modifica specifica da orchestrare tramite factory.

Tempo: 0.25 ore

## 2026-06-26 - Regola di reporting operativo minimale

Autore: Software Factory

Factory coinvolta:
- Software Factory
- Knowledge Manager

Attivita:
- Recepita la preferenza utente: per ogni attivita richiesta deve essere comunicato in modo sintetico come l'orchestratore gestisce la richiesta, quali competenze factory attiva e quali deliverable sono attesi.
- La comunicazione deve restare minimale e orientata alla decisione operativa.

Formato operativo richiesto:
- Orchestrazione: una riga.
- Factory: competenze attivate e deliverable attesi.
- Deliverable: elenco breve.

Esito:
- Regola applicabile alle prossime attivita sul sito Arianna.

Tempo: 0.1 ore

## 2026-06-26 - Avvio sito da zero

Autore: Software Factory

Factory coinvolta:
- Software Factory
- Product Owner
- UX/UI Designer
- Frontend Engineer
- Accessibility Specialist
- QA Engineer
- Knowledge Manager

Attivita:
- Recepita decisione utente: non tenere conto dei mockup esistenti e cominciare da zero.
- Recepita autorizzazione operativa: procedere direttamente senza conferme per attivita ordinarie.
- Approvato il Solution Design Gate sulla base della conferma utente.
- Generato asset hero temporaneo con `imagegen` e copiato nel progetto.
- Creata prima base statica del sito in `site/`.
- Creato documento UX/UI di indirizzo.

Deliverable:
- `solution-design-approval.md`
- `ux-ui-design.md`
- `site/index.html`
- `site/assets/styles.css`
- `site/assets/script.js`
- `site/assets/images/hero-training.png`
- `site/README.md`

Esito:
- Prototipo statico iniziale creato.
- Prossima verifica: rendering desktop/mobile e accessibilita base.

Tempo: 1 ora

## 2026-06-26 - Verifica QA locale prototipo statico

Autore: QA Engineer

Factory coinvolta:
- QA Engineer
- Accessibility Specialist
- Knowledge Manager

Attivita:
- Verificata presenza dei file del sito e dell'asset hero.
- Verificata presenza di struttura semantica HTML, `h1`, `main`, `nav`, `footer`, alt text e attributi ARIA principali.
- Verificata assenza nel contenuto HTML di termini di posizionamento vietati.
- Corretto il testo che conteneva il termine "promessa" anche se usato in forma negativa.
- Rimossi font-size con unita viewport e mantenuto `letter-spacing: 0`.

Esito:
- QA locale superata.
- Browser interno non disponibile: screenshot e verifica visuale automatizzata rimandati.

Tempo: 0.25 ore

## 2026-06-30 - Refactor Brand Generation System

Autore: Software Factory

Factory coinvolta:
- Software Factory
- Digital Experience Architect
- Knowledge Manager

Attivita:
- Revisionata criticamente la gestione del Brand Kit e del sistema di generazione asset.
- Separata la fonte brand (`brand-kit.md`) dalla guida operativa (`brand/brand-generation-guide.md`).
- Introdotto il principio Design System First per evitare asset isolati.
- Creato `brand/lettering/lettering-system.md`.
- Rigenerato `brand/lettering/liberta.svg` come estensione del lettering system.
- Aggiornata la copia del lettering usata dal sito in `site/assets/images/lettering-liberta.svg`.
- Creati esempi base del lettering system in `brand/lettering/examples/`.
- Aggiunte cartelle `brand/icons/` e `brand/images/`.
- Rimossi i metadata JSON per asset statici.

Deliverable:
- `brand/README.md`
- `brand/brand-generation-guide.md`
- `brand/lettering/lettering-system.md`
- `brand/lettering/liberta.svg`
- `brand/lettering/examples/determinazione.svg`
- `brand/lettering/examples/tecnica.svg`
- `brand/lettering/examples/coraggio.svg`
- `site/assets/images/lettering-liberta.svg`
- `brand/icons/.gitkeep`
- `brand/images/.gitkeep`

Esito:
- Brand Kit mantenuto come fonte di identita e direzione visiva.
- Guida operativa alleggerita e resa scalabile.
- Lettering non piu trattato come asset isolato.
- Metadata JSON per asset statici eliminati.

Tempo: 1.25 ore

## 2026-06-30 - Generazione hero premium Brand Kit

Autore: Software Factory

Factory coinvolta:
- Software Factory
- Digital Experience Architect
- Frontend Engineer
- Accessibility Specialist
- QA Engineer
- Knowledge Manager

Attivita:
- Letti operating model, registry Factory, project status, requirements, Brand Kit e guida di generazione brand.
- Verificato che non fossero presenti issue locali pregresse da cancellare per il progetto Arianna.
- Create issue locali equivalenti Jira: `ARI-EPIC-001`, `ARI-STORY-001`, `ARI-SUB-001`, `ARI-SUB-002`, `ARI-SUB-003`, `ARI-SUB-004`.
- Generato asset lettering vettoriale `Liberta` conforme al Brand Kit.
- Aggiornata hero del prototipo statico con lettering, CTA, firma secondaria `Ying / 鹰` e pannello destro pulito.
- Rimossa la voce Contatti dalla navigazione principale.
- Verificata assenza di aquila, scritta Aquila, sigillo rosso e link dedicato ai contatti nella hero.
- Verificati riferimenti locali HTML e ancore interne.

Deliverable:
- `site/index.html`
- `site/assets/styles.css`
- `site/assets/images/lettering-liberta.svg`
- `brand/lettering/liberta.svg`
- `epics/ARI-EPIC-001-hero-brand-redesign.md`
- `stories/ARI-STORY-001-hero-template-implementation.md`
- `subtasks/ARI-SUB-001-read-brand-context.md`
- `subtasks/ARI-SUB-002-hero-direction.md`
- `subtasks/ARI-SUB-003-implement-hero.md`
- `subtasks/ARI-SUB-004-qa-hero.md`

Esito:
- Hero completata localmente.
- Issue locali chiuse.
- Browser integrato non disponibile per screenshot live: resta raccomandata review visuale utente.

Tempo: 2.25 ore

## 2026-06-30 - Registrazione background hero prossima release

Autore: Software Factory

Factory coinvolta:
- Software Factory
- Knowledge Manager

Attivita:
- Ricevuta indicazione committente di usare `Downloads/Sito Arianna/chatgpt 26_06/hero.png` come background hero per le prossime release.
- Copiata l'immagine in `brand/generated/hero-background-next-release.png`.
- Copiata l'immagine in `site/assets/images/hero-background-next-release.png`.
- Aggiornata la hero corrente e l'immagine Open Graph per usare il nuovo background.
- Registrato l'asset tramite struttura cartelle e worklog, senza metadata JSON dedicato.

Deliverable:
- `brand/generated/hero-background-next-release.png`
- `site/assets/images/hero-background-next-release.png`
- `site/index.html`

Esito:
- Background hero preferito per prossima release registrato e applicato.

Tempo: 0.25 ore

## 2026-06-27 - Ricostruzione hero fedele al riferimento

Autore: Software Factory

Factory coinvolta:
- Software Factory
- Art Designer
- Frontend Engineer
- Visual Asset Specialist
- QA Engineer

Attivita:
- Recepita istruzione utente: ricreare la hero come riferimento master, senza reinterpretazioni.
- Creato asset `site/assets/images/ying-logo-clean.png` in PNG trasparente.
- Rimosso dal logo hero il testo `AQUILA`.
- Rimosso dal logo hero il sigillo rosso.
- Aggiornati testi, CTA, stats e posizionamento hero per avvicinarsi al riferimento.
- Mantenuto il resto del sito invariato.
- Nessun commit e nessun push eseguito.

Deliverable:
- `site/index.html`
- `site/assets/styles.css`
- `site/assets/images/ying-logo-clean.png`

QA:
- PNG logo trasparente verificato.
- Hero aggiornata con nuovo logo pulito.
- Assenza di form, telefono, scuola, indirizzo e claim vietati confermata.

Esito:
- Attivita completata localmente.
- Resta consigliata review visuale browser desktop/mobile.

Tempo: 0.75 ore

## 2026-06-27 - Implementazione fedele mockup scelto

Autore: Software Factory

Factory coinvolta:
- Software Factory
- Expert Art Designer
- Expert Web Designer
- Expert UI/UX
- Frontend Engineer
- Accessibility Specialist
- Knowledge Manager

Attivita:
- Recepita correzione utente: realizzare il sito esattamente secondo il mockup fornito.
- Interpellati tre esperti prima di procedere: Art Designer, Web Designer, UI/UX Expert.
- Consolidata decisione: homepage single page responsive, desktop fedele al mockup, mobile reinterpretato.
- Generati nuovi asset placeholder coerenti con il mockup.
- Implementata nuova versione locale del sito in `site/`.
- Nessun commit e nessun push eseguito.

Deliverable:
- `site/index.html`
- `site/assets/styles.css`
- `site/assets/script.js`
- `site/assets/images/mockup-hero-ying.png`
- `site/assets/images/mockup-profile.png`
- `site/assets/images/mockup-discipline.png`
- `site/assets/images/mockup-sanda.png`
- `site/assets/images/mockup-ying-pattern.png`

Esito:
- Implementazione fedele al mockup completata localmente.
- Prossimo passo: QA locale e review visuale browser.

Tempo: 2 ore

## 2026-06-27 - QA locale mockup fedele

Autore: QA Engineer

Factory coinvolta:
- QA Engineer
- Accessibility Specialist
- Knowledge Manager

Attivita:
- Verificata presenza degli asset mockup principali.
- Verificati riferimenti HTML agli asset `mockup-*`.
- Verificata assenza di form, telefono, scuola, indirizzo e claim vietati.
- Verificato che non siano presenti font-size basati su viewport.
- Normalizzato `letter-spacing` a `0`.
- Verificato rispetto del vincolo utente: nessun commit e nessun push eseguito.

Esito:
- QA locale superata.
- Resta da completare review visuale desktop/mobile in browser.

Tempo: 0.25 ore

## 2026-06-26 - Correzione direzione Arianna-first

Autore: Software Factory

Factory coinvolta:
- Software Factory
- Product Owner
- Content Strategist
- UX/UI Designer
- Visual Designer
- Frontend Engineer
- QA Engineer

Attivita:
- Recepita correzione utente: Arianna ha 12 anni e il sito deve raccontare prima di tutto Arianna.
- Abbandonata la direzione troppo fight/dark/red.
- Definita nuova direzione: premium young athlete journal.
- Generati nuovi placeholder luminosi e non aggressivi.
- Aggiornata homepage con palette avorio/grafite/blu sportivo/oro tenue/rosso accento.
- Mantenuto `Ying / 鹰` come firma personale secondaria.
- Rimosso carousel dalla versione corrente per mantenere focus narrativo su Arianna.

Deliverable:
- `site/index.html`
- `site/assets/styles.css`
- `site/assets/script.js`
- `site/assets/images/journal-hero.png`
- `site/assets/images/journal-training.png`
- `site/assets/images/journal-ying.png`
- `ux-ui-design.md`

Esito:
- Nuova direzione implementata localmente.
- Nessun commit e nessun push eseguito.

Tempo: 1.5 ore

## 2026-06-26 - QA locale Arianna-first

Autore: QA Engineer

Factory coinvolta:
- QA Engineer
- Accessibility Specialist
- Knowledge Manager

Attivita:
- Verificata presenza asset `journal-hero.png`, `journal-training.png`, `journal-ying.png`.
- Verificata presenza di Arianna come centro narrativo in title, hero, profilo e footer.
- Verificata presenza di `Ying / 鹰` come firma secondaria.
- Verificata assenza di termini non coerenti: fight, fighter, campionessa, promessa, olimpionica, nessun limite.
- Verificato che non siano presenti telefono, scuola o indirizzo.
- Verificato che non siano presenti font-size basati su viewport.
- Verificato rispetto del vincolo utente: nessun commit e nessun push eseguito.

Esito:
- QA locale superata.
- Resta da completare review visuale desktop/mobile in browser.

Tempo: 0.25 ore

## 2026-06-26 - Redesign premium e benchmark

Autore: Software Factory

Factory coinvolta:
- Software Factory
- Product Owner
- UX/UI Designer
- Visual Designer
- Frontend Engineer
- Accessibility Specialist
- QA Engineer
- Knowledge Manager

Attivita:
- Valutato `Downloads/Sito Arianna/arianna-fighter.html` come spunto creativo, non come base.
- Confrontati standard e riferimenti aggiornati su carousel, accessibilita e trend visuali.
- Scelta architetturale: finta multipage premium.
- Generati asset placeholder premium non identificativi.
- Integrati soprannome `Ying` e ideogramma `鹰` come firma secondaria.
- Inserito carousel media room con controlli manuali e avvio non automatico.
- Aggiornato prototipo statico in `site/`.

Deliverable:
- `site/index.html`
- `site/assets/styles.css`
- `site/assets/script.js`
- `site/assets/images/premium-hero.png`
- `site/assets/images/slide-training-detail.png`
- `site/assets/images/slide-action.png`
- `site/assets/images/identity-ying.png`
- `ux-ui-design.md`

Esito:
- Direzione visiva portata a livello premium.
- Prossima verifica: QA locale su asset, contenuti, accessibilita base e regressioni.

Tempo: 1.5 ore

## 2026-07-08 - Ideogramma oro nella hero

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Art Director
- SVG Specialist
- Frontend Engineer
- QA Engineer

Attivita:
- Generato asset SVG `ideogram-ying-hero-gold.svg` con resa oro satinata coerente con la scritta Liberta.
- Inserito l'ideogramma a destra della hero come firma visiva decorativa.
- Definito comportamento responsive: pieno su desktop, attenuato su tablet, nascosto su mobile stretto.

Deliverable:
- `src/assets/svg/ideogram-ying-hero-gold.svg`
- `src/components/Hero.astro`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.

Tempo: 0.25 ore

## 2026-07-08 - Prova emblema Ying PNG nella hero

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Art Director
- Frontend Engineer
- QA Engineer

Attivita:
- Valutati tre riferimenti visuali Ying forniti dall'utente.
- Scelto il riferimento verticale scuro per compatibilita con la posizione a destra della hero.
- Copiato il PNG nel progetto e applicata maschera sfumata CSS per compensare l'assenza di trasparenza.
- Rimpicciolito e posizionato l'emblema come accento decorativo laterale.

Deliverable:
- `src/assets/images/ying-hero-emblem.png`
- `src/components/Hero.astro`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.

Tempo: 0.25 ore

## 2026-07-08 - Review iterativa hero e integrazione Ying

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Art Director
- Frontend Engineer
- QA Engineer

Attivita:
- Rigenerato il PNG Ying come cutout con trasparenza reale, eliminando il fondo nero e i residui grigi.
- Scurito il lato destro della hero con overlay dedicato, in linea con il mockup di riferimento.
- Inserito il marchio `Ying · 鷹 | aquila` a sinistra del selettore lingua.
- Compattato il menu desktop e rifinito l'allineamento header.
- Rimosso `Sanda Athlete` dal logo in alto a sinistra e portato `Milano` in oro.
- Eseguite review visuali desktop e mobile tramite screenshot Chrome.
- Corretto l'allineamento mobile delle statistiche hero.

Deliverable:
- `src/assets/images/ying-hero-emblem-cutout.png`
- `src/assets/images/ying-header-mark.png`
- `src/assets/svg/logo-arianna-milano.svg`
- `src/components/Header.astro`
- `src/components/Hero.astro`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review generati: `.codex-hero-review-final-desktop.png`, `.codex-hero-review-final-mobile-2.png`.

Tempo: 0.75 ore

## 2026-07-08 - Bilanciamento luminosita hero

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Art Director
- Frontend Engineer
- QA Engineer

Attivita:
- Alleggeriti gli overlay centrali della hero dopo review utente.
- Reso il buio del lato destro piu selettivo, concentrandolo dietro l'emblema Ying.
- Ridotta la copertura scura top/bottom per recuperare visibilita su volto, braccia e busto.
- Verificata la resa con screenshot desktop Chrome.

Deliverable:
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review generato: `.codex-hero-brightness-review-1.png`.

Tempo: 0.25 ore

## 2026-07-08 - Tuning dimensione e nitidezza Ying

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Art Director
- Frontend Engineer
- QA Engineer

Attivita:
- Aumentata la dimensione del blocco Ying a destra della hero.
- Rigenerato il cutout per preservare piu dettaglio sull'aquila.
- Aggiunta velatura scura locale dietro il blocco Ying per ridurre l'alone grigio senza scurire la figura centrale.
- Verificata la resa tramite screenshot desktop Chrome.

Deliverable:
- `src/assets/images/ying-hero-emblem-cutout.png`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review generato: `.codex-hero-ying-scale-review-3.png`.

Tempo: 0.25 ore

## 2026-07-08 - Allineamento colore Ying hero

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Art Director
- Frontend Engineer
- QA Engineer

Attivita:
- Campionato il colore medio del marchio `Ying · 鷹` in header.
- Ricolorato il cutout Ying della hero sulla stessa palette oro brunito.
- Rimosso il viraggio rosso introdotto dalla precedente soglia cromatica.
- Ridotto il filtro CSS per non falsare la tinta dell'asset.

Deliverable:
- `src/assets/images/ying-hero-emblem-cutout.png`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review generato: `.codex-hero-ying-color-review-2.png`.

Tempo: 0.25 ore

## 2026-07-08 - Prova logo PNG in header

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Art Director
- Frontend Engineer
- QA Engineer

Attivita:
- Copiato `site/public/assets/images/logo.png` negli asset Astro.
- Inserito il logo PNG in header al posto del wordmark SVG.
- Creato un ritaglio dedicato derivato da `logo.png` per renderlo leggibile nel formato header.
- Eseguite review visuali progressive e ridimensionato il logo per non sovrapporsi al titolo hero.

Deliverable:
- `src/assets/images/logo.png`
- `src/assets/images/logo-header-from-logo-png.png`
- `src/components/Header.astro`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review generato: `.codex-logo-png-review-3.png`.

Tempo: 0.25 ore

## 2026-07-09 - Review finale logo PNG header

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Art Director
- Frontend Engineer
- QA Engineer

Attivita:
- Provata una variante cutout trasparente derivata da `logo.png`.
- Scartata la variante cutout perche portava nel layout un bagliore dorato troppo invasivo sopra il titolo hero.
- Ripristinato il ritaglio compatto derivato da `logo.png`, risultato piu stabile e leggibile.
- Verificata la resa con screenshot desktop Chrome.

Deliverable:
- `src/assets/images/logo-header-cutout.png`
- `src/components/Header.astro`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review generato: `.codex-logo-png-review-final.png`.

Tempo: 0.25 ore

## 2026-07-09 - Ripristino logo precedente header

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Frontend Engineer
- QA Engineer

Attivita:
- Ripristinato il logo SVG testuale precedente in header.
- Ripristinate le dimensioni del blocco brand precedenti alla prova `logo.png`.
- Verificata la hero con screenshot desktop Chrome.

Deliverable:
- `src/components/Header.astro`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review generato: `.codex-logo-revert-review.png`.

Tempo: 0.1 ore

## 2026-07-09 - Prova immagine Ying laterale e scala soggetto hero

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Art Director
- Frontend Engineer
- QA Engineer

Attivita:
- Inserita nuova immagine Ying ampia fornita dall'utente sul lato destro della hero.
- Sostituito l'emblema generato precedente con layer laterale mascherato e sfumato.
- Ridotta la scala del soggetto principale per avvicinarla al mockup.
- Centrata meglio l'immagine hero per ridurre lo zoom e dare piu respiro al corpo.
- Verificata la resa con screenshot desktop Chrome.

Deliverable:
- `src/assets/images/ying-hero-wide.png`
- `src/components/Hero.astro`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review generato: `.codex-hero-subject-scale-review-2.png`.

Tempo: 0.35 ore

## 2026-07-09 - Spostamento immagine Ying laterale

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Frontend Engineer
- QA Engineer

Attivita:
- Spostata piu a sinistra l'immagine Ying laterale della hero.
- Aggiornata anche la posizione tablet per coerenza responsive.
- Verificata la resa con screenshot desktop Chrome.

Deliverable:
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review generato: `.codex-hero-logo-left-review.png`.

Tempo: 0.1 ore

## 2026-07-09 - Ripristino emblema Ying precedente

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Frontend Engineer
- QA Engineer

Attivita:
- Ripristinato l'emblema Ying cutout precedente al posto dell'immagine laterale ampia.
- Ripristinata la velatura locale e il dimensionamento dell'emblema.
- Mantenuta la scala aggiornata del soggetto principale.
- Verificata la resa con screenshot desktop Chrome.

Deliverable:
- `src/components/Hero.astro`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review generato: `.codex-hero-ying-restore-review.png`.

Tempo: 0.1 ore

## 2026-07-09 - Allineamento barra statistiche hero al mockup

Autore: Orchestrator Agent

Factory coinvolta:
- Orchestrator Agent
- Digital Experience Architect
- Icon Agent
- Frontend Engineer
- QA Engineer
- Knowledge Manager

Attivita:
- Letto il riferimento Factory e attivato staffing minimo per UX/UI, icone, frontend e QA.
- Spostata la barra statistiche subito dopo il CTA `Scopri il mio percorso`.
- Rigenerate le icone statistiche in SVG oro per maggiore aderenza al mockup.
- Aumentato il peso visivo delle icone e alleggerito il peso dei numeri.
- Ricostruita la linea orizzontale sfumata sotto la barra.
- Aumentata la spaziatura verticale della barra per ridurre l'effetto compatto.
- Ridotta ulteriormente la scala del soggetto hero e spostato il soggetto leggermente piu a destra e piu in alto.
- Verificata la resa con screenshot desktop Chrome.

Deliverable:
- `src/components/Hero.astro`
- `src/assets/svg/stat-years.svg`
- `src/assets/svg/stat-trophy.svg`
- `src/assets/svg/stat-podium.svg`
- `src/assets/svg/stat-medal.svg`
- `src/styles/global.css`

Esito:
- Build Astro completata con successo tramite `npm run build`.
- Screenshot di review generato: `.codex-stats-after-cta-review-4.png`.

Tempo: 0.45 ore

## 2026-06-26 - QA locale redesign premium

Autore: QA Engineer

Factory coinvolta:
- QA Engineer
- Accessibility Specialist
- Knowledge Manager

Attivita:
- Verificata presenza asset premium: hero, slide training, slide action, identita Ying.
- Verificata integrazione `Ying` e `鹰` in header, navigazione, sezione identitaria e footer.
- Verificata assenza di termini vietati o non coerenti nel markup.
- Verificato carousel con controlli precedente, successiva e avvio manuale.
- Verificato che non siano presenti font-size basati su viewport.
- Verificato rispetto del vincolo utente: nessun commit e nessun push eseguito.

Esito:
- QA locale superata.
- Resta da fare review visuale desktop/mobile con browser.

Tempo: 0.25 ore
