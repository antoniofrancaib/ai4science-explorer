# AI4Science Explorer — Architecture

## Overview

An interactive web-based map of ~65 open problems in AI for Science. Users can explore problems through 4 different partition views (by domain, methodology, physical scale, or a hybrid), via a 3D interactive scatter plot, and click on individual problems to see a deep-dive academic dossier in a slide-over drawer.

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 16 + TypeScript | Static SPA with SSG, SEO-friendly |
| Styling | Tailwind CSS v4 | Utility-first light theme (Apple-like minimalism) |
| Animations | Framer Motion | Smooth view transitions, slide-over drawer |
| 3D Visualization | React Three Fiber + drei | Interactive 3D scatter plot explorer |
| Data | Static TypeScript objects | No database; all problems defined in code |
| Deployment | Vercel | Push-to-deploy from GitHub |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles, scrollbar, selection
├── components/
│   ├── QuadrantChart.tsx   # Interactive 2D scatter plot with quadrant backgrounds
│   ├── ChartModal.tsx      # Expanded chart modal overlay
│   ├── SlideOverDrawer.tsx # Right-side academic dossier drawer
│   ├── Explorer3D.tsx      # 3D scatter plot (React Three Fiber)
│   ├── Sidebar.tsx         # Left-hand navigation sidebar
│   ├── SearchBar.tsx       # Fuzzy search across all problems
│   └── Legend.tsx          # Chart reading guide
├── data/
│   ├── problems.ts         # All ~65 problems with full academic metadata
│   └── views.ts            # 4 partition view definitions
└── types/
    └── index.ts            # TypeScript interfaces (Problem, Paper, etc.)
```

## Data Model

### Problem
Each problem has:
- `id`, `name`, `shortName` — identifiers
- `x` (0–1, Overlooked → Crowded), `y` (0–1, Incremental → Transformative), `z` (0–1, Tractable → Moonshot)
- `category` — scientific domain
- `definition` — rigorous 1-2 sentence definition
- `bottleneck` — core methodological challenge
- `currentSota` — current state of the art (specific methods/models)
- `solvedState` — what the solved state would look like
- `symmetries` — relevant mathematical symmetries and inductive biases
- `benchmarks` — standard datasets and evaluation benchmarks
- `papers` — key literature (title, authors, year, link)
- `whyItMatters`, `whyItsHard` — detailed narrative text
- `tags` — for search and filtering

### Paper
Each paper has: `title`, `authors`, `year`, `link`.

### Partition Views
4 views, each containing 3–5 chart groups. Each group references a subset of the global problem set. Problems can appear in multiple groups across views.

## Key Interactions

1. **View switching** — Sidebar navigation with AnimatePresence transitions
2. **Problem hover** — Tooltip with name and quadrant label
3. **Problem click** — Slide-over drawer with full academic dossier (definition, bottleneck, SOTA vs horizon, symmetries, benchmarks, key literature)
4. **Search** — Filters across name, category, and tags with dropdown results
5. **3D Explorer** — All problems in an interactive 3D scatter plot (drag to orbit, scroll to zoom, click dots for details)
6. **Chart expand** — Click anywhere on a 2D chart to open it in a larger modal

## Adding New Problems

1. Add the problem to `src/data/problems.ts` with all required fields (including definition, bottleneck, currentSota, solvedState, symmetries, benchmarks, papers)
2. Add it to the relevant groups in `src/data/views.ts` (all 4 views)
3. The UI will automatically pick it up — no other changes needed
