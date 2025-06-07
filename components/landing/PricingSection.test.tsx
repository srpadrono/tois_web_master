import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { PricingSection } from './PricingSection'

// Mock console.log to track function calls
const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

describe('PricingSection Component', () => {
  beforeEach(() => {
    consoleSpy.mockClear()
  })

  afterAll(() => {
    consoleSpy.mockRestore()
  })

  it('renders section heading and description', () => {
    render(<PricingSection />)
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Simple, Transparent Pricing')
    
    const description = screen.getByText(/Choose the plan that fits your practice size/)
    expect(description).toBeInTheDocument()
  })

  it('renders both pricing tiers', () => {
    render(<PricingSection />)
    
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
    
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
  })

  it('renders "Most Popular" badge for Professional plan', () => {
    render(<PricingSection />)
    
    const popularBadge = screen.getByText('Most Popular')
    expect(popularBadge).toBeInTheDocument()
    expect(popularBadge).toHaveClass('bg-green-600')
  })

  it('displays correct features for each plan', () => {
    render(<PricingSection />)
    
    // Starter plan features
    expect(screen.getByText('Up to 25 clients')).toBeInTheDocument()
    expect(screen.getByText('Activity library access')).toBeInTheDocument()
    expect(screen.getByText('Basic reporting')).toBeInTheDocument()
    
    // Professional plan features
    expect(screen.getByText('Unlimited clients')).toBeInTheDocument()
    expect(screen.getByText('Advanced analytics')).toBeInTheDocument()
    expect(screen.getByText('Custom activities')).toBeInTheDocument()
    expect(screen.getByText('Priority support')).toBeInTheDocument()
  })

  it('renders CTA buttons for both plans', () => {
    render(<PricingSection />)
    
    const ctaButtons = screen.getAllByText('Start Free Trial')
    expect(ctaButtons).toHaveLength(2)
    
    ctaButtons.forEach(button => {
      expect(button).toHaveClass('bg-green-600')
    })
  })

  it('handles plan selection clicks', () => {
    render(<PricingSection />)
    
    const starterButton = screen.getAllByText('Start Free Trial')[0]
    const professionalButton = screen.getAllByText('Start Free Trial')[1]
    
    fireEvent.click(starterButton)
    expect(consoleSpy).toHaveBeenCalledWith('Selected plan: starter (Starter)')
    
    fireEvent.click(professionalButton)
    expect(consoleSpy).toHaveBeenCalledWith('Selected plan: professional (Professional)')
  })

  it('displays trial information', () => {
    render(<PricingSection />)
    
    const trialInfo = screen.getByText(/All plans include a 14-day free trial/)
    expect(trialInfo).toBeInTheDocument()
  })

  it('renders contact sales link', () => {
    render(<PricingSection />)
    
    const contactLink = screen.getByText('Contact our sales team')
    expect(contactLink).toBeInTheDocument()
  })

  it('renders contact sales link with correct styling', () => {
    render(<PricingSection />)
    
    const contactLink = screen.getByText('Contact our sales team')
    expect(contactLink).toBeInTheDocument()
    expect(contactLink).toHaveClass('text-green-600')
  })

  it('has proper accessibility attributes for CTA buttons', () => {
    render(<PricingSection />)
    
    const buttons = screen.getAllByText('Start Free Trial')
    
    buttons.forEach(button => {
      expect(button).toHaveClass('focus:outline-none', 'focus:ring-2')
    })
  })

  it('has proper card styling and layout', () => {
    render(<PricingSection />)
    
    const starterCard = screen.getByText('Starter').closest('div')
    const professionalCard = screen.getByText('Professional').closest('div')
    
    expect(starterCard).toHaveClass('bg-white', 'rounded-lg', 'shadow-lg')
    expect(professionalCard).toHaveClass('bg-white', 'rounded-lg', 'shadow-lg')
  })

  it('applies correct background styling', () => {
    render(<PricingSection />)
    
    const section = screen.getByRole('heading', { level: 2 }).closest('section')
    expect(section).toHaveClass('bg-neutral-50')
  })

  it('highlights popular plan with border', () => {
    render(<PricingSection />)
    
    const professionalCard = screen.getByText('Professional').closest('div')
    expect(professionalCard).toHaveClass('border-2', 'border-green-500')
  })
}) 