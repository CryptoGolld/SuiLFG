import { architectureModules } from '@/data/architectureModules.js'

export function PlatformSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Architecture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SuiLFG is built on a robust, modular architecture designed for security, scalability, and transparency.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Factory</h3>
            <p className="text-gray-600">Enables seamless creation of new prediction markets with customizable parameters.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Lifecycle</h3>
            <p className="text-gray-600">Manages the entire lifecycle of a market, from creation to resolution and payout.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Outcome Tokens</h3>
            <p className="text-gray-600">Fungible tokens representing shares in a market's potential outcomes, enabling trading.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hybrid Trading</h3>
            <p className="text-gray-600">Combines Automated Market Maker (AMM) liquidity with a Central Limit Order Book (CLOB) for efficient trading.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Oracle System</h3>
            <p className="text-gray-600">Securely feeds real-world event outcomes into the platform for market resolution.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">User Wallet</h3>
            <p className="text-gray-600">A proxy wallet system simplifying user interactions and batch transactions.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
            <p className="text-gray-600">Our core anti-whale voting mechanism ensures fair and transparent market outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
