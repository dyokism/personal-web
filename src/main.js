import './styles/main.css';
import { initSpotlight } from './scripts/spotlight.js';
import { initScrollObserver } from './scripts/scroll-observer.js';
import { renderProjects } from './scripts/projects-renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initSpotlight();
  initScrollObserver();
});
