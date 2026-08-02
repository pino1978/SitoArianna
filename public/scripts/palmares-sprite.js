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

  const init = () => {
    if (!document.querySelector('.palmares-page')) return;
    applyDetailPhoto('2026-0-0');
    document.querySelectorAll('.timeline-event,.medal-card').forEach((control) => {
      if (control.dataset.medalPhotoBound === 'true') return;
      control.dataset.medalPhotoBound = 'true';
      control.addEventListener('click', () => applyDetailPhoto(control.dataset.medalId));
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
  document.addEventListener('astro:page-load', init);
})();