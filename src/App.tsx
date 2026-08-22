import { useEffect, useMemo, useState } from 'react'
import Lenis from 'lenis'
import { FactoryNav } from './components/FactoryNav'
import {
  Bento,
  Brutalist,
  Conversion,
  Corporate,
  Editorial,
  Glass,
  Immersive,
  Lifestyle,
  Portfolio,
  Product,
} from './concepts/MagicConcepts'

export type ConceptKey =
  | 'editorial'
  | 'immersive'
  | 'conversion'
  | 'brutalist'
  | 'bento'
  | 'glass'
  | 'lifestyle'
  | 'corporate'
  | 'product'
  | 'portfolio'

const conceptKeys: ConceptKey[] = [
  'editorial',
  'immersive',
  'conversion',
  'brutalist',
  'bento',
  'glass',
  'lifestyle',
  'corporate',
  'product',
  'portfolio',
]

const isConcept = (value: string | null): value is ConceptKey =>
  conceptKeys.includes(value as ConceptKey)

function initialConcept(): ConceptKey {
  const query = new URLSearchParams(window.location.search).get('concept')
  return isConcept(query) ? query : 'immersive'
}

export default function App() {
  const [concept, setConcept] = useState<ConceptKey>(initialConcept)

  const ActiveConcept = useMemo(() => ({
    editorial: Editorial,
    immersive: Immersive,
    conversion: Conversion,
    brutalist: Brutalist,
    bento: Bento,
    glass: Glass,
    lifestyle: Lifestyle,
    corporate: Corporate,
    product: Product,
    portfolio: Portfolio,
  })[concept], [concept])

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, duration: 1.05, smoothWheel: true })
    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set('concept', concept)
    window.history.replaceState({}, '', url)
    document.documentElement.dataset.concept = concept
    document.title = `Landing Factory — ${concept[0].toUpperCase()}${concept.slice(1)}`
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [concept])

  return (
    <>
      <ActiveConcept />
      <FactoryNav active={concept} onChange={setConcept} />
    </>
  )
}
