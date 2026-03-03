import { useState } from 'react'
import { Check } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const PLANS = [
  {
    name: 'Basic',
    price: 0,
    period: 'forever',
    desc: 'Perfect for exploring EVs',
    features: ['Browse all EV models', 'Basic comparison tools', 'Access to guides', 'Email support'],
    popular: false,
  },
  {
    name: 'Pro',
    price: 29,
    period: 'month',
    desc: 'For serious EV shoppers',
    features: ['Everything in Basic', 'Advanced comparisons', 'Financing pre-approval', 'Priority support', 'Saved searches & alerts', 'Expert consultations'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: null,
    period: 'custom',
    desc: 'Fleet & corporate solutions',
    features: ['Everything in Pro', 'Fleet management tools', 'Volume pricing', 'Dedicated account manager', 'Custom integrations', 'Training & onboarding'],
    popular: false,
  },
]

export default function Pricing({ onNavigate }) {
  const [yearly, setYearly] = useState(false)

  return (
    <>
      <style>{`
        .plan-card:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 212, 170, 0.15);
        }
        .plan-popular:hover {
          transform: scale(1.05);
          box-shadow: 0 25px 80px rgba(0, 212, 170, 0.25);
        }
      `}</style>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Simple, <span className="bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Choose the plan that fits your EV journey. Upgrade or downgrade anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setYearly(false)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                !yearly ? 'bg-gradient-to-r from-[#00d4aa] to-[#0099ff] text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all relative ${
                yearly ? 'bg-gradient-to-r from-[#00d4aa] to-[#0099ff] text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-1 -right-1 text-[10px] font-bold text-[#00d4aa] bg-white/10 px-1.5 py-0.5 rounded">
                -20%
              </span>
            </button>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div
                className={`relative p-6 lg:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white/[0.05] border-[#00d4aa]/40 plan-popular shadow-lg shadow-[#00d4aa]/10'
                    : 'bg-white/[0.03] border-white/10 plan-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] text-white">
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-white/60 text-sm mb-6">{plan.desc}</p>
                <div className="mb-6">
                  {plan.price !== null ? (
                    plan.period === 'forever' ? (
                      <><span className="text-4xl font-bold">Free</span><span className="text-white/60"> forever</span></>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">
                          ${yearly ? Math.round(plan.price * 0.8) : plan.price}
                        </span>
                        <span className="text-white/60">/mo</span>
                        {yearly && (
                          <span className="block text-sm text-[#00d4aa]">Billed annually</span>
                        )}
                      </>
                    )
                  ) : (
                    <span className="text-2xl font-bold">Custom</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/80 text-sm">
                      <Check className="w-5 h-5 text-[#00d4aa] flex-shrink-0" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#00d4aa] to-[#0099ff] text-white hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,170,0.4)]'
                      : 'border border-white/20 text-white hover:bg-white/5 hover:border-white/30'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
