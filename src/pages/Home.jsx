import { useEffect, useRef, useState } from 'react'
import {
  Zap,
  Plug,
  Leaf,
  Shield,
  Battery,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'

const FEATURES = [
  {
    icon: Zap,
    title: 'Instant Power',
    desc: 'Zero to sixty in seconds. Experience instant torque and smooth acceleration.',
  },
  {
    icon: Leaf,
    title: 'Zero Emissions',
    desc: 'Drive guilt-free. Reduce your carbon footprint with every mile.',
  },
  {
    icon: Battery,
    title: 'Long Range',
    desc: 'Up to 400+ miles on a single charge. Go further, worry less.',
  },
  {
    icon: Plug,
    title: 'Easy Charging',
    desc: 'Home charging, public networks, and fast DC charging when you need it.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Top safety ratings. Advanced driver assistance and autonomous features.',
  },
  {
    icon: Sparkles,
    title: 'Smart Tech',
    desc: 'Over-the-air updates, connectivity, and cutting-edge infotainment.',
  },
]

export default function Home({ onNavigate }) {
  const [heroVisible, setHeroVisible] = useState(false)
  const [backendData, setBackendData] = useState(null)  // <-- yangi state

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Backend API dan ma'lumot olish
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`) // <-- o'zingizning backend endpointni yozing
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => setBackendData(data))
      .catch((err) => console.error('Backend API error:', err))
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, -20px) scale(1.1); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 30px); }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.08; }
        }
        .hero-animate {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .blob1 { animation: float1 15s ease-in-out infinite; }
        .blob2 { animation: float2 12s ease-in-out infinite; }
        .blob3 { animation: float3 18s ease-in-out infinite; }
        .grid-bg { animation: gridPulse 4s ease-in-out infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#00d4aa]/20 to-[#0099ff]/20 blur-[120px] blob1 -top-40 -left-40"
            aria-hidden
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#0099ff]/15 to-[#00d4aa]/15 blur-[100px] blob2 top-1/2 right-0 -translate-y-1/2"
            aria-hidden
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full bg-[#00d4aa]/10 blur-[80px] blob3 bottom-20 left-1/3"
            aria-hidden
          />
          <div
            className="absolute inset-0 grid-bg opacity-30"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`hero-animate ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{
                background:
                  'linear-gradient(135deg, #00d4aa 0%, #0099ff 50%, #00d4aa 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              The Future of
              <br />
              Driving is Electric
            </h1>
          </div>
          <p
            className={`text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 hero-animate ${
              heroVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            Discover, compare, and purchase your perfect electric vehicle. Join
            thousands of drivers making the switch to sustainable mobility.
          </p>

          {/* Backend API dan kelgan ma'lumotni ko'rsatish */}
          <div
            className="bg-white/10 rounded-lg p-4 mb-8 max-w-xl mx-auto text-left text-sm text-green-400"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {backendData
              ? JSON.stringify(backendData, null, 2)
              : 'Loading backend data...'}
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center hero-animate ${
              heroVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-[#00d4aa] to-[#0099ff] text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,170,0.5)] transition-all duration-300"
            >
              Find Your EV
            </button>
            <button
              onClick={() => onNavigate('howItWorks')}
              className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Go{' '}
              <span className="bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">
                Electric
              </span>
              ?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Electric vehicles offer more than just zero emissions. They
              deliver superior performance, lower costs, and a better driving
              experience.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="group p-6 lg:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:scale-[1.03] hover:-translate-y-1 hover:border-[#00d4aa]/30 hover:shadow-[0_0_40px_rgba(0,212,170,0.1)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4aa]/20 to-[#0099ff]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <f.icon className="w-7 h-7 text-[#00d4aa]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-white/60">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-white/10">
        <div
          className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d4aa]/50 to-transparent"
          aria-hidden
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <ScrollReveal className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">
                <AnimatedCounter end={500} suffix="+" />
              </p>
              <p className="text-white/60 mt-2">EV Models</p>
            </ScrollReveal>
            <ScrollReveal delay={100} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">
                <AnimatedCounter end={50} suffix="K" />
              </p>
              <p className="text-white/60 mt-2">Happy Drivers</p>
            </ScrollReveal>
            <ScrollReveal delay={200} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">
                <AnimatedCounter end={98} suffix="%" />
              </p>
              <p className="text-white/60 mt-2">Satisfaction</p>
            </ScrollReveal>
            <ScrollReveal delay={300} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] bg-clip-text text-transparent">
                <AnimatedCounter end={15} suffix="M" />
              </p>
              <p className="text-white/60 mt-2">CO₂ Saved (tons)</p>
            </ScrollReveal>
          </div>
        </div>
        <div
          className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0099ff]/50 to-transparent"
          aria-hidden
        />
      </section>

      {/* CTA Banner */}
      <section className="relative py-24">
        <ScrollReveal className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to make the switch?
          </h2>
          <p className="text-white/70 mb-8">
            Join the electric revolution. Find your perfect EV today.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#00d4aa] to-[#0099ff] text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,170,0.5)] transition-all duration-300"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </ScrollReveal>
      </section>
    </>
  )
}