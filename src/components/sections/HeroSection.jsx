import { Button } from '@/components/ui/button.jsx'
import { Rocket, ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import suilfgLogo from '@/assets/suilfg-logo.png'

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-cyan-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img src={suilfgLogo} alt="SuiLFG" className="h-24 w-24 floating-animation" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bounce-in">
            <span className="suilfg-text-gradient text-shadow-lg">
              Prediction Markets,
            </span>
            <br />
            <span className="text-gray-900 text-shadow">Secured.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Welcome to SuiLFG, the decentralized prediction market on Sui where your vote can't be bought. 
            We've engineered a revolutionary governance model to eliminate whale manipulation for good.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.suilfg.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Launch Testnet App
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50">
              Discover Governance Model
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
