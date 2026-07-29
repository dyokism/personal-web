import { featuredProjects } from '../data/projects.js';

export function renderProjects() {
  const container = document.getElementById('projects-list');
  if (!container || container.children.length > 0) return;

  const html = featuredProjects.map(project => `
    <div class="group relative rounded-xl border border-[#27272a] bg-[#121215] p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#a1a1aa] hover:shadow-lg hover:shadow-white/5">
      <h3 class="text-base font-semibold text-[#f8fafc] group-hover:text-white transition-colors">
        <a href="${project.url}" target="_blank" rel="noreferrer noopener" class="inline-flex items-center gap-1">
          <span>${project.title}</span>
          <svg class="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
          <span class="sr-only">(opens in a new tab)</span>
        </a>
      </h3>
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
      <div class="mt-5 flex flex-wrap gap-2 font-mono text-xs">
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
}
