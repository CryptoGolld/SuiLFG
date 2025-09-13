import { Navigation } from '@/components/layout/Navigation.jsx'
import { Footer } from '@/components/layout/Footer.jsx'
import { HeroSection } from '@/components/sections/HeroSection.jsx'
import { ProblemSolutionSection } from '@/components/sections/ProblemSolutionSection.jsx'
import { NFTGovernanceSection } from '@/components/sections/NFTGovernanceSection.jsx'
import { LiquidStakingSection } from '@/components/sections/LiquidStakingSection.jsx'
import { VotingFormulaSection } from '@/components/sections/VotingFormulaSection.jsx'
import { SEO } from '@/components/common/SEO.jsx'

export function HomePage() {
  return (
    <>
      <SEO 
        title="Home"
        description="Welcome to SuiLFG, the decentralized prediction market on Sui where your vote can't be bought. Experience revolutionary anti-whale governance."
      />
      <div className="App">
        <Navigation />
        <main>
          <HeroSection />
          <ProblemSolutionSection />
          <NFTGovernanceSection />
          <LiquidStakingSection />
          <VotingFormulaSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
