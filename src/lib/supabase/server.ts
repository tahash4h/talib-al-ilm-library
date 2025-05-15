import { createServerClient } from '@supabase/ssr'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import type { Database } from '@/types/supabase'

const supabaseUrl = 'https://nsisjtaraxczsmchrbpc.supabase.co'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaXNqdGFyYXhjenNtY2hyYnBjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzE2MjgxMSwiZXhwIjoyMDYyNzM4ODExfQ.DTxholoOPTh4f-xVtyXjfeEvoId8yH0OGmO1W26xWWE'

// Create admin client with service role key
export const supabaseAdmin = createSupabaseClient<Database>(
  supabaseUrl,
  supabaseServiceKey
)

export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient<Database>(
    supabaseUrl,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          cookieStore.set(name, value, options)
        },
        remove(name: string, options: any) {
          cookieStore.set(name, '', { ...options, maxAge: 0 })
        },
      },
    }
  )
}