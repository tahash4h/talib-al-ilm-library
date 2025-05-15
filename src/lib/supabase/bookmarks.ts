import { supabase } from '@/lib/supabaseClient'
import type { Database } from '@/types/supabase'

export type Bookmark = Database['public']['Tables']['bookmarks']['Row'] & {
  books: {
    title: string
    author: string
    description: string | null
  }
}

export async function addBookmark(clerkId: string, bookId: string, notes?: string) {
  const { data, error } = await supabase
    .rpc('handle_bookmark', {
      p_clerk_id: clerkId,
      p_book_id: bookId,
      p_notes: notes
    })

  if (error) throw error
  return data
}

export async function removeBookmark(clerkId: string, bookId: string) {
  const { error } = await supabase
    .from('bookmarks')
    .delete()
    .eq('users.clerk_id', clerkId)
    .eq('book_id', bookId)

  if (error) throw error
}

export async function getUserBookmarks(clerkId: string) {
  const { data, error } = await supabase
    .from('bookmarks')
    .select(`
      *,
      books (
        title,
        author,
        description
      )
    `)
    .eq('users.clerk_id', clerkId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as Bookmark[]
} 