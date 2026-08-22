# Landing Factory — 30 Vertical Sets

The factory is now vertical-first rather than concept-first.

## Architecture

- **30 industries** in `src/verticals/catalog.ts`
- **8 interaction families**: real-estate, booking, catalog, consultation, estimator, education, hospitality, pet
- **4 visual variants per industry**: Premium, Conversion, Cinematic, Experimental
- **120 selectable directions** before client-specific art direction
- Industry-specific widget previews, section sets and lead flows
- Existing 10 high-art concepts remain available as the Concept Lab

## URL contract

`?vertical=real-estate&variant=premium`

Examples:
- `?vertical=auto-gallery&variant=cinematic`
- `?vertical=beauty-salon&variant=premium`
- `?vertical=immigration&variant=conversion`
- `?vertical=jewelry&variant=experimental`

Legacy Concept Lab remains available with `?concept=immersive` etc.

## Rule for real client work

The vertical set is a starting kit, not the final site. Before shipping a client page:
1. replace demo copy with factual client content;
2. bring real imagery/logo/assets;
3. search verified component registries/repositories for additional components suited to the exact brief;
4. preserve the vertical's specialized conversion flow;
5. choose one of the four variants or intentionally create a fifth client-specific direction;
6. run mobile/desktop QA and reduced-motion checks.
