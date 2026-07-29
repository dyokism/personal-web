// Throttle DOM style updates via requestAnimationFrame to avoid main-thread layout thrashing during rapid mouse movement.
export function initSpotlight() {
  const spotlight = document.getElementById('spotlight');

  if (!spotlight) return;

  let mouseX = 0;
  let mouseY = 0;
  let ticking = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        spotlight.style.setProperty('--mouse-x', `${mouseX}px`);
        spotlight.style.setProperty('--mouse-y', `${mouseY}px`);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}
