# Solution Design

## Contesto

Questo documento definisce le scelte architetturali e di design per il sito ufficiale di Arianna Milano.
Il suo scopo è raccogliere le decisioni principali, chiarire i vincoli e identificare le domande critiche di progetto prima del gate di approvazione di Solution Design.

## 1. Obiettivo del sito

- Creare un sito ufficiale per Arianna Milano, giovane atleta agonista di Sanda.
- Funzionare come portfolio sportivo e archivio della carriera.
- Valorizzare l'immagine e il percorso atletico senza eccessi narrativi.
- Essere uno strumento utile per selezionatori, federazioni e organizzatori.

## 2. Requisiti principali

- Comunicazione autentica, professionale e orientata al percorso.
- Focus sui target principali: selezionatori, federazioni, allenatori, direttori tecnici, organizzatori, società sportive.
- Supporto multimediale (foto, video, risultati) con un registro coerente all'età e alla maturità sportiva.
- Design a forte impatto visivo, moderno, con effetto “wow”.
- Layout responsive, ottimizzato per mobile, tablet e desktop.
- Valutare architetture single page, multi page o “finto multi page” per migliorare l’esperienza e mantenere i costi contenuti.
- Aggiornabilità progressiva nel tempo.
- Contenuti aggiornabili in autonomia dalla figlia, con supporto del genitore, per nuove gare, testi, foto o video YouTube.
- Nessun form di contatto diretto; pubblicare solo canali e riferimenti esistenti.
- Supporto multilingua già predisposto.
- Pubblicazione desiderata entro il 29 luglio per il compleanno di Arianna.
- Presenza secondaria per fan e testimonianze di amici, con priorità comunque su selezionatori e federazioni.
- Prestazioni elevate e accessibilità.

## 3. Decisioni architetturali raccomandate

### 3.1 Architettura generale

Raccomandazione: sito statico o statico con funzionalità serverless leggere.

Rationale:
- Minima complessità operativa.
- Costi di gestione ridotti.
- Alta velocità di caricamento e sicurezza intrinseca.
- Adeguato per un sito vetrina con contenuti aggiornabili ma non mission-critical.

### 3.2 Hosting

Opzioni:
- Static site hosting (Cloudflare Pages, Netlify, Vercel)
- Static site su CDN con deploy continuo da repository

Raccomandazione: scegliere una piattaforma di static site hosting basata su repository Git quando si definisce l'infrastruttura. Al momento non c'è un hosting preferito.

Vantaggi:
- deployment automatizzato
- HTTPS e caching nativo
- facile rollback
- integrazione CI/CD con aggiornamenti di contenuti

### 3.3 Tecnologia front-end

Opzioni:
- HTML/CSS/JS statico su misura
- Static Site Generator leggero (Astro, Eleventy)
- Framework moderno (Next.js, SvelteKit)

Raccomandazione: static site generator leggero con supporto responsive, animazioni e ottimizzazione immagini. Questo offre un buon equilibrio tra impatto grafico e costi contenuti.

Motivazioni:
- velocità di caricamento
- facilità di manutenzione
- buon compromesso tra personalizzazione e efficienza
- possibilità di usare markdown per contenuti editoriali se necessario
- supporto per animazioni moderne e layout responsive con costi di sviluppo più bassi rispetto a un framework completo

### 3.4 Content management

Opzioni:
- Aggiornamenti manuali via Git/Markdown
- Headless CMS leggero (Strapi, Sanity, Netlify CMS)
- Interfaccia di editing semplice se necessario

Raccomandazione: iniziare con una soluzione Git/Markdown semplice e documentata, con il supporto del genitore per la figlia. Se emergono difficoltà, prevedere l’aggiunta di un editor leggero o CMS molto semplice.

### 3.5 Contenuti multimediali

- Foto e video dovranno essere ottimizzati per web.
- In fase iniziale è accettabile usare immagini generate e video YouTube pubblici come segnaposto, sostituendoli successivamente con il materiale reale.
- Usare lazy loading per le immagini e video embed quando possibile.
- Utilizzare hero visual impattanti, sezioni immersive e sovrapposizioni dinamiche per ottenere l’effetto “wow”.
- Mantenere la pagina snella e accessibile.

### 3.6 SEO e visibilità

- Title e meta description pensati per selezionatori e federazioni.
- Struttura delle pagine semplice e navigazione chiara.
- Open Graph e social preview per condivisione.

### 3.7 Accessibilità e qualità

- WCAG 2.1 AA per testi, colori, elementi interattivi.
- Mobile-first e responsive.
- Contrasto adeguato e navigazione da tastiera.

### 3.8 Sicurezza e privacy

- Evitare backend complessi.
- Limitare i dati raccolti dal contact form.
- Usare soluzioni serverless per i form e proteggere i dati personali.

### 3.9 Analisi e contatti

- Tracciamento leggero (es. Google Analytics / alternativa GDPR-friendly).
- Nessun form di contatto diretto: pubblicare solo canali e riferimenti esistenti.
- Se serve feedback da amici, utilizzare testimonianze o citazioni in pagina.

## 4. Decisioni di design raccomandate

### 4.1 Tone of voice

- Professionale, autentico, rispettoso.
- Focalizzato sul percorso di crescita sportiva.
- Non iperbolico, non emotivo in modo infantile.

### 4.2 Identità visiva

Elementi chiave:
- Simbolo / concetto "Yīng" (Aquila)
- Tonalità visive ispirate a coraggio, concentrazione, precisione.
- Stile grafico pulito, sportivo, professionale.
- Fotografie e video dinamici ma non esagerati.

### 4.3 Informazione architettonica del sito

Pagine principali suggerite:
- Home
- Biografia sportiva
- Risultati e palmarès
- Galleria foto e video
- Notizie e aggiornamenti
- Contatti

### 4.4 UX e prioritizzazione

- Landing page chiara per selezionatori e federazioni.
- Accesso rapido a risultati e palmarès.
- Sezione contatti visibile e semplice.
- Struttura logica e navigazione intuitiva.

### 4.5 Branding e contenuti

- Usare il concetto di atleta in crescita in modo credibile.
- Evitare termini come "promessa" o "futura olimpionica".
- Enfatizzare determinazione, tecnica, disciplina e risultati concreti.

### 4.6 Site map proposta

- Home
  - Hero visual a impatto elevato con nome Arianna e claim sintetico.
  - Sezione risultati principali, CTA e accesso rapido alle lingue.
  - Breve presentazione del posizionamento.
- Biografia sportiva
  - Storia, background, filosofia e valori.
  - Sezione “Yīng” e spiegazione del simbolo Aquila.
- Risultati e palmarès
  - Elenco gare, vittorie, partecipazioni significative.
  - Timeline visiva con date e location.
- Galleria foto e video
  - Griglia dinamica di immagini e video embedded.
  - Sezione di highlights multimediali.
- Notizie e aggiornamenti
  - Testo breve, aggiornamenti gara, novità.
  - Sezione testimonianze di amici e feedback.
- Contatti
  - Canali esistenti e riferimenti.
  - Nessun form diretto.

### 4.7 Confronto architetture

#### Single Page
- Vantaggi:
  - esperienza fluida e moderna
  - effetto scenico forte con scroll e animazioni
  - semplice da realizzare con un singolo bundle
- Svantaggi:
  - meno granularità SEO per singoli contenuti
  - può risultare meno scalabile se il contenuto cresce molto
- Quando usarlo:
  - se il sito rimane concentrato su una narrazione compatta e visiva

#### Multi Page
- Vantaggi:
  - pagine distinte per SEO e contenuti più ricchi
  - struttura più modulare per crescita futura
- Svantaggi:
  - qualche lavoro in più per ciascuna pagina
  - esperienza di navigazione meno “lineare” rispetto a una single page
- Quando usarlo:
  - se si desidera contenuti editoriali separati e SEO migliorato per aree specifiche

#### Finto Multi Page
- Vantaggi:
  - mix tra navigazione fluida e contenuti organizzati
  - URL separati per sezioni principali con transizioni smooth
  - percezione di più pagine senza complessità di un sito multi page completo
- Svantaggi:
  - richiede un minimo di logica front-end per il routing/linking interno
- Quando usarlo:
  - ideale per un sito visivo con contenuti limitati ma articolati, mantenendo basso costo e forte impatto

### 4.8 Raccomandazione architetturale per Arianna

Raccomandazione: iniziare con un approccio “finto multi page” su un static site generator leggero.

Motivazioni:
- consente un’esperienza moderna e impressionante con una sola base di codice
- mantiene i costi ridotti grazie a contenuti statici e deploy semplificato
- offre un buon equilibrio tra impatto grafico, navigazione rapida e supporto multilingua
- facilita l’uso di contenuti placeholder iniziali e la sostituzione successiva con materiale reale

### 4.9 Gestione economica dei contenuti

- Usare un file data/markdown per testi e contenuti principali.
- Gestire immagini e media con risorse ottimizzate e CDN del provider hosting.
- Evitare backend e servizi a pagamento non necessari fino a quando non serve autonomia editoriale avanzata.
- Predisporre un semplice workflow Git per aggiornamenti: un repository condiviso, file markdown e immagini in cartella.

## 5. Input cliente

- Hosting: nessuna preferenza specifica oggi; si sceglierà una piattaforma di static site hosting basata su repository Git.
- Brand: ci sono già materiali grafici e linee guida, ma il sito sarà incentrato su Arianna.
- Area news/blog: si preferiscono aggiornamenti semplici e diretti, non necessariamente un blog complesso.
- Media: tutto il materiale sarà fornito in seguito; in fase iniziale usare foto segnaposto generate e link a video YouTube pubblici, quindi sostituire con materiale reale.
- Contatto: nessun form diretto; pubblicare solo canali e referenze esistenti.
- Lingue: supporto multilingua già predisposto.
- Performance e accessibilità: saranno valutati dalla Factory.
- Deadline: pubblicazione ideale entro il 29 luglio, per il compleanno di Arianna.
- Audience: focus principale su selezionatori e federazioni, con una parte secondaria dedicata ai fan e a testimonianze di amici.

### Domande ancora aperte
- Confermare la piattaforma di hosting finale.
- Confermare il set finale di materiali grafici e media quando disponibili.

## 6. Prossimi passi per il gate di Solution Design

- Validare le scelte architetturali e le decisioni di design con il cliente.
- Confermare le risposte alle domande aperte.
- Definire il set iniziale di contenuti multimediali disponibili e utilizzare placeholder temporanei finché non saranno forniti i materiali reali.
- Preparare uno schema di site map e una prima bozza di information architecture.
- Pianificare il rilascio preliminare entro il 29 luglio.
- Registrare le decisioni consolidate nel Decision Register.
