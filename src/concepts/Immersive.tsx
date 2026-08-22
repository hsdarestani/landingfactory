import { ArrowRight, CircleDot, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { brand } from '../config/brand'
import { Aurora } from '../components/effects/Aurora'
import { Marquee } from '../components/Marquee'
import { Reveal } from '../components/Reveal'

export function Immersive() {
  return (
    <main className="immersive concept-root">
      <section className="immersive__hero">
        <Aurora />
        <nav className="immersive__nav shell">
          <a href="#top" className="immersive__logo"><span>{brand.shortName}</span>{brand.name}</a>
          <a className="immersive__availability" href="#contact"><CircleDot size={14} />Available for select projects</a>
        </nav>

        <div id="top" className="immersive__hero-inner shell">
          <Reveal className="immersive__badge"><Sparkles size={14} />Independent digital studio</Reveal>
          <motion.h1 initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            Make the internet<br /><em>feel something.</em>
          </motion.h1>
          <Reveal className="immersive__hero-bottom">
            <p>{brand.subheadline}</p>
            <a href="#work" className="orb-button" aria-label="Explore our work"><ArrowRight /></a>
          </Reveal>
        </div>
        <Marquee items={['strategy', 'identity', 'experience', 'technology', 'motion']} />
      </section>

      <section id="work" className="immersive__work shell">
        <Reveal className="immersive__intro"><span>Selected capabilities</span><h2>Not decoration.<br />Digital presence.</h2></Reveal>
        <div className="immersive__bento">
          {brand.features.map((feature, index) => (
            <Reveal key={feature.title} className={`glass-card glass-card--${index + 1}`}>
              <span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p>
              <div className="glass-card__glow" aria-hidden="true" />
            </Reveal>
          ))}
          <Reveal className="glass-card glass-card--quote">
            <blockquote>“{brand.testimonial.quote}”</blockquote><p>— {brand.testimonial.author}</p>
          </Reveal>
        </div>
      </section>

      <footer id="contact" className="immersive__footer shell">
        <span>Next opening · September</span><a href="mailto:hello@example.com">Bring us the impossible <ArrowRight /></a>
      </footer>
    </main>
  )
}
