import './styles/main.css';
import { initScrollObserver } from './scripts/scroll-observer';

initScrollObserver();

const emailBtn = document.getElementById('email-btn') as HTMLAnchorElement | null;
if (emailBtn?.dataset.user && emailBtn?.dataset.domain) {
  emailBtn.href = `mailto:${emailBtn.dataset.user}@${emailBtn.dataset.domain}`;
}
