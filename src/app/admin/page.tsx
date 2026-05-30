import { PrismaClient } from '@prisma/client'
import { ShieldAlert } from 'lucide-react'
import AdminClient from './AdminClient'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const rawProducts = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  })

  // Serialize to avoid passing Date objects to Client Component
  const products = rawProducts.map(p => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price,
    category: p.category,
    imageUrl: p.imageUrl
  }))

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg shadow-sm flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-red-800 font-bold">Admin Access Only</h3>
            <p className="text-red-600 text-sm">This page is protected.</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-gray-900">Products Management</h1>
          <form action={async () => {
            'use server'
            const { cookies } = await import('next/headers')
            const cookieStore = await cookies()
            cookieStore.delete('admin_auth')
            const { redirect } = await import('next/navigation')
            redirect('/login')
          }}>
            <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-sm">
              Logout
            </button>
          </form>
        </div>

        <AdminClient initialProducts={products} />
      </div>
    </div>
  )
}
