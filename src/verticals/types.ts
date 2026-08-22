export type VerticalFamily =
  | 'real-estate'
  | 'booking'
  | 'catalog'
  | 'consultation'
  | 'estimator'
  | 'education'
  | 'hospitality'
  | 'pet'

export type VerticalVariant = 'premium' | 'conversion' | 'cinematic' | 'experimental'

export type VerticalConfig = {
  id: string
  title: string
  titleFa: string
  family: VerticalFamily
  eyebrow: string
  headline: string
  subheadline: string
  primaryCta: string
  secondaryCta: string
  accent: string
  accent2: string
  widgets: string[]
  sections: string[]
  flows: string[]
  proof: string[]
}
