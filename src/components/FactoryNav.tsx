import { Check, Layers3 } from 'lucide-react'
import { cn } from '../lib/cn'
import type { ConceptKey } from '../App'

const options: { key: ConceptKey; label: string; note: string }[] = [
  { key: 'editorial', label: 'Editorial', note: 'premium · quiet' },
  { key: 'immersive', label: 'Immersive', note: 'dark · kinetic' },
  { key: 'conversion', label: 'Conversion', note: 'clear · persuasive' },
]

export function FactoryNav({ active, onChange }: { active: ConceptKey; onChange: (key: ConceptKey) => void }) {
  return (
    <aside className="factory-nav" aria-label="Landing concept switcher">
      <div className="factory-nav__brand">
        <span className="factory-nav__icon"><Layers3 size={16} /></span>
        <span><strong>Landing Factory</strong><small>concept switcher</small></span>
      </div>
      <div className="factory-nav__options">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            aria-pressed={active === option.key}
            onClick={() => onChange(option.key)}
            className={cn('factory-nav__option', active === option.key && 'is-active')}
          >
            <span><strong>{option.label}</strong><small>{option.note}</small></span>
            {active === option.key && <Check size={14} aria-hidden="true" />}
          </button>
        ))}
      </div>
    </aside>
  )
}
