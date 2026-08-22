import { useMemo, useState } from 'react'
import { ChevronDown, Grid3X3, Layers3, Search, X } from 'lucide-react'
import { familyLabels, verticals } from '../verticals/catalog'
import type { VerticalFamily, VerticalVariant } from '../verticals/types'

const variants: {key:VerticalVariant; label:string; note:string}[] = [
  {key:'premium',label:'Premium',note:'refined'},
  {key:'conversion',label:'Conversion',note:'high intent'},
  {key:'cinematic',label:'Cinematic',note:'immersive'},
  {key:'experimental',label:'Experimental',note:'bold'},
]

export function VerticalFactoryNav({activeId,variant,onVertical,onVariant,onConceptLab}:{activeId:string;variant:VerticalVariant;onVertical:(id:string)=>void;onVariant:(v:VerticalVariant)=>void;onConceptLab:()=>void}) {
  const [open,setOpen]=useState(false)
  const [query,setQuery]=useState('')
  const active = verticals.find(v=>v.id===activeId) ?? verticals[0]
  const groups = useMemo(()=>Object.entries(familyLabels).map(([family,label])=>({family:family as VerticalFamily,label,items:verticals.filter(v=>v.family===family && `${v.title} ${v.titleFa}`.toLowerCase().includes(query.toLowerCase()))})).filter(g=>g.items.length),[query])
  return <>
    <div className="vertical-switchbar">
      <button className="vertical-current" onClick={()=>setOpen(true)}><span><Grid3X3 size={15}/></span><div><small>VERTICAL SET · 30 INDUSTRIES</small><strong>{active.title}<b>{active.titleFa}</b></strong></div><ChevronDown size={15}/></button>
      <div className="variant-tabs">{variants.map(x=><button className={variant===x.key?'active':''} onClick={()=>onVariant(x.key)} key={x.key}><strong>{x.label}</strong><small>{x.note}</small></button>)}</div>
      <button className="concept-lab" onClick={onConceptLab}><Layers3 size={14}/> Concept Lab</button>
    </div>
    {open&&<div className="vertical-drawer-backdrop" onMouseDown={()=>setOpen(false)}><aside className="vertical-drawer" onMouseDown={e=>e.stopPropagation()}>
      <header><div><small>LANDING FACTORY</small><strong>30 vertical sets · 120 directions</strong></div><button onClick={()=>setOpen(false)}><X size={18}/></button></header>
      <label className="vertical-search"><Search size={16}/><input autoFocus placeholder="Search industry / جستجوی صنف" value={query} onChange={e=>setQuery(e.target.value)}/></label>
      <div className="vertical-groups">{groups.map(group=><section key={group.family}><h3>{group.label}<span>{group.items.length}</span></h3><div>{group.items.map((item,index)=><button className={item.id===activeId?'active':''} key={item.id} onClick={()=>{onVertical(item.id);setOpen(false)}}><span>{String(verticals.indexOf(item)+1).padStart(2,'0')}</span><div><strong>{item.title}</strong><small>{item.titleFa}</small></div><i style={{background:item.accent}}/></button>)}</div></section>)}</div>
    </aside></div>}
  </>
}
