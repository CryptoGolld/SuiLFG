import { Button } from '@/components/ui/button.jsx'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import suilfgLogo from '@/assets/suilfg-logo.png'

const DiscordIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

export function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src={suilfgLogo} alt="SuiLFG" className="h-10 w-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              SuiLFG
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/platform"
              className={`text-sm font-medium transition-colors ${location.pathname === '/platform' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'}`}
            >
              Platform
            </Link>
            <Link 
              to="/governance"
              className={`text-sm font-medium transition-colors ${location.pathname === '/governance' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'}`}
            >
              Governance
            </Link>
            <Link 
              to="/tokenomics"
              className={`text-sm font-medium transition-colors ${location.pathname === '/tokenomics' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'}`}
            >
              Tokenomics
            </Link>
            <Link 
              to="/testnet"
              className={`text-sm font-medium transition-colors ${location.pathname === '/testnet' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'}`}
            >
              Testnet
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-cyan-600 p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Desktop Launch Button */}
          <Link to="/testnet">
            <Button 
              className="hidden md:block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
            >
              Launch Testnet
            </Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${location.pathname === '/' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-50'}`}
              >
                Home
              </Link>
              <Link 
                to="/platform"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${location.pathname === '/platform' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-50'}`}
              >
                Platform
              </Link>
              <Link 
                to="/governance"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${location.pathname === '/governance' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-50'}`}
              >
                Governance
              </Link>
              <Link 
                to="/tokenomics"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${location.pathname === '/tokenomics' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-50'}`}
              >
                Tokenomics
              </Link>
              <Link 
                to="/testnet"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${location.pathname === '/testnet' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-50'}`}
              >
                Testnet
              </Link>
              <div className="px-3 py-2">
                <Link to="/testnet" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                  >
                    Launch Testnet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
