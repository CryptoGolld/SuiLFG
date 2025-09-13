import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Link } from 'react-router-dom'
import { nftTiers } from '@/data/nftTiers.js'

export function NFTGovernanceSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Voice, Amplified</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Governance NFTs are the key to unlocking true influence on the platform. They provide base voting power 
            and multiply the weight of your staked SUI, ensuring dedicated users have a powerful voice.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {nftTiers.map((tier, index) => (
            <Card key={index} className="nft-card-glow relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-10`}></div>
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
                  <Badge variant="secondary" className="text-sm">{tier.supply} Supply</Badge>
                </div>
                <CardDescription className="text-lg font-semibold text-gray-900">
                  {tier.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Voting Power:</span>
                    <span className="font-semibold">{tier.baseVotingPower}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Multiplier:</span>
                    <span className={`font-bold text-2xl bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                      {tier.multiplier}
                    </span>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-gray-600">
                      + Future governance token airdrop
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/tokenomics">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
              Learn More About NFTs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
