import { PrismaClient } from '@prisma/client'
import { Plus, ShieldAlert } from 'lucide-react'
import DeleteProductButton from '@/components/DeleteProductButton'
import { addProduct } from './actions'

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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Add Product Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Plus className="w-5 h-5 text-blue-600" /> Add New Product
            </h2>
            <form action={addProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Product Name</label>
                <input type="text" name="name" required className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Diamond Drill Bit" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                <input type="text" name="category" required className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Drilling Equipment" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Price (USD)</label>
                <input type="number" step="0.01" name="price" required className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 1500.00" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Image URL</label>
                <input type="url" name="imageUrl" className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="https://..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                <textarea name="description" required rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Product details..."></textarea>
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-md">
                Save Product
              </button>
            </form>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden lg:col-span-2">
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
                        <DeleteProductButton id={product.id} />
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
    </div>
  )
}
