import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Simple test component
function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">SuiLFG</h1>
        <p className="text-xl text-gray-600">Website is working!</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<HomePage />} />
        <Route path="/governance" element={<HomePage />} />
        <Route path="/tokenomics" element={<HomePage />} />
        <Route path="/testnet" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
