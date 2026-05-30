import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Use Service Role Key to bypass RLS and allow server-side uploads/bucket creation
const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function uploadImageToSupabase(file: File): Promise<string> {
  const bucketName = 'product-images'

  // Ensure bucket exists (fails silently if it already exists)
  await supabase.storage.createBucket(bucketName, { public: true })

  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`

  // Next.js File object can be passed directly to Supabase
  const { data, error } = await supabase.storage.from(bucketName).upload(fileName, file, {
    cacheControl: '3600',
    upsert: false,
    contentType: file.type
  })

  if (error) {
    console.error('Supabase upload error:', error)
    throw new Error('Failed to upload image')
  }

  const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(fileName)
  
  return publicUrlData.publicUrl
}
