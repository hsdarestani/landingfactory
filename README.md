# A+ Landing Factory

A config-driven React starter for producing **multiple genuinely different landing concepts** from one client brief, comparing them quickly, and promoting the winning direction to production.

## What is already inside

Three live directions share the same factual content but use different art direction:

- `?concept=editorial` — premium, restrained, typography-led
- `?concept=immersive` — dark, kinetic, high-impact
- `?concept=conversion` — clear, evidence-led, conversion-first

The floating Factory switcher lets you move between them without a router.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS 4 · Framer Motion · Radix Slot · Lucide · Cloudflare Pages

The system follows a **shadcn/Radix primitive mindset** and uses custom motion/effect components selectively rather than turning the page into a component-library demo.

## Start a new landing

```bash
npm install
npm run dev
```

Then:

1. Replace the facts in `src/config/brand.ts`.
2. Add real brand assets under `public/`.
3. Read `AGENTS.md` and `FACTORY.md`.
4. Rebuild the three concepts around the actual brief; do not just recolor the demos.
5. Run `npm run build` before shipping.

## Cloudflare Pages

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

Manual deploy (after Wrangler auth):

```bash
npm run cf:deploy
```

Or connect this repository directly to Cloudflare Pages and use the same build/output settings.

## Why this exists

The Factory is deliberately opinionated: define the design system first, keep accessibility and interaction quality above visual novelty, use motion with purpose, and create concepts that differ in composition and point of view — not merely gradients and colors.
