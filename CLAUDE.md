# Project: Airbnb Listing Page Clone (Playpower Labs Assignment)

## Goal
Reproduce **https://airbnb-clone-umber-two.vercel.app** as closely as possible —
visually and behaviorally — across three views:

1. **Listing Page** — the full property page.
2. **Photo Tour** — full-screen gallery opened from "Show all photos" or any hero image.
3. **Lightbox** — single-photo viewer with prev/next arrows and ←/→ keyboard nav.

Desktop only (target viewport: 1440px). Mobile is explicitly out of scope.

## Hard rules — do not break these
- **Never fetch, copy, or paste source code from the reference URL.** Only compare
  the *rendered, visual and behavioral* result. Read this like a designer studying
  a screenshot, not an engineer reading someone else's repo.
- Do not view-source or inspect the reference site's JS bundles / network payloads
  to lift implementation details. Measuring spacing/colors/fonts via DevTools
  computed styles on the *live rendered page* is fine — that's visual QA, not code
  copying.
- All images/assets in this repo must be our own or free-to-use (e.g. Unsplash),
  never scraped from the reference site.
- Every prompt used for AI-assisted development must be appended to `PROMPTS.md`
  as we go, in order, verbatim.

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- No backend — all listing data lives in `src/data/listing.ts` (frontend-only,
  per assignment's optional-backend note)

## Workflow for pixel/behavior matching
1. Open the reference URL and the local dev server (`localhost:3000`) side by side.
2. Use the `pixel-comparator` sub-agent (see `.claude/agents/`) to describe
   differences in layout, spacing, typography, color, and interaction for a
   named section (e.g. "hero gallery", "booking card", "lightbox arrows").
3. Fix one section at a time. Re-compare before moving to the next.
4. Run the `a11y-reviewer` sub-agent after each interactive feature (overlays,
   keyboard nav) to check focus management and ARIA before moving on.
5. Before final submission, run the `code-reviewer` sub-agent once over the
   whole diff.

## Structure
```
src/
  app/page.tsx              -> assembles the listing page
  components/listing/       -> header, gallery, title block, amenities, booking card, reviews, map, host card
  components/overlays/      -> PhotoTour.tsx, Lightbox.tsx
  data/listing.ts           -> all copy + image URLs (frontend-only data source)
  lib/                      -> hooks: useFocusTrap, useReducedMotion, useKeyboardNav
```

## Accessibility bar (non-negotiable)
- Every interactive element reachable and operable by keyboard.
- Visible focus states (never `outline: none` without a replacement).
- Overlays trap focus while open and restore focus to the trigger on close.
- Overlays close on `Escape`, and background scroll is locked while open.
- Respect `prefers-reduced-motion`: swap animated transitions for instant ones.

## Commands
- `npm run dev` — start dev server on :3000
- `npm run build` — production build (do this before deploying to Vercel)
- `npm run lint` — must pass clean before a commit is considered done
