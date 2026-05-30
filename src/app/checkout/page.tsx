'use client'

import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

export default function CheckoutPage() {
  const { cartTotal, clearCart } = useCart()
  const [isSuccess, setIsSuccess] = useState(false)

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-12 rounded-3xl shadow-sm text-center max-w-lg w-full border border-gray-100">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Payment Successful!</h2>
          <p className="text-gray-600 mb-8 text-lg">Thank you for your order. Your payment was securely processed via PayPal. We will begin processing your equipment for global shipping.</p>
          <Link href="/products" className="inline-block bg-slate-900 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-600 transition-colors w-full shadow-md hover:-translate-y-0.5">
            Return to Catalog
          </Link>
        </div>
      </div>
    )
  }

  // To prevent rendering buttons with 0 amount
  if (cartTotal <= 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <Link href="/products" className="text-blue-600 font-bold hover:underline text-lg">Go to Shop</Link>
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
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Secure Checkout via PayPal</h3>
            
            <div className="max-w-md mx-auto min-h-[150px]">
              <PayPalScriptProvider options={{ 
                "clientId": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
                "currency": "USD",
                "intent": "capture",
                "disableFunding": "card,credit" // Force PayPal only
              }}>
                <PayPalButtons
                  style={{ layout: "vertical", shape: "rect", color: "blue", label: "pay" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: cartTotal.toFixed(2),
                          },
                          description: "EgyptFlower Premium Equipment"
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order!.capture().then((details) => {
                      console.log("Payment completed by " + details.payer?.name?.given_name);
                      setIsSuccess(true);
                      clearCart();
                    });
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
