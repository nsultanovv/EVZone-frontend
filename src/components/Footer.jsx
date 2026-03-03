import { Zap, Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const FOOTER_LINKS = {
  Product: ['EV Models', 'Compare', 'Financing', 'Charging'],
  Company: ['About Us', 'Careers', 'Press', 'Blog'],
  Support: ['Help Center', 'Contact', 'FAQs', 'Guides'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
}

export default function Footer({ onNavigate }) {
  return (
    <footer className="relative bg-[#06060a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo + description */}
          <div className="lg:col-span-1">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-[#00d4aa]" strokeWidth={2.5} />
              <span className="text-xl font-bold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">
                BuyEV
              </span>
            </button>
            <p className="text-white/60 text-sm leading-relaxed max-w-[260px]">
              Your trusted platform for discovering, comparing, and purchasing electric vehicles. Driving the future, one EV at a time.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" aria-label="Github">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => onNavigate('home')}
                      className="text-white/60 text-sm hover:text-[#00d4aa] transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} BuyEV. All rights reserved.</p>
          <p className="text-white/40 text-sm">Made with ⚡ for EV enthusiasts</p>
        </div>
      </div>
    </footer>
  )
}
