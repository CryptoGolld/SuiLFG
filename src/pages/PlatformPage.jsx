import { Navigation } from '@/components/layout/Navigation.jsx'
import { Footer } from '@/components/layout/Footer.jsx'
import { PlatformSection } from '@/components/sections/PlatformSection.jsx'
import { SEO } from '@/components/common/SEO.jsx'

export function PlatformPage() {
  return (
    <>
      <SEO 
        title="Platform"
        description="Explore SuiLFG's robust platform architecture with Market Factory, Hybrid Trading, Oracle System, and advanced dispute resolution mechanisms."
      />
      <div className="App">
        <Navigation />
        <main className="pt-16">
          <PlatformSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
