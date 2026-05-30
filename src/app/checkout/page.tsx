'use client'

import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function CheckoutPage() {
  const { cartTotal, clearCart } = useCart()
  const [isSuccess, setIsSuccess] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = (method: string) => {
    setIsProcessing(true)
    // Simulate payment processing delay for Sandbox
    setTimeout(() => {
      setIsSuccess(true)
      setIsProcessing(false)
      clearCart()
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-12 rounded-3xl shadow-sm text-center max-w-lg w-full border border-gray-100">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Payment Successful!</h2>
          <p className="text-gray-600 mb-8 text-lg">Thank you for your order. We have received your payment and will begin processing your equipment for global shipping.</p>
          <Link href="/products" className="inline-block bg-slate-900 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-600 transition-colors w-full shadow-md hover:-translate-y-0.5">
            Return to Catalog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/cart" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 font-semibold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Cart
        </Link>
        
        <h1 className="text-3xl font-black text-gray-900 mb-8">Checkout</h1>
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="p-8 border-b border-gray-100 bg-slate-50">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-700">Total Amount to Pay</span>
              <span className="text-3xl font-black text-blue-600">${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Select Payment Method</h3>
            
            {isProcessing ? (
              <div className="text-center py-12">
                <div className="inline-block w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 font-semibold">Processing your payment in Sandbox mode...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => handlePayment('credit_card')}
                  className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-600 hover:bg-blue-50 transition-all group"
                >
                  <div className="text-2xl font-black text-slate-800 mb-2 group-hover:text-blue-600">VISA / MC</div>
                  <span className="text-sm text-gray-500 font-semibold text-center">Credit/Debit Card<br/>(Stripe Test)</span>
                </button>
                
                <button 
                  onClick={() => handlePayment('paypal')}
                  className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-600 hover:bg-blue-50 transition-all group"
                >
                  <div className="text-2xl font-black text-[#00457C] mb-2 group-hover:text-blue-600 italic">PayPal</div>
                  <span className="text-sm text-gray-500 font-semibold text-center">Secure Checkout<br/>(Sandbox)</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
