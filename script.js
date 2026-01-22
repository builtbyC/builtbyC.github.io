document.getElementById("year").textContent = new Date().getFullYear();

// Light mode later: already supported via CSS variables.
// This toggle is optional; keep it or delete it.
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  const root = document.documentElement;

  // load saved theme if exists
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
    themeToggle.querySelector(".theme-label").textContent = saved === "light" ? "Light" : "Dark";
  }

  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeToggle.querySelector(".theme-label").textContent = next === "light" ? "Light" : "Dark";
  });
}
