import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Circle,
  Command,
  Globe2,
  Layers3,
  Play,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react'
import { brand } from '../config/brand'
import {
  BorderBeam,
  KineticWords,
  Magnetic,
  Marquee,
  Reveal,
  ShimmerButton,
  SpotlightCard,
} from '../components/MagicPrimitives'
import { ProductScene } from '../components/ProductScene'

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand-mark ${inverse ? 'is-inverse' : ''}`} href="#top" aria-label={`${brand.name} home`}>
      <span>{brand.shortName}</span>
      <strong>{brand.name}</strong>
    </a>
  )
}

function TextLink({ label = brand.secondaryCta }: { label?: string }) {
  return (
    <a className="text-link" href="#work">
      {label} <ArrowUpRight size={16} />
    </a>
  )
}

function FeatureList() {
  return (
    <div className="shared-feature-list">
      {brand.features.map((feature, index) => (
        <div key={feature.title} className="shared-feature-item">
          <span>0{index + 1}</span>
          <div>
            <strong>{feature.title}</strong>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function Editorial() {
  return (
    <div className="landing editorial-landing" id="top">
      <header className="landing-top editorial-top">
        <BrandMark />
        <span className="top-note">Independent digital practice · 2026</span>
        <TextLink label="Selected work" />
      </header>

      <section className="editorial-hero">
        <div className="editorial-copy">
          <span className="eyebrow">{brand.eyebrow}</span>
          <KineticWords words={['Digital experiences', 'with a point', 'of view.']} className="editorial-title" />
          <div className="editorial-subrow">
            <p>{brand.subheadline}</p>
            <Magnetic>
              <a className="editorial-round-cta" href="#work" aria-label={brand.primaryCta}>
                <ArrowUpRight size={25} />
              </a>
            </Magnetic>
          </div>
        </div>
        <div className="editorial-art" aria-hidden="true">
          <div className="editorial-art__halo" />
          <div className="editorial-art__figure" />
          <span className="editorial-art__caption">N° 07 / Form studies</span>
        </div>
      </section>

      <section className="editorial-proof" id="work">
        <p>Strategy sharp enough to create a visual world — not just decorate one.</p>
        <div className="editorial-statline">
          {brand.stats.map((stat) => (
            <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
          ))}
        </div>
      </section>

      <section className="editorial-services">
        <Reveal><span className="section-kicker">What we actually do</span></Reveal>
        <FeatureList />
      </section>
    </div>
  )
}

export function Immersive() {
  return (
    <div className="landing immersive-landing" id="top">
      <div className="immersive-aurora" aria-hidden="true" />
      <header className="landing-top immersive-top">
        <BrandMark inverse />
        <div className="immersive-status"><span /> Available for Q4</div>
        <TextLink label="Enter studio" />
      </header>

      <section className="immersive-hero">
        <div className="immersive-copy">
          <span className="eyebrow">A digital studio for impossible-looking briefs</span>
          <h1>Make the interface <em>feel alive.</em></h1>
          <p>High-performance brand systems, interactive launches and product worlds with motion that reacts, guides and rewards.</p>
          <div className="immersive-actions">
            <ShimmerButton>
              {brand.primaryCta} <ArrowRight size={16} />
            </ShimmerButton>
            <a href="#signal" className="ghost-play"><span><Play size={14} fill="currentColor" /></span> Showreel 01:14</a>
          </div>
        </div>
        <div className="immersive-stage">
          <ProductScene color="#8b5cf6" wire="#8fffe0" />
          <div className="immersive-orbit orbit-a" />
          <div className="immersive-orbit orbit-b" />
          <div className="immersive-float-card card-a"><Sparkles size={15} /> Reactive systems</div>
          <div className="immersive-float-card card-b"><Zap size={15} /> 60 fps motion</div>
        </div>
      </section>

      <section id="signal" className="immersive-signal">
        <Marquee>
          {['IDENTITY', 'INTERACTION', 'MOTION', 'PRODUCT', 'EXPERIMENT'].map((item) => (
            <span className="immersive-marquee-item" key={item}>{item}<Star size={13} fill="currentColor" /></span>
          ))}
        </Marquee>
      </section>

      <section className="immersive-cards">
        {brand.features.map((feature, index) => (
          <SpotlightCard key={feature.title} className="immersive-card">
            <span>0{index + 1}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <ArrowUpRight size={18} />
          </SpotlightCard>
        ))}
      </section>
    </div>
  )
}

export function Conversion() {
  return (
    <div className="landing conversion-landing" id="top">
      <header className="landing-top conversion-top">
        <BrandMark />
        <nav><a href="#platform">Platform</a><a href="#proof">Results</a><a href="#proof">Process</a></nav>
        <a className="conversion-nav-cta" href="#proof">Book a call <ArrowRight size={15} /></a>
      </header>

      <section className="conversion-hero">
        <div className="conversion-copy">
          <span className="conversion-pill"><Sparkles size={14} /> Design systems that convert</span>
          <h1>Turn attention into <span>momentum.</span></h1>
          <p>{brand.subheadline}</p>
          <div className="conversion-actions">
            <ShimmerButton background="#111827">Get your growth plan <ArrowRight size={16} /></ShimmerButton>
            <a href="#proof">See the numbers</a>
          </div>
          <div className="conversion-proof-row">
            <div className="avatar-stack"><i /><i /><i /><i /></div>
            <p><strong>4.9/5</strong><span>from launch partners</span></p>
          </div>
        </div>

        <div className="conversion-window" id="platform">
          <BorderBeam colorFrom="#22c55e" colorTo="#8b5cf6" duration={5.5} />
          <div className="conversion-window__top"><span /><span /><span /><small>growth.signal / live</small></div>
          <div className="conversion-dashboard">
            <div className="dashboard-side">
              <strong>Signal</strong>
              {['Overview', 'Journeys', 'Experiments', 'Revenue'].map((item, index) => <span className={index === 0 ? 'active' : ''} key={item}>{item}</span>)}
            </div>
            <div className="dashboard-main">
              <span className="dash-kicker">Conversion velocity</span>
              <strong className="dash-number">+34.8%</strong>
              <div className="dash-chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="dash-mini"><span><Check size={13} /> Hero message</span><strong>+18%</strong></div>
              <div className="dash-mini"><span><Check size={13} /> CTA sequence</span><strong>+11%</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="conversion-metrics" id="proof">
        {brand.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        <div className="conversion-quote">“{brand.testimonial.quote}” <span>{brand.testimonial.author}</span></div>
      </section>
    </div>
  )
}

export function Brutalist() {
  return (
    <div className="landing brutalist-landing" id="top">
      <header className="brutalist-top">
        <a href="#top" className="brutalist-logo">NORTH★STAR</a>
        <span>WEB / BRAND / MOTION</span>
        <a href="#contact">HIRE US ↗</a>
      </header>

      <section className="brutalist-hero">
        <div className="brutalist-sticker">NO<br />BORING<br />PIXELS</div>
        <KineticWords words={['LOUD', 'CLEAR', 'USEFUL']} className="brutalist-title" />
        <div className="brutalist-row">
          <p>We make digital work that refuses to look like everybody else's.</p>
          <Magnetic><a href="#contact" className="brutalist-button">MAKE SOMETHING <ArrowRight size={22} /></a></Magnetic>
        </div>
      </section>

      <div className="brutalist-ticker">
        <Marquee pauseOnHover={false}>
          {['STRATEGY', 'IDENTITY', 'WEB', 'MOTION', 'LAUNCH'].map((item) => <span key={item}>{item} ✦</span>)}
        </Marquee>
      </div>

      <section className="brutalist-grid" id="contact">
        {brand.features.map((feature, index) => (
          <article key={feature.title}><span>/{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>
        ))}
      </section>
    </div>
  )
}

export function Bento() {
  return (
    <div className="landing bento-landing" id="top">
      <header className="landing-top bento-top">
        <BrandMark />
        <span className="bento-chip"><Circle size={8} fill="currentColor" /> taking on 2 projects</span>
        <a href="#grid" className="bento-top-cta">Build with us <ArrowUpRight size={15} /></a>
      </header>

      <section className="bento-intro">
        <span className="eyebrow">One studio. Many unfair advantages.</span>
        <h1>Everything your launch needs, <em>working as one.</em></h1>
        <p>Strategy, visual system, product UI and motion in a single high-velocity creative loop.</p>
      </section>

      <section className="bento-grid" id="grid">
        <SpotlightCard className="bento-card bento-card--hero">
          <span className="bento-icon"><Layers3 size={18} /></span>
          <div><small>Design system</small><h3>One language,<br />every surface.</h3></div>
          <div className="bento-token-cloud"><i>TYPE</i><i>GRID</i><i>COLOR</i><i>MOTION</i></div>
        </SpotlightCard>
        <SpotlightCard className="bento-card bento-card--metric">
          <small>Average uplift</small><strong>3.4×</strong><span>conversion after launch</span>
          <div className="bento-bars"><i /><i /><i /><i /><i /></div>
        </SpotlightCard>
        <SpotlightCard className="bento-card bento-card--motion">
          <small>Motion layer</small><h3>Feedback that feels physical.</h3>
          <div className="bento-orbits"><i /><i /><i /></div>
        </SpotlightCard>
        <SpotlightCard className="bento-card bento-card--quote">
          <Star size={18} fill="currentColor" /><p>“{brand.testimonial.quote}”</p><span>{brand.testimonial.author}</span>
        </SpotlightCard>
        <SpotlightCard className="bento-card bento-card--cta">
          <Sparkles size={18} /><h3>Have an ambitious brief?</h3><a href="#top">Make it real <ArrowRight size={16} /></a>
        </SpotlightCard>
      </section>
    </div>
  )
}

export function Glass() {
  return (
    <div className="landing glass-landing" id="top">
      <div className="glass-mesh" aria-hidden="true" />
      <header className="landing-top glass-top"><BrandMark inverse /><span>Creative technology studio</span><TextLink label="Let's talk" /></header>
      <section className="glass-hero">
        <div className="glass-copy">
          <span className="glass-badge"><Sparkles size={13} /> Interfaces with atmosphere</span>
          <h1>Less screen.<br /><em>More sensation.</em></h1>
          <p>Layered depth, tactile motion and luminous systems for brands that need to feel a generation ahead.</p>
          <div className="glass-actions"><ShimmerButton background="rgba(255,255,255,.12)">{brand.primaryCta} <ArrowUpRight size={16} /></ShimmerButton></div>
        </div>
        <div className="glass-stage">
          <ProductScene color="#b7a0ff" wire="#ffffff" />
          <div className="glass-card glass-card--one"><small>Depth engine</small><strong>Realtime</strong><span>GPU accelerated</span></div>
          <div className="glass-card glass-card--two"><Globe2 size={17} /><strong>Global launch</strong><span>Localized by design</span></div>
          <div className="glass-card glass-card--three"><span className="glass-wave" /></div>
        </div>
      </section>
      <section className="glass-footer-strip">
        {brand.proof.map((proof) => <span key={proof}><Check size={14} /> {proof}</span>)}
      </section>
    </div>
  )
}

export function Lifestyle() {
  return (
    <div className="landing lifestyle-landing" id="top">
      <header className="landing-top lifestyle-top"><BrandMark /><span className="lifestyle-place">FRANKFURT — BERLIN</span><TextLink label="Journal" /></header>
      <section className="lifestyle-hero">
        <div className="lifestyle-copy">
          <span className="eyebrow">Brand worlds for people, places & rituals</span>
          <h1>Make the digital experience feel <em>human again.</em></h1>
          <p>Warm art direction, editorial rhythm and conversion without turning your brand into a funnel diagram.</p>
          <Magnetic><a className="lifestyle-cta" href="#stories">Discover the approach <ArrowRight size={17} /></a></Magnetic>
        </div>
        <div className="lifestyle-collage" aria-hidden="true">
          <figure className="life-photo life-photo--a"><img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85" alt="" /></figure>
          <figure className="life-photo life-photo--b"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85" alt="" /></figure>
          <span className="life-sun">N✦S</span>
          <span className="life-caption">Objects / people / places / feeling</span>
        </div>
      </section>
      <section className="lifestyle-stories" id="stories">
        <div><span>01</span><h3>Identity with texture</h3><p>Typography, image direction and a palette that can live beyond one campaign.</p></div>
        <div><span>02</span><h3>Editorial conversion</h3><p>Decision-making flows that still feel like a magazine, not a dashboard.</p></div>
        <div><span>03</span><h3>Quiet motion</h3><p>Micro-interactions that make the page feel considered rather than animated.</p></div>
      </section>
    </div>
  )
}

export function Corporate() {
  return (
    <div className="landing corporate-landing" id="top">
      <div className="corporate-grid-lines" aria-hidden="true" />
      <header className="landing-top corporate-top"><BrandMark inverse /><nav><a href="#capabilities">Capabilities</a><a href="#numbers">Impact</a><a href="#numbers">Company</a></nav><a href="#numbers" className="corporate-cta">Start a conversation</a></header>
      <section className="corporate-hero">
        <div className="corporate-copy">
          <span className="eyebrow">Digital transformation, without the theatre.</span>
          <h1>Complex business.<br /><em>Remarkably clear digital.</em></h1>
          <p>We turn fragmented customer journeys, internal tools and brand systems into one coherent digital operating layer.</p>
          <div className="corporate-actions"><a href="#capabilities">View capabilities <ArrowRight size={16} /></a><a href="#numbers">See outcomes</a></div>
        </div>
        <div className="corporate-monogram" aria-hidden="true"><span>N</span><i /></div>
      </section>
      <section className="corporate-capabilities" id="capabilities">
        {brand.features.map((feature, index) => <Reveal delay={index * .08} key={feature.title}><article><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p><ArrowUpRight size={17} /></article></Reveal>)}
      </section>
      <section className="corporate-numbers" id="numbers">
        {brand.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </section>
    </div>
  )
}

export function Product() {
  return (
    <div className="landing product-landing" id="top">
      <header className="product-top"><a className="product-logo" href="#top"><Command size={19} /> AURA/01</a><span>Spatial object — Edition 01</span><button type="button">Reserve <ArrowUpRight size={15} /></button></header>
      <section className="product-hero">
        <div className="product-copy">
          <span className="product-index">OBJECT / 001</span>
          <h1>Form that<br /><em>never sits still.</em></h1>
          <p>A generative digital object engineered to bend light, motion and interface into one continuous surface.</p>
          <a href="#specs">Explore object <ArrowRight size={16} /></a>
        </div>
        <div className="product-visual"><ProductScene color="#d8ff5a" wire="#ffffff" /><span className="product-ring-label label-a">KINETIC MESH</span><span className="product-ring-label label-b">REALTIME / 60FPS</span></div>
        <div className="product-serial">N° 0001 — 0250</div>
      </section>
      <section className="product-specs" id="specs">
        <div><small>Material</small><strong>Generative mesh</strong></div>
        <div><small>Engine</small><strong>WebGL / Three</strong></div>
        <div><small>Interaction</small><strong>Pointer + motion</strong></div>
        <div><small>Edition</small><strong>250 objects</strong></div>
      </section>
    </div>
  )
}

export function Portfolio() {
  return (
    <div className="landing portfolio-landing" id="top">
      <header className="portfolio-top"><a href="#top">NS®</a><span>Independent creative practice</span><a href="#cases">Work ↘</a></header>
      <section className="portfolio-hero">
        <KineticWords words={['WE', 'MAKE', 'DIGITAL', 'FEEL', 'PHYSICAL']} className="portfolio-title" />
        <div className="portfolio-meta"><p>Brand systems, products and launch experiences for ambitious teams.</p><Magnetic><a href="#cases" className="portfolio-circle"><ArrowRight size={24} /></a></Magnetic></div>
      </section>
      <section className="portfolio-cases" id="cases">
        <article className="portfolio-case case-violet"><span>01 / PRODUCT</span><h3>HALO</h3><div className="case-object"><i /><i /></div><a href="#top">View case <ArrowUpRight size={16} /></a></article>
        <article className="portfolio-case case-coral"><span>02 / IDENTITY</span><h3>OSMOS</h3><div className="case-type">O</div><a href="#top">View case <ArrowUpRight size={16} /></a></article>
        <article className="portfolio-case case-lime"><span>03 / EXPERIENCE</span><h3>NOVA</h3><div className="case-star">✦</div><a href="#top">View case <ArrowUpRight size={16} /></a></article>
      </section>
      <section className="portfolio-end"><p>Have a brief worth obsessing over?</p><a href="#top">hello@northstar.studio <ArrowUpRight size={30} /></a></section>
    </div>
  )
}
