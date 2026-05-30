'use client'

import { useCart } from '@/context/CartContext'
import { ShoppingCart } from 'lucide-react'

export default function AddToCartButton({ product, isLarge = false }: { product: any, isLarge?: boolean }) {
  const { addToCart } = useCart()

  if (isLarge) {
    return (
      <button 
        onClick={() => addToCart(product)}
        className="w-full bg-blue-600 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors shadow-lg hover:-translate-y-0.5 text-lg"
      >
        <ShoppingCart className="w-6 h-6" /> Add to Cart
      </button>
    )
  }

  return (
    <button 
      onClick={() => addToCart(product)}
      className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md hover:scale-110 active:scale-95"
      title="Add to Cart"
    >
      <ShoppingCart className="w-4 h-4" />
    </button>
  )
}
