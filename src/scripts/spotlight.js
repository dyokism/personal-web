// Maintains a lerp animation loop for fluid background spotlight movement and updates card border coordinates on hover.
export function initSpotlight() {
  const spotlight = document.getElementById('spotlight');
  if (!spotlight) return;

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  }, { passive: true });

  // Update card border spotlight coordinates only when mouse enters/moves over a card
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.spotlight-card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty('--card-mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--card-mouse-y', `${e.clientY - rect.top}px`);
  }, { passive: true });

  // Lerp interpolation (0.08 factor) prevents harsh light snapping during fast mouse flicks
  function render() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    spotlight.style.setProperty('--mouse-x', `${currentX.toFixed(2)}px`);
    spotlight.style.setProperty('--mouse-y', `${currentY.toFixed(2)}px`);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
