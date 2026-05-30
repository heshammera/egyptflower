import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Force dynamic rendering to always fetch fresh products
export const dynamic = 'force-dynamic'

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Equipment Catalog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive selection of high-quality petroleum extraction tools and machinery.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No products found. Please check back later.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-100">
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <Image 
                    src={product.imageUrl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop'} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.category && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-gray-700 rounded-full shadow-sm">
                      {product.category}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-2xl font-black text-blue-600">
                      ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                    <button className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
