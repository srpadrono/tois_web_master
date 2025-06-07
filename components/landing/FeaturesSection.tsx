import React from 'react'
import { Container, Card, Heading, Text, Icon } from '@/components/ui'

interface Feature {
  id: string
  title: string
  description: string
  iconColor: 'primary' | 'success' | 'secondary'
}

const features: Feature[] = [
  {
    id: 'program-builder',
    title: 'Program Builder',
    description: 'Create customized home therapy programs with our extensive activity library',
    iconColor: 'primary'
  },
  {
    id: 'progress-tracking',
    title: 'Progress Tracking',
    description: 'Monitor client progress with detailed reports and caregiver feedback',
    iconColor: 'success'
  },
  {
    id: 'client-management',
    title: 'Client Management',
    description: 'Organize client profiles, notes, and therapy history in one place',
    iconColor: 'secondary'
  }
]

function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <Container maxWidth="2xl" padding="lg">
        <div className="text-center mb-16">
          <Heading 
            level={2} 
            size="xl" 
            className="mb-4"
          >
            Everything You Need for Effective Therapy
          </Heading>
          <Text 
            size="lg" 
            color="secondary" 
            className="max-w-2xl mx-auto"
          >
            Comprehensive tools designed specifically for pediatric sensory therapy management
          </Text>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              variant="outlined" 
              padding="lg"
              className="text-center"
            >
              <Icon
                size={64}
                backgroundColor={feature.iconColor}
                color={feature.iconColor}
                rounded
                placeholder
                className="mx-auto mb-4"
              />
              <Heading 
                level={3} 
                size="lg" 
                className="mb-2"
              >
                {feature.title}
              </Heading>
              <Text color="secondary">
                {feature.description}
              </Text>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { FeaturesSection } 