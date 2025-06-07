import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { HeroSection } from './HeroSection'

// Mock console.log to track function calls
const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

describe('HeroSection Component', () => {
  beforeEach(() => {
    consoleSpy.mockClear()
  })

  afterAll(() => {
    consoleSpy.mockRestore()
  })

  it('renders the main heading with correct styling', () => {
    render(<HeroSection />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Streamline Pediatric Sensory Therapy')
    
    const coloredText = screen.getByText('Sensory Therapy')
    expect(coloredText).toHaveClass('text-green-600')
  })

  it('renders the descriptive paragraph', () => {
    render(<HeroSection />)
    
    const description = screen.getByText(/Empower therapists to create effective home programs/)
    expect(description).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(<HeroSection />)
    
    const startTrialButton = screen.getByRole('button', { name: /start free trial/i })
    const watchDemoButton = screen.getByRole('button', { name: /watch demo/i })
    
    expect(startTrialButton).toBeInTheDocument()
    expect(watchDemoButton).toBeInTheDocument()
  })

  it('handles Start Free Trial button click', () => {
    render(<HeroSection />)
    
    const startTrialButton = screen.getByRole('button', { name: /start free trial/i })
    fireEvent.click(startTrialButton)
    
    expect(consoleSpy).toHaveBeenCalledWith('Start Free Trial clicked')
  })

  it('handles Watch Demo button click', () => {
    render(<HeroSection />)
    
    const watchDemoButton = screen.getByRole('button', { name: /watch demo/i })
    fireEvent.click(watchDemoButton)
    
    expect(consoleSpy).toHaveBeenCalledWith('Watch Demo clicked')
  })

  it('renders View Pricing link and handles click', () => {
    // Mock getElementById to return a mock element
    const mockElement = {
      scrollIntoView: jest.fn()
    } as HTMLElement & { scrollIntoView: jest.Mock }
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement)

    render(<HeroSection />)
    
    const viewPricingButton = screen.getByRole('button', { name: /view pricing/i })
    expect(viewPricingButton).toBeInTheDocument()
    
    fireEvent.click(viewPricingButton)
    
    expect(document.getElementById).toHaveBeenCalledWith('pricing')
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start'
    })

    // Restore the mock
    jest.restoreAllMocks()
  })

  it('has proper button styling', () => {
    render(<HeroSection />)
    
    const startTrialButton = screen.getByRole('button', { name: /start free trial/i })
    expect(startTrialButton).toHaveClass('bg-green-600')
    expect(startTrialButton).toHaveClass('transform', 'hover:scale-105')
  })

  it('has responsive layout classes', () => {
    render(<HeroSection />)
    
    const buttonContainer = screen.getByRole('button', { name: /start free trial/i }).parentElement
    expect(buttonContainer).toHaveClass('flex-col', 'sm:flex-row')
  })

  it('has proper accessibility attributes', () => {
    render(<HeroSection />)
    
    const startTrialButton = screen.getByRole('button', { name: /start free trial/i })
    const watchDemoButton = screen.getByRole('button', { name: /watch demo/i })
    
    expect(startTrialButton).toHaveClass('focus:outline-none', 'focus:ring-2')
    expect(watchDemoButton).toHaveClass('focus:outline-none', 'focus:ring-2')
  })

  it('applies correct section styling', () => {
    render(<HeroSection />)
    
    const section = screen.getByRole('heading', { level: 1 }).closest('section')
    expect(section).toHaveClass('brand-gradient')
  })
}) 