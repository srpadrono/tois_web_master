'use client'

import React from 'react'
import { Button, Container, Card, Badge, Heading, Text } from '@/components/ui'

interface PricingTier {
  id: string
  name: string
  price: number
  period: string
  features: string[]
  isPopular?: boolean
  buttonText: string
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    period: 'month',
    features: [
      'Up to 25 clients',
      'Activity library access',
      'Basic reporting'
    ],
    buttonText: 'Start Free Trial'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 59,
    period: 'month',
    features: [
      'Unlimited clients',
      'Advanced analytics',
      'Custom activities',
      'Priority support'
    ],
    isPopular: true,
    buttonText: 'Start Free Trial'
  }
]

function PricingSection() {
  const handleSelectPlan = (planId: string, planName: string) => {
    // TODO: Implement plan selection and checkout flow
    console.log(`Selected plan: ${planId} (${planName})`)
    // Future: Redirect to checkout with selected plan
    // window.location.href = `/checkout?plan=${planId}`
  }

  return (
    <section id="pricing" className="py-20 bg-neutral-50">
      <Container maxWidth="2xl" padding="lg">
        <div className="text-center mb-16">
          <Heading 
            level={2} 
            size="xl" 
            className="mb-4"
          >
            Simple, Transparent Pricing
          </Heading>
          <Text 
            size="lg" 
            color="secondary" 
            className="max-w-2xl mx-auto"
          >
            Choose the plan that fits your practice size and needs
          </Text>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              variant="elevated"
              padding="lg"
              interactive
              className={`transition-transform hover:scale-105 ${
                tier.isPopular ? 'border-2 border-green-500' : ''
              }`}
            >
              {tier.isPopular && (
                <Badge 
                  color="primary" 
                  size="md" 
                  className="mb-4"
                >
                  Most Popular
                </Badge>
              )}
              
              <Heading 
                level={3} 
                size="lg" 
                className="mb-4"
              >
                {tier.name}
              </Heading>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-neutral-900">
                  ${tier.price}
                </span>
                <Text as="span" color="secondary">
                  /{tier.period}
                </Text>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <Text color="secondary">
                      {feature}
                    </Text>
                  </li>
                ))}
              </ul>
              
              <Button 
                color="primary"
                size="lg"
                fullWidth
                onClick={() => handleSelectPlan(tier.id, tier.name)}
                className="transform hover:scale-105"
              >
                {tier.buttonText}
              </Button>
            </Card>
          ))}
        </div>
        
        {/* Additional information */}
        <div className="text-center mt-12">
          <Text color="secondary" className="mb-4">
            All plans include a 14-day free trial. No credit card required.
          </Text>
          <Text size="sm" color="secondary">
            Need a custom plan? 
            <button className="text-green-600 hover:text-green-700 underline ml-1">
              Contact our sales team
            </button>
          </Text>
        </div>
      </Container>
    </section>
  )
}

export { PricingSection } 