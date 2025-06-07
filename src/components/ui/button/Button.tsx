import { forwardRef } from 'react'
import { cn, sizeMap, colorVariants, focusRing, transition } from '@/lib/design-system-utils'
import { ButtonProps } from '../types'

/**
 * Button component following design system principles
 * Supports multiple variants, sizes, colors, and states
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'solid',
      size = 'md',
      color = 'primary',
      disabled = false,
      loading = false,
      fullWidth = false,
      type = 'button',
      className,
      onClick,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      // Base styles
      'inline-flex items-center justify-center rounded-md font-medium',
      // Focus and transition
      focusRing,
      transition,
      // Size
      sizeMap[size],
      // Variant and color
      colorVariants.button[variant]?.[color] || colorVariants.button.solid.primary,
      // State modifiers
      disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
      loading && 'cursor-wait',
      fullWidth && 'w-full',
      // Outline variant specific styles
      variant === 'outline' && 'border',
      // Link variant specific styles
      variant === 'link' && 'underline-offset-4 hover:underline'
    ]

    return (
      <button
        ref={ref}
        type={type}
        className={cn(baseClasses, className)}
        disabled={disabled || loading}
        onClick={onClick}
        data-testid={testId}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button' 