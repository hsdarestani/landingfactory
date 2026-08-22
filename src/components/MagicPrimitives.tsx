import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import gsap from 'gsap'
import { cn } from '../lib/cn'

/**
 * Adapted from Magic UI's Shimmer Button (MIT).
 * https://github.com/magicuidesign/magicui
 */
export interface ShimmerButtonProps extends ComponentPropsWithoutRef<'button'> {
  shimmerColor?: string
  shimmerDuration?: string
  background?: string
  children?: ReactNode
}

export function ShimmerButton({
  shimmerColor = '#ffffff',
  shimmerDuration = '2.8s',
  background = '#09090b',
  className,
  children,
  style,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn('magic-shimmer-button', className)}
      style={{
        '--shimmer-color': shimmerColor,
        '--shimmer-speed': shimmerDuration,
        '--shimmer-bg': background,
        ...style,
      } as CSSProperties}
      {...props}
    >
      <span className="magic-shimmer-button__spark" aria-hidden="true" />
      <span className="magic-shimmer-button__content">{children}</span>
    </button>
  )
}

/** Adapted from Magic UI's Border Beam (MIT). */
export function BorderBeam({
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  duration = 5,
  delay = 0,
}: {
  colorFrom?: string
  colorTo?: string
  duration?: number
  delay?: number
}) {
  return (
    <span
      aria-hidden="true"
      className="magic-border-beam"
      style={{
        '--beam-from': colorFrom,
        '--beam-to': colorTo,
        '--beam-duration': `${duration}s`,
        '--beam-delay': `${delay}s`,
      } as CSSProperties}
    />
  )
}

/** Adapted from Magic UI's Marquee (MIT). */
export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  repeat = 4,
}: {
  children: ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  repeat?: number
}) {
  return (
    <div className={cn('magic-marquee', pauseOnHover && 'is-pausable', className)}>
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={index}
          className={cn('magic-marquee__track', reverse && 'is-reverse')}
          aria-hidden={index > 0}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

/**
 * Adapted from Motion Primitives' Magnetic component (MIT).
 * https://github.com/ibelick/motion-primitives
 */
export function Magnetic({
  children,
  className,
  intensity = 0.42,
  range = 120,
}: {
  children: ReactNode
  className?: string
  intensity?: number
  range?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 160, damping: 18, mass: 0.18 })
  const springY = useSpring(y, { stiffness: 160, damping: 18, mass: 0.18 })

  useEffect(() => {
    if (!active) return
    const handleMove = (event: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const dx = event.clientX - (rect.left + rect.width / 2)
      const dy = event.clientY - (rect.top + rect.height / 2)
      const distance = Math.hypot(dx, dy)
      if (distance <= range) {
        const scale = 1 - distance / range
        x.set(dx * intensity * scale)
        y.set(dy * intensity * scale)
      } else {
        x.set(0)
        y.set(0)
      }
    }
    document.addEventListener('mousemove', handleMove)
    return () => document.removeEventListener('mousemove', handleMove)
  }, [active, intensity, range, x, y])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => {
        setActive(false)
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} className={cn('spotlight-card', className)} onPointerMove={handlePointerMove}>
      {children}
    </div>
  )
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function KineticWords({ words, className }: { words: string[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-kinetic-word]',
        { yPercent: 110, rotate: 4, opacity: 0 },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.07,
          ease: 'power4.out',
        },
      )
    }, ref)
    return () => context.revert()
  }, [words])

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span className="kinetic-word-wrap" key={`${word}-${index}`}>
          <span data-kinetic-word>{word}</span>
        </span>
      ))}
    </div>
  )
}
