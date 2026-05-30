import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Drill, ShieldCheck, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] py-32 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/80 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop")' }}
        />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden mx-auto border-4 border-white/20">
            <Image src="/logo.jpg" alt="EgyptFlower Logo" fill className="object-contain p-3 md:p-5 hover:scale-105 transition-transform" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-lg mt-4">
            Premium <span className="text-blue-500">Petroleum</span> Extraction Equipment
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light drop-shadow-md">
            Global supplier of industrial-grade drill bits, pumps, and rigs. Built for the toughest environments on Earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
              View Catalog <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full transition-all flex items-center justify-center text-lg hover:-translate-y-1">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <Drill className="w-10 h-10 -rotate-3" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Heavy Duty Grade</h3>
              <p className="text-gray-600 leading-relaxed">All equipment is rigorously tested to withstand extreme pressures and temperatures in the field.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                <Globe className="w-10 h-10 rotate-3" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Shipping</h3>
              <p className="text-gray-600 leading-relaxed">Fast, insured logistics directly to any oilfield, refinery, or offshore platform worldwide.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <ShieldCheck className="w-10 h-10 -rotate-3" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certified Quality</h3>
              <p className="text-gray-600 leading-relaxed">API certified products ensuring strict compliance with international safety and operational standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Teaser */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Equip Your Next Big Project</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg font-light">Browse our newest arrivals of high-performance petroleum tools and machinery.</p>
          <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1 gap-2 text-lg">
            Explore All Equipment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
