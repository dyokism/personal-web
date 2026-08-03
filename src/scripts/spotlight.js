// Maintains a lerp animation loop for fluid background spotlight movement and updates card border coordinates on hover.
export function initSpotlight() {
  const spotlight = document.getElementById('spotlight');
  if (!spotlight) return;

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let isRunning = false;

  function updateTarget(e) {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(render);
    }
  }

  window.addEventListener('mousemove', updateTarget, { passive: true });

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.spotlight-card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty('--card-mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--card-mouse-y', `${e.clientY - rect.top}px`);
  }, { passive: true });

  function render() {
    const dx = targetX - currentX;
    const dy = targetY - currentY;

    currentX += dx * 0.08;
    currentY += dy * 0.08;

    spotlight.style.setProperty('--mouse-x', `${currentX.toFixed(2)}px`);
    spotlight.style.setProperty('--mouse-y', `${currentY.toFixed(2)}px`);

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      requestAnimationFrame(render);
    } else {
      isRunning = false;
    }
  }
}
