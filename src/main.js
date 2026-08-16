import './styles/main.css';
import { initSpotlight } from './scripts/spotlight.js';
import { initScrollObserver } from './scripts/scroll-observer.js';

initSpotlight();
initScrollObserver();

const emailBtn = document.getElementById('email-btn');
if (emailBtn?.dataset.user && emailBtn?.dataset.domain) {
  emailBtn.href = `mailto:${emailBtn.dataset.user}@${emailBtn.dataset.domain}`;
}
