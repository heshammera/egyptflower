import { loginAdmin } from './actions'
import { ShieldAlert, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const resolvedParams = await searchParams

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative">
      <div className="absolute top-8 left-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Website
        </Link>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-lg border border-gray-100 max-w-md w-full">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 mx-auto">
          <ShieldAlert className="w-8 h-8 text-slate-900" />
        </div>
        
        <h1 className="text-2xl font-black text-center text-gray-900 mb-2">Admin Access</h1>
        <p className="text-center text-gray-500 mb-8">Please enter the master password to access the dashboard.</p>

        {resolvedParams?.error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-semibold mb-6 text-center">
            Invalid password. Please try again.
          </div>
        )}

        <form action={loginAdmin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Master Password</label>
            <input 
              type="password" 
              name="password" 
              required 
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors shadow-md hover:-translate-y-0.5"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}
