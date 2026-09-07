# SOC Mitra

> Independent market intelligence, three times a day.

SOC Mitra is a one-page marketing site for a NISM-certified research and advisory practice that publishes a thrice-daily market report — delivered at 8:30 AM, 2:15 PM, and 7:00 PM IST, five days a week.

## Tech Stack

- **React 18** — functional components + hooks
- **Vite** — fast dev server and optimised builds
- **TypeScript** — full type safety
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll-triggered reveals, micro-interactions, animated counters
- **Lucide React** — icon library

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Section-level React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── StatsBar.tsx
│   ├── ReportsOverview.tsx
│   ├── ReportPreviewer.tsx    # Interactive module previewer
│   ├── Features.tsx
│   ├── Reviews.tsx
│   ├── Pricing.tsx
│   └── Footer.tsx
├── data/               # All content as typed JS objects
│   ├── stats.ts
│   ├── reports.ts
│   ├── modules.ts
│   ├── features.ts
│   ├── reviews.ts
│   ├── pricing.ts
│   └── footer.ts
├── ui/                # Shared UI primitives
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── AnimatedCounter.tsx
│   └── StarRating.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Sections

| Section | Description |
|---|---|
| **Navbar** | Sticky nav with blur-on-scroll transition, mobile menu |
| **Hero** | Staggered entrance animation, two CTAs |
| **Stats bar** | Animated counters triggered on scroll into view |
| **Reports overview** | Three horizon cards: Monthly, 3-Month, 12-Month outlooks |
| **Report previewer** | Click-to-switch module pane with SVG charts and a full-report modal |
| **Features** | Four reasons why fixed delivery beats a live feed |
| **Reviews** | Six named testimonials, first featured |
| **Pricing** | Three annual plans + full comparison table + best-for cards |
| **Footer** | Logo, description, regulatory line |

## Design Decisions

- **Color system** — warm amber (`#c26d22`) as the single accent on a clean slate/white base
- **Typography** — Playfair Display (serif headlines) + DM Sans (body/UI)
- **Motion** — used with restraint: scroll-triggered reveals, staggered children, module-transition animations; all animations respect `prefers-reduced-motion`
- **Accessibility** — semantic HTML throughout, ARIA labels on interactive elements, keyboard-navigable

## Assets

Place `Company Name Logo.jpg` in `public/` — it is referenced as `/Company%20Name%20Logo.jpg` throughout the site. The logo is used in the navbar header and footer.

## License

Private. All rights reserved.
