import { Navigation } from '@/components/layout/Navigation.jsx'
import { Footer } from '@/components/layout/Footer.jsx'
import { SEO } from '@/components/common/SEO.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { 
  Coins, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Target,
  Award,
  BarChart3,
  PieChart,
  DollarSign,
  Lock,
  Vote,
  Stethoscope
} from 'lucide-react'

export default function TokenomicsPage() {
  const tokenAllocation = [
    {
      category: "Community & Ecosystem",
      percentage: "30%",
      amount: "300,000,000",
      purpose: "Reward early users, fund community grants, incentivize platform usage",
      icon: Users,
      color: "from-cyan-400 to-blue-500"
    },
    {
      category: "NFT Holder Airdrop",
      percentage: "10%",
      amount: "100,000,000",
      purpose: "Direct reward for foundational NFT holders",
      icon: Award,
      color: "from-purple-400 to-pink-500"
    },
    {
      category: "Treasury / Foundation",
      percentage: "20%",
      amount: "200,000,000",
      purpose: "Operational costs, partnerships, listings, marketing",
      icon: Shield,
      color: "from-blue-400 to-cyan-500"
    },
    {
      category: "Core Team & Advisors",
      percentage: "20%",
      amount: "200,000,000",
      purpose: "Reward core contributors and advisors",
      icon: Target,
      color: "from-green-400 to-emerald-500"
    },
    {
      category: "Liquidity Mining",
      percentage: "15%",
      amount: "150,000,000",
      purpose: "Incentivize liquidity provision for markets and AMM pools",
      icon: Zap,
      color: "from-yellow-400 to-orange-500"
    },
    {
      category: "Investors (Seed/Private)",
      percentage: "5%",
      amount: "50,000,000",
      purpose: "Reward early financial backers",
      icon: DollarSign,
      color: "from-red-400 to-rose-500"
    }
  ]

  const tokenUtility = [
    {
      pillar: "Governance",
      icon: Vote,
      description: "Protocol upgrades, treasury management, dispute resolution security",
      features: [
        "Vote on smart contract changes",
        "Govern treasury fund allocation",
        "Escalate disputes with staked bonds",
        "Propose platform improvements"
      ],
      color: "from-purple-500 to-indigo-600"
    },
    {
      pillar: "Staking & Fee Sharing",
      icon: Lock,
      description: "Stake tokens to earn rewards and share in platform revenue",
      features: [
        "Earn rewards through staking",
        "Receive platform revenue distribution",
        "Signal long-term commitment",
        "Reward long-term believers"
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      pillar: "Platform Incentives & Access",
      icon: Zap,
      description: "Reduced fees and exclusive platform access for token holders",
      features: [
        "Reduced trading fees",
        "Market creation bonds",
        "Premium platform features",
        "Early access to new markets"
      ],
      color: "from-emerald-500 to-green-600"
    }
  ]

  return (
    <>
      <SEO 
        title="Tokenomics"
        description="Discover $LFG tokenomics: 1 billion total supply with community-first allocation. Learn about governance, staking rewards, and platform incentives."
      />
      <div className="App">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Coins className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="suilfg-text-gradient">$LFG Tokenomics</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  The $LFG token powers the SuiLFG ecosystem with community-first governance, 
                  staking rewards, and platform incentives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Badge variant="secondary" className="text-lg px-6 py-2">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Total Supply: 1,000,000,000 $LFG
                  </Badge>
                  <Badge variant="secondary" className="text-lg px-6 py-2">
                    <Shield className="mr-2 h-5 w-5" />
                    Blockchain: Sui
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-100 mb-6">Core Philosophy</h2>
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">"Community First, Productive Governance"</h3>
                  <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                    The $LFG token derives its value from governance control and platform success sharing. 
                    This model explicitly rewards our foundational NFT holders, creating a powerful feedback loop: 
                    as the platform grows, the token becomes more valuable, which incentivizes stronger governance and security.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Token Allocation Section */}
          <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-100 mb-4">Token Allocation</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Balanced allocation designed to reward community ownership while supporting long-term project needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {tokenAllocation.map((item, index) => (
                  <Card key={index} className="nft-card-glow hover-lift">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-sm font-bold">
                          {item.percentage}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold">{item.category}</CardTitle>
                      <CardDescription className="text-sm font-semibold text-gray-900">
                        {item.amount} $LFG
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{item.purpose}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Allocation Chart */}
              <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-100">Allocation Breakdown</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {tokenAllocation.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className={`w-4 h-4 bg-gradient-to-r ${item.color} rounded-full`}></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-200">{item.category}</span>
                            <span className="font-bold text-gray-100">{item.percentage}</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
                            <div 
                              className={`h-2 bg-gradient-to-r ${item.color} rounded-full`}
                              style={{ width: item.percentage }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <PieChart className="h-32 w-32 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-300">Visual representation of token distribution</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Token Utility Section */}
          <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-100 mb-4">$LFG Token Utility</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The Three Pillars: Clear, concise utility tied directly to SuiLFG's core functions
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {tokenUtility.map((pillar, index) => (
                  <Card key={index} className="nft-card-glow hover-lift">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <pillar.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{pillar.pillar}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {pillar.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pillar.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${pillar.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* NFT Relationship Section */}
          <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Synergy with Governance NFTs</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  A dual-asset system creating robust and balanced governance structure
                </p>
              </div>
              
              <div className="glass-effect-dark rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">NFTs = Your "Citizenship"</h3>
                    <p className="text-gray-300 mb-4">
                      Foundational membership in the DAO with direct voting power, especially in dispute resolution. 
                      Guaranteed stake in the protocol's economic success through the airdrop.
                    </p>
                    <ul className="text-left space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Direct voting power</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Dispute resolution authority</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Guaranteed token airdrop</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Coins className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">$LFG = Your Economic Power</h3>
                    <p className="text-gray-300 mb-4">
                      The economic engine of the protocol. Primary governance through staking, 
                      signaling economic commitment to protocol security and success.
                    </p>
                    <ul className="text-left space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Staking rewards</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Fee sharing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Platform incentives</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="inline-flex items-center space-x-4 bg-white/10 rounded-full px-6 py-3">
                    <Stethoscope className="h-6 w-6 text-cyan-400" />
                    <span className="text-lg font-semibold">Synergistic, Not Competitive</span>
                    <Stethoscope className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-gray-100 mb-6">Ready to Join the $LFG Economy?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your Governance NFT to secure your place in the foundational community and receive your $LFG airdrop.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.tradeport.xyz/sui/collection/0xbd672d1c158c963ade8549ae83bda75f29f6b3ce0c59480f3921407c4e8c6781%3A%3Agovernance_nfts%3A%3ASuiLFG_NFT?bottomTab=trades&tab=items"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                    <Award className="mr-2 h-5 w-5" />
                    Get Governance NFT
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Learn More About Staking
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
