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
    description: "A B2B web application and supply estimator built for my father's bakery business in Nganjuk, East Java. He wasn't tech-savvy, so I built the web portal, configured the product catalog, and set up Google Maps indexing to digitize his daily wholesale operations.",
    highlights: [
      "Features an interactive B2B supply order calculator, 14 BPOM-certified items, and native modal dialogs.",
      "Built with Vanilla JS and HTML5, optimized with JSON-LD schema markup and WebP assets for search visibility."
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
    description: "An Android root module built to simplify Vulkan UI rendering. Most existing scripts were clunky or ADB-only, so I created a module to switch system UI rendering from OpenGL to Vulkan safely.",
    highlights: [
      "Forces Vulkan HWUI rendering for smoother UI animations across Android.",
      "Includes an automatic bootloop guard that disables the module if the device fails to boot three times."
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
    description: "An Android compilation optimizer created to save users from typing long shell commands in Termux. It automates Dalvik ART compilation customized to the device's RAM capacity and hardware specs.",
    highlights: [
      "Applies compilation profiles (speed, speed-profile, verify) matching entry-level, mid-range, or flagship specs.",
      "Safety checks pause optimization if free storage drops below 512MB or battery falls below 15%.",
      "Features a volume-key boot menu to purge cache or reset settings without needing a PC."
    ],
    tags: [
      { name: "POSIX Bash", icon: "/icons/gnubash.svg" },
      { name: "Android ART", icon: "/icons/android.svg" },
      { name: "Android Root", icon: "/icons/android.svg" }
    ]
  }
];
