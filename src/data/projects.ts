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
    title: "Bayu Bagus Bakery",
    url: "https://github.com/dyokism/PTBayuBagusBakery",
    repo: "dyokism/PTBayuBagusBakery",
    stars: 0,
    image: "/projects/bayubagusbakery.webp",
    imageAlt: "Preview of PT Bayu Bagus Bakery official company profile and wholesale website",
    imageFit: "object-top",
    description: "Company website and wholesale ordering catalog for my father's commercial bakery in Nganjuk, operating since 1995. Built mobile-first so regional wholesale clients and grocery accounts can quickly check products and place orders.",
    highlights: [
      "Designed for mobile viewports with lightweight vanilla code, ensuring fast load times on spotty cell connections.",
      "Displayed BPOM and Halal certifications alongside one-tap WhatsApp ordering for wholesale accounts."
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
    description: "An Android root module that switches system UI rendering (HWUI) from OpenGL ES to Vulkan on supported Adreno GPUs to reduce UI frame drops.",
    highlights: [
      "Tunes compositor properties to render window transitions and surface animations via Vulkan pipelines.",
      "Includes a three-strike bootloop guard that disables the module automatically if the device fails to boot."
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
    description: "A POSIX shell utility that automates Android ART ahead-of-time (AOT) compilation based on device RAM and thermal headroom, replacing long manual Termux commands.",
    highlights: [
      "Selects compilation filters dynamically according to available system memory tiers.",
      "Safety checks pause execution if storage drops below 512MB or battery falls under 15%.",
      "Includes a volume-key menu during boot to clear cache and roll back changes."
    ],
    tags: [
      { name: "POSIX Bash", icon: "/icons/gnubash.svg" },
      { name: "Android ART", icon: "/icons/android.svg" },
      { name: "Android Root", icon: "/icons/android.svg" }
    ]
  }
];
