import { Target, Shield, Globe, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10" />
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 relative z-10">About <span className="text-blue-500">EgyptFlower</span></h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto relative z-10 leading-relaxed font-light">
          Your premier global partner for high-grade petroleum extraction equipment. We provide the tools that power the world's most demanding industries.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At EgyptFlower, our mission is to deliver uncompromising quality in petroleum machinery. From deep-water offshore rigs to harsh desert drilling environments, we supply the heavy-duty equipment that professionals rely on to get the job done safely and efficiently.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With years of expertise in the oil and gas sector, we understand that downtime is not an option. That's why every drill bit, pump, and valve we sell is tested to the highest API standards.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-2xl hover:-translate-y-1 transition-transform">
                <Globe className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 text-xl mb-2">Global Reach</h3>
                <p className="text-gray-600">Supplying equipment to operations worldwide.</p>
              </div>
              <div className="p-6 bg-emerald-50 rounded-2xl hover:-translate-y-1 transition-transform">
                <Shield className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="font-bold text-gray-900 text-xl mb-2">API Certified</h3>
                <p className="text-gray-600">100% compliance with international safety standards.</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-2xl hover:-translate-y-1 transition-transform">
                <Award className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="font-bold text-gray-900 text-xl mb-2">Premium Quality</h3>
                <p className="text-gray-600">Constructed with high-grade industrial materials.</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-2xl hover:-translate-y-1 transition-transform">
                <Target className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="font-bold text-gray-900 text-xl mb-2">Precision</h3>
                <p className="text-gray-600">Engineered for extreme accuracy and reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
