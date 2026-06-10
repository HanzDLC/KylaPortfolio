# Kyla Marie M. Casimero — Portfolio

A portfolio website for **Kyla Marie M. Casimero**, Biology undergraduate researcher
at Iloilo Science and Technology University. Built with Next.js + Tailwind CSS,
fully responsive, and ready to deploy on Vercel.

- **Home** (`/`) — hero + a short "About Me" summary
- **Projects** (`/projects`) — filterable research & presentations grid (ready for photos)
- **CV** (`/cv`) — an Oxford-style paper CV with the personal info centered

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, static export-friendly)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) icons + custom microbiology SVG art
- Fonts: Fraunces (display serif) + Inter (UI), self-hosted via `next/font`

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## ✏️ Editing content

**Almost all text lives in one file: [`lib/content.ts`](lib/content.ts).**
Edit it there and every page updates automatically — name, tagline, About summary,
projects, and the full CV (education, experience, skills, awards, certifications).

> The CV content is transcribed **verbatim** from Kyla's source CV. Scientific
> names (e.g. *Escherichia coli*) are italicized automatically — to add more,
> edit the `SPECIES` list in [`components/Sci.tsx`](components/Sci.tsx).

## 🖼️ Adding images & the CV PDF

| What | How |
|------|-----|
| **CV PDF download** | Export the Canva CV as PDF, name it `Kyla-Marie-Casimero-CV.pdf`, and drop it in `public/`. The "Download CV / PDF" buttons link to it. |
| **Project photos** | Put images in `public/projects/`, then set `image: "/projects/your-file.jpg"` on that project in `lib/content.ts`. The card shows the photo instead of the illustration. |
| **Hero portrait** | Drop a photo in `public/` (e.g. `kyla.jpg`) and set `heroPhoto: "/kyla.jpg"` in the `site` object in `lib/content.ts`. |

## 🚀 Deploy to Vercel

1. Push this repo to GitHub (already wired to `HanzDLC/KylaPortfolio`).
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repo.
3. Vercel auto-detects Next.js — no configuration or environment variables needed.
4. Click **Deploy**. Done.

Every push to `main` redeploys automatically.

## 🎨 Color palette

| Token | Hex | Use |
|-------|-----|-----|
| Cream | `#F5EFE7` | Page background |
| Slate | `#3E5879` | Headings, accents, buttons |
| Sky | `#D9EAFD` | Light accents, chips |
| Sand | `#D8C4B6` | Warm accents, motifs |
| Navy | `#1B2A4A` | Text, dark sections, footer |

Tokens are defined in [`app/globals.css`](app/globals.css) under `@theme`.

## Accessibility & UX

Designed against the **ui-ux-pro-max** design-system guidance: SVG icons (no emoji),
4.5:1 text contrast, visible keyboard focus rings, `prefers-reduced-motion` support
(all animations disable), responsive at 375 / 768 / 1024 / 1440px, and a mobile
hamburger nav.
