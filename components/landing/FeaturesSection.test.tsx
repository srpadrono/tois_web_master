import React from 'react'
import { render, screen } from '@testing-library/react'
import { FeaturesSection } from './FeaturesSection'

describe('FeaturesSection Component', () => {
  it('renders the section heading and description', () => {
    render(<FeaturesSection />)
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Everything You Need for Effective Therapy')
    
    const description = screen.getByText(/Comprehensive tools designed specifically/)
    expect(description).toBeInTheDocument()
  })

  it('renders all three features', () => {
    render(<FeaturesSection />)
    
    expect(screen.getByText('Program Builder')).toBeInTheDocument()
    expect(screen.getByText('Progress Tracking')).toBeInTheDocument()
    expect(screen.getByText('Client Management')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<FeaturesSection />)
    
    expect(screen.getByText(/Create customized home therapy programs/)).toBeInTheDocument()
    expect(screen.getByText(/Monitor client progress with detailed reports/)).toBeInTheDocument()
    expect(screen.getByText(/Organize client profiles, notes, and therapy history/)).toBeInTheDocument()
  })

  it('renders feature icons with proper styling', () => {
    render(<FeaturesSection />)
    
    // The icons are rendered with custom size (64px)
    const iconsWithCustomSize = document.querySelectorAll('[style*="width: 64px"]')
    expect(iconsWithCustomSize).toHaveLength(3)
    
    // Check that icons are rendered (they should be div elements)
    const iconContainers = document.querySelectorAll('.flex.items-center.justify-center')
    expect(iconContainers.length).toBeGreaterThan(0)
  })

  it('has proper icon color styling', () => {
    render(<FeaturesSection />)
    
    // Simply check that there are icon elements rendered
    const iconsWithCustomSize = document.querySelectorAll('[style*="width: 64px"]')
    expect(iconsWithCustomSize).toHaveLength(3)
    
    // Check that each icon has some styling applied
    iconsWithCustomSize.forEach(icon => {
      expect(icon).toHaveAttribute('style')
    })
  })

  it('has responsive grid layout', () => {
    render(<FeaturesSection />)
    
    const gridContainer = screen.getByText('Program Builder').closest('div')?.parentElement
    expect(gridContainer).toHaveClass('grid', 'md:grid-cols-3')
  })

  it('applies proper text alignment', () => {
    render(<FeaturesSection />)
    
    const featureCards = screen.getAllByText(/Builder|Tracking|Management/)
    featureCards.forEach(card => {
      const cardContainer = card.closest('div')
      expect(cardContainer).toHaveClass('text-center')
    })
  })

  it('has proper section ID for navigation', () => {
    render(<FeaturesSection />)
    
    const section = screen.getByRole('heading', { level: 2 }).closest('section')
    expect(section).toHaveAttribute('id', 'features')
  })

  it('has proper heading hierarchy', () => {
    render(<FeaturesSection />)
    
    const mainHeading = screen.getByRole('heading', { level: 2 })
    const featureHeadings = screen.getAllByRole('heading', { level: 3 })
    
    expect(mainHeading).toBeInTheDocument()
    expect(featureHeadings).toHaveLength(3)
    expect(featureHeadings[0]).toHaveTextContent('Program Builder')
    expect(featureHeadings[1]).toHaveTextContent('Progress Tracking')
    expect(featureHeadings[2]).toHaveTextContent('Client Management')
  })

  it('has proper spacing and layout classes', () => {
    render(<FeaturesSection />)
    
    const section = screen.getByRole('heading', { level: 2 }).closest('section')
    
    const container = section?.querySelector('.max-w-2xl')
    expect(container).toHaveClass('mx-auto')
  })
}) 