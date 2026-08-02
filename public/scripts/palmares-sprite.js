(() => {
  const spriteMap = {
    '2026-0-0': [1, 2],
    '2026-1-0': [2, 2],
    '2026-1-1': [2, 2],
    '2026-2-0': [3, 2],
    '2026-2-1': [3, 2],
    '2025-0-0': [1, 1],
    '2025-1-0': [1, 1],
    '2025-2-0': [2, 1],
    '2025-2-1': [3, 1],
    '2025-3-0': [0, 2],
    '2024-0-0': [3, 0],
    '2024-1-0': [0, 1],
    '2023-0-0': [2, 0],
    '2022-0-0': [0, 0],
    '2022-0-1': [0, 0],
    '2022-1-0': [1, 0]
  };
  const applyDetailPhoto = (id) => {
    const detail = document.querySelector('.palmares-page .detail-image');
    const coords = spriteMap[id];
    if (!detail || !coords) return;
    detail.style.setProperty('--mx', coords[0]);
    detail.style.setProperty('--my', coords[1]);
  };
  const init = () => {
    if (!document.querySelector('.palmares-page')) return;
    applyDetailPhoto('2026-0-0');
    document.querySelectorAll('.timeline-event,.medal-card').forEach((control) => {
      control.addEventListener('click', () => applyDetailPhoto(control.dataset.medalId));
    });
  };
  document.addEventListener('DOMContentLoaded', init, { once: true });
  document.addEventListener('astro:page-load', init);
})();