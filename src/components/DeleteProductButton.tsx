'use client'

import { deleteProduct } from '@/app/admin/actions'
import { Trash2 } from 'lucide-react'
import { useTransition } from 'react'

export default function DeleteProductButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition()

  return (
    <button 
      onClick={() => startTransition(() => deleteProduct(id))}
      disabled={isPending}
      className={`text-red-500 hover:bg-red-50 rounded-full p-2 transition-colors ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
      title="Delete Product"
    >
      <Trash2 className="w-5 h-5" />
    </button>
  )
}
