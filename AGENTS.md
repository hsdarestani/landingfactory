# Landing Factory — agent operating guide

This repository is a **vertical-first landing factory** plus a visual R&D lab. The objective is to produce landing pages that feel art-directed, surprising, tactile and conversion-aware — never like generic AI/Tailwind output.

## Non-negotiable workflow

1. **Choose the vertical first.** Start from `src/verticals/catalog.ts` and preserve the industry's actual user job, widgets and lead flow.
2. **Choose one of four visual directions:** Premium, Conversion, Cinematic or Experimental. Create a fifth client-specific world when the brief needs it.
3. **Do source discovery before coding.** Search relevant component/effect repos and registries first (Magic UI, Motion Primitives, React Bits, 21st.dev registries, Aceternity and other strong current sources). Do not invent a generic substitute when a stronger verified primitive exists.
4. **Verify licensing before vendoring.** Copy/adapt only components whose license permits use in this reusable repository. Record source + license in `THIRD_PARTY.md`.
5. **Use real primitives, not name-dropping.** For expressive work integrate meaningful source/library techniques when they improve the brief: shimmer/border beam, magnetic interaction, pointer spotlight, kinetic GSAP type, Lenis, WebGL/R3F, shader effects or purposeful scroll choreography.
6. **Never turn verticals into recolors.** The hero architecture, specialized widget, information hierarchy, section order and CTA flow must match the industry.
7. **Use the 8 interaction families deliberately:** real-estate, booking, catalog, consultation, estimator, education, hospitality and pet.
8. **Keep the 10 Concept Lab worlds as art-direction references:** Editorial, Immersive, Conversion, Brutalist, Bento, Glass, Lifestyle, Corporate, Product and Portfolio. They are not substitutes for vertical-specific UX.
9. **Respect the quality order:** accessibility → interaction/touch → performance → style consistency → responsive layout → typography/color → motion → forms/feedback.
10. **Motion needs a job.** Reveal hierarchy, create tactile feedback, preserve continuity or build atmosphere. Honor `prefers-reduced-motion`.
11. **No generic landing clichés unless justified.** Avoid arbitrary gradients, endless pill badges, repeated icon cards, fake stats/logos/testimonials and invented client claims.
12. **Use real imagery when the brief needs it.** Do not hide missing art direction behind abstract gradients.
13. **Bounded QA.** Build fully, inspect mobile + desktop, fix findings in one batch, confirm once.

## Vertical architecture

- `src/verticals/catalog.ts` — 30 vertical configurations and industry truth.
- `src/verticals/types.ts` — vertical/family/variant contracts.
- `src/verticals/VerticalLanding.tsx` — industry-aware landing renderer and specialized widgets.
- `src/components/VerticalFactoryNav.tsx` — searchable 30-industry selector + four variant switcher.
- `src/verticals/verticals.css` — visual systems for vertical pages.
- `src/verticals/accessibility.css` — focus and reduced-motion layer.
- `VERTICALS.md` — architecture and URL contract.

## Current scale

- **30 vertical sets**
- **8 interaction families**
- **4 visual directions per vertical**
- **120 selectable vertical directions**
- **10 additional Concept Lab worlds**

URL format:
`?vertical=real-estate&variant=premium`

Concept Lab format:
`?concept=immersive`

## Current source stack

- Magic UI-derived MIT primitives: Shimmer Button, Border Beam, Marquee.
- Motion Primitives-derived MIT primitive: Magnetic.
- Framer Motion: reveal, spring and interaction motion.
- GSAP: kinetic typography/choreography.
- Lenis: smooth controlled scroll.
- Three.js + React Three Fiber + Drei: realtime 3D scenes.
- Radix/shadcn-style primitives + Tailwind: accessible structural foundation.
- React Bits: benchmark/reference in the reusable factory; integrate source only where the current license permits the exact final-site use.

See `THIRD_PARTY.md` before importing/copying new external component source.

## New client recipe

1. Pick the closest vertical set.
2. Replace demo content with factual client content.
3. Add real logo/photos/video/fonts.
4. Research current category references and component registries.
5. Preserve or improve the vertical's specialized widget and lead flow.
6. Build 3–4 genuinely different client directions using the vertical as UX truth and the Concept Lab as art-direction reference.
7. Every direction needs its own hero architecture, typography, layout rhythm, motion language and conversion structure — not merely a palette change.
8. Test 360px mobile, tablet and 1440px desktop.
9. Keep practical touch targets >=44px and visible keyboard focus.
10. Run `npm run build`, then deploy `dist/` to Cloudflare Pages.

## Definition of done

- First viewport is visually identifiable even without the logo.
- Vertical-specific job is obvious within seconds.
- At least one specialized interactive module exists above or near the fold.
- At least one interaction/motion detail feels authored rather than default.
- External source usage is real, license-checked and recorded where applicable.
- No horizontal overflow at phone widths.
- Clear CTA and readable body copy.
- Keyboard/touch usable and reduced-motion safe.
- No knowingly fabricated client facts.
- Production build passes.
