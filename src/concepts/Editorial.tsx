import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { brand } from '../config/brand'
import { Reveal } from '../components/Reveal'

export function Editorial() {
  return (
    <main className="editorial concept-root">
      <nav className="editorial__nav shell">
        <a href="#top" className="wordmark" aria-label={`${brand.name} home`}>{brand.name}</a>
        <div className="editorial__links"><a href="#approach">Approach</a><a href="#contact">Contact</a></div>
      </nav>

      <section id="top" className="editorial__hero shell">
        <Reveal className="editorial__eyebrow"><span>01</span>{brand.eyebrow}</Reveal>
        <Reveal className="editorial__hero-grid">
          <h1>{brand.headline}</h1>
          <div className="editorial__hero-side">
            <p>{brand.subheadline}</p>
            <a className="text-link" href="#contact">{brand.primaryCta}<ArrowDownRight size={20} /></a>
          </div>
        </Reveal>
        <div className="editorial__art" aria-hidden="true">
          <span className="editorial__art-copy">{brand.accent}</span>
          <div className="editorial__disc"><span>NS</span></div>
          <div className="editorial__line" />
        </div>
      </section>

      <section id="approach" className="editorial__approach shell">
        <Reveal className="editorial__section-title"><span>02</span><h2>Designed from the strategy outward.</h2></Reveal>
        <div className="editorial__feature-list">
          {brand.features.map((feature, index) => (
            <Reveal className="editorial__feature" key={feature.title}>
              <span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p><ArrowUpRight size={22} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="editorial__quote shell">
        <Reveal><blockquote>“{brand.testimonial.quote}”</blockquote><p>{brand.testimonial.author} · {brand.testimonial.role}</p></Reveal>
      </section>

      <footer id="contact" className="editorial__footer shell">
        <p>Have something worth making?</p><a href="mailto:hello@example.com">Let’s make it unmistakable.<ArrowUpRight /></a>
      </footer>
    </main>
  )
}
