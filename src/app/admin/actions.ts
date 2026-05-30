'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { uploadImageToSupabase } from '@/lib/supabase-storage'

const prisma = new PrismaClient()

export async function addProduct(formData: FormData) {
  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const price = parseFloat(formData.get('price') as string)
  const category = formData.get('category') as string
  const imageFile = formData.get('imageFile') as File | null

  let imageUrl = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop'
  
  if (imageFile && imageFile.size > 0) {
    imageUrl = await uploadImageToSupabase(imageFile)
  }

  await prisma.product.create({
    data: {
      name,
      description,
      price,
      category,
      imageUrl
    }
  })

  revalidatePath('/admin')
  revalidatePath('/products')
}

export async function editProduct(id: string, formData: FormData) {
  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const price = parseFloat(formData.get('price') as string)
  const category = formData.get('category') as string
  const currentImageUrl = formData.get('currentImageUrl') as string
  const imageFile = formData.get('imageFile') as File | null

  let imageUrl = currentImageUrl
  
  if (imageFile && imageFile.size > 0) {
    imageUrl = await uploadImageToSupabase(imageFile)
  }

  await prisma.product.update({
    where: { id },
    data: {
      name,
      description,
      price,
      category,
      imageUrl
    }
  })

  revalidatePath('/admin')
  revalidatePath('/products')
  revalidatePath(`/products/${id}`)
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id }
  })
  
  revalidatePath('/admin')
  revalidatePath('/products')
}
