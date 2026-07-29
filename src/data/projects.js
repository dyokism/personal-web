export const featuredProjects = [
  {
    id: "bayubagusbakery",
    title: "Bayu Bagus Bakery Web App",
    url: "https://github.com/dyokism/PTBayuBagusBakery",
    description: "B2B supply estimation system and bakery portal built with zero heavy UI frameworks for maximum loading speed and SEO optimization.",
    highlights: [
      "Custom B2B supply calculation calculator, 14 product catalog with BPOM certification data, and native <dialog> modals.",
      "Full SEO optimization with JSON-LD bakery schema markup and WebP assets."
    ],
    tags: [
      { name: "Vanilla JS", icon: "https://cdn.simpleicons.org/javascript/e4e4e7" },
      { name: "HTML5 / CSS3", icon: "https://cdn.simpleicons.org/html5/e4e4e7" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/e4e4e7" }
    ]
  },
  {
    id: "skiavk",
    title: "SkiaVK",
    url: "https://github.com/dyokism/SkiaVK",
    description: "Android root module that forces Skia Vulkan HWUI rendering for lower animation latency and smoother UI performance.",
    highlights: [
      "Replaces default OpenGL rendering pipeline with Vulkan (debug.hwui.renderer=skiavk) with optional RenderEngine Vulkan backend.",
      "Fail-safe atomic bootloop guard (automatically disables module after 3 failed boots) with software Vulkan emulator guard (SwiftShader/Lavapipe)."
    ],
    tags: [
      { name: "POSIX Bash", icon: "https://cdn.simpleicons.org/gnubash/e4e4e7" },
      { name: "Android HWUI & Vulkan", icon: "https://cdn.simpleicons.org/vulkan/e4e4e7" },
      { name: "KernelSU / Magisk", icon: "https://cdn.simpleicons.org/android/e4e4e7" }
    ]
  },
  {
    id: "dexforge",
    title: "DexForge",
    url: "https://github.com/dyokism/DexForge",
    description: "Hardware-aware Android DEX/ART compilation optimizer module with dynamic RAM capacity and app usage profiling.",
    highlights: [
      "Hardware-based compilation profiles (speed, speed-profile, verify) tailored dynamically for flagship, mid-range, and entry-level devices.",
      "Built-in safety checks: storage guard (<512MB free space abort), battery guard (<15% charge abort), and background CPU core affinity regulation.",
      "Interactive volume-key cache purge menu, action button reset, and CLI --dry-run test mode."
    ],
    tags: [
      { name: "POSIX Bash", icon: "https://cdn.simpleicons.org/gnubash/e4e4e7" },
      { name: "Android ART", icon: "https://cdn.simpleicons.org/android/e4e4e7" },
      { name: "KernelSU / Magisk", icon: "https://cdn.simpleicons.org/linux/e4e4e7" }
    ]
  }
];
