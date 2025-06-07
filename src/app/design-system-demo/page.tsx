import { Button, Container } from '@/components/ui'

export default function DesignSystemDemo () {
  return (
    <Container maxWidth="2xl" padding="lg">
      <div className="space-y-12 py-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Tois Design System Demo
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our design system components with consistent styling, 
            accessibility features, and TypeScript support for the Tois platform.
          </p>
        </div>

        {/* Button Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Button Variants</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-neutral-700 mb-3">Solid Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button color="primary">Primary (Tois Green)</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="error">Error</Button>
                <Button color="neutral">Neutral</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-700 mb-3">Outline Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" color="primary">Primary</Button>
                <Button variant="outline" color="secondary">Secondary</Button>
                <Button variant="outline" color="success">Success</Button>
                <Button variant="outline" color="warning">Warning</Button>
                <Button variant="outline" color="error">Error</Button>
                <Button variant="outline" color="neutral">Neutral</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-700 mb-3">Ghost Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="ghost" color="primary">Primary</Button>
                <Button variant="ghost" color="secondary">Secondary</Button>
                <Button variant="ghost" color="success">Success</Button>
                <Button variant="ghost" color="warning">Warning</Button>
                <Button variant="ghost" color="error">Error</Button>
                <Button variant="ghost" color="neutral">Neutral</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-700 mb-3">Link Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="link" color="primary">Primary Link</Button>
                <Button variant="link" color="secondary">Secondary Link</Button>
                <Button variant="link" color="success">Success Link</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Button Sizes</h2>
          <div className="flex flex-wrap items-end gap-3">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </section>

        {/* Button States */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Button States</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        </section>

        {/* Layout Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Layout Components</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-neutral-700 mb-3">Container Examples</h3>
              <div className="space-y-3">
                <Container maxWidth="sm" className="bg-green-50 p-4 rounded">
                  <p className="text-center">Small Container (max-w-sm)</p>
                </Container>
                <Container maxWidth="md" className="bg-emerald-50 p-4 rounded">
                  <p className="text-center">Medium Container (max-w-md)</p>
                </Container>
                <Container maxWidth="lg" className="bg-yellow-50 p-4 rounded">
                  <p className="text-center">Large Container (max-w-lg)</p>
                </Container>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Button */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Full Width Button</h2>
          <Button fullWidth size="lg">
            Full Width Button
          </Button>
        </section>

        {/* Design Tokens Preview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Tois Design Tokens</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-neutral-700 mb-3">Brand Colors (Tois Green)</h3>
              <div className="grid grid-cols-5 gap-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div key={shade} className="text-center">
                    <div 
                      className={`w-full h-12 rounded-md bg-green-${shade} border border-neutral-200`}
                    />
                    <span className="text-xs text-neutral-600 mt-1 block">{shade}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-500 mt-2">
                Primary brand color: <span className="text-green-600 font-medium">#2b9348</span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-700 mb-3">Neutral Colors</h3>
              <div className="grid grid-cols-5 gap-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div key={shade} className="text-center">
                    <div 
                      className={`w-full h-12 rounded-md bg-neutral-${shade} border border-neutral-200`}
                    />
                    <span className="text-xs text-neutral-600 mt-1 block">{shade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Typography Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Typography</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-6xl font-bold text-green-600 mb-2">Tois</h1>
              <p className="text-neutral-600">Brand name in primary color</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                Streamline Pediatric Sensory Therapy
              </h3>
              <p className="text-lg text-neutral-600">
                Our design system ensures consistent, accessible, and beautiful interfaces
                for the Tois therapy management platform.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
} 