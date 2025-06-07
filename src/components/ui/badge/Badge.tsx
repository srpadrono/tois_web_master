import { forwardRef } from 'react'
import { cn } from '@/lib/design-system-utils'
import { BaseComponentProps, ColorVariant, Size } from '../types'

interface BadgeProps extends BaseComponentProps {
  variant?: 'solid' | 'outline' | 'soft'
  color?: ColorVariant
  size?: Size
}

/**
 * Badge component for labels, status indicators, and tags
 * Supports different variants, colors, and sizes
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'solid',
      color = 'primary',
      size = 'sm',
      className,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      xs: 'px-1.5 py-0.5 text-xs',
      sm: 'px-2.5 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-sm',
      xl: 'px-5 py-2 text-base'
    }

    const variantClasses = {
      solid: {
        primary: 'bg-green-600 text-white',
        secondary: 'bg-neutral-600 text-white',
        success: 'bg-emerald-600 text-white',
        warning: 'bg-yellow-600 text-white',
        error: 'bg-red-600 text-white',
        neutral: 'bg-neutral-800 text-white'
      },
      outline: {
        primary: 'border border-green-600 text-green-600 bg-transparent',
        secondary: 'border border-neutral-600 text-neutral-600 bg-transparent',
        success: 'border border-emerald-600 text-emerald-600 bg-transparent',
        warning: 'border border-yellow-600 text-yellow-600 bg-transparent',
        error: 'border border-red-600 text-red-600 bg-transparent',
        neutral: 'border border-neutral-800 text-neutral-800 bg-transparent'
      },
      soft: {
        primary: 'bg-green-100 text-green-800',
        secondary: 'bg-neutral-100 text-neutral-800',
        success: 'bg-emerald-100 text-emerald-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
        neutral: 'bg-neutral-100 text-neutral-800'
      }
    }

    const baseClasses = [
      // Base styles
      'inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap',
      // Size
      sizeClasses[size],
      // Variant and color
      variantClasses[variant][color]
    ]

    return (
      <span
        ref={ref}
        className={cn(baseClasses, className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge' 