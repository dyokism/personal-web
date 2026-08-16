/**
 * @typedef {Object} Tag
 * @property {string} name
 * @property {string} icon
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} url
 * @property {string} [repo]
 * @property {number} [stars]
 * @property {string} [image]
 * @property {string} [imageAlt]
 * @property {string} [imageFit]
 * @property {string} description
 * @property {string[]} highlights
 * @property {Tag[]} tags
 */

/** @type {Project[]} */
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
    description: "I built a B2B web application to digitize daily wholesale operations for a bakery in Nganjuk, East Java. I also configured their product catalog and set up Google Maps indexing.",
    highlights: [
      "Implemented an interactive supply order calculator and native modal dialogs for a catalog of 14 items.",
      "Optimized the site with JSON-LD schema markup and WebP assets for search visibility."
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
    description: "I built an Android root module to safely switch system UI rendering from OpenGL to Vulkan.",
    highlights: [
      "Configured Vulkan HWUI rendering to make Android UI animations smoother.",
      "Implemented an automatic bootloop guard that disables the module after three failed boot attempts."
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
    description: "I created an Android compilation optimizer to automate Dalvik ART compilation based on the device's RAM and hardware specs, replacing long Termux shell commands.",
    highlights: [
      "Wrote logic to apply compilation profiles that match the device's hardware specs.",
      "Added safety checks to pause optimization if storage drops below 512MB or battery falls below 15%.",
      "Implemented a volume-key boot menu to clear cache and reset settings."
    ],
    tags: [
      { name: "POSIX Bash", icon: "/icons/gnubash.svg" },
      { name: "Android ART", icon: "/icons/android.svg" },
      { name: "Android Root", icon: "/icons/android.svg" }
    ]
  }
];
