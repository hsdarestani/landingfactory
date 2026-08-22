# Landing Factory — agent operating guide

This repository is a production starter, not a component showcase. The objective is to generate landing pages that feel art-directed, coherent and conversion-aware rather than generic or AI-generated.

## Default workflow

1. **Read the brief and incumbent truth.** Inspect `src/config/brand.ts`, assets and any existing brand/site references before editing.
2. **Choose the surface mode.** Landing pages are `Persuade`: attention and action are the job of the design.
3. **Create a design system before sections.** Decide visual world, type pairing, palette, spacing rhythm, radius language, motion tier and image direction.
4. **Build 3 genuinely different concepts by default** when exploration is requested:
   - Editorial / premium / restrained
   - Immersive / kinetic / high-impact
   - Conversion-first / clear / evidence-led
5. **Use libraries selectively.** Prefer reusable accessible primitives (shadcn/Radix-style), then motion primitives. React Bits / Aceternity-style effects are accents, never the whole visual language.
6. **Respect the quality order:** accessibility → interaction/touch → performance → style consistency → responsive layout → typography/color → motion → feedback/forms.
7. **No decorative motion without a job.** Motion should reveal hierarchy, preserve spatial continuity or provide feedback. Honor `prefers-reduced-motion`.
8. **No generic landing clichés unless the product proves they belong.** Avoid arbitrary gradients, endless pill badges, repeated icon cards, meaningless stats, fake logos, fake testimonials and invented product claims.
9. **Use real imagery when the brief needs it.** Do not hide missing art direction behind abstract gradients.
10. **Bounded QA.** Build completely, inspect desktop + mobile once, fix findings as one batch, confirm once, stop.

## Factory architecture

- `src/config/brand.ts` — content and brand truth; edit this first.
- `src/concepts/*` — separate visual directions. Keep concepts independent enough that one can later be promoted to `/`.
- `src/components/ui/*` — accessible reusable primitives.
- `src/components/effects/*` — visual effects. Must degrade gracefully.
- `src/styles.css` — tokens and concept-specific visual systems.
- `?concept=editorial|immersive|conversion` — shareable concept selector.

## New client recipe

1. Replace `brand.ts` with factual client content.
2. Add provided logos/photos/fonts under `public/`.
3. Pick or rebuild three directions based on the actual category; do not mechanically reuse these demo aesthetics.
4. Test mobile first at 360px, then tablet, then 1440px desktop.
5. Keep tap targets >= 44px where practical and maintain visible keyboard focus.
6. Build with `npm run build` before deployment.
7. Deploy `dist/` to Cloudflare Pages.

## Definition of done

- No horizontal overflow at phone widths.
- Clear headline and CTA in the first viewport.
- One strong visual idea per concept.
- Body copy remains readable; no tiny grey-on-grey text.
- Interactive elements work with keyboard and touch.
- Reduced-motion mode is usable.
- No knowingly fabricated client facts.
- Production build passes.
