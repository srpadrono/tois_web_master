import { forwardRef, ElementType } from 'react'
import { cn, typographySize, fontWeight, colorVariants } from '@/lib/design-system-utils'
import { TextProps } from '../types'

/**
 * Text component for body text and inline content
 * Supports multiple sizes, weights, colors, and text alignment
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      size = 'md',
      weight = 'normal',
      color = 'inherit',
      align = 'left',
      as = 'p',
      className,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const Component = as as ElementType

    const baseClasses = [
      // Typography size
      typographySize[size],
      // Font weight
      fontWeight[weight],
      // Text color
      color !== 'inherit' && colorVariants.text[color],
      // Text alignment
      `text-${align}`
    ]

    return (
      <Component
        ref={ref}
        className={cn(baseClasses, className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Text.displayName = 'Text' 