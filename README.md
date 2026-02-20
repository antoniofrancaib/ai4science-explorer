# AI4Science Explorer

Interactive web-based map of **~65 open problems in AI for Science** across biology, chemistry, physics, and mathematics.

Explore the landscape through **4 different partition views**, click on problems for detailed analysis, and identify the highest-upside opportunities at the intersection of overlooked and transformative.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js 16** + TypeScript — static single-page application
- **Tailwind CSS v4** — dark-themed utility-first styling
- **Framer Motion** — smooth view transitions and animations
- **Static data** — all problems defined in TypeScript, no database needed

## Features

- **4 partition views**: By Object of Study, By Methodology, By Physical Scale, Hybrid (recommended)
- **Interactive quadrant charts**: Scatter plots with Overlooked↔Crowded × Incremental↔Transformative axes
- **Problem detail modals**: Why it matters, why it's hard, startup angle
- **Search**: Filter across all problems by name, category, or tags
- **Startup shortlist**: Top 7 opportunities ranked by overlooked × transformative × defensible
- **Responsive**: Works on desktop and mobile

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com) for automatic deployments.

## Documentation

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed architecture and data model documentation.
