import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const FAQ_ITEMS = [
  {
    q: 'How long does it take to buy an EV through BuyEV?',
    a: 'Most customers complete the entire process—from browsing to driving away—in 1–2 weeks. Financing pre-approval typically takes minutes, and delivery or pickup can be scheduled within days of your purchase.',
  },
  {
    q: 'What financing options are available?',
    a: 'We partner with top lenders to offer competitive rates and flexible terms. Options include traditional auto loans, leasing, and EV-specific incentives. Our pre-approval process is quick and won\'t impact your credit score.',
  },
  {
    q: 'Can I get help with home charging setup?',
    a: 'Yes! We offer guidance on home charging installation, including recommended chargers and certified electricians. Many EV buyers qualify for federal or state rebates on charger installation.',
  },
  {
    q: 'How do I know which EV is right for me?',
    a: 'Our comparison tools let you filter by range, price, features, and use case. Take our short quiz or chat with an EV expert to get personalized recommendations based on your driving habits and budget.',
  },
  {
    q: 'What about federal tax credits and incentives?',
    a: 'We keep an updated list of federal and state EV incentives. Our team helps you understand eligibility and can factor rebates into your financing. Some EVs qualify for up to $7,500 in federal tax credits.',
  },
  {
    q: 'Do you support fleet purchases?',
    a: 'Absolutely. Our Enterprise plan includes fleet management tools, volume pricing, and a dedicated account manager. We help businesses of all sizes transition their fleets to electric.',
  },
]

function AccordionItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null)

  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/15">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left font-medium text-white hover:bg-white/5 transition-colors min-h-[60px]"
      >
        <span className="text-base sm:text-lg">{item.q}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-[#00d4aa] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>
      <div
        ref={contentRef}
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-white/70 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
            {item.a}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ({ onNavigate }) {
  const [openIndex, setOpenIndex] = useState(null)
  const mid = Math.ceil(FAQ_ITEMS.length / 2)
  const leftItems = FAQ_ITEMS.slice(0, mid)
  const rightItems = FAQ_ITEMS.slice(mid)

  return (
    <>
      <style>{`
        @keyframes accordionOpen {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 200px; }
        }
      `}</style>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-white/70">
            Everything you need to know about buying an electric vehicle with us.
          </p>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4">
              {leftItems.map((item, i) => (
                <ScrollReveal key={i} delay={i * 50}>
                  <AccordionItem
                    item={item}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                </ScrollReveal>
              ))}
            </div>
            <div className="space-y-4">
              {rightItems.map((item, i) => (
                <ScrollReveal key={i} delay={(mid + i) * 50}>
                  <AccordionItem
                    item={item}
                    isOpen={openIndex === mid + i}
                    onToggle={() => setOpenIndex(openIndex === mid + i ? null : mid + i)}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Us CTA */}
        <ScrollReveal delay={400} className="max-w-2xl mx-auto mt-16 text-center">
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-white/70 mb-6">Our team is here to help. Reach out anytime.</p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,170,0.5)] transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
