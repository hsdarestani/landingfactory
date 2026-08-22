import { useEffect, useState } from 'react'
import { FactoryNav } from './components/FactoryNav'
import { Conversion } from './concepts/Conversion'
import { Editorial } from './concepts/Editorial'
import { Immersive } from './concepts/Immersive'

export type ConceptKey = 'editorial' | 'immersive' | 'conversion'

const isConcept = (value: string | null): value is ConceptKey =>
  value === 'editorial' || value === 'immersive' || value === 'conversion'

function initialConcept(): ConceptKey {
  const query = new URLSearchParams(window.location.search).get('concept')
  return isConcept(query) ? query : 'editorial'
}

export default function App() {
  const [concept, setConcept] = useState<ConceptKey>(initialConcept)

  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set('concept', concept)
    window.history.replaceState({}, '', url)
    document.documentElement.dataset.concept = concept
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [concept])

  return (
    <>
      <FactoryNav active={concept} onChange={setConcept} />
      {concept === 'editorial' && <Editorial />}
      {concept === 'immersive' && <Immersive />}
      {concept === 'conversion' && <Conversion />}
    </>
  )
}
