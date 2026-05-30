import Link from 'next/link'
import { ShoppingCart, Search, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-black bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent uppercase tracking-tighter">
                Petro<span className="text-gray-900">Gear</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Equipment</Link>
            <Link href="/about" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
            <Link href="/contact" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            <Link href="/admin" className="text-sm font-semibold px-3 py-1.5 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors">Admin Dashboard</Link>
          </div>

          <div className="flex items-center space-x-5">
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/cart" className="relative text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
            </Link>
            <button className="md:hidden text-gray-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
