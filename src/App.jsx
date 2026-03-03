import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Testimonials from './pages/Testimonials'
import Pricing from './pages/Pricing'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

const PAGES = {
  home: Home,
  howItWorks: HowItWorks,
  testimonials: Testimonials,
  pricing: Pricing,
  faq: FAQ,
  contact: Contact,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = useCallback((page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const PageComponent = PAGES[currentPage] || Home

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="relative">
        <div key={currentPage} className="animate-fadeIn">
          <PageComponent onNavigate={navigate} />
        </div>
      </main>
      <Footer onNavigate={navigate} />
    </div>
  )
}
