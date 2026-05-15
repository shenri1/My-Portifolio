const translations = {
  en: {
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.status": "Active System",
    "hero.subtitle":
      "Full-stack developer focused on creating scalable software solutions and high-performance digital experiences.",
    "experience.work": "Experience",
    "experience.edu": "Education",
    "skills.title": "Capabilities",
    "projects.title": "Projects",
    "contact.title": "Connect",
    "contact.email": "Electronic Mail",
    "contact.resume": "Resume Archive",
    footer: "ALL RIGHTS RESERVED",
  },
  pt: {
    "nav.experience": "Experiência",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "hero.status": "Sistema Ativo",
    "hero.subtitle":
      "Desenvolvedor full-stack focado em criar soluções de software escaláveis e experiências digitais de alta performance.",
    "experience.work": "Experiência",
    "experience.edu": "Educação",
    "skills.title": "Capacidades",
    "projects.title": "Projetos",
    "contact.title": "Conectar",
    "contact.email": "Correio Eletrônico",
    "contact.resume": "Arquivo de Currículos",
    footer: "TODOS OS DIREITOS RESERVADOS",
  },
};

let lang = "en";
let theme = "dark";

function applyLang() {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.documentElement.lang = lang;
  const langLabel = document.getElementById("langLabel");
  const mobileLangLabel = document.getElementById("mobileLangLabel");
  if (langLabel) langLabel.textContent = lang.toUpperCase();
  if (mobileLangLabel) mobileLangLabel.textContent = lang.toUpperCase();
}

function applyTheme() {
  if (theme === "light") {
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("light");
  }
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

function toggleLang() {
  lang = lang === "en" ? "pt" : "en";
  applyLang();
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const mobileTheme = document.getElementById("mobileTheme");
  const langToggle = document.getElementById("langToggle");
  const mobileLang = document.getElementById("mobileLang");

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (mobileTheme) mobileTheme.addEventListener("click", toggleTheme);
  if (langToggle) langToggle.addEventListener("click", toggleLang);
  if (mobileLang) mobileLang.addEventListener("click", () => { toggleLang(); closeMobileMenu(); });

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
    window.addEventListener(
      "scroll",
      () => {
        navbar.classList.toggle("scrolled", window.scrollY > 20);
      },
      { passive: true }
    );
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  applyLang();
  applyTheme();
});
