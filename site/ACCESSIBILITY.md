# Accessibility

## Implementato

- HTML semantico con `main`, `section`, `header`, `nav`, `footer`.
- Skip link verso il contenuto principale.
- Menu mobile con `aria-expanded` e `aria-controls`.
- Focus visibile.
- Supporto `prefers-reduced-motion`.
- Testi informativi in HTML, non appiattiti in immagini.
- SVG decorativi marcati con `aria-hidden="true"` quando non informativi.
- Immagini raster con `alt` descrittivi o vuoti quando decorative.

## Da Verificare Prima Del Go Live

- Contrasto reale dopo sostituzione immagini definitive.
- Test tastiera completo su browser.
- Lighthouse Accessibility.
- Test screen reader dei landmark e della navigazione.
- Conferma che i dati atleta pubblicati non includano informazioni sensibili.
