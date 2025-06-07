'use client'

import React from 'react'
import { Button, Container } from '@/components/ui'

function Header() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId.replace('#', ''))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleLogin = () => {
    // TODO: Implement Auth0 login functionality
    console.log('Login clicked')
  }

  return (
    <header className="bg-white shadow-sm border-b border-neutral-100 sticky top-0 z-fixed">
      <Container maxWidth="2xl" padding="md">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-600 cursor-pointer">
              Tois
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#features" 
              className="text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, '#features')}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, '#pricing')}
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              About
            </a>
          </nav>
          
          {/* Login Button */}
          <div className="flex items-center space-x-4">
            <Button 
              color="primary"
              size="md"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export { Header } 