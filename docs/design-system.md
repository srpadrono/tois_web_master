# Design System Documentation

## Overview

This design system provides a comprehensive set of design tokens, components, and utilities for building consistent and accessible user interfaces in our Next.js application.

## Architecture

### 1. Design Tokens (`src/lib/design-tokens.ts`)

Design tokens are the foundation of our design system, providing a single source of truth for all design values.

#### Color System
- **Brand Colors**: Primary brand identity colors with full scale (50-950)
- **Neutral Colors**: Grayscale palette for text, backgrounds, and borders
- **Semantic Colors**: Success, warning, error, and info colors

#### Typography
- **Font Families**: Inter for UI, JetBrains Mono for code
- **Font Sizes**: Consistent scale from xs to 6xl with proper line heights
- **Font Weights**: Normal, medium, semibold, bold

#### Spacing
- **Consistent Scale**: Based on rem units from 0 to 96
- **Predictable Increments**: Easy to remember and apply

#### Other Tokens
- Border radius, shadows, z-index scale, animation values, breakpoints

### 2. Utility Functions (`src/lib/design-system-utils.ts`)

Utility functions for component development and style composition.

#### Key Functions
- `cn()`: Combines and merges Tailwind classes
- `sizeMap`: Maps size variants to Tailwind classes
- `colorVariants`: Maps color variants for different component types
- Design token accessors and responsive helpers

### 3. Component Library (`src/components/ui/`)

Reusable, accessible components built on design tokens.

#### Organization
```
src/components/ui/
├── index.ts              # Barrel exports
├── types.ts              # TypeScript interfaces
├── button/
│   └── Button.tsx
├── layout/
│   ├── Container.tsx
│   ├── Stack.tsx
│   └── Grid.tsx
├── form/
│   ├── Input.tsx
│   └── FormField.tsx
└── ...
```

## Usage Examples

### Importing Components

```tsx
// Import specific components
import { Button, Container } from '@/components/ui'

// Or import from specific paths
import { Button } from '@/components/ui/button/Button'
```

### Button Component

```tsx
// Basic usage
<Button>Click me</Button>

// With variants and props
<Button 
  variant="outline" 
  size="lg" 
  color="success"
  onClick={handleClick}
>
  Success Action
</Button>

// Loading state
<Button loading>Processing...</Button>

// Full width
<Button fullWidth>Full Width Button</Button>
```

### Container Component

```tsx
// Basic container
<Container>
  <h1>Page Content</h1>
</Container>

// Custom max width and padding
<Container maxWidth="2xl" padding="lg">
  <div>Wider container with more padding</div>
</Container>
```

### Using Design Tokens

```tsx
import { designTokens } from '@/lib/design-tokens'

// Access tokens directly
const brandColor = designTokens.colors.brand[500]
const spacing = designTokens.spacing[4]

// Use with Tailwind CSS
<div className="bg-brand-500 p-4 rounded-md">
  Token-based styling
</div>
```

### Custom Components with Design System

```tsx
import { cn, sizeMap, colorVariants } from '@/lib/design-system-utils'
import { BaseComponentProps, Size, ColorVariant } from '@/components/ui/types'

interface CustomComponentProps extends BaseComponentProps {
  size?: Size
  color?: ColorVariant
}

function CustomComponent({ 
  size = 'md', 
  color = 'primary', 
  className,
  children 
}: CustomComponentProps) {
  return (
    <div 
      className={cn(
        'rounded-md border',
        sizeMap[size],
        colorVariants.background[color],
        className
      )}
    >
      {children}
    </div>
  )
}
```

## Best Practices

### 1. Component Development

- **Use design tokens**: Always reference design tokens instead of hard-coded values
- **Implement variants**: Provide consistent variant options (size, color, style)
- **Include accessibility**: Add proper ARIA attributes and keyboard navigation
- **Forward refs**: Use `forwardRef` for DOM elements that might need refs
- **TypeScript**: Define proper interfaces extending `BaseComponentProps`

### 2. Styling Guidelines

- **Tailwind + Design Tokens**: Use Tailwind classes that map to design tokens
- **Consistent naming**: Follow established naming conventions for variants
- **Responsive design**: Use responsive utilities when needed
- **No magic numbers**: All values should come from design tokens

### 3. Testing

- **Unit tests**: Test component behavior and props
- **Accessibility tests**: Use testing-library/jest-dom for a11y assertions
- **Visual regression**: Consider adding visual testing for UI consistency

### 4. Documentation

- **Component docs**: Document props, variants, and usage examples
- **Design token docs**: Keep token documentation up to date
- **Migration guides**: Document breaking changes and migration paths

## Extending the Design System

### Adding New Components

1. Create component directory in `src/components/ui/`
2. Define TypeScript interfaces in `types.ts`
3. Implement component using design tokens and utilities
4. Add to barrel exports in `index.ts`
5. Write tests and documentation
6. Update this documentation

### Adding New Design Tokens

1. Add tokens to `design-tokens.ts`
2. Update Tailwind config if needed
3. Add utility mappings in `design-system-utils.ts`
4. Update TypeScript types if needed
5. Document new tokens

### Creating Variants

```tsx
// Define variant mapping
const variants = {
  size: {
    sm: 'text-sm p-2',
    md: 'text-base p-4',
    lg: 'text-lg p-6'
  },
  color: {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white'
  }
}

// Use in component
<div className={cn(variants.size[size], variants.color[color])}>
  Content
</div>
```

## Integration with Existing Code

### Migration Strategy

1. **Gradual adoption**: Start with new components, migrate existing ones over time
2. **Design token mapping**: Create mapping from existing styles to design tokens
3. **Component replacement**: Replace hard-coded components with design system versions
4. **Style cleanup**: Remove duplicate styles and consolidate design decisions

### Coexistence

The design system is designed to coexist with existing code:
- Components can be adopted incrementally
- Design tokens can be used alongside existing styles
- Utility functions work with any styling approach

## Tools and Dependencies

### Required Dependencies
- `clsx`: For conditional class composition
- `tailwind-merge`: For proper Tailwind class merging
- `tailwindcss`: For utility-first CSS framework

### Recommended Tools
- **Storybook**: For component documentation and testing
- **Chromatic**: For visual regression testing
- **Design tokens tools**: For synchronizing with design tools

## Future Enhancements

### Planned Features
- [ ] Dark mode support
- [ ] Animation system
- [ ] Icon library integration
- [ ] Form validation components
- [ ] Data visualization components
- [ ] Mobile-specific components

### Design Token Evolution
- [ ] Semantic token system
- [ ] Theme switching capabilities
- [ ] Design tool integration (Figma tokens)
- [ ] CSS custom properties output

This design system provides a solid foundation for building consistent, accessible, and maintainable user interfaces while allowing for future growth and customization. 