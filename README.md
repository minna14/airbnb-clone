# Airbnb Listing Clone — Playpower Labs Assignment

Starter scaffold for the take-home task. Builds and lints clean out of the box;
your job from here is the pixel/behavior matching against the reference site
(see the workflow in `CLAUDE.md`).

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000. Compare against
https://airbnb-clone-umber-two.vercel.app side by side.

## What's here

- `src/app/page.tsx` — assembles the full listing page
- `src/components/listing/` — Header, TitleBlock, HeroGallery, Highlights,
  Description, Amenities, HostCard, Reviews, BookingCard
- `src/components/overlays/` — PhotoTour.tsx (full gallery grid),
  Lightbox.tsx (single-photo viewer with prev/next + keyboard nav)
- `src/data/listing.ts` — all copy and (Unsplash) image URLs in one place
- `src/lib/` — `useFocusTrap`, `useBodyScrollLock`, `useReducedMotion`
- `.claude/agents/` — three sub-agents used during development (see below)
- `.claude/skills/log-prompt/` — auto-logs every prompt to `PROMPTS.md`
- `PROMPTS.md` — required submission artifact: the prompt log
- `CLAUDE.md` — project rules and workflow for Claude Code

## Sub-agents

| Agent | When it runs | What it checks |
|---|---|---|
| `pixel-comparator` | After building/editing any visible section | Layout, spacing, typography, color, interaction states vs. the reference |
| `a11y-reviewer` | After building/editing any interactive component | Focus trap, keyboard nav, ARIA, visible focus, reduced motion, scroll lock |
| `code-reviewer` | Before final submission | Code quality, structure, dead code, lint/build cleanliness |

## Still to do (this is a starter, not the finished clone)

1. Pixel-match every section against the live reference (spacing, colors,
   exact typography, exact copy) using DevTools computed styles.
2. Swap in your own final images/copy in `src/data/listing.ts`.
3. Verify Photo Tour + Lightbox animation timing/easing matches the reference.
4. Full keyboard-only pass: Tab through the whole page, open both overlays
   with keyboard only, confirm focus returns correctly on close.
5. Add the architecture diagram (see assignment — not part of this repo).
6. `npm run build` clean, deploy to Vercel from a **private** repo.
