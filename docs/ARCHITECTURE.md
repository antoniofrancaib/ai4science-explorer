# AI4Science Explorer — Architecture

## Overview

An interactive web-based map of ~65 open problems in AI for Science. Users can explore problems through 4 different partition views (by domain, methodology, physical scale, or a recommended hybrid) and click on individual problems to see detailed information.

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 16 + TypeScript | Static SPA with SSG, SEO-friendly |
| Styling | Tailwind CSS v4 | Utility-first dark theme |
| Animations | Framer Motion | Smooth view transitions, dot animations |
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
│   ├── QuadrantChart.tsx   # Interactive scatter plot with quadrant backgrounds
│   ├── ProblemModal.tsx    # Detail modal for individual problems
│   ├── ViewSelector.tsx    # Tab bar to switch partition views
│   ├── SearchBar.tsx       # Fuzzy search across all problems
│   ├── Legend.tsx          # Chart reading guide
│   ├── StartupShortlist.tsx# Ranked startup opportunities
│   └── GuideSection.tsx    # How-to-use cards
├── data/
│   ├── problems.ts         # All ~65 problems with metadata
│   └── views.ts            # 4 partition view definitions
└── types/
    └── index.ts            # TypeScript interfaces
```

## Data Model

### Problem
Each problem has:
- `id`, `name`, `shortName` — identifiers
- `x` (0–1, Overlooked → Crowded), `y` (0–1, Incremental → Transformative)
- `category` — scientific domain
- `whyItMatters`, `whyItsHard`, `startupAngle` — detailed text
- `overlooked` — qualitative assessment
- `tags` — for search and filtering

### Partition Views
4 views, each containing 3–5 chart groups. Each group references a subset of the global problem set. Problems can appear in multiple groups across views.

## Key Interactions

1. **View switching** — AnimatePresence + layoutId for smooth chart transitions
2. **Problem hover** — Tooltip with name and quadrant label, pulse ring animation
3. **Problem click** — Modal with full details (why it matters, why it's hard, startup angle)
4. **Search** — Filters across name, category, and tags with dropdown results

## Adding New Problems

1. Add the problem to `src/data/problems.ts` with all required fields
2. Add it to the relevant groups in `src/data/views.ts` (all 4 views)
3. The UI will automatically pick it up — no other changes needed
