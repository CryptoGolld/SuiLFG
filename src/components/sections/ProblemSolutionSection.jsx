import { Shield } from 'lucide-react'

export function ProblemSolutionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-4xl">🐋</div>
              <div className="absolute text-red-500 text-6xl">✗</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tired of Manipulated Markets?</h3>
            <p className="text-gray-600 text-lg">
              Traditional prediction markets are vulnerable. Wealthy players can single-handedly sway outcomes, 
              undermining fairness and trust. The result is a rigged game.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Anti-Whale Solution</h3>
            <p className="text-gray-600 text-lg">
              Our multi-layered voting system makes manipulation prohibitively expensive. By combining Governance NFTs 
              with staked SUI, we ensure that influence is earned through commitment, not just capital.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
