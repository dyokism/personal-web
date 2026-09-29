// Tracks active sections via IntersectionObserver and guarantees reliable activation of the bottom section (#contact) on scroll.
export function initScrollObserver(): void {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-link[href^="#"]'));

  if (sections.length === 0 || navLinks.length === 0) return;

  function setActive(targetHash: string): void {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === targetHash;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  let isTicking = false;

  function checkScrollBoundaries(): boolean {
    const scrollBottom = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    // Viewport reached or nearly reached the bottom of the page
    if (scrollBottom >= documentHeight - 60) {
      const lastSection = sections[sections.length - 1];
      if (lastSection) {
        setActive(`#${lastSection.id}`);
        return true;
      }
    }

    // Viewport is at the very top of the page
    if (window.scrollY < 80) {
      const firstSection = sections[0];
      if (firstSection) {
        setActive(`#${firstSection.id}`);
        return true;
      }
    }

    return false;
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    // If we are at the bottom or top boundary, don't let intermediate observer events flicker
    if (checkScrollBoundaries()) return;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(`#${entry.target.id}`);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  const handleScrollOrResize = () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        checkScrollBoundaries();
        isTicking = false;
      });
      isTicking = true;
    }
  };

  window.addEventListener('scroll', handleScrollOrResize, { passive: true });
  window.addEventListener('resize', handleScrollOrResize, { passive: true });
}
