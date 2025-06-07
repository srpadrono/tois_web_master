import { ReactNode } from 'react'

// Base component props
export interface BaseComponentProps {
  className?: string
  children?: ReactNode
  'data-testid'?: string
}

// Size variants
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Color variants
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'

// Button specific types
export interface ButtonProps extends BaseComponentProps {
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  size?: Size
  color?: ColorVariant
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

// Input specific types
export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  onFocus?: () => void
  disabled?: boolean
  error?: boolean
  size?: Size
  fullWidth?: boolean
}

// Card specific types
export interface CardProps extends BaseComponentProps {
  variant?: 'elevated' | 'outlined' | 'filled'
  padding?: Size
  interactive?: boolean
  onClick?: () => void
}

// Badge specific types
export interface BadgeProps extends BaseComponentProps {
  variant?: 'solid' | 'outline' | 'soft'
  color?: ColorVariant
  size?: Size
}

// Icon specific types
export interface IconProps extends BaseComponentProps {
  name?: string
  size?: Size | number
  color?: ColorVariant
  backgroundColor?: ColorVariant
  rounded?: boolean
  placeholder?: boolean
}

// Typography types
export interface TextProps extends BaseComponentProps {
  size?: Size
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: ColorVariant | 'inherit'
  align?: 'left' | 'center' | 'right'
  as?: 'p' | 'span' | 'div'
}

export interface HeadingProps extends BaseComponentProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: Size
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: ColorVariant | 'inherit'
  align?: 'left' | 'center' | 'right'
}

// Layout types
export interface ContainerProps extends BaseComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padding?: Size
  center?: boolean
}

export interface FlexProps extends BaseComponentProps {
  direction?: 'row' | 'column'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  wrap?: boolean
  gap?: Size
}

export interface StackProps extends BaseComponentProps {
  gap?: Size
  align?: 'start' | 'center' | 'end' | 'stretch'
}

// Responsive type helper
export type ResponsiveValue<T> = T | {
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
} 