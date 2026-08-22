import { Check, Layers3 } from 'lucide-react'
import { cn } from '../lib/cn'
import type { ConceptKey } from '../App'

const options: { key: ConceptKey; label: string; note: string }[] = [
  { key: 'editorial', label: 'Editorial', note: 'quiet luxury' },
  { key: 'immersive', label: 'Immersive', note: '3D + kinetic' },
  { key: 'conversion', label: 'Conversion', note: 'evidence first' },
  { key: 'brutalist', label: 'Brutalist', note: 'loud + raw' },
  { key: 'bento', label: 'Bento', note: 'modular + tactile' },
  { key: 'glass', label: 'Glass', note: 'luminous depth' },
  { key: 'lifestyle', label: 'Lifestyle', note: 'warm editorial' },
  { key: 'corporate', label: 'Corporate', note: 'premium B2B' },
  { key: 'product', label: 'Product', note: '3D showcase' },
  { key: 'portfolio', label: 'Portfolio', note: 'creative cases' },
]

export function FactoryNav({ active, onChange }: { active: ConceptKey; onChange: (key: ConceptKey) => void }) {
  return (
    <aside className="factory-nav" aria-label="Landing concept switcher">
      <div className="factory-nav__brand">
        <span className="factory-nav__icon"><Layers3 size={15} /></span>
        <span><strong>Landing Factory</strong><small>10 design worlds</small></span>
      </div>
      <div className="factory-nav__options">
        {options.map((option, index) => (
          <button
            key={option.key}
            type="button"
            aria-pressed={active === option.key}
            onClick={() => onChange(option.key)}
            className={cn('factory-nav__option', active === option.key && 'is-active')}
          >
            <span className="factory-nav__num">{String(index + 1).padStart(2, '0')}</span>
            <span className="factory-nav__copy"><strong>{option.label}</strong><small>{option.note}</small></span>
            {active === option.key && <Check size={13} aria-hidden="true" />}
          </button>
        ))}
      </div>
    </aside>
  )
}
