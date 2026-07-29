// Focus section detection on upper-middle viewport region to maintain accurate active state during long scrolls.
export function initScrollObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}
