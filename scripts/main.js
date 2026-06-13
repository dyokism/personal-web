(() => {
  /* ---------- year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- theme toggle ---------- */
  const STORAGE_KEY = "dyok-theme";
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  const ICONS = {
    system: toggle && toggle.querySelector(".theme-icon-system"),
    light: toggle && toggle.querySelector(".theme-icon-sun"),
    dark: toggle && toggle.querySelector(".theme-icon-moon"),
  };

  const cycle = ["system", "light", "dark"];
  const titles = { system: "Theme: system", light: "Theme: light", dark: "Theme: dark" };

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }

    if (toggle) {
      toggle.setAttribute("title", titles[theme]);
      toggle.setAttribute(
        "aria-label",
        `Cycle theme. Current: ${theme}. Click to switch.`
      );
      for (const key of cycle) {
        if (ICONS[key]) ICONS[key].style.display = key === theme ? "" : "none";
      }
    }
  }

  let current = "system";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark" || saved === "system") {
      current = saved;
    }
  } catch (_) {}

  applyTheme(current);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const idx = cycle.indexOf(current);
      current = cycle[(idx + 1) % cycle.length];
      try {
        localStorage.setItem(STORAGE_KEY, current);
      } catch (_) {}
      applyTheme(current);
    });
  }

  /* ---------- parallax on halftone ---------- */
  function initParallax() {
    const grain = document.querySelector(".bg-grain");
    if (!grain) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = null;
    let idleTimer = null;
    let targetX = 0;
    let targetY = 0;
    const RANGE = 12;

    function applyTransform(x, y) {
      grain.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }

    function onMove(e) {
      clearTimeout(idleTimer);
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = ((e.clientX - cx) / cx) * RANGE;
      targetY = ((e.clientY - cy) / cy) * RANGE;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = null;
          applyTransform(targetX, targetY);
        });
      }

      idleTimer = setTimeout(() => {
        targetX = 0;
        targetY = 0;
        applyTransform(0, 0);
      }, 2000);
    }

    document.addEventListener("mousemove", onMove, { passive: true });
  }

  initParallax();

  /* ---------- enter overlay + background audio ---------- */
  /* repo data — single source of truth for the shelf section */
  const REPOS = [
    {
      name: "SkiaVK",
      desc: "forces skia vulkan ui rendering on android",
      url: "https://github.com/dyokism/SkiaVK",
      color: "#2c5cff",
    },
    {
      name: "DexForge",
      desc: "smart art/dalvik cache optimization module",
      url: "https://github.com/dyokism/DexForge",
      color: "#6b8cff",
    },
    {
      name: "s23-tweaks",
      desc: "safe sd8g2 performance tweaks for the galaxy s23, with logging",
      url: "https://github.com/dyokism/S23-Tweaks",
      color: "#1a3fd4",
    },
  ];

  function initEnterOverlay() {
    const overlay = document.getElementById("enter-overlay");
    const audio = document.getElementById("bg-audio");
    const audioToggle = document.getElementById("audio-toggle");
    if (!overlay || !audio) return;

    const ENTERED_KEY = "dyok-entered";

    let hasEnteredBefore = false;
    try {
      hasEnteredBefore = localStorage.getItem(ENTERED_KEY) === "1";
    } catch (_) {}

    let played = false;
    function firstPlay() {
      if (played) return;
      played = true;
      audio.play().catch((err) => console.warn("audio play blocked:", err));
      if (audioToggle) audioToggle.hidden = false;
    }

    if (hasEnteredBefore) {
      // Returning visitor: no overlay, no blur, but arm a one-shot
      // first-click-anywhere listener to satisfy the browser's autoplay rule.
      document.body.classList.add("is-entered");
      overlay.classList.add("is-leaving");
      document.addEventListener("click", firstPlay, { once: true, capture: true });
      document.addEventListener("keydown", firstPlay, { once: true, capture: true });
      return;
    }

    // First visit: dramatic overlay, explicit click required.
    document.body.classList.add("is-entering");

    function dismissOverlay() {
      overlay.removeEventListener("click", dismissOverlay);
      overlay.removeEventListener("keydown", onKey);
      overlay.classList.add("is-leaving");
      document.body.classList.remove("is-entering");
      document.body.classList.add("is-entered");
      try {
        localStorage.setItem(ENTERED_KEY, "1");
      } catch (_) {}
      firstPlay();
    }

    function onKey(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dismissOverlay();
      }
    }

    overlay.addEventListener("click", dismissOverlay);
    overlay.addEventListener("keydown", onKey);
  }

  initEnterOverlay();

  function initAudioToggle() {
    const btn = document.getElementById("audio-toggle");
    const audio = document.getElementById("bg-audio");
    if (!btn || !audio) return;

    const MUTED_KEY = "dyok-audio-muted";
    const iconOn = btn.querySelector(".audio-icon-on");
    const iconOff = btn.querySelector(".audio-icon-off");

    let muted = false;
    try {
      muted = localStorage.getItem(MUTED_KEY) === "1";
    } catch (_) {}
    audio.muted = muted;

    function render() {
      const isMuted = audio.muted;
      if (iconOn) iconOn.style.display = isMuted ? "none" : "";
      if (iconOff) iconOff.style.display = isMuted ? "" : "none";
      btn.setAttribute("aria-label", isMuted ? "Unmute audio" : "Mute audio");
      btn.setAttribute("title", isMuted ? "Unmute" : "Mute");
    }
    render();

    function syncPlayingState() {
      const playing = !audio.paused && !audio.muted && audio.currentTime > 0;
      btn.classList.toggle("is-playing", playing);
    }

    audio.addEventListener("play", syncPlayingState);
    audio.addEventListener("pause", syncPlayingState);
    audio.addEventListener("ended", syncPlayingState);
    audio.addEventListener("volumechange", syncPlayingState);
    audio.addEventListener("seeked", syncPlayingState);
    syncPlayingState();

    btn.addEventListener("click", () => {
      audio.muted = !audio.muted;
      try {
        localStorage.setItem(MUTED_KEY, audio.muted ? "1" : "0");
      } catch (_) {}
      render();
      syncPlayingState();
    });
  }

  initAudioToggle();

  /* ---------- repo shelf ---------- */
  function initRepoShelf() {
    const root = document.getElementById("repo-list");
    if (!root) return;

    const list = Array.isArray(REPOS) ? REPOS : [];
    if (!list.length) return;

    const frag = document.createDocumentFragment();
    for (const r of list) {
      const a = document.createElement("a");
      a.className = "book";
      a.href = r.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("role", "listitem");
      a.setAttribute("aria-label", `${r.name} — ${r.desc}`);
      if (r.color) a.style.setProperty("--spine-color", r.color);
      a.innerHTML =
        '<span class="book-spine"><span class="book-spine-title">' +
        r.name +
        '</span></span><span class="book-cover">' +
        '<span class="book-cover-name">' + r.name + '</span>' +
        '<span class="book-cover-desc">' + r.desc + '</span>' +
        '<span class="book-cover-stats" data-repo="' + r.name + '">' +
        '<span class="stat stat-loading">…</span>' +
        '</span>' +
        '<span class="book-cover-cta">view on github ↗</span></span>';
      frag.appendChild(a);
    }
    root.appendChild(frag);

    fetchRepoStats();
  }

  function fetchRepoStats() {
    const STORAGE_KEY = "dyok-repo-stats";
    const TTL_MS = 60 * 60 * 1000; // 1 hour

    function parseOwner(url) {
      try {
        const m = String(url).match(/github\.com\/([^/]+)\/([^/]+)/);
        return m ? { owner: m[1], repo: m[2] } : null;
      } catch (_) {
        return null;
      }
    }

    function loadCache() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (!data || !data.ts || Date.now() - data.ts > TTL_MS) return null;
        return data;
      } catch (_) {
        return null;
      }
    }

    function saveCache(data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now(), data }));
      } catch (_) {}
    }

    function renderStats(repoName, stats) {
      const el = document.querySelector(
        '.book-cover-stats[data-repo="' + repoName + '"]'
      );
      if (!el) return;
      if (!stats) {
        el.innerHTML = '<span class="stat">—</span>';
        return;
      }
      const stars = stats.stargazers_count != null ? "★ " + stats.stargazers_count : "";
      const forks = stats.forks_count != null ? "⑂ " + stats.forks_count : "";
      const lang = stats.language ? "• " + escapeHtml(stats.language) : "";
      const parts = [stars, forks, lang].filter(Boolean);
      el.innerHTML = parts.length
        ? parts.map((p) => '<span class="stat">' + p + "</span>").join("")
        : '<span class="stat">—</span>';
    }

    function escapeHtml(s) {
      return String(s).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c]));
    }

    const cache = loadCache();
    if (cache) {
      for (const r of REPOS) {
        const key = r.name;
        renderStats(key, cache.data[key] || null);
      }
    }

    // Fetch each repo in parallel; don't block render.
    for (const r of REPOS) {
      const parsed = parseOwner(r.url);
      if (!parsed) {
        renderStats(r.name, null);
        continue;
      }
      const apiUrl =
        "https://api.github.com/repos/" + parsed.owner + "/" + parsed.repo;
      fetch(apiUrl, { headers: { Accept: "application/vnd.github+json" } })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (!data) {
            renderStats(r.name, null);
            return;
          }
          const next = Object.assign({}, cache && cache.data);
          next[r.name] = {
            stargazers_count: data.stargazers_count,
            forks_count: data.forks_count,
            language: data.language,
          };
          saveCache(next);
          // Re-render only if no cache existed (otherwise the cached render is already correct).
          if (!cache) renderStats(r.name, next[r.name]);
        })
        .catch(() => renderStats(r.name, null));
    }
  }

  initRepoShelf();

  /* ---------- title char reveal ---------- */
  function initTitleReveal() {
    const word = document.querySelector(".title-word");
    if (!word) return;
    const text = (word.textContent || "").trim();
    if (!text) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    word.textContent = "";
    const chars = Array.from(text);
    chars.forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "title-char";
      span.textContent = ch;
      span.style.animationDelay = (60 + i * 70) + "ms";
      word.appendChild(span);
    });
  }

  initTitleReveal();

  /* ---------- scroll reveal ---------- */
  function initScrollReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
  }

  initScrollReveal();

  /* ---------- typed-in lede ---------- */
  function initTypedLede() {
    const textSpan = document.querySelector(".lede-text");
    const cursorSpan = document.querySelector(".lede-cursor");
    if (!textSpan) return;

    const fullText = textSpan.textContent || "";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      textSpan.textContent = fullText;
      if (cursorSpan) cursorSpan.classList.add("done");
      return;
    }

    textSpan.textContent = "";
    let idx = 0;

    function typeChar() {
      if (idx >= fullText.length) {
        if (cursorSpan) cursorSpan.classList.add("done");
        return;
      }
      textSpan.textContent += fullText[idx++];
      const delay = 35 + Math.random() * 35;
      setTimeout(typeChar, delay);
    }

    typeChar();
  }

  initTypedLede();
})();
