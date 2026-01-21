document.addEventListener("DOMContentLoaded", () => {
  const windows = document.querySelectorAll(".retro-window");
  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  if (prefersReducedMotion) {
    windows.forEach((win) => win.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    windows.forEach((win) => observer.observe(win));
  }

  const STORAGE_KEY = "theme";
  const toggleBtn = document.getElementById("themeToggle");
  const iconEl = toggleBtn?.querySelector(".theme-toggle__icon");
  const textEl = toggleBtn?.querySelector(".theme-toggle__text");

  const systemPrefersDark = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);

    if (iconEl) iconEl.textContent = theme === "dark" ? "🌙" : "☀️";
    if (textEl) textEl.textContent = theme === "dark" ? "다크" : "라이트";
    if (toggleBtn) toggleBtn.setAttribute("aria-label", `테마 전환 (현재: ${theme})`);
  };

  const getInitialTheme = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
    return systemPrefersDark() ? "dark" : "light";
  };

  applyTheme(getInitialTheme());

  toggleBtn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  });

  const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
  mq?.addEventListener?.("change", () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return;
    applyTheme(systemPrefersDark() ? "dark" : "light");
  });
});
