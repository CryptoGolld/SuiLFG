import { Navigation } from '@/components/layout/Navigation.jsx'
import { Footer } from '@/components/layout/Footer.jsx'
import { TestnetSection } from '@/components/sections/TestnetSection.jsx'
import { SEO } from '@/components/common/SEO.jsx'

export default function TestnetPage() {
  return (
    <>
      <SEO 
        title="Testnet"
        description="Join SuiLFG's testnet launch and be among the first to experience revolutionary anti-whale prediction markets. Get early access benefits and NFT airdrop eligibility."
      />
      <div className="App">
        <Navigation />
        <main className="pt-16">
          <TestnetSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
