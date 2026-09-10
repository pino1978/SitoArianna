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

    const filterToggle = mediaPage.querySelector('[data-filter-toggle]');
    if (filterToggle instanceof HTMLButtonElement) {
      filterToggle.setAttribute('data-interactive', '');
      filterToggle.disabled = false;
      filterToggle.removeAttribute('aria-disabled');
      filterToggle.removeAttribute('tabindex');
    }

    const hero = mediaPage.querySelector('.media-hero');
    const heroPhoto = mediaPage.querySelector('.featured-small[data-media-type="foto"] img, .media-card[data-media-type="foto"] img');
    if (hero instanceof HTMLElement && heroPhoto instanceof HTMLImageElement) {
      const src = heroPhoto.currentSrc || heroPhoto.getAttribute('src');
      if (src) {
        hero.style.backgroundImage = `linear-gradient(90deg,rgba(6,5,4,.62) 0%,rgba(6,5,4,.44) 48%,rgba(6,5,4,.24) 100%),linear-gradient(180deg,rgba(6,5,4,.08),rgba(6,5,4,.56)),url("${src}")`;
        hero.style.backgroundSize = 'cover';
        hero.style.backgroundPosition = 'center 34%';
        hero.style.backgroundRepeat = 'no-repeat';
      }
    }
  };

  const initMobileNav = () => {
    const nav = document.querySelector('.mobile-nav');
    if (!(nav instanceof HTMLElement)) return;

    nav.classList.add('mobile-nav--compact');
    nav.querySelectorAll('.mobile-nav__inner > a').forEach((link) => {
      const number = link.querySelector(':scope > span');
      if (number) number.remove();
    });

    document.querySelectorAll('.language-picker,.language-trigger,.language-options,.mobile-language-options,.mobile-language-options button,[data-language-code],[data-language-flag]').forEach((el) => {
      el.classList.add('notranslate');
      el.setAttribute('translate', 'no');
    });

    if (!document.getElementById('mobile-nav-compact-style')) {
      const style = document.createElement('style');
      style.id = 'mobile-nav-compact-style';
      style.textContent = `
        @media (max-width:1000px) {
          .mobile-nav.mobile-nav--compact { padding: 82px 26px 24px !important; }
          .mobile-nav--compact .mobile-nav__inner { max-width: 520px !important; }
          .mobile-nav--compact .mobile-nav__top { min-height: 52px !important; margin-bottom: 4px !important; }
          .mobile-nav--compact .mobile-nav__inner > a {
            display:flex !important;
            grid-template-columns:none !important;
            align-items:center !important;
            min-height:58px !important;
            padding:0 !important;
            font-size:clamp(1.22rem,5.6vw,1.62rem) !important;
            line-height:1 !important;
            letter-spacing:.005em !important;
          }
          .mobile-nav--compact .mobile-nav__footer { gap:10px !important; margin-top:14px !important; padding-top:2px !important; }
          .mobile-nav--compact .mobile-language-options button { min-height:44px !important; padding:8px 12px !important; }
        }
      `;
      document.head.appendChild(style);
    }
  };

  const init = () => {
    initPalmares();
    initMedia();
    initMobileNav();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
  document.addEventListener('astro:page-load', init);
})();