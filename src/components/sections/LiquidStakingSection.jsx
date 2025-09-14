import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle } from 'lucide-react'

export function LiquidStakingSection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Earn Double Rewards. Never Unstake.</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We're partnering with Sui's top liquid staking protocols. Use your Liquid Staking Tokens (like haeSUI) 
            to vote on SuiLFG while continuing to earn your staking rewards. No friction, maximum capital efficiency.
          </p>
        </div>
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-100">Stake your SUI on partner platforms</p>
                    <p className="text-gray-300">Earn staking rewards as usual</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-100">Use your LSTs for voting</p>
                    <p className="text-gray-300">No need to unstake from your preferred platform</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-100">Earn voting rewards</p>
                    <p className="text-gray-300">Get rewarded for correct dispute resolution votes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-gray-100">Partner Platforms</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                    <span className="font-medium text-blue-200">SuiNetwork</span>
                    <Badge className="bg-blue-500 text-white">Partner</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                    <span className="font-medium text-purple-900">RhinoGraph</span>
                    <Badge className="bg-purple-500 text-white">Partner</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="font-medium text-gray-700">More Partners</span>
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
