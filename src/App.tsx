import { useEffect, useMemo, useState } from 'react'
import Lenis from 'lenis'
import { FactoryNav } from './components/FactoryNav'
import { VerticalFactoryNav } from './components/VerticalFactoryNav'
import {
  Bento, Brutalist, Conversion, Corporate, Editorial, Glass, Immersive, Lifestyle, Portfolio, Product,
} from './concepts/MagicConcepts'
import { verticalById, verticals } from './verticals/catalog'
import { VerticalLanding } from './verticals/VerticalLanding'
import type { VerticalVariant } from './verticals/types'

export type ConceptKey =
  | 'editorial' | 'immersive' | 'conversion' | 'brutalist' | 'bento'
  | 'glass' | 'lifestyle' | 'corporate' | 'product' | 'portfolio'

const conceptKeys: ConceptKey[] = ['editorial','immersive','conversion','brutalist','bento','glass','lifestyle','corporate','product','portfolio']
const variantKeys: VerticalVariant[] = ['premium','conversion','cinematic','experimental']
const isConcept = (value:string|null): value is ConceptKey => conceptKeys.includes(value as ConceptKey)
const isVariant = (value:string|null): value is VerticalVariant => variantKeys.includes(value as VerticalVariant)

function initialState() {
  const query = new URLSearchParams(window.location.search)
  const concept = query.get('concept')
  const vertical = query.get('vertical')
  return {
    mode: isConcept(concept) ? 'concept' as const : 'vertical' as const,
    concept: isConcept(concept) ? concept : 'immersive' as ConceptKey,
    verticalId: vertical && verticalById[vertical] ? vertical : verticals[0].id,
    variant: isVariant(query.get('variant')) ? query.get('variant') as VerticalVariant : 'premium' as VerticalVariant,
  }
}

export default function App() {
  const initial = useMemo(initialState, [])
  const [mode,setMode] = useState<'vertical'|'concept'>(initial.mode)
  const [concept,setConcept] = useState<ConceptKey>(initial.concept)
  const [verticalId,setVerticalId] = useState(initial.verticalId)
  const [variant,setVariant] = useState<VerticalVariant>(initial.variant)

  const ActiveConcept = useMemo(() => ({
    editorial: Editorial, immersive: Immersive, conversion: Conversion, brutalist: Brutalist, bento: Bento,
    glass: Glass, lifestyle: Lifestyle, corporate: Corporate, product: Product, portfolio: Portfolio,
  })[concept], [concept])
  const activeVertical = verticalById[verticalId] ?? verticals[0]

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, duration: 1.05, smoothWheel: true })
    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const url = new URL(window.location.href)
    if (mode === 'vertical') {
      url.searchParams.delete('concept')
      url.searchParams.set('vertical', activeVertical.id)
      url.searchParams.set('variant', variant)
      document.documentElement.dataset.concept = `vertical-${activeVertical.id}-${variant}`
      document.title = `Landing Factory — ${activeVertical.title} · ${variant}`
    } else {
      url.searchParams.delete('vertical')
      url.searchParams.delete('variant')
      url.searchParams.set('concept', concept)
      document.documentElement.dataset.concept = concept
      document.title = `Landing Factory — Concept Lab · ${concept}`
    }
    window.history.replaceState({}, '', url)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [mode, concept, activeVertical.id, activeVertical.title, variant])

  if (mode === 'concept') return <>
    <ActiveConcept />
    <FactoryNav active={concept} onChange={setConcept} />
    <button className="return-to-vertical" onClick={()=>setMode('vertical')}>30 Vertical Sets ↗</button>
  </>

  return <>
    <VerticalLanding vertical={activeVertical} variant={variant} />
    <VerticalFactoryNav
      activeId={activeVertical.id}
      variant={variant}
      onVertical={(id)=>{setVerticalId(id);setMode('vertical')}}
      onVariant={setVariant}
      onConceptLab={()=>setMode('concept')}
    />
  </>
}
