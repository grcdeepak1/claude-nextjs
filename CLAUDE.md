# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

No test framework is currently configured.

## Architecture

This is a Next.js 16 app ("LearnApp") using the App Router, React 19, TypeScript (strict mode), and Tailwind CSS v4.

**Path alias:** `@/*` maps to `./src/*`

### Key directories

- `src/app/` - Pages and API routes (App Router)
- `src/components/` - Client components (`"use client"`)
- `src/lib/` - Shared types (`types.ts`) and in-memory data store (`store.ts`)

### Data flow patterns

- **Tasks:** Server-side in-memory store (`src/lib/store.ts`) exposed via REST API routes at `/api/tasks`. Task CRUD goes through `fetch()` calls to these endpoints. Data resets on server restart.
- **Notes:** Client-side only, persisted to `localStorage`. No API routes.
- **Theme:** Dark mode via `document.documentElement.classList` toggle, persisted to `localStorage`, with `prefers-color-scheme` fallback.

### API routes

- `GET/POST /api/tasks` - List and create tasks
- `GET/PUT/DELETE /api/tasks/[id]` - Single task operations

### Data models (src/lib/types.ts)

- `Task`: id, title, description, status (`"todo" | "in-progress" | "done"`), priority (`"low" | "medium" | "high"`), createdAt
- `Note`: id, title, content, updatedAt

## Conventions

- When creating new page components, always add a link to the page in the header/navigation.
