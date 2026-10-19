// Maintains a lerp animation loop for fluid background spotlight movement and updates card border coordinates on hover.
export function initSpotlight(): void {
  const isTouchDevice = window.matchMedia('(hover: none) or (pointer: coarse)').matches;
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isTouchDevice || !hasFinePointer || prefersReducedMotion) return;

  const spotlight = document.getElementById('spotlight');
  if (!spotlight) return;

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let isRunning = false;
  let animationFrameId: number | null = null;

  function cancelLoop(): void {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    isRunning = false;
  }

  const touchMedia = window.matchMedia('(hover: none) or (pointer: coarse)');
  const handlePointerChange = (e: MediaQueryListEvent) => {
    if (e.matches) {
      cancelLoop();
      window.removeEventListener('mousemove', updateTarget);
      document.removeEventListener('mousemove', handleCardHover);
      if (spotlight) spotlight.style.display = 'none';
    }
  };

  if (touchMedia.addEventListener) {
    touchMedia.addEventListener('change', handlePointerChange);
  }

  function updateTarget(e: MouseEvent): void {
    if (touchMedia.matches) {
      cancelLoop();
      return;
    }
    targetX = e.clientX;
    targetY = e.clientY;
    if (!isRunning) {
      isRunning = true;
      animationFrameId = requestAnimationFrame(render);
    }
  }

  function handleCardHover(e: MouseEvent): void {
    if (touchMedia.matches) return;
    const target = e.target as HTMLElement | null;
    const card = target?.closest<HTMLElement>('.spotlight-card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty('--card-mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--card-mouse-y', `${e.clientY - rect.top}px`);
  }

  window.addEventListener('mousemove', updateTarget, { passive: true });
  document.addEventListener('mousemove', handleCardHover, { passive: true });

  function render(): void {
    if (touchMedia.matches) {
      cancelLoop();
      return;
    }

    const dx = targetX - currentX;
    const dy = targetY - currentY;

    currentX += dx * 0.08;
    currentY += dy * 0.08;

    spotlight?.style.setProperty('--mouse-x', `${currentX.toFixed(2)}px`);
    spotlight?.style.setProperty('--mouse-y', `${currentY.toFixed(2)}px`);

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      isRunning = false;
      animationFrameId = null;
    }
  }
}
