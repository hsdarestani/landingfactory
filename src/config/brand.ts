export type BrandConfig = {
  name: string
  shortName: string
  eyebrow: string
  headline: string
  accent: string
  subheadline: string
  primaryCta: string
  secondaryCta: string
  proof: string[]
  stats: { value: string; label: string }[]
  features: { title: string; description: string }[]
  testimonial: { quote: string; author: string; role: string }
}

/**
 * Single source of truth for a new landing.
 * Replace this object first; only then tune the chosen concept.
 */
export const brand: BrandConfig = {
  name: 'Northstar Studio',
  shortName: 'NS',
  eyebrow: 'Strategy · Design · Technology',
  headline: 'Digital experiences with a point of view.',
  accent: 'Built to be remembered.',
  subheadline:
    'We turn ambitious ideas into sharp digital products, distinctive brands and high-converting experiences without the template look.',
  primaryCta: 'Start a project',
  secondaryCta: 'Explore our work',
  proof: ['Trusted by growing teams', 'Design-led delivery', 'Launch-ready systems'],
  stats: [
    { value: '42', label: 'launches shipped' },
    { value: '3.4×', label: 'avg. conversion lift' },
    { value: '18d', label: 'median launch cycle' },
  ],
  features: [
    {
      title: 'Position before pixels',
      description: 'We clarify the audience, promise and competitive edge before touching the interface.',
    },
    {
      title: 'A system, not a screenshot',
      description: 'Type, color, spacing and components are designed as a reusable language from day one.',
    },
    {
      title: 'Motion with a job',
      description: 'Transitions guide attention, explain hierarchy and add character without slowing the page down.',
    },
  ],
  testimonial: {
    quote: 'The first version already felt like a brand we could grow into, not another landing page we would replace in six months.',
    author: 'Mara Klein',
    role: 'Founder, Halo Works',
  },
}
