import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from './Header'

// Mock console.log to track function calls
const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

describe('Header Component', () => {
  beforeEach(() => {
    consoleSpy.mockClear()
  })

  afterAll(() => {
    consoleSpy.mockRestore()
  })

  it('renders the Tois logo', () => {
    render(<Header />)
    const logo = screen.getByText('Tois')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveClass('text-green-600')
  })

  it('renders navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders login button', () => {
    render(<Header />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
    expect(loginButton).toHaveClass('bg-green-600')
  })

  it('calls handleLogin when login button is clicked', () => {
    render(<Header />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    
    fireEvent.click(loginButton)
    
    expect(consoleSpy).toHaveBeenCalledWith('Login clicked')
  })

  it('has proper navigation link attributes', () => {
    render(<Header />)
    
    const featuresLink = screen.getByText('Features')
    const pricingLink = screen.getByText('Pricing')
    const aboutLink = screen.getByText('About')
    
    expect(featuresLink).toHaveAttribute('href', '#features')
    expect(pricingLink).toHaveAttribute('href', '#pricing')
    expect(aboutLink).toHaveAttribute('href', '#about')
  })

  it('handles smooth scroll navigation clicks', () => {
    // Mock getElementById to return a mock element
    const mockElement = {
      scrollIntoView: jest.fn()
    } as HTMLElement & { scrollIntoView: jest.Mock }
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement)

    render(<Header />)
    const featuresLink = screen.getByText('Features')
    
    fireEvent.click(featuresLink)
    
    expect(document.getElementById).toHaveBeenCalledWith('features')
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start'
    })

    // Restore the mock
    jest.restoreAllMocks()
  })

  it('has proper accessibility attributes', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toHaveClass('focus:outline-none', 'focus:ring-2')
  })

  it('applies responsive classes correctly', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('hidden', 'md:flex')
  })
}) 