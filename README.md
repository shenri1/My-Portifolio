# My Portfolio

Personal portfolio site built with [Astro](https://astro.build).

## Stack

- Astro (static site)
- Vanilla JS (`public/engine.js`) for theme toggle, mobile nav, and scroll-reveal animations
- Plain CSS, no framework

## Structure

```
src/
  components/   Hero, Navbar, Skills, Experience, Projects, Contact, Footer
  layouts/      Layout.astro (shared HTML shell, global styles, fonts)
  pages/        index.astro (assembles the components)
public/         static assets (images, resume PDF, favicon, engine.js)
```

## Getting started

Requires Node >= 22.12.

```bash
npm install
npm run dev       # start local dev server
npm run build     # build for production into dist/
npm run preview   # preview the production build locally
```
