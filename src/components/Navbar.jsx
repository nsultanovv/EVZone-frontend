import { useState, useEffect } from 'react'
import { Zap, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'howItWorks', label: 'How It Works' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id) => {
    onNavigate(id)
    setMobileOpen(false)
  }

  return (
    <>
      <style>{`
        @keyframes drawerIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .nav-drawer {
          animation: drawerIn 0.3s ease-out forwards;
        }
      `}</style>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[rgba(8,8,15,0.8)] backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-90 transition-opacity min-h-[44px] min-w-[44px]"
              aria-label="Home"
            >
              <Zap className="w-7 h-7 text-[#00d4aa]" strokeWidth={2.5} />
              <span className="bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">BuyEV</span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentPage === link.id
                      ? 'text-[#00d4aa] bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNav('contact')}
              className="hidden md:block px-6 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,170,0.4)] transition-all duration-300"
            >
              Get Started
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-3 text-white hover:bg-white/10 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-40 nav-drawer">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <div className="absolute right-0 top-0 bottom-0 w-[min(320px,85vw)] bg-[#0c0c14] border-l border-white/10 p-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    currentPage === link.id ? 'text-[#00d4aa] bg-white/10' : 'text-white/90 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('contact')}
                className="mt-4 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] text-white text-center hover:scale-[1.02] transition-transform"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
