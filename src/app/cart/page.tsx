'use client'

import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import Image from 'next/image'
import { Trash2, Minus, Plus, ArrowRight, ShoppingCart } from 'lucide-react'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-sm text-center max-w-md w-full border border-gray-100">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any equipment to your cart yet.</p>
          <Link href="/products" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors w-full shadow-md">
            Browse Equipment
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {cart.map((item) => (
                <div key={item.id} className="p-6 border-b border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 relative bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                    <Image 
                      src={item.imageUrl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop'} 
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{item.name}</h3>
                    <div className="text-blue-600 font-bold">${item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-gray-50 rounded-full border border-gray-200">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-28">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-gray-900">Calculated at checkout</span>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-black text-blue-600">${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
              <Link 
                href="/checkout"
                className="w-full bg-slate-900 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
