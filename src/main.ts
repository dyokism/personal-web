import './styles/main.css';
import { initSpotlight } from './scripts/spotlight';
import { initScrollObserver } from './scripts/scroll-observer';

initSpotlight();
initScrollObserver();

const emailBtn = document.getElementById('email-btn') as HTMLAnchorElement | null;
if (emailBtn?.dataset.user && emailBtn?.dataset.domain) {
  emailBtn.href = `mailto:${emailBtn.dataset.user}@${emailBtn.dataset.domain}`;
}
