import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { LoadingPage } from '@/components/common/Loading.jsx'
import { ScrollToTop } from '@/components/common/ScrollToTop.jsx'
import './App.css'

// Lazy load components for better performance
const HomePage = lazy(() => import('@/pages/HomePage.jsx'))
const PlatformPage = lazy(() => import('@/pages/PlatformPage.jsx'))
const GovernancePage = lazy(() => import('@/pages/GovernancePage.jsx'))
const TokenomicsPage = lazy(() => import('@/pages/TokenomicsPage.jsx'))
const TestnetPage = lazy(() => import('@/pages/TestnetPage.jsx'))

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/tokenomics" element={<TokenomicsPage />} />
          <Route path="/testnet" element={<TestnetPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
