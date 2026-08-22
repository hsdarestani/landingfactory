# Landing Factory — Magic Edition

A reusable React/Vite landing-page factory for producing **distinct visual directions**, not recolored templates.

## 10 live design worlds

Use `?concept=` to switch directly:

- `editorial` — quiet luxury / typography-led
- `immersive` — 3D / kinetic / atmospheric
- `conversion` — SaaS / evidence / dashboard proof
- `brutalist` — raw / loud / anti-template
- `bento` — modular / spotlight interaction
- `glass` — luminous depth / 3D glass-like layers
- `lifestyle` — warm editorial / image collage
- `corporate` — premium B2B / restrained systems
- `product` — realtime 3D product showcase
- `portfolio` — kinetic creative portfolio

The default is `immersive`.

## Real libraries and source components

This factory uses/adapts actual open-source work from Magic UI and Motion Primitives, plus GSAP, Lenis, Framer Motion, Three.js, React Three Fiber/Drei and the existing Radix/shadcn-style foundation. See [`THIRD_PARTY.md`](./THIRD_PARTY.md) for the licensing/source breakdown.

React Bits is used as a reference/dependency-stack benchmark but is not vendored into the reusable factory because its current Commons Clause restricts redistribution of the components themselves.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Cloudflare Pages

- Framework preset: `Vite` (or None)
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

Every push to `main` can trigger a new Cloudflare Pages build.
