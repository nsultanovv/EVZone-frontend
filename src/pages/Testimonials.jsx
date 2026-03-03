import { Star } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'Tesla Model 3 Owner',
    quote: 'BuyEV made the switch to electric seamless. The comparison tools and financing options saved me weeks of research. Best decision I ever made!',
    rating: 5,
    initials: 'SM',
    color: '#00d4aa',
  },
  {
    name: 'James Chen',
    role: 'EV Fleet Manager',
    quote: 'We switched our entire fleet to EVs using BuyEV. The process was smooth, and their support team was incredibly helpful. Highly recommended.',
    rating: 5,
    initials: 'JC',
    color: '#0099ff',
  },
  {
    name: 'Emma Rodriguez',
    role: 'First-Time EV Buyer',
    quote: 'As someone new to electric vehicles, I was overwhelmed. BuyEV simplified everything. I found my perfect match in just a few days.',
    rating: 5,
    initials: 'ER',
    color: '#00b894',
  },
  {
    name: 'David Kim',
    role: 'Hyundai Ioniq 5 Owner',
    quote: 'The charging guides and range calculators on BuyEV helped me plan my road trips perfectly. Zero range anxiety on my first long journey.',
    rating: 5,
    initials: 'DK',
    color: '#6c5ce7',
  },
  {
    name: 'Lisa Thompson',
    role: 'Sustainability Director',
    quote: 'BuyEV aligns perfectly with our company\'s green initiatives. We\'ve helped dozens of employees make the switch through their platform.',
    rating: 5,
    initials: 'LT',
    color: '#e17055',
  },
  {
    name: 'Michael Park',
    role: 'Rivian R1T Owner',
    quote: 'Finally, a platform that understands electric trucks! BuyEV helped me find exactly what I needed. The buying process was fast and transparent.',
    rating: 5,
    initials: 'MP',
    color: '#0984e3',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#00d4aa] text-[#00d4aa]" strokeWidth={1.5} />
      ))}
    </div>
  )
}

export default function Testimonials({ onNavigate }) {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">Drivers</span> Say
          </h1>
          <p className="text-xl text-white/70">
            Thousands of EV enthusiasts have made the switch with us. Here's what they're saying.
          </p>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="p-6 lg:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:scale-[1.03] hover:-translate-y-1 hover:border-[#00d4aa]/30 transition-all duration-300">
                  <StarRating count={t.rating} />
                  <p className="text-white/90 mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-white/60 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
