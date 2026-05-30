import { PrismaClient } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Shield, Truck } from 'lucide-react'
import AddToCartButton from '@/components/AddToCartButton'
import { notFound } from 'next/navigation'

const prisma = new PrismaClient()

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const product = await prisma.product.findUnique({
    where: { id: resolvedParams.id }
  })

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 font-semibold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] bg-gray-100">
              <Image 
                src={product.imageUrl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop'} 
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col">
              {product.category && (
                <div className="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full mb-4 self-start">
                  {product.category}
                </div>
              )}
              
              <h1 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="text-4xl font-black text-blue-600 mb-8">
                ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                  <span className="font-semibold">In Stock & Ready to Ship</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Shield className="w-6 h-6 text-blue-500" />
                  <span className="font-semibold">API Certified Equipment</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Truck className="w-6 h-6 text-purple-500" />
                  <span className="font-semibold">Global Insured Freight</span>
                </div>
              </div>
              
              <div className="mt-auto pt-8 border-t border-gray-100">
                <AddToCartButton product={product} isLarge={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
