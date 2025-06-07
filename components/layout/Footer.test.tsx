import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer Component', () => {
  it('renders the company branding section', () => {
    render(<Footer />)
    
    const companyName = screen.getByText('Tois')
    expect(companyName).toBeInTheDocument()
    
    const description = screen.getByText(/Streamlining pediatric sensory therapy/)
    expect(description).toBeInTheDocument()
  })

  it('renders all footer sections', () => {
    render(<Footer />)
    
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
  })

  it('renders Product section links', () => {
    render(<Footer />)
    
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Demo')).toBeInTheDocument()
  })

  it('renders Support section links', () => {
    render(<Footer />)
    
    expect(screen.getByText('Help Center')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Training')).toBeInTheDocument()
  })

  it('renders Company section links', () => {
    render(<Footer />)
    
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
    expect(screen.getByText('Terms')).toBeInTheDocument()
  })

  it('has correct link attributes', () => {
    render(<Footer />)
    
    const featuresLink = screen.getByRole('link', { name: 'Features' })
    const helpLink = screen.getByRole('link', { name: 'Help Center' })
    const aboutLink = screen.getByRole('link', { name: 'About' })
    
    expect(featuresLink).toHaveAttribute('href', '#features')
    expect(helpLink).toHaveAttribute('href', '/help')
    expect(aboutLink).toHaveAttribute('href', '/about')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    
    const currentYear = new Date().getFullYear()
    const copyright = screen.getByText(new RegExp(`© ${currentYear} Tois. All rights reserved.`))
    expect(copyright).toBeInTheDocument()
  })

  it('applies responsive grid layout', () => {
    render(<Footer />)
    
    const gridContainer = screen.getByText('Product').closest('div')?.parentElement
    expect(gridContainer).toHaveClass('grid', 'md:grid-cols-4')
  })

  it('has proper footer styling', () => {
    render(<Footer />)
    
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-neutral-900', 'text-white', 'py-12')
  })

  it('has proper link hover effects', () => {
    render(<Footer />)
    
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveClass('hover:text-white', 'transition-colors')
    })
  })

  it('has proper heading hierarchy', () => {
    render(<Footer />)
    
    const mainHeading = screen.getByRole('heading', { level: 3, name: 'Tois' })
    const sectionHeadings = screen.getAllByRole('heading', { level: 4 })
    
    expect(mainHeading).toBeInTheDocument()
    expect(sectionHeadings).toHaveLength(3)
    expect(sectionHeadings[0]).toHaveTextContent('Product')
    expect(sectionHeadings[1]).toHaveTextContent('Support')
    expect(sectionHeadings[2]).toHaveTextContent('Company')
  })

  it('has proper section spacing', () => {
    render(<Footer />)
    
    const footer = screen.getByRole('contentinfo')
    const container = footer.querySelector('.max-w-2xl')
    
    expect(container).toHaveClass('mx-auto')
  })

  it('has copyright section with proper styling', () => {
    render(<Footer />)
    
    const copyrightSection = screen.getByText(/© \d{4} Tois/).parentElement
    expect(copyrightSection).toHaveClass('border-t', 'border-neutral-800', 'mt-8', 'pt-8', 'text-center', 'text-neutral-400')
  })

  it('renders all expected links with proper structure', () => {
    render(<Footer />)
    
    // Count all links (excluding the company name heading)
    const allLinks = screen.getAllByRole('link')
    expect(allLinks).toHaveLength(9) // 3 Product + 3 Support + 3 Company
  })
}) 