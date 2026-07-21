let theme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

function applyTheme() {
  if (theme === "light") {
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("light");
  }
  localStorage.setItem("theme", theme);
  const isDark = theme === "dark";
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");
  const sunIconM = document.getElementById("sunIconM");
  const moonIconM = document.getElementById("moonIconM");
  if (sunIcon) sunIcon.style.display = isDark ? "" : "none";
  if (moonIcon) moonIcon.style.display = isDark ? "none" : "";
  if (sunIconM) sunIconM.style.display = isDark ? "" : "none";
  if (moonIconM) moonIconM.style.display = isDark ? "none" : "";
}

function toggleTheme() {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme();
}

applyTheme();

function initUI() {
  const themeToggle = document.getElementById("themeToggle");
  const mobileTheme = document.getElementById("mobileTheme");

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (mobileTheme) mobileTheme.addEventListener("click", toggleTheme);

  const mobileNav = document.getElementById("mobileNav");
  const menuToggle = document.getElementById("menuToggle");
  const menuOpen = document.getElementById("menuOpen");
  const menuClose = document.getElementById("menuClose");
  let menuIsOpen = false;

  function closeMobileMenu() {
    menuIsOpen = false;
    if (mobileNav) mobileNav.classList.remove("open");
    if (menuOpen) menuOpen.style.display = "";
    if (menuClose) menuClose.style.display = "none";
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menuIsOpen = !menuIsOpen;
      if (mobileNav) mobileNav.classList.toggle("open", menuIsOpen);
      if (menuOpen) menuOpen.style.display = menuIsOpen ? "none" : "";
      if (menuClose) menuClose.style.display = menuIsOpen ? "" : "none";
    });
  }

  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }
}

function initScroll() {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener(
      "scroll",
      () => {
        navbar.classList.toggle("scrolled", window.scrollY > 20);
      },
      { passive: true }
    );
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initUI(); initScroll(); });
} else {
  initUI();
  initScroll();
}

document.addEventListener("astro:page-load", () => { initUI(); });
