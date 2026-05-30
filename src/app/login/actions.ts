'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAdmin(formData: FormData) {
  const password = formData.get('password')
  const correctPassword = process.env.ADMIN_PASSWORD || 'admin123'
  
  if (password === correctPassword) {
    const cookieStore = await cookies()
    cookieStore.set('admin_auth', 'true', { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      maxAge: 60 * 60 * 24 // 1 day
    })
    // Redirects throw an error that next.js catches, so we don't need a return
    redirect('/admin')
  } else {
    // We can't easily return errors in simple forms without useFormState, 
    // but we can redirect back with an error query param
    redirect('/login?error=true')
  }
}

export async function logoutAdmin() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_auth')
  redirect('/login')
}
