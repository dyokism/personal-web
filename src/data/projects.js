export const featuredProjects = [
  {
    id: "bayubagusbakery",
    title: "Bayu Bagus Bakery Web App",
    url: "https://github.com/dyokism/PTBayuBagusBakery",
    repo: "dyokism/PTBayuBagusBakery",
    stars: 0,
    image: "/projects/bayubagusbakery.webp",
    imageAlt: "Preview screenshot of PT Bayu Bagus Bakery B2B web application portal",
    imageFit: "object-top",
    description: "B2B supply estimation system and bakery portal built with zero heavy UI frameworks for maximum loading speed and SEO optimization.",
    highlights: [
      "Custom B2B supply calculation calculator, 14 product catalog with BPOM certification data, and native HTML dialog modals.",
      "Full SEO optimization with JSON-LD bakery schema markup and WebP assets."
    ],
    tags: [
      { name: "Vanilla JS", icon: "/icons/javascript.svg" },
      { name: "HTML5", icon: "/icons/html5.svg" },
      { name: "CSS3", icon: "/icons/css.svg" },
      { name: "Vite", icon: "/icons/vite.svg" }
    ]
  },
  {
    id: "skiavk",
    title: "SkiaVK",
    url: "https://github.com/dyokism/SkiaVK",
    repo: "dyokism/SkiaVK",
    stars: 13,
    image: "/projects/skiavk.webp",
    imageAlt: "Preview banner of SkiaVK Vulkan HWUI renderer Android root module",
    imageFit: "object-center",
    description: "Android root module that forces Skia Vulkan HWUI rendering for lower animation latency and smoother UI performance.",
    highlights: [
      "Replaces OpenGL rendering pipeline with Vulkan via skiavk HWUI renderer and optional RenderEngine backend.",
      "Atomic bootloop guard (disables module after 3 failed boots) with software Vulkan emulator guard."
    ],
    tags: [
      { name: "POSIX Bash", icon: "/icons/gnubash.svg" },
      { name: "Vulkan HWUI", icon: "/icons/vulkan.svg" },
      { name: "Android Root", icon: "/icons/android.svg" }
    ]
  },
  {
    id: "dexforge",
    title: "DexForge",
    url: "https://github.com/dyokism/DexForge",
    repo: "dyokism/DexForge",
    stars: 9,
    image: "/projects/dexforge.webp",
    imageAlt: "Preview banner of DexForge Android DEX/ART compilation optimizer module",
    imageFit: "object-center",
    description: "Hardware-aware Android DEX/ART compilation optimizer module with dynamic RAM capacity and app usage profiling.",
    highlights: [
      "Dynamic compilation profiles (speed, speed-profile, verify) tailored for flagship, mid-range, and entry-level devices.",
      "Built-in safety guards for low storage (under 512MB), low battery (under 15%), and CPU core affinity regulation.",
      "Interactive volume-key cache purge menu, action button reset, and CLI dry-run test mode."
    ],
    tags: [
      { name: "POSIX Bash", icon: "/icons/gnubash.svg" },
      { name: "Android ART", icon: "/icons/android.svg" },
      { name: "Android Root", icon: "/icons/android.svg" }
    ]
  }
];
