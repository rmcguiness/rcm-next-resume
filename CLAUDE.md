# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page personal resume website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. All resume content is hardcoded in `app/page.tsx` — there are no data files, APIs, or database.

## Commands

| Command | Purpose |
|---------|---------|
| `bun dev` | Start dev server on localhost:3000 |
| `bun run build` | Production build |
| `bun start` | Start production server |
| `bun run lint` | Run ESLint (Next.js core-web-vitals + TypeScript rules) |

Package manager is **Bun** — do not use npm/yarn.

## Architecture

- **App Router** with a single route (`app/page.tsx`, ~440 lines, `'use client'`)
- **No component extraction** — the entire resume is one component with 8 sections: Hero, Summary, Skills, Experience, Projects, Education, Interests, Footer
- **Framer Motion** for scroll-triggered animations (`fadeInUp`, `stagger` variants with `whileInView`)
- **Lucide React** for icons
- **Tailwind CSS v4** via PostCSS (no tailwind.config file — uses v4 CSS-first config in `globals.css`)
- Path alias: `@/*` maps to project root

## Styling

Tailwind utility classes with responsive breakpoints (`md:`, `lg:`). Color palette uses slate/blue/green/purple/orange. Custom `.bg-grid-slate-100` class defined in `globals.css`.

## Deployment

Targets Vercel (no `vercel.json` — uses defaults). No environment variables.
