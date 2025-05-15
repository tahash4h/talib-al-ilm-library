import { supabase } from '@/lib/supabaseClient'
import type { Database } from '@/types/supabase'

export type Book = Database['public']['Tables']['books']['Row']
export type Category = Database['public']['Tables']['categories']['Row']
export type BookBorrow = Database['public']['Tables']['book_borrows']['Row']

export async function getBooks() {
  const { data, error } = await supabase
    .from('books')
    .select('*, categories(*)')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export async function getBook(id: string) {
  const { data, error } = await supabase
    .from('books')
    .select('*, categories(*)')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')
  
  if (error) throw error
  return data
}

export async function borrowBook(bookId: string, userId: string) {
  const { data, error } = await supabase
    .from('book_borrows')
    .insert({
      book_id: bookId,
      user_id: userId,
      borrowed_at: new Date().toISOString(),
      due_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
    })
    .select()
    .single()
  
  if (error) throw error
  return data
}

export async function returnBook(borrowId: string) {
  const { data, error } = await supabase
    .from('book_borrows')
    .update({ returned_at: new Date().toISOString() })
    .eq('id', borrowId)
    .select()
    .single()
  
  if (error) throw error
  return data
} 