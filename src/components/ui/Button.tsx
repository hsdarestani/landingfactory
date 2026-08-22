import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../lib/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant = 'solid', size = 'md', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variant === 'solid' && 'bg-current px-6',
          variant === 'outline' && 'border border-current/20 bg-transparent px-6 hover:bg-current/5',
          variant === 'ghost' && 'bg-transparent px-4 hover:bg-current/5',
          size === 'sm' && 'min-h-10 text-sm',
          size === 'md' && 'text-[15px]',
          size === 'lg' && 'min-h-13 px-7 text-base',
          className,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
