import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Rocket, Shield, Users, Coins, TrendingUp, Vote, Zap, Star, CheckCircle, ArrowRight, ExternalLink, Twitter, MessageCircle, Github, Menu, X, BookOpen } from 'lucide-react'
import suilfgLogo from './assets/suilfg-logo.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const nftTiers = [
    {
      name: "SuiLFG Voters",
      supply: "10,000",
      price: "10 SUI",
      baseVotingPower: "10 SUI",
      multiplier: "1.5x",
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "SuiLFG Governors", 
      supply: "1,000",
      price: "100 SUI",
      baseVotingPower: "100 SUI",
      multiplier: "5x",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "SuiLFG Council",
      supply: "100", 
      price: "1,000 SUI",
      baseVotingPower: "1,000 SUI",
      multiplier: "25x",
      color: "from-yellow-400 to-orange-500"
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Anti-Whale Protection",
      description: "Revolutionary multi-layered voting system that makes market manipulation prohibitively expensive."
    },
    {
      icon: Vote,
      title: "NFT-Powered Governance",
      description: "Three-tier NFT system providing base voting power and multipliers for additional staked SUI."
    },
    {
      icon: Zap,
      title: "Liquid Staking Integration",
      description: "Use your liquid staking tokens (haeSUI, vSUI) to vote without unstaking. Earn double rewards."
    },
    {
      icon: TrendingUp,
      title: "Hybrid Trading Engine",
      description: "Combines AMM liquidity with order book precision for optimal trading experience."
    },
    {
      icon: Users,
      title: "Expert Backstop",
      description: "Independent expert team provides final resolution for highly contested disputes."
    },
    {
      icon: Coins,
      title: "Native SUI Governance",
      description: "Uses native SUI tokens for voting, ensuring broad and decentralized participation."
    }
  ]

  const architectureModules = [
    "Market Factory - Seamless market creation",
    "Market Lifecycle - Complete market management", 
    "Outcome Tokens - Fungible shares in market outcomes",
    "Hybrid Trading - AMM + Order Book combination",
    "Oracle System - Secure initial resolution submissions",
    "User Wallet - Proxy wallet for batch transactions",
    "Dispute Resolution - Multi-layered voting and escalation"
  ]

  const Navigation = () => (
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
            <button 
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveSection('platform')}
              className={`text-sm font-medium transition-colors ${activeSection === 'platform' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'}`}
            >
              Platform
            </button>
            <button 
              onClick={() => setActiveSection('governance')}
              className={`text-sm font-medium transition-colors ${activeSection === 'governance' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'}`}
            >
              Governance
            </button>
            <button 
              onClick={() => setActiveSection('testnet')}
              className={`text-sm font-medium transition-colors ${activeSection === 'testnet' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'}`}
            >
              Testnet
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-cyan-600 p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Desktop Launch Button */}
          <Button 
            className="hidden md:block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
            onClick={() => setActiveSection('testnet')}
          >
            Launch Testnet
          </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => {setActiveSection('home'); setMobileMenuOpen(false)}}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${activeSection === 'home' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-50'}`}
              >
                Home
              </button>
              <button 
                onClick={() => {setActiveSection('platform'); setMobileMenuOpen(false)}}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${activeSection === 'platform' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-50'}`}
              >
                Platform
              </button>
              <button 
                onClick={() => {setActiveSection('governance'); setMobileMenuOpen(false)}}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${activeSection === 'governance' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-50'}`}
              >
                Governance
              </button>
              <button 
                onClick={() => {setActiveSection('testnet'); setMobileMenuOpen(false)}}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${activeSection === 'testnet' ? 'text-cyan-600 bg-cyan-50' : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-50'}`}
              >
                Testnet
              </button>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                  onClick={() => {setActiveSection('testnet'); setMobileMenuOpen(false)}}
                >
                  Launch Testnet
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )

  const HeroSection = () => (
    <section className="pt-24 pb-16 bg-gradient-to-br from-cyan-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img src={suilfgLogo} alt="SuiLFG" className="h-24 w-24" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Prediction Markets,
            </span>
            <br />
            <span className="text-gray-900">Secured.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Welcome to SuiLFG, the decentralized prediction market on Sui where your vote can't be bought. 
            We've engineered a revolutionary governance model to eliminate whale manipulation for good.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-3"
              onClick={() => setActiveSection('testnet')}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Launch Testnet App
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50">
              Discover Governance Model
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )

  const ProblemSolutionSection = () => (
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

  const NFTGovernanceSection = () => (
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
            <Card key={index} className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
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
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
            Learn More About NFTs
          </Button>
        </div>
      </div>
    </section>
  )

  const LiquidStakingSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Earn Double Rewards. Never Unstake.</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We're partnering with Sui's top liquid staking protocols. Use your Liquid Staking Tokens (like haeSUI) 
            to vote on SuiLFG while continuing to earn your staking rewards. No friction, maximum capital efficiency.
          </p>
        </div>
        <div className="bg-gradient-to-r from-cyan-50 to-purple-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold">Stake your SUI on partner platforms</p>
                    <p className="text-gray-600">Earn staking rewards as usual</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold">Use your LSTs for voting</p>
                    <p className="text-gray-600">No need to unstake from your preferred platform</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold">Earn voting rewards</p>
                    <p className="text-gray-600">Get rewarded for correct dispute resolution votes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold mb-4">Partner Platforms</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                    <span className="font-medium text-blue-900">SuiNetwork</span>
                    <Badge className="bg-blue-500 text-white">Partner</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                    <span className="font-medium text-purple-900">RhinoGraph</span>
                    <Badge className="bg-purple-500 text-white">Partner</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">More Partners</span>
                    <Badge variant="outline">Coming Soon</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const FeaturesSection = () => (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
          <p className="text-xl text-gray-600">Engineered for fairness, security, and performance</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const ArchitectureSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Architecture</h2>
          <p className="text-xl text-gray-600">Built on a robust seven-module smart contract system</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Contract Modules</h3>
            <div className="space-y-3">
              {architectureModules.map((module, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-800">{module}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Sui Blockchain?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Zap className="h-6 w-6 text-cyan-500 mt-1" />
                <div>
                  <p className="font-semibold">High-Speed Transactions</p>
                  <p className="text-gray-600">Parallel processing for optimal performance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Coins className="h-6 w-6 text-purple-500 mt-1" />
                <div>
                  <p className="font-semibold">Low Transaction Costs</p>
                  <p className="text-gray-600">Affordable trading and voting</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <p className="font-semibold">Move Programming Language</p>
                  <p className="text-gray-600">Enhanced security and resource management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const VotingSystemSection = () => (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">The Voting Formula</h2>
          <p className="text-xl text-gray-300">How your voting power is calculated</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-3xl font-mono bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
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

  const TestnetSection = () => (
    <section className="py-16 bg-gradient-to-br from-cyan-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testnet Launch</h2>
          <p className="text-xl text-gray-600">Experience the future of prediction markets</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Testnet Coming This Month!</h3>
              <p className="text-lg text-gray-600 mb-6">
                Get ready to experience SuiLFG's revolutionary anti-whale prediction market platform. 
                Our testnet will showcase all the innovative features that make manipulation impossible.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h4>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold">Full Platform Testing</p>
                    <p className="text-gray-600">Test all core features including market creation and trading</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold">NFT Governance System</p>
                    <p className="text-gray-600">Experience the three-tier NFT voting mechanism</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold">Dispute Resolution</p>
                    <p className="text-gray-600">Test the anti-whale voting system in action</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Early Access Benefits</h4>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold">NFT Airdrop Eligibility</p>
                    <p className="text-gray-600">Active testnet users get priority for the 5,000+ NFT airdrop</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold">Community Feedback</p>
                    <p className="text-gray-600">Help shape the platform before mainnet launch</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold">Exclusive Access</p>
                    <p className="text-gray-600">Be among the first to experience true decentralized prediction markets</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-50 to-purple-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h4>
                <p className="text-gray-600 mb-4">
                  Follow our social channels for the latest testnet announcements and launch details.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://x.com/SuiLFG_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Twitter className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">Twitter</span>
                  </a>
                  <a 
                    href="https://discord.gg/3HrraRAj69" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <MessageCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700">Discord</span>
                  </a>
                  <a 
                    href="https://suilfg.gitbook.io/suilfg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <BookOpen className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">GitBook</span>
                  </a>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-3"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Get Notified for Testnet Launch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={suilfgLogo} alt="SuiLFG" className="h-8 w-8" />
              <span className="text-xl font-bold">SuiLFG</span>
            </div>
            <p className="text-gray-400">
              Decentralized prediction markets on Sui, secured against whale manipulation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Testnet</a>
              <a href="https://suilfg.gitbook.io/suilfg" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">Documentation</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">API</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Governance</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">NFT Collection</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Voting System</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Proposals</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/SuiLFG_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://discord.gg/3HrraRAj69" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="https://suilfg.gitbook.io/suilfg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <BookOpen className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SuiLFG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {activeSection === 'home' && (
        <>
          <HeroSection />
          <ProblemSolutionSection />
          <NFTGovernanceSection />
          <LiquidStakingSection />
          <VotingSystemSection />
        </>
      )}
      
      {activeSection === 'platform' && (
        <>
          <div className="pt-24">
            <FeaturesSection />
            <ArchitectureSection />
          </div>
        </>
      )}
      
      {activeSection === 'governance' && (
        <>
          <div className="pt-24">
            <NFTGovernanceSection />
            <VotingSystemSection />
          </div>
        </>
      )}
      
      {activeSection === 'testnet' && (
        <>
          <div className="pt-24">
            <TestnetSection />
          </div>
        </>
      )}
      
      <Footer />
    </div>
  )
}

export default App

