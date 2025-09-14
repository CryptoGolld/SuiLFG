import { Button } from '@/components/ui/button.jsx'
import { Rocket, CheckCircle, Star, Twitter, BookOpen, ExternalLink } from 'lucide-react'

const DiscordIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

export function TestnetSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Testnet Launch</h2>
          <p className="text-xl text-gray-300">Experience the future of prediction markets</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-700">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-4">Testnet is LIVE! 🚀</h3>
              <p className="text-lg text-gray-300 mb-6">
                Experience SuiLFG's revolutionary anti-whale prediction market platform right now. 
                All innovative features are live and ready for testing.
              </p>
              <div className="mb-6">
                <a 
                  href="https://app.suilfg.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Rocket className="mr-2 h-6 w-6" />
                  Launch Testnet App
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Early Access Benefits</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold">NFT Airdrop Eligibility</p>
                    <p className="text-gray-300">Active testnet users get priority for the 5,000+ NFT airdrop</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold">Community Feedback</p>
                    <p className="text-gray-300">Help shape the platform before mainnet launch</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold">Exclusive Access</p>
                    <p className="text-gray-300">Be among the first to experience true decentralized prediction markets</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-lg text-gray-300 mb-6">
                Follow our social channels for the latest testnet announcements and launch details.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://x.com/SuiLFG_" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://discord.gg/6jqMcCA5eV" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <DiscordIcon className="h-6 w-6" />
                </a>
                <a href="https://suilfg.gitbook.io/suilfg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <BookOpen className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://app.suilfg.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Rocket className="mr-2 h-6 w-6" />
                Launch Testnet App Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
