export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee" aria-label={items.join(', ')}>
      <div className="marquee__track" aria-hidden="true">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`}>{item}<b>✦</b></span>
        ))}
      </div>
    </div>
  )
}
