# Landing Factory — agent operating guide

This repository is a production starter and a visual R&D lab. The objective is to produce landing pages that feel art-directed, surprising, tactile and conversion-aware — never like generic AI/Tailwind output.

## Non-negotiable workflow

1. **Read the brief and incumbent truth.** Inspect `src/config/brand.ts`, assets and any existing brand/site references before editing.
2. **Choose the surface mode.** Landing pages are `Persuade`: attention and action are the job of the design.
3. **Create a design system before sections.** Decide visual world, type pairing, palette, spacing rhythm, shape language, motion tier, image direction and the one visual idea worth remembering.
4. **Do source discovery before coding.** Search relevant component/effect repos and registries first (Magic UI, Motion Primitives, React Bits, 21st.dev registries, Aceternity and other strong current sources). Do not invent a generic substitute when a stronger verified primitive exists.
5. **Verify licensing before vendoring.** Copy/adapt only components whose license permits use in this reusable repository. Record source + license in `THIRD_PARTY.md`. If a license permits client-site use but restricts component redistribution, keep it out of this public factory and integrate it only in the final client site when appropriate.
6. **Use real primitives, not name-dropping.** For an expressive concept, integrate at least two meaningful source/library techniques when they improve the brief: e.g. shimmer/border beam, magnetic interaction, spotlight response, kinetic GSAP type, Lenis scroll, WebGL/R3F 3D, SVG distortion, shader effects or purposeful scroll choreography. A normal card grid plus a gradient does not count as “magical”.
7. **Maintain 10 reference worlds in the factory:** Editorial, Immersive, Conversion, Brutalist, Bento, Glass, Lifestyle, Corporate, Product and Portfolio. For a real client, select/rebuild only the 3–4 directions that fit; never mechanically recolor all ten.
8. **Use restraint inside each world.** The page needs one dominant art direction. Effects support it; they do not become a component-library demo.
9. **Respect the quality order:** accessibility → interaction/touch → performance → style consistency → responsive layout → typography/color → motion → feedback/forms.
10. **Motion must have character and a job.** Use motion to reveal hierarchy, preserve spatial continuity, add tactile feedback or build atmosphere. Honor `prefers-reduced-motion`.
11. **No generic landing clichés unless the product proves they belong.** Avoid arbitrary gradients, endless pill badges, repeated icon cards, meaningless stats, fake logos, fake testimonials and invented product claims.
12. **Use real imagery when the brief needs it.** Do not hide missing art direction behind abstract gradients.
13. **Bounded QA.** Build completely, inspect desktop + mobile once, fix findings as one batch, confirm once, stop.

## Current source stack

- Magic UI-derived MIT primitives: Shimmer Button, Border Beam, Marquee.
- Motion Primitives-derived MIT primitive: Magnetic.
- Framer Motion: reveal, spring and interaction motion.
- GSAP: kinetic typography/choreography.
- Lenis: smooth controlled scroll.
- Three.js + React Three Fiber + Drei: realtime 3D scenes.
- Radix/shadcn-style primitives + Tailwind: accessible structural foundation.
- React Bits: reference/dependency-stack benchmark in this reusable repo; integrate components in final client sites only when its current license permits that exact use.

See `THIRD_PARTY.md` before importing/copying new external component source.

## Factory architecture

- `src/config/brand.ts` — content and brand truth; edit this first.
- `src/concepts/MagicConcepts.tsx` — ten reference visual worlds.
- `src/components/MagicPrimitives.tsx` — attributed/adapted and custom interaction primitives.
- `src/components/ProductScene.tsx` — reusable R3F/Drei realtime 3D scene.
- `src/styles.css` — concept-specific visual systems, responsive rules and reduced-motion behavior.
- `THIRD_PARTY.md` — source/license ledger.
- `?concept=<name>` — shareable concept selector.

## New client recipe

1. Replace `brand.ts` with factual client content.
2. Add provided logos/photos/fonts under `public/`.
3. Research the client category and current visual references.
4. Search component/effect sources and shortlist useful, license-compatible primitives.
5. Choose 3–4 genuinely different directions from or beyond the reference worlds.
6. Give every direction its own hero architecture, typography, layout rhythm, motion language and conversion structure — not merely a different palette.
7. Test mobile first at 360px, then tablet, then 1440px desktop.
8. Keep tap targets >= 44px where practical and maintain visible keyboard focus.
9. Build with `npm run build` before deployment.
10. Deploy `dist/` to Cloudflare Pages.

## Definition of done

- The first viewport is visually identifiable even with the logo hidden.
- At least one interaction/motion detail feels authored rather than default.
- External source usage is real, license-checked and recorded when applicable.
- No horizontal overflow at phone widths.
- Clear headline and CTA in the first viewport.
- Body copy remains readable; no tiny grey-on-grey text.
- Interactive elements work with keyboard and touch.
- Reduced-motion mode is usable.
- No knowingly fabricated client facts.
- Production build passes.
