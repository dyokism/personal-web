export interface Tag {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  url: string;
  repo?: string;
  stars?: number;
  image?: string;
  imageAlt?: string;
  imageFit?: 'object-top' | 'object-center';
  description: string;
  highlights: string[];
  tags: Tag[];
}

export const featuredProjects: Project[] = [
  {
    id: 'bayubagusbakery',
    title: 'Bayu Bagus Bakery Web App',
    url: 'https://github.com/dyokism/PTBayuBagusBakery',
    repo: 'dyokism/PTBayuBagusBakery',
    stars: 0,
    image: '/projects/bayubagusbakery.webp',
    imageAlt: 'Preview screenshot of PT Bayu Bagus Bakery B2B web application portal',
    imageFit: 'object-top',
    description: 'B2B ordering portal built to digitize daily wholesale operations for a regional bakery in Nganjuk, East Java. Includes automated order calculation and Google Maps local indexing.',
    highlights: [
      'Interactive supply order calculator and native modal dialogs for a 14-item wholesale catalog.',
      'Optimized with JSON-LD schema markup and WebP assets for local search indexing.'
    ],
    tags: [
      { name: 'Vanilla JS', icon: '/icons/javascript.svg' },
      { name: 'HTML5', icon: '/icons/html5.svg' },
      { name: 'CSS3', icon: '/icons/css.svg' },
      { name: 'Vite', icon: '/icons/vite.svg' }
    ]
  },
  {
    id: 'skiavk',
    title: 'SkiaVK',
    url: 'https://github.com/dyokism/SkiaVK',
    repo: 'dyokism/SkiaVK',
    stars: 13,
    image: '/projects/skiavk.webp',
    imageAlt: 'Preview banner of SkiaVK Vulkan HWUI renderer Android root module',
    imageFit: 'object-center',
    description: 'Android root module configuring system UI hardware rendering from OpenGL to the Vulkan pipeline.',
    highlights: [
      'Configured Vulkan HWUI rendering to improve frame pacing and render latency.',
      'Implemented a 3-strike bootloop fallback that automatically disables the module upon boot failure.'
    ],
    tags: [
      { name: 'POSIX Bash', icon: '/icons/gnubash.svg' },
      { name: 'Vulkan HWUI', icon: '/icons/vulkan.svg' },
      { name: 'Android Root', icon: '/icons/android.svg' }
    ]
  },
  {
    id: 'dexforge',
    title: 'DexForge',
    url: 'https://github.com/dyokism/DexForge',
    repo: 'dyokism/DexForge',
    stars: 9,
    image: '/projects/dexforge.webp',
    imageAlt: 'Preview banner of DexForge Android DEX/ART compilation optimizer module',
    imageFit: 'object-center',
    description: 'Android compilation optimizer daemon automating Dalvik/ART ahead-of-time compilation profiles based on hardware specs, thermal thresholds, and battery state.',
    highlights: [
      'Profile-guided compilation heuristics adapted to device RAM and processor specs.',
      'Safety guards pausing background optimization when storage drops below 512MB or battery falls below 15%.',
      'Hardware volume-key recovery boot menu to clear dexopt caches and restore defaults.'
    ],
    tags: [
      { name: 'POSIX Bash', icon: '/icons/gnubash.svg' },
      { name: 'Android ART', icon: '/icons/android.svg' },
      { name: 'Android Root', icon: '/icons/android.svg' }
    ]
  }
];
