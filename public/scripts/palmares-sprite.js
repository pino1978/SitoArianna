(() => {
  const spriteMap = {
    '2026-0-0': '33.333333% 100%',
    '2026-1-0': '66.666667% 100%',
    '2026-1-1': '66.666667% 100%',
    '2026-2-0': '100% 100%',
    '2026-2-1': '100% 100%',
    '2025-0-0': '33.333333% 50%',
    '2025-1-0': '33.333333% 50%',
    '2025-2-0': '66.666667% 50%',
    '2025-2-1': '100% 50%',
    '2025-3-0': '0 100%',
    '2024-0-0': '100% 0',
    '2024-1-0': '0 50%',
    '2023-0-0': '66.666667% 0',
    '2022-0-0': '0 0',
    '2022-0-1': '0 0',
    '2022-1-0': '33.333333% 0'
  };

  const applyDetailPhoto = (id) => {
    const photo = document.querySelector('.palmares-page .timeline-detail .medal-photo');
    const position = spriteMap[id];
    if (!photo || !position) return;
    photo.style.backgroundImage = "url('/images/medaglie/medaglie-sprite.webp')";
    photo.style.backgroundSize = '400% 300%';
    photo.style.backgroundPosition = position;
    photo.style.backgroundRepeat = 'no-repeat';
    photo.style.visibility = 'visible';
    photo.style.opacity = '1';
  };

  const initPalmares = () => {
    if (!document.querySelector('.palmares-page')) return;
    applyDetailPhoto('2026-0-0');
    document.querySelectorAll('.timeline-event,.medal-card').forEach((control) => {
      if (control.dataset.medalPhotoBound === 'true') return;
      control.dataset.medalPhotoBound = 'true';
      control.addEventListener('click', () => applyDetailPhoto(control.dataset.medalId));
    });
  };

  const initMedia = () => {
    const mediaPage = document.querySelector('.media-page');
    if (!mediaPage) return;

    // BaseLayout blocca i pulsanti senza data-interactive: il toggle Filtri deve restare attivo.
    const filterToggle = mediaPage.querySelector('[data-filter-toggle]');
    if (filterToggle instanceof HTMLButtonElement) {
      filterToggle.setAttribute('data-interactive', '');
      filterToggle.disabled = false;
      filterToggle.removeAttribute('aria-disabled');
      filterToggle.removeAttribute('tabindex');
    }

    // La hero Media usa una fotografia reale dell'archivio con overlay scuro.
    const hero = mediaPage.querySelector('.media-hero');
    const heroPhoto = mediaPage.querySelector('.featured-small[data-media-type="foto"] img, .media-card[data-media-type="foto"] img');
    if (hero instanceof HTMLElement && heroPhoto instanceof HTMLImageElement && heroPhoto.currentSrc || heroPhoto?.getAttribute('src')) {
      const src = heroPhoto.currentSrc || heroPhoto.getAttribute('src');
      if (src) {
        hero.style.backgroundImage = `linear-gradient(90deg,rgba(6,5,4,.92) 0%,rgba(6,5,4,.74) 48%,rgba(6,5,4,.42) 100%),linear-gradient(180deg,rgba(6,5,4,.18),rgba(6,5,4,.8)),url("${src}")`;
        hero.style.backgroundSize = 'cover';
        hero.style.backgroundPosition = 'center 34%';
        hero.style.backgroundRepeat = 'no-repeat';
      }
    }
  };

  const init = () => {
    initPalmares();
    initMedia();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
  document.addEventListener('astro:page-load', init);
})();