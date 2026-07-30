# 🪨 Dyokism Portfolio

A dark-themed personal portfolio showcasing software projects, technical skills, and system tools.

---

## Design & Visuals

- **Dark Theme**: A deep dark color palette (#09090b background with zinc text accents) chosen to keep visual distraction low and make content easy to read.
- **Mouse Spotlight**: A subtle radial light effect that follows mouse movement around the page.
- **Typography**: Uses Outfit for body text and main headings, combined with JetBrains Mono for code snippets and technical tags.
- **Responsive Layout**: A two-column structure on desktop screens, featuring a fixed navigation header on the left and a scrollable content area on the right.

---

## Web Quality & Lighthouse Audits

The website is audited using Google Lighthouse on production preview builds to ensure high quality standards across both desktop and mobile devices:

| Category | Mobile Score | Desktop Score | Target Standard |
|---|---|---|---|
| Performance | 97 / 100 | 100 / 100 | Fast page loading and zero cumulative layout shifts |
| Accessibility | 100 / 100 | 100 / 100 | Full WCAG compliance, high contrast, and keyboard focus |
| Best Practices | 96 / 100 | 96 / 100 | Clean event handling and secure resource loading |
| SEO | 100 / 100 | 100 / 100 | Canonical links, OpenGraph metadata, and JSON-LD schema |

---

## Tech Stack & Features

- **Core Technologies**: Built with Vanilla JavaScript (ES Modules), HTML5, and CSS3 without heavy UI framework dependencies.
- **Build Tooling**: Uses Vite and Tailwind CSS v4 for efficient local development and production builds.
- **Dynamic Content**: Project information is stored in a single data file (`src/data/projects.js`) and rendered dynamically onto the page.
- **Accessibility**: Includes a keyboard skip link, visible focus outlines for navigation, and standard color contrast ratios for better readability.

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## License

This project is licensed under the [MIT License](LICENSE).
