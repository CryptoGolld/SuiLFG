import { Star, Coins, TrendingUp } from 'lucide-react'

export function VotingFormulaSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">The Voting Formula</h2>
          <p className="text-xl text-gray-300">How your voting power is calculated</p>
        </div>
        <div className="glass-effect-dark rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-3xl font-mono suilfg-text-gradient text-shadow-lg">
              Voting Power = NFT Base Value + (Additional Staked SUI × NFT Multiplier)
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">NFT Base Value</h4>
              <p className="text-gray-300">Your NFT's purchase price automatically contributes to voting power</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Staked SUI/LSTs</h4>
              <p className="text-gray-300">Additional SUI or liquid staking tokens you commit to the vote</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">NFT Multiplier</h4>
              <p className="text-gray-300">1.5x, 5x, or 25x amplification based on your NFT tier</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
