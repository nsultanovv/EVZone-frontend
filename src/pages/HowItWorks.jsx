import { Search, FileCheck, Car } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const STEPS = [
  {
    icon: Search,
    title: 'Browse & Compare',
    desc: 'Explore our curated selection of electric vehicles. Filter by range, price, and features to find your perfect match.',
  },
  {
    icon: FileCheck,
    title: 'Get Pre-Approved',
    desc: 'Apply for financing in minutes. Our partners offer competitive rates and flexible terms for EV buyers.',
  },
  {
    icon: Car,
    title: 'Drive Away',
    desc: 'Complete your purchase, schedule delivery or pickup, and hit the road in your new electric vehicle.',
  },
]

export default function HowItWorks({ onNavigate }) {
  return (
    <>
      <style>{`
        @keyframes stepHighlight {
          0% { opacity: 0.5; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .step-card {
          transition: all 0.4s ease;
        }
        .step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 212, 170, 0.15);
        }
      `}</style>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">It Works</span>
          </h1>
          <p className="text-xl text-white/70">
            Finding and buying your electric vehicle is simple. Follow these three steps to get behind the wheel.
          </p>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          {/* Desktop: horizontal layout */}
          <div className="hidden lg:flex items-stretch gap-8 relative">
            {STEPS.map((step, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="flex-1 step-card relative">
                  {i < STEPS.length - 1 && (
                    <div
                      className="absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#00d4aa]/50 to-transparent -translate-x-4 z-0"
                      style={{ width: 'calc(100% + 2rem)' }}
                      aria-hidden
                    />
                  )}
                  <div className="relative z-10 h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4aa] to-[#0099ff] flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-[#00d4aa]/20">
                      {i + 1}
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-[#00d4aa]" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/60 flex-1">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: vertical layout */}
          <div className="lg:hidden space-y-8">
            {STEPS.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="step-card p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4aa] to-[#0099ff] flex items-center justify-center text-white font-bold text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-3 inline-flex">
                      <step.icon className="w-6 h-6 text-[#00d4aa]" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/60">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={400} className="text-center mt-16">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,170,0.5)] transition-all duration-300"
          >
            Get Started
          </button>
        </ScrollReveal>
      </section>
    </>
  )
}
