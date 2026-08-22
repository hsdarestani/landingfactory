import {
  ArrowRight, ArrowUpRight, CalendarDays, Car, Check, ChevronRight, Clock3, Heart,
  Home, MapPin, Menu, PawPrint, Search, ShieldCheck, Sparkles, Star, Wand2,
} from 'lucide-react'
import { BorderBeam, Magnetic, Marquee, Reveal, ShimmerButton, SpotlightCard } from '../components/MagicPrimitives'
import type { VerticalConfig, VerticalVariant } from './types'

const familyIcon = {
  'real-estate': Home, booking: CalendarDays, catalog: Car, consultation: ShieldCheck,
  estimator: Wand2, education: Sparkles, hospitality: Star, pet: PawPrint,
} as const

function BookingStage({ v }: { v: VerticalConfig }) {
  return <div className="vf-widget booking-widget">
    <div className="vf-widget-head"><span>Live availability</span><small>Today · 4 open slots</small></div>
    <div className="service-pills">{v.widgets.slice(0,3).map((x,i)=><button className={i===0?'active':''} key={x}>{x}</button>)}</div>
    <div className="time-grid">{['10:30','12:00','15:30','17:00','18:30','20:00'].map((t,i)=><button className={i===3?'hot':''} key={t}>{t}</button>)}</div>
    <div className="widget-action"><span><Clock3 size={15}/> 45–60 min</span><button>Continue <ArrowRight size={14}/></button></div>
  </div>
}

function RealEstateStage() {
  return <div className="vf-widget estate-widget">
    <div className="estate-search"><Search size={17}/><span>Frankfurt · 2–3 rooms · €450k–€720k</span><button>Match</button></div>
    <div className="estate-map"><div className="map-grid"/><i className="pin p1">€549k</i><i className="pin p2">€685k</i><i className="pin p3">€510k</i></div>
    <div className="estate-foot"><span><MapPin size={14}/> 12 fresh matches</span><span>Updated 8 min ago</span></div>
  </div>
}

function CatalogStage({ v }: { v: VerticalConfig }) {
  return <div className="vf-widget catalog-widget">
    <div className="catalog-toolbar"><span>Curated inventory</span><button><Search size={14}/> Filter</button></div>
    <div className="catalog-cards">
      {[0,1,2].map((i)=><article key={i} style={{'--card-i':i} as React.CSSProperties}><div className="catalog-image"><span>{i===0?'NEW':'SELECTED'}</span></div><strong>{v.title} selection {String(i+1).padStart(2,'0')}</strong><small>{i===0?'Featured · ready now':'Private inquiry'}</small></article>)}
    </div>
    <button className="trade-row">{v.widgets[1] ?? 'Request details'} <ArrowUpRight size={15}/></button>
  </div>
}

function ConsultationStage({ v }: { v: VerticalConfig }) {
  return <div className="vf-widget consult-widget">
    <div className="consult-progress"><span/><span/><span/><span/></div>
    <small>60-second assessment</small><h3>What best describes your situation?</h3>
    <div className="consult-options">{v.flows.slice(0,3).map((x,i)=><button className={i===0?'selected':''} key={x}><span>{String.fromCharCode(65+i)}</span>{x}<ChevronRight size={15}/></button>)}</div>
    <div className="consult-bottom"><span><ShieldCheck size={14}/> Private by design</span><button>Next step</button></div>
  </div>
}

function EstimatorStage({ v }: { v: VerticalConfig }) {
  return <div className="vf-widget estimator-widget">
    <div className="estimator-head"><span>Instant rough estimate</span><strong>€ 180–260</strong></div>
    <div className="estimate-line"><span>Service</span><button>{v.widgets[0]} <ChevronRight size={14}/></button></div>
    <div className="estimate-line"><span>Priority</span><div className="seg"><button>Normal</button><button className="active">Soon</button><button>Urgent</button></div></div>
    <div className="estimate-meter"><i/><span>Base</span><span>Premium</span></div>
    <button className="estimate-cta">Get exact quote <ArrowRight size={14}/></button>
  </div>
}

function EducationStage({ v }: { v: VerticalConfig }) {
  return <div className="vf-widget education-widget">
    <div className="edu-top"><span>Smart placement</span><small>Question 03 / 08</small></div><h3>Which outcome matters most to you?</h3>
    <div className="edu-answers">{v.flows.map((x,i)=><button className={i===1?'active':''} key={x}><span>0{i+1}</span>{x}</button>)}</div>
    <div className="edu-progress"><i/></div><small>Your class recommendation gets sharper with every answer.</small>
  </div>
}

function HospitalityStage({ v }: { v: VerticalConfig }) {
  return <div className="vf-widget hospitality-widget">
    <div className="hosp-visual"><span>CURATED FOR TONIGHT</span><strong>{v.title}</strong></div>
    <div className="hosp-book"><button><CalendarDays size={15}/> Sat, 22 Aug</button><button><Heart size={15}/> 2 guests</button><button className="book">Check availability</button></div>
    <Marquee className="hosp-marquee" repeat={3}>{v.sections.slice(0,3).map(x=><span key={x}>{x} ✦</span>)}</Marquee>
  </div>
}

function PetStage({ v }: { v: VerticalConfig }) {
  return <div className="vf-widget pet-widget"><div className="pet-card"><div className="pet-avatar"><PawPrint size={27}/></div><div><small>MY PET</small><strong>Milo</strong><span>Golden Retriever · 4y</span></div><button>Profile</button></div><div className="pet-reminder"><span><CalendarDays size={17}/></span><div><strong>Vaccination reminder</strong><small>Due in 12 days</small></div><button>Book</button></div><div className="pet-products">{v.widgets.slice(0,3).map((x,i)=><span key={x}><i>{i+1}</i>{x}</span>)}</div></div>
}

function VerticalStage({ vertical }: { vertical: VerticalConfig }) {
  if (vertical.family === 'real-estate') return <RealEstateStage />
  if (vertical.family === 'booking') return <BookingStage v={vertical} />
  if (vertical.family === 'catalog') return <CatalogStage v={vertical} />
  if (vertical.family === 'consultation') return <ConsultationStage v={vertical} />
  if (vertical.family === 'estimator') return <EstimatorStage v={vertical} />
  if (vertical.family === 'education') return <EducationStage v={vertical} />
  if (vertical.family === 'hospitality') return <HospitalityStage v={vertical} />
  return <PetStage v={vertical} />
}

export function VerticalLanding({ vertical, variant }: { vertical: VerticalConfig; variant: VerticalVariant }) {
  const Icon = familyIcon[vertical.family]
  return <main className={`vertical-landing family-${vertical.family} variant-${variant}`} style={{'--vf-accent':vertical.accent,'--vf-accent-2':vertical.accent2} as React.CSSProperties}>
    <div className="vf-noise" aria-hidden="true"/>
    <header className="vf-header">
      <a className="vf-brand" href="#top"><span><Icon size={16}/></span><strong>VERTICAL/<b>{vertical.title.toUpperCase()}</b></strong></a>
      <nav><a href="#system">System</a><a href="#blocks">Blocks</a><a href="#flow">Flow</a></nav>
      <a className="vf-header-cta" href="#flow">Launch this set <ArrowUpRight size={14}/></a>
    </header>

    <section className="vf-hero" id="top">
      <div className="vf-copy">
        <Reveal><span className="vf-eyebrow"><Sparkles size={14}/>{vertical.eyebrow}</span></Reveal>
        <Reveal delay={0.05}><h1>{vertical.headline}</h1></Reveal>
        <Reveal delay={0.1}><p>{vertical.subheadline}</p></Reveal>
        <Reveal delay={0.15}><div className="vf-actions"><Magnetic><ShimmerButton background="#09090b">{vertical.primaryCta}<ArrowRight size={16}/></ShimmerButton></Magnetic><a href="#blocks">{vertical.secondaryCta}<ArrowUpRight size={15}/></a></div></Reveal>
        <div className="vf-proof">{vertical.proof.map(x=><span key={x}><Check size={13}/>{x}</span>)}</div>
      </div>
      <div className="vf-stage-wrap"><BorderBeam colorFrom={vertical.accent} colorTo={vertical.accent2} duration={6}/><VerticalStage vertical={vertical}/><span className="vf-stage-label">LIVE MODULE · {vertical.family.toUpperCase()}</span></div>
    </section>

    <section className="vf-system" id="system">
      <div><span className="vf-kicker">01 / Vertical intelligence</span><h2>Not a recolored template.<br/><em>A set built around the job.</em></h2></div>
      <div className="vf-system-grid">{vertical.widgets.map((x,i)=><SpotlightCard className="vf-system-card" key={x}><span>0{i+1}</span><strong>{x}</strong><small>Reusable industry module</small></SpotlightCard>)}</div>
    </section>

    <section className="vf-blocks" id="blocks"><div className="vf-blocks-head"><span className="vf-kicker">02 / Section set</span><p>10–15 section slots per vertical, composed differently across the four visual variants.</p></div><div className="vf-block-list">{vertical.sections.map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong><ArrowUpRight size={17}/></article>)}</div></section>

    <section className="vf-flow" id="flow"><div><span className="vf-kicker">03 / Lead architecture</span><h2>Every pretty screen ends in a useful next step.</h2></div><div className="vf-flow-line">{vertical.flows.map((x,i)=><div key={x}><span>{i+1}</span><strong>{x}</strong>{i<vertical.flows.length-1&&<ArrowRight size={18}/>}</div>)}</div><a href="#top">Use {vertical.title} set <ArrowUpRight size={16}/></a></section>
  </main>
}
