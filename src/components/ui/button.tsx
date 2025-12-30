import { cn } from '../../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-60 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        hero: 'bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-glow',
        outline: 'border border-border text-foreground hover:bg-card',
        ghost: 'text-foreground hover:text-primary',
      },
      size: {
        default: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        sm: 'px-4 py-2 text-sm',
      },
    },
    defaultVariants: {
      variant: 'hero',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
)

Button.displayName = 'Button'
