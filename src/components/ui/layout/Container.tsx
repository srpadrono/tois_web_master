import { forwardRef } from 'react'
import { cn } from '@/lib/design-system-utils'
import { ContainerProps } from '../types'

/**
 * Container component for consistent page layout and max-width constraints
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      maxWidth = 'xl',
      padding = 'md',
      center = true,
      className,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const maxWidthClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      full: 'max-w-full'
    }

    const paddingClasses = {
      xs: 'px-2',
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
      xl: 'px-10'
    }

    const baseClasses = [
      'w-full',
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
      center && 'mx-auto'
    ]

    return (
      <div
        ref={ref}
        className={cn(baseClasses, className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container' 