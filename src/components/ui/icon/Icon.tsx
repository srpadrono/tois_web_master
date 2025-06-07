import { forwardRef, CSSProperties } from 'react'
import { cn } from '@/lib/design-system-utils'
import { BaseComponentProps, ColorVariant, Size } from '../types'

interface IconProps extends BaseComponentProps {
  name?: string
  size?: Size | number
  color?: ColorVariant
  backgroundColor?: ColorVariant
  rounded?: boolean
  placeholder?: boolean
}

/**
 * Icon component for displaying icons with consistent sizing and colors
 * Supports both named icons and placeholder shapes
 */
export const Icon = forwardRef<HTMLDivElement, IconProps>(
  (
    {
      children,
      name,
      size = 'md',
      color = 'primary',
      backgroundColor,
      rounded = false,
      placeholder = false,
      className,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      xs: 'w-4 h-4',
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16'
    }

    const backgroundColorClasses = {
      primary: 'bg-green-100',
      secondary: 'bg-neutral-100',
      success: 'bg-emerald-100',
      warning: 'bg-yellow-100',
      error: 'bg-red-100',
      neutral: 'bg-neutral-100'
    }

    const iconColorClasses = {
      primary: 'bg-green-500',
      secondary: 'bg-neutral-500',
      success: 'bg-emerald-600',
      warning: 'bg-yellow-500',
      error: 'bg-red-500',
      neutral: 'bg-neutral-500'
    }

    const baseClasses = [
      // Base styles
      'flex items-center justify-center',
      // Size (only apply if size is a string)
      typeof size === 'string' && sizeClasses[size],
      // Background color (for containers)
      backgroundColor && backgroundColorClasses[backgroundColor],
      // Rounded corners
      rounded && 'rounded-lg',
      // Placeholder icon color
      placeholder && iconColorClasses[color],
      placeholder && 'rounded'
    ]

    // Handle custom numeric size
    const customStyle: CSSProperties | undefined = typeof size === 'number' 
      ? { width: `${size}px`, height: `${size}px` }
      : undefined

    // If it's a placeholder, render a simple colored shape
    if (placeholder) {
      return (
        <div
          ref={ref}
          className={cn(baseClasses, className)}
          data-testid={testId}
          style={customStyle}
          {...props}
        >
          {children || <div className="w-full h-full rounded" />}
        </div>
      )
    }

    // For future icon integration (SVG icons, icon libraries, etc.)
    return (
      <div
        ref={ref}
        className={cn(baseClasses, className)}
        data-testid={testId}
        style={customStyle}
        {...props}
      >
        {children}
        {name && (
          <span className="sr-only">{name}</span>
        )}
      </div>
    )
  }
)

Icon.displayName = 'Icon' 