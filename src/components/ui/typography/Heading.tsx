import { forwardRef, ElementType } from 'react'
import { cn, typographySize, fontWeight, colorVariants } from '@/lib/design-system-utils'
import { HeadingProps } from '../types'

/**
 * Heading component for titles and section headers
 * Supports semantic heading levels (h1-h6), sizes, weights, and colors
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      children,
      level = 2,
      size = 'lg',
      weight = 'semibold',
      color = 'inherit',
      align = 'left',
      className,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const Component = `h${level}` as ElementType

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

Heading.displayName = 'Heading' 