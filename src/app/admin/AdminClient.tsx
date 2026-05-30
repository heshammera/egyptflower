'use client'

import { useState } from 'react'
import { Plus, Edit2, X } from 'lucide-react'
import DeleteProductButton from '@/components/DeleteProductButton'
import { addProduct, editProduct } from './actions'

type Product = {
  id: string
  name: string
  description: string
  price: number
  category: string | null
  imageUrl: string | null
}

export default function AdminClient({ initialProducts }: { initialProducts: Product[] }) {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:col-span-1 h-fit sticky top-24">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            {editingProduct ? <Edit2 className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-blue-600" />} 
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </h2>
          {editingProduct && (
            <button onClick={() => setEditingProduct(null)} className="text-gray-400 hover:text-gray-900">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        
        <form 
          action={async (formData) => {
            setIsSubmitting(true)
            if (editingProduct) {
              await editProduct(editingProduct.id, formData)
              setEditingProduct(null)
            } else {
              await addProduct(formData)
            }
            setIsSubmitting(false)
          }} 
          className="space-y-4"
        >
          {editingProduct && <input type="hidden" name="currentImageUrl" value={editingProduct.imageUrl || ''} />}
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Product Name</label>
            <input type="text" name="name" defaultValue={editingProduct?.name || ''} required className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
            <input type="text" name="category" defaultValue={editingProduct?.category || ''} required className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Price (USD)</label>
            <input type="number" step="0.01" name="price" defaultValue={editingProduct?.price || ''} required className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Product Image</label>
            {editingProduct?.imageUrl && (
              <img src={editingProduct.imageUrl} alt="Current" className="w-16 h-16 object-cover rounded-lg mb-2 border border-gray-200" />
            )}
            <input type="file" name="imageFile" accept="image/*" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            <p className="text-xs text-gray-500 mt-1">Leave empty to keep current image.</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
            <textarea name="description" defaultValue={editingProduct?.description || ''} required rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-md disabled:opacity-50">
            {isSubmitting ? 'Saving...' : (editingProduct ? 'Update Product' : 'Save Product')}
          </button>
        </form>
      </div>

      {/* Table */}
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
              {initialProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-gray-900 flex items-center gap-3">
                      {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="w-10 h-10 object-cover rounded-md border border-gray-200" />}
                      <div>
                        {product.name}
                        <div className="text-xs text-gray-500 truncate max-w-[200px]">{product.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{product.category || 'N/A'}</td>
                  <td className="p-4 font-bold text-gray-900">${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  <td className="p-4 text-right whitespace-nowrap flex justify-end items-center gap-2">
                    <button 
                      onClick={() => setEditingProduct(product)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <DeleteProductButton id={product.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {initialProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No products found in the database.
          </div>
        )}
      </div>
    </div>
  )
}
