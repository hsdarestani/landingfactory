# Landing Factory — Vertical Magic Edition

A reusable React/Vite landing-page factory for producing **industry-specific, high-conversion visual systems**, not recolored templates.

## 30 vertical sets · 120 directions

The factory now starts from the business category and its actual user job.

Each of the 30 verticals has:
- industry-specific widgets and flows;
- specialized section architecture;
- four visual variants: **Premium, Conversion, Cinematic, Experimental**;
- shareable URL state;
- responsive and reduced-motion behavior.

Use:

```text
?vertical=real-estate&variant=premium
?vertical=auto-gallery&variant=cinematic
?vertical=beauty-salon&variant=conversion
?vertical=jewelry&variant=experimental
```

The 30 sets include real estate, beauty salon, barbershop, auto gallery, aesthetic clinic, dentistry, gym, personal trainer, language school, exam academy, auto repair, auto parts, detailing, fashion atelier, jewelry, furniture/interior, cabinet maker, restaurant/cafe, pet care, mobile store, immigration, travel agency, insurance, law firm, home services, HVAC, carpet cleaning, dry cleaning, photography studio and wedding venue.

See [`VERTICALS.md`](./VERTICALS.md) for the architecture and URL contract.

## 8 interaction families

Instead of duplicating the same landing 30 times, verticals inherit strong interaction systems from eight families:

- Real estate / property matching
- Booking / availability
- Catalog + inquiry / trade-in
- Consultation / assessment
- Estimator / service request
- Education / placement
- Hospitality / reservation + package matching
- Pet profile / reminders

## Concept Lab

The original 10 high-art worlds remain available as a separate visual R&D layer:

- `editorial`
- `immersive`
- `conversion`
- `brutalist`
- `bento`
- `glass`
- `lifestyle`
- `corporate`
- `product`
- `portfolio`

Use `?concept=immersive` etc. The Concept Lab is for art-direction inspiration; the vertical layer owns the actual industry UX.

## Real libraries and source components

The factory uses/adapts actual open-source work from Magic UI and Motion Primitives, plus GSAP, Lenis, Framer Motion, Three.js, React Three Fiber/Drei and the existing Radix/shadcn-style foundation. See [`THIRD_PARTY.md`](./THIRD_PARTY.md) for source/licensing notes.

React Bits is used as a reference/dependency-stack benchmark but is not vendored into the reusable public factory because its current Commons Clause restricts redistribution of the components themselves.

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

Every push to `main` can trigger a new Cloudflare Pages deployment.
