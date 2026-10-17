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
  imageFit?: string;
  description: string;
  highlights: string[];
  tags: Tag[];
}

export const featuredProjects: Project[] = [
  {
    id: "bayubagusbakery",
    title: "Bayu Bagus Bakery Profile",
    url: "https://github.com/dyokism/PTBayuBagusBakery",
    repo: "dyokism/PTBayuBagusBakery",
    stars: 0,
    image: "/projects/bayubagusbakery.webp",
    imageAlt: "Preview of PT Bayu Bagus Bakery official company profile and wholesale website",
    imageFit: "object-top",
    description: "I built the official company website and wholesale hub for a commercial bakery in Nganjuk that has operated since 1995. I used a clean ledger-style layout with double borders instead of SaaS cards to present their facility video, certifications, and wholesale catalog.",
    highlights: [
      "Implemented a lazy-loaded production video tour and detailed wholesale specifications for items like Roti Sisir and Pia.",
      "Surfaced BPOM and Halal certifications alongside direct WhatsApp ordering links for grocery and event accounts."
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
