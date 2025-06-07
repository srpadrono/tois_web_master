import React from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { HeroSection } from '../../components/landing/HeroSection'
import { FeaturesSection } from '../../components/landing/FeaturesSection'
import { PricingSection } from '../../components/landing/PricingSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Pricing Section */}
        <PricingSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
