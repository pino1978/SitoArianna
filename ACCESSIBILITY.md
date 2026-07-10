# Accessibility

## Implementato

- HTML semantico con `header`, `main`, `section`, `article`, `footer`, `nav`.
- Skip link verso il contenuto principale.
- Menu mobile con bottone e `aria-expanded`.
- Focus visibile su link e bottoni.
- Contrasto elevato su fondo scuro e fondo avorio.
- Supporto `prefers-reduced-motion`.
- SVG decorativi nascosti con `aria-hidden` quando opportuno.
- Testi informativi lunghi in HTML, non appiattiti in immagini.
- Immagini sotto la hero con `loading="lazy"`.

## Note

Il lettering `LIBERTÀ` è SVG decorativo nel layout, ma la parola è presente anche come testo screen-reader-only dentro l'H1.

La hero usa `hero.png` come sfondo; il contenuto informativo resta in layer HTML/SVG separati.

## Verifiche consigliate prima della pubblicazione

- Test tastiera completo.
- Lighthouse Performance, Accessibility, Best Practices e SEO.
- Verifica contrasto su monitor diversi.
- Revisione alt text con immagini definitive.
- Test mobile reale su iOS e Android.
