import { forwardRef } from 'react'
import { cn } from '@/lib/design-system-utils'
import { CardProps } from '../types'

/**
 * Card component for content containers
 * Supports different variants, padding sizes, and interactive states
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'elevated',
      padding = 'md',
      interactive = false,
      onClick,
      className,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      elevated: 'bg-white shadow-lg border-0',
      outlined: 'bg-white border border-neutral-200 shadow-none',
      filled: 'bg-neutral-50 border-0 shadow-none'
    }

    const paddingClasses = {
      xs: 'p-3',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    }

    const baseClasses = [
      // Base styles
      'rounded-lg',
      // Variant styles
      variantClasses[variant],
      // Padding
      paddingClasses[padding],
      // Interactive styles
      interactive && 'cursor-pointer transition-transform duration-200 hover:scale-105',
      // Focus styles for interactive cards
      interactive && 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
    ]

    const cardProps = {
      ref,
      className: cn(baseClasses, className),
      'data-testid': testId,
      ...props,
      ...(interactive && onClick && { 
        onClick,
        role: 'button',
        tabIndex: 0,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick()
          }
        }
      })
    }

    return (
      <div {...cardProps}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card' 