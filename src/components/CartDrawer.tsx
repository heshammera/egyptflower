'use client'

import { useCart } from '@/context/CartContext'
import { X, Trash2, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart()

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isCartOpen])

  if (!isCartOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-black text-gray-900">Your Cart</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 bg-white rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm border border-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="w-10 h-10 text-gray-300" />
              </div>
              <p className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</p>
              <p className="text-gray-500 mb-8">Start adding some equipment to see it here.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-md"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 relative group">
                  <div className="w-24 h-24 relative bg-white rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                    <Image 
                      src={item.imageUrl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop'} 
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow py-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm text-gray-900 line-clamp-2 pr-6">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-2 bg-white rounded-full shadow-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-blue-600 font-bold text-sm mb-3">
                      ${item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                    <div className="mt-auto flex items-center bg-white rounded-full border border-gray-200 w-fit">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-l-full transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-gray-900">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-r-full transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600 font-bold">Subtotal</span>
              <span className="text-3xl font-black text-gray-900">
                ${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </div>
            <Link 
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="w-full bg-slate-900 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-md hover:-translate-y-0.5 text-lg"
            >
              Proceed to Checkout <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
