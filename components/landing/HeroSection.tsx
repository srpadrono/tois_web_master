'use client'

import React from 'react'
import { Button, Container } from '@/components/ui'

function HeroSection() {
  const handleStartTrial = () => {
    // TODO: Implement sign-up flow - redirect to registration
    console.log('Start Free Trial clicked')
    // Future: window.location.href = '/register'
  }

  const handleWatchDemo = () => {
    // TODO: Implement demo modal or video
    console.log('Watch Demo clicked')
    // Future: Open demo modal or redirect to demo page
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="py-20 brand-gradient">
      <Container maxWidth="2xl" padding="lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            Streamline Pediatric
            <span className="text-green-600"> Sensory Therapy</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Empower therapists to create effective home programs and enable caregivers 
            to track progress with our comprehensive therapy management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              color="primary"
              size="lg"
              onClick={handleStartTrial}
              className="transform hover:scale-105"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline"
              color="neutral"
              size="lg"
              onClick={handleWatchDemo}
              className="transform hover:scale-105"
            >
              Watch Demo
            </Button>
          </div>
          
          {/* Additional CTA for scrolling to pricing */}
          <div className="mt-8">
            <button
              onClick={scrollToPricing}
              className="text-green-600 hover:text-green-700 transition-colors font-medium"
            >
              View Pricing →
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { HeroSection } 