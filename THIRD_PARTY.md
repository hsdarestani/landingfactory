# Third-party UI & motion sources

Landing Factory intentionally uses real open-source UI/motion work instead of pretending every effect was invented here.

## Vendored/adapted components

### Magic UI — MIT
Source: https://github.com/magicuidesign/magicui

Adapted in `src/components/MagicPrimitives.tsx`:
- Shimmer Button
- Border Beam
- Marquee

Copyright (c) Magic UI. Used under the MIT License.

### Motion Primitives — MIT
Source: https://github.com/ibelick/motion-primitives

Adapted in `src/components/MagicPrimitives.tsx`:
- Magnetic interaction primitive

Copyright (c) 2024 ibelick. Used under the MIT License.

## Runtime libraries

- `framer-motion` — interaction and reveal motion
- `gsap` — kinetic headline choreography
- `lenis` — smooth, controlled scroll feel
- `three`, `@react-three/fiber`, `@react-three/drei` — realtime 3D product/object scenes
- `Radix Slot`, `clsx`, `tailwind-merge`, Tailwind — component foundation and composition

## React Bits

React Bits was explicitly reviewed as a visual/reference source and its dependency stack informed this factory (GSAP, Lenis, R3F/Drei/Three, OGL-style GPU thinking). We do **not** vendor React Bits component source into this reusable public factory because its current MIT + Commons Clause license allows use inside an application/site/product but restricts selling, sublicensing or redistributing the components themselves. That distinction matters for a reusable component factory.

When a final client landing is an application/site rather than a component redistribution project, React Bits components can be evaluated and integrated case-by-case under their license.

## 21st.dev / Aceternity

These are treated as discovery/reference sources rather than blindly copied registries. Individual component licensing and fit must be verified before a component is pulled into a client build.
