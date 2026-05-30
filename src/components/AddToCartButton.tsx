'use client'

import { useCart } from '@/context/CartContext'
import { ShoppingCart } from 'lucide-react'

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart()

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
