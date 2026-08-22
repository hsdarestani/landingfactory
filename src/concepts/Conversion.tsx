import { ArrowRight, Check, Gauge, Layers, Sparkles } from 'lucide-react'
import { brand } from '../config/brand'
import { Reveal } from '../components/Reveal'

const icons = [Sparkles, Layers, Gauge]

export function Conversion() {
  return (
    <main className="conversion concept-root">
      <header className="conversion__nav shell">
        <a href="#top" className="conversion__brand"><span>{brand.shortName}</span>{brand.name}</a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#proof">Results</a><a href="#contact" className="conversion__nav-cta">Book a call</a></nav>
      </header>

      <section id="top" className="conversion__hero shell">
        <Reveal className="conversion__hero-copy">
          <span className="conversion__pill"><span />Strategy, design & build in one senior team</span>
          <h1>{brand.headline} <em>{brand.accent}</em></h1>
          <p>{brand.subheadline}</p>
          <div className="conversion__actions"><a href="#contact" className="conversion__primary">{brand.primaryCta}<ArrowRight size={18} /></a><a href="#services" className="conversion__secondary">See how it works</a></div>
          <div className="conversion__checks">{brand.proof.map((item) => <span key={item}><Check size={14} />{item}</span>)}</div>
        </Reveal>

        <Reveal className="conversion__dashboard" aria-label="Example performance snapshot">
          <div className="conversion__dashboard-top"><span>Launch pulse</span><span className="status"><i />Live</span></div>
          <div className="conversion__score"><small>Conversion impact</small><strong>+34.8%</strong><span>vs. previous experience</span></div>
          <div className="conversion__chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="conversion__mini-grid"><div><small>Clarity score</small><strong>92</strong></div><div><small>Speed index</small><strong>1.1s</strong></div></div>
          <div className="conversion__float-card"><span>Qualified leads</span><strong>2.6×</strong><small>last 30 days</small></div>
        </Reveal>
      </section>

      <section id="proof" className="conversion__stats shell">
        {brand.stats.map((stat) => <Reveal key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></Reveal>)}
      </section>

      <section id="services" className="conversion__services shell">
        <Reveal className="conversion__section-copy"><span>Why it works</span><h2>One clear system from first click to final action.</h2><p>Each layer earns its place: message, hierarchy, interaction and performance all point toward the same outcome.</p></Reveal>
        <div className="conversion__cards">
          {brand.features.map((feature, index) => {
            const Icon = icons[index]
            return <Reveal className="conversion__card" key={feature.title}><div className="conversion__card-icon"><Icon size={20} /></div><h3>{feature.title}</h3><p>{feature.description}</p><span>0{index + 1}</span></Reveal>
          })}
        </div>
      </section>

      <section id="contact" className="conversion__cta shell">
        <Reveal><span>Ready when you are.</span><h2>Build the version people remember.</h2><p>Start with a focused strategy call. We’ll map the opportunity and tell you exactly what we’d change.</p><a href="mailto:hello@example.com">Start a project <ArrowRight size={18} /></a></Reveal>
      </section>
    </main>
  )
}
