import { featuredProjects } from '../data/projects.js';

export function renderProjects() {
  const container = document.getElementById('projects-list');
  if (!container || container.children.length > 0) return;

  const html = featuredProjects.map((project, index) => `
    <div class="spotlight-card group relative flex flex-col rounded-xl border border-[#27272a] bg-[#121215] p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#a1a1aa] hover:shadow-lg hover:shadow-white/5">
      ${project.image ? `
        <div class="relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-[#27272a] bg-[#18181b]">
          <img
            src="${project.image}"
            alt="${project.imageAlt || ''}"
            width="800"
            height="400"
            loading="${index === 0 ? 'eager' : 'lazy'}"
            ${index === 0 ? 'fetchpriority="high"' : ''}
            decoding="${index === 0 ? 'sync' : 'async'}"
            class="h-full w-full object-cover ${project.imageFit || 'object-center'}"
          />
        </div>
      ` : ''}

      <div class="mt-4 sm:mt-5 flex flex-wrap items-start justify-between gap-2.5 sm:items-center sm:gap-3">
        <h3 class="text-base font-semibold text-[#f8fafc] group-hover:text-white transition-colors">
          <a href="${project.url}" target="_blank" rel="noreferrer noopener" class="inline-flex items-center gap-1.5 hover:underline decoration-white/30 underline-offset-4">
            <span>${project.title}</span>
            <svg class="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <span class="sr-only">(opens in a new tab)</span>
          </a>
        </h3>

        ${project.repo ? `
          <div class="inline-flex items-center gap-1.5 rounded-lg border border-[#27272a] bg-[#18181b] px-2.5 py-1 text-xs font-medium text-[#e4e4e7] shrink-0 leading-none select-none">
            <svg class="h-3.5 w-3.5 text-amber-400 fill-amber-400 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span class="leading-none">Star</span>
            <span class="h-3 w-[1px] bg-[#3f3f46] self-center"></span>
            <span data-repo="${project.repo}" class="font-mono text-xs leading-none text-[#a1a1aa] inline-flex items-center">${project.stars ?? 0}</span>
          </div>
        ` : ''}
      </div>

      <p class="mt-3 text-xs leading-relaxed text-[#a1a1aa]">
        ${project.description}
      </p>

      <ul class="mt-4 space-y-1.5 text-xs text-[#d4d4d8]">
        ${project.highlights.map(highlight => `
          <li class="flex items-start gap-2">
            <span class="text-[#a1a1aa]">•</span>
            <span>${highlight}</span>
          </li>
        `).join('')}
      </ul>

      <div class="mt-auto pt-5 flex flex-wrap gap-2 font-mono text-xs">
        ${project.tags.map(tag => `
          <span class="inline-flex items-center gap-1.5 rounded border border-[#27272a] bg-[#18181b] px-2.5 py-1 text-[#e4e4e7]">
            <img src="${tag.icon}" class="h-3.5 w-3.5" width="14" height="14" loading="lazy" alt="" aria-hidden="true">
            <span>${tag.name}</span>
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
  fetchLiveStars(container);
}

// Concurrently fetch live stargazers count after initial render to avoid blocking main thread
function fetchLiveStars(container) {
  const schedule = window.requestIdleCallback
    ? (cb) => requestIdleCallback(cb, { timeout: 2000 })
    : (cb) => setTimeout(cb, 1000);

  schedule(() => {
    const elements = Array.from(container.querySelectorAll('[data-repo]'));
    if (elements.length === 0) return;

    elements.forEach(async (el) => {
      const repo = el.getAttribute('data-repo');
      if (!repo) return;

      try {
        const res = await fetch(`https://api.github.com/repos/${repo}`);
        if (!res.ok) return;
        const data = await res.json();
        if (typeof data.stargazers_count === 'number') {
          el.textContent = data.stargazers_count;
        }
      } catch {
        // Retain pre-rendered static star count if API request fails
      }
    });
  });
}
