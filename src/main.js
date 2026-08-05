import './styles/main.css';
import { initSpotlight } from './scripts/spotlight.js';
import { initScrollObserver } from './scripts/scroll-observer.js';
import { renderProjects } from './scripts/projects-renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initSpotlight();
  initScrollObserver();

  const emailBtn = document.getElementById('email-btn');
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const user = emailBtn.dataset.user;
      const domain = emailBtn.dataset.domain;
      if (user && domain) {
        window.location.href = `mailto:${user}@${domain}`;
      }
    });
  }
});
