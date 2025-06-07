import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { designTokens } from './design-tokens'
import { Size } from '@/components/ui/types'

/**
 * Utility function to combine and merge Tailwind classes
 * Combines clsx for conditional classes with tailwind-merge for proper Tailwind precedence
 */
export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Size mapping to Tailwind classes
 */
export const sizeMap: Record<Size, string> = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3',
  xl: 'text-xl px-8 py-4'
}

/**
 * Color variant mapping for different component types
 */
export const colorVariants = {
  button: {
    solid: {
      primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
      secondary: 'bg-neutral-600 text-white hover:bg-neutral-700 focus:ring-neutral-500',
      success: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500',
      warning: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500',
      error: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      neutral: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-500'
    },
    outline: {
      primary: 'border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
      secondary: 'border-neutral-600 text-neutral-600 hover:bg-neutral-50 focus:ring-neutral-500',
      success: 'border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500',
      warning: 'border-yellow-600 text-yellow-600 hover:bg-yellow-50 focus:ring-yellow-500',
      error: 'border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500',
      neutral: 'border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-500'
    },
    ghost: {
      primary: 'text-green-600 hover:bg-green-50 focus:ring-green-500',
      secondary: 'text-neutral-600 hover:bg-neutral-50 focus:ring-neutral-500',
      success: 'text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500',
      warning: 'text-yellow-600 hover:bg-yellow-50 focus:ring-yellow-500',
      error: 'text-red-600 hover:bg-red-50 focus:ring-red-500',
      neutral: 'text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-500'
    },
    link: {
      primary: 'text-green-600 hover:text-green-700 focus:ring-green-500',
      secondary: 'text-neutral-600 hover:text-neutral-700 focus:ring-neutral-500',
      success: 'text-emerald-600 hover:text-emerald-700 focus:ring-emerald-500',
      warning: 'text-yellow-600 hover:text-yellow-700 focus:ring-yellow-500',
      error: 'text-red-600 hover:text-red-700 focus:ring-red-500',
      neutral: 'text-neutral-700 hover:text-neutral-800 focus:ring-neutral-500'
    }
  },
  text: {
    primary: 'text-green-600',
    secondary: 'text-neutral-600',
    success: 'text-emerald-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    neutral: 'text-neutral-900'
  },
  background: {
    primary: 'bg-green-50',
    secondary: 'bg-neutral-50',
    success: 'bg-emerald-50',
    warning: 'bg-yellow-50',
    error: 'bg-red-50',
    neutral: 'bg-neutral-50'
  }
}

/**
 * Typography size mapping
 */
export const typographySize: Record<Size, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
}

/**
 * Font weight mapping
 */
export const fontWeight = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

/**
 * Spacing utilities based on design tokens
 */
export const spacing = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8'
}

/**
 * Focus ring utility
 */
export const focusRing = 'focus:outline-none focus:ring-2 focus:ring-offset-2'

/**
 * Transition utility
 */
export const transition = 'transition-colors duration-200 ease-in-out'

/**
 * Helper to get design token values
 */
export function getDesignToken (path: string): unknown {
  return path.split('.').reduce((obj: Record<string, unknown>, key) => {
    return obj?.[key] as Record<string, unknown>
  }, designTokens as Record<string, unknown>)
}

/**
 * Helper to generate responsive classes
 */
export function responsive (value: string | Record<string, string>): string {
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value)
      .map(([breakpoint, val]) => {
        const prefix = breakpoint === 'base' ? '' : `${breakpoint}:`
        return `${prefix}${val}`
      })
      .join(' ')
  }
  return value
}

/**
 * Helper to generate component variants
 */
export function createVariants<T extends Record<string, unknown>> (variants: T): T {
  return variants
}

/**
 * Helper to apply conditional styles
 */
export function when (condition: boolean, classes: string): string {
  return condition ? classes : ''
} 