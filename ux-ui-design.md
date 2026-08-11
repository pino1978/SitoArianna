# UX/UI Design - Sito Arianna Milano

## Direzione

Sito sportivo editoriale, premium e professionale. Deve comunicare Arianna prima dell'atleta: determinazione, talento, crescita e personalita, senza usare toni sensazionalistici.

Il benchmark `Downloads/Sito Arianna/arianna-fighter.html` e stato valutato solo come spunto: utile per energia visiva, sezioni media e ritmo sportivo; non adatto come base per tono, contenuti e dati perche contiene elementi troppo aggressivi, dati non allineati al brief e brand "fighter" troppo dominante.

Correzione di rotta finale approvata: il sito deve replicare fedelmente il mockup scelto dall'utente. Il mockup usa un linguaggio premium marziale, dark/ivory/gold/red, con Arianna protagonista e Ying / 鹰 come firma identitaria forte.

Pareri esperti:
- Expert Art Designer: direzione corretta; mantenere protagonista nella hero, palette scura, gerarchia cinematica, simbolo Ying / 鹰 come firma forte. Evitare dojo luxury artificiale e stereotipi orientali.
- Expert Web Designer: fattibile come homepage single page responsive; desktop fedele al mockup, mobile reinterpretato come stack. Costruire componenti fluidi, non una immagine statica.
- Expert UI/UX: replicare la direzione visuale solo se non sacrifica chiarezza, accessibilita, dati verificabili e contatto semplice.

## Principi UX

- Primo segnale: Arianna Milano, atleta agonista di Sanda.
- Target prioritario: selezionatori, federazioni, allenatori, organizzatori.
- Navigazione semplice: Profilo, Yīng, Percorso, Risultati, Media.
- Nessuna pagina contatti dedicata; email discreta nel footer.
- Yīng / 鹰 solo come firma secondaria, non come brand principale.

## Scelta architetturale

Scelta: single page premium con navigazione ad anchor, visualmente assimilabile a finta multipage.

Motivi:
- mantiene l'impatto narrativo di una landing immersiva;
- evita la dispersione iniziale di una multipage quando i contenuti reali sono ancora pochi;
- consente sezioni forti e linkabili;
- puo evolvere facilmente in multipage o SSG quando cresceranno risultati, gallery e aggiornamenti.

Alternative:
- Single page pura: forte impatto, ma meno scalabile per archivio e SEO.
- Multipage: piu solida a lungo termine, ma prematura per il materiale reale disponibile oggi.

## Direzione visuale

- Palette: nero inchiostro, avorio, oro satinato, rosso lacca come accento.
- Tipografia: condensata forte per titoli, sans leggibile per testi.
- Visual: hero cinematica fedele al mockup, blocchi editoriali alternati scuro/avorio, texture oro/ink.
- Layout: hero scura, chi sono, valori, disciplina, Sanda, percorso, risultati, media, footer.
- Motion: minimo e accessibile; nessun carousel nella versione corrente.

## MVP UI

- Hero premium fedele al mockup con Arianna, claim, CTA, stats sobrie e Ying / 鹰.
- Chi sono.
- Valori.
- Disciplina.
- Il Sanda.
- Il mio percorso.
- Risultati principali.
- Media gallery.
- Footer con email discreta.

## Accessibilita

- Struttura semantica HTML.
- Skip link.
- Contrasti elevati.
- Menu mobile con `aria-expanded`.
- Supporto `prefers-reduced-motion`.
- Struttura semantica senza contenuti in movimento automatico.

## Riferimenti esterni valutati

- W3C WCAG 2.2.2 Pause, Stop, Hide: contenuti in movimento devono essere controllabili.
- WAI-ARIA Carousel Pattern: se esiste rotazione automatica, deve fermarsi su focus/hover e avere controllo utente.
- Nielsen Norman Group: evitare carousel auto-forwarding; mostrare nuovi pannelli quando l'utente lo richiede.
- Trend 2026: uso di visual immersivi, texture, tipografia espressiva e storytelling visivo, mantenendo accessibilita e navigazione chiara.

## Deliverable prodotto

- `site/index.html`
- `site/assets/styles.css`
- `site/assets/script.js`
- `site/assets/images/hero-training.png`
- `site/assets/images/premium-hero.png`
- `site/assets/images/slide-training-detail.png`
- `site/assets/images/slide-action.png`
- `site/assets/images/identity-ying.png`
- `site/assets/images/journal-hero.png`
- `site/assets/images/journal-training.png`
- `site/assets/images/journal-ying.png`
- `site/assets/images/mockup-hero-ying.png`
- `site/assets/images/mockup-profile.png`
- `site/assets/images/mockup-discipline.png`
- `site/assets/images/mockup-sanda.png`
- `site/assets/images/mockup-ying-pattern.png`
- `site/README.md`
