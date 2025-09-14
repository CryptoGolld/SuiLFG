import { Navigation } from '@/components/layout/Navigation.jsx'
import { Footer } from '@/components/layout/Footer.jsx'
import { NFTGovernanceSection } from '@/components/sections/NFTGovernanceSection.jsx'
import { VotingFormulaSection } from '@/components/sections/VotingFormulaSection.jsx'
import { SEO } from '@/components/common/SEO.jsx'

export default function GovernancePage() {
  return (
    <>
      <SEO 
        title="Governance"
        description="Discover SuiLFG's revolutionary NFT-powered governance system with three tiers: Voters, Governors, and Council. Learn how voting power is calculated."
      />
      <div className="App">
        <Navigation />
        <main className="pt-16">
          <NFTGovernanceSection />
          <VotingFormulaSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
