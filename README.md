<div align="center">

<img alt="Sliyp Website" src=".github/banner.svg" width="100%">

First version of the SliYP website as a Next.js Pages Router app, with a shared layout and header across components, pages and styles.

<br>

[![Next.js](https://img.shields.io/badge/Next.js-13.2-0B3D6B?style=for-the-badge&labelColor=08263F)](https://nextjs.org) [![React](https://img.shields.io/badge/React-18.2-1565A0?style=for-the-badge&labelColor=08263F)](https://react.dev) [![TypeScript](https://img.shields.io/badge/TypeScript-5.3-0EA5E9?style=for-the-badge&labelColor=08263F)](https://www.typescriptlang.org) [![Tailwind](https://img.shields.io/badge/Tailwind-3.3-0B3D6B?style=for-the-badge&labelColor=08263F)](https://tailwindcss.com)

![language](https://img.shields.io/badge/language-TypeScript-1565A0?style=flat-square&labelColor=08263F) ![updated](https://img.shields.io/badge/updated-2026--11--04-0B3D6B?style=flat-square&labelColor=08263F)

</div>

---

## What this is

Version 1.0 of the SliYP website, built as a Next.js Pages Router application (`sliyp_website` in package.json) with a shared `Layout` wrapper in `_app.tsx` and a `Header` component. Later superseded by the hand-written SCSS site.

The code is laid out as:

- `components/` — UI components
- `public/` — static assets
- `pages/` — pages
- `styles/` — stylesheets

<div align="center">

|  |  |  |
|:--:|:--:|:--:|
| **2** | **7** | **1** |
| pages | components | docs |

</div>

---

## Architecture

```mermaid
flowchart TB
    U["Browser"]
    P["Pages · 1"]
    U --> P
```

<sub>Derived from the directories present in this repository.</sub>

---

## Surfaces

**Routes** (1)

|  |  |  |
|---|---|---|
| `/index` |  |  |

---

## Stack

| Layer | Choice |
|---|---|
| [Next.js](https://nextjs.org) | v13.2 |
| [React](https://react.dev) | v18.2 |
| [TypeScript](https://www.typescriptlang.org) | v5.3 |
| [Tailwind](https://tailwindcss.com) | v3.3 |

---

## Getting started

```bash
git clone https://github.com/gowtham-creator/SLiYP-version-1.0.git
cd SLiYP-version-1.0
npm install
npm run dev
```

### Scripts

| Command | Runs |
|---|---|
| `npm run dev` | `next dev` |
| `npm run start` | `next start` |
| `npm run build` | `next build` |
| `npm run lint` | `next lint` |

---

## Project structure

| Path | Contents | Files |
|---|---|---|
| `components/` | UI components | 7 |
| `public/` | static assets | 4 |
| `pages/` | pages | 2 |
| `styles/` | stylesheets | 1 |

<sub>22 tracked files in total.</sub>

---

<div align="center">
<sub><a href="https://github.com/gowtham-creator/SLiYP-version-1.0">gowtham-creator/SLiYP-version-1.0</a></sub>
</div>
