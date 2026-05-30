import { PrismaClient } from '@prisma/client'
import { Plus, Edit, Trash2, ShieldAlert } from 'lucide-react'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg shadow-sm flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-red-800 font-bold">Admin Access Only</h3>
            <p className="text-red-600 text-sm">This page is for authorized personnel only. In the next steps, we will protect this route using Supabase Auth.</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-gray-900">Products Management</h1>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-md hover:-translate-y-0.5">
            <Plus className="w-5 h-5" /> Add New Product
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-4 font-semibold text-gray-600 text-sm">Product Name</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm">Category</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm">Price</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-gray-900">{product.name}</div>
                      <div className="text-xs text-gray-500 truncate max-w-xs">{product.description}</div>
                    </td>
                    <td className="p-4 text-sm text-gray-600">{product.category || 'N/A'}</td>
                    <td className="p-4 font-bold text-gray-900">${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                    <td className="p-4 text-right whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-800 p-2 transition-colors" title="Edit Product">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-red-500 hover:text-red-700 p-2 transition-colors" title="Delete Product">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {products.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No products found in the database.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
