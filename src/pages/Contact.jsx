import { useState } from 'react'
import { Zap, Mail, Send } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact({ onNavigate }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <>
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -30px); }
        }
        .contact-blob1 { animation: blob1 12s ease-in-out infinite; }
        .contact-blob2 { animation: blob2 10s ease-in-out infinite; }
      `}</style>

      {/* Full-width gradient CTA banner */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,170,0.15) 0%, rgba(0,153,255,0.1) 50%, rgba(0,212,170,0.08) 100%)',
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#00d4aa]/30 to-[#0099ff]/20 blur-[120px] contact-blob1 -top-20 left-1/4"
            aria-hidden
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-l from-[#0099ff]/25 to-[#00d4aa]/15 blur-[100px] contact-blob2 bottom-0 right-1/4"
            aria-hidden
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Zap className="w-16 h-16 text-[#00d4aa] mx-auto mb-6" strokeWidth={2} />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">Go Electric</span>?
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join thousands of drivers making the switch. Get personalized EV recommendations and exclusive offers.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#00d4aa]/50 focus:ring-2 focus:ring-[#00d4aa]/20 transition-all min-h-[52px]"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,170,0.5)] transition-all duration-300 min-h-[52px]"
              >
                {submitted ? (
                  'Thanks!'
                ) : (
                  <>
                    Subscribe <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-[#00d4aa] text-sm font-medium">You're on the list! We'll be in touch soon.</p>
            )}

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('pricing')}
                className="px-8 py-4 rounded-xl font-semibold border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                View Plans
              </button>
              <button
                onClick={() => onNavigate('howItWorks')}
                className="px-8 py-4 rounded-xl font-semibold border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Start your EV journey today</h2>
          <p className="text-white/70 mb-8">
            Questions about EVs, charging, or financing? Our team is ready to help.
          </p>
          <a
            href="mailto:hello@buyev.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <Mail className="w-5 h-5" /> hello@buyev.com
          </a>
        </ScrollReveal>
      </section>
    </>
  )
}
