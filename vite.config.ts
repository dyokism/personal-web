import { defineConfig, type Plugin } from 'vite';
import { featuredProjects, type Project } from './src/data/projects';

async function fetchStars(repo?: string, fallbackStars = 0): Promise<number> {
  if (!repo) return fallbackStars;
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        'User-Agent': 'portfolio-pre-renderer',
        Accept: 'application/vnd.github.v3+json',
      },
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      const data = (await res.json()) as { stargazers_count?: number };
      if (typeof data.stargazers_count === 'number') {
        return data.stargazers_count;
      }
    }
  } catch {
    // Fallback to static star count on timeout, network error, or rate limiting
  }
  return fallbackStars;
}

function generateProjectsHtml(projects: Project[]): string {
  return projects.map((project, index) => `
    <article class="project-card">
      ${project.image ? `
        <a href="${project.url}" target="_blank" rel="noreferrer noopener" class="project-preview" tabindex="-1" aria-hidden="true">
          <img
            src="${project.image}"
            alt="${project.imageAlt || ''}"
            width="800"
            height="400"
            loading="${index === 0 ? 'eager' : 'lazy'}"
            ${index === 0 ? 'fetchpriority="high"' : ''}
            decoding="${index === 0 ? 'sync' : 'async'}"
            class="project-preview-img ${project.imageFit || 'object-center'}"
          />
        </a>
      ` : ''}

      <div class="project-header">
        <h3 class="project-title">
          <a href="${project.url}" target="_blank" rel="noreferrer noopener" class="project-title-link">
            <span>${project.title}</span>
            <svg class="project-external-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <span class="sr-only">(opens in a new tab)</span>
          </a>
        </h3>

        ${(typeof project.stars === 'number' && project.stars > 0) ? `
          <div class="project-stars" aria-label="${project.stars} GitHub stars">
            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Star</span>
            <span class="star-divider" aria-hidden="true"></span>
            <span class="star-count">${project.stars}</span>
          </div>
        ` : ''}
      </div>

      <p class="project-desc">
        ${project.description}
      </p>

      <ul class="project-highlights">
        ${project.highlights.map(highlight => `
          <li class="project-highlight-item">
            <span class="project-bullet" aria-hidden="true">•</span>
            <span>${highlight}</span>
          </li>
        `).join('')}
      </ul>

      <div class="project-tags">
        ${project.tags.map(tag => `
          <span class="project-tag">
            <img src="${tag.icon}" class="tag-icon" width="14" height="14" loading="lazy" alt="" aria-hidden="true">
            <span>${tag.name}</span>
          </span>
        `).join('')}
      </div>
    </article>
  `).join('');
}

function prerenderProjects(isBuild: boolean): Plugin {
  return {
    name: 'prerender-projects',
    transformIndexHtml: {
      order: 'pre',
      async handler(html) {
        const projectsWithStars = await Promise.all(
          featuredProjects.map(async (project) => {
            const stars = isBuild
              ? await fetchStars(project.repo, project.stars ?? 0)
              : (project.stars ?? 0);
            return { ...project, stars };
          })
        );
        const projectsHtml = generateProjectsHtml(projectsWithStars);
        return html.replace(
          /<div id="projects-list"([^>]*)><\/div>/,
          `<div id="projects-list"$1>${projectsHtml}</div>`
        );
      },
    },
  };
}

export default defineConfig(({ command }) => ({
  plugins: [
    prerenderProjects(command === 'build'),
  ],
}));
