<div align="center">
  <h1>Dyokism Portfolio</h1>
  <p><em>Lightweight personal developer portfolio with build-time HTML pre-rendering.</em></p>

  <p>
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white" alt="Vite">
    <img src="https://img.shields.io/badge/Bun-1.x-FBF0DF?logo=bun&logoColor=black" alt="Bun">
    <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">
  </p>

  <p>
    <a href="#features">Features</a> • <a href="#installation">Installation</a> • <a href="#usage">Usage</a>
  </p>
</div>

A lightweight developer portfolio for Dyokism (Dio Khomeini) built with HTML, Tailwind CSS, TypeScript, and Vite. Project cards and live GitHub star counts are pre-rendered into static HTML during build, eliminating layout shift and third-party API rate limits in production.

## Features
- **Build-Time Pre-rendering** - Project cards and live GitHub star counts are baked into static HTML during build for instant loading and zero layout shift.
- **Strict TypeScript Architecture** - Full type safety across project schemas, DOM observers, spotlight animation routines, and Vite build hooks.
- **Mobile-First Layout** - Responsive in-page jump navigation for mobile and tablet, stretched card click surfaces, and high-contrast OLED-friendly surfaces.
- **Fine-Pointer Spotlight** - Subtle cursor-tracking spotlight restricted to desktop fine pointers, with automatic GPU shutdown on touch devices and reduced-motion compliance.
- **Production Security Headers** - Strict Content-Security-Policy, HSTS, frame denial, and nosniff policies configured for Vercel deployment.

## Installation
```bash
# Clone the repository
git clone https://github.com/dyokism/portfolio.git
cd portfolio

# Install dependencies via Bun
bun install
```

## Usage
```bash
# Start local dev server (http://localhost:5173/)
bun run dev

# Run TypeScript compiler check
bun run typecheck

# Build production bundle with pre-rendering
bun run build

# Preview production build locally (http://localhost:4173/)
bun run preview
```
