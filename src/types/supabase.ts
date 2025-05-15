export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      books: {
        Row: {
          id: string
          created_at: string
          title: string
          author: string
          description: string | null
          cover_url: string | null
          category_id: string
          language: string
          is_available: boolean
          metadata: Json | null
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          author: string
          description?: string | null
          cover_url?: string | null
          category_id: string
          language: string
          is_available?: boolean
          metadata?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          author?: string
          description?: string | null
          cover_url?: string | null
          category_id?: string
          language?: string
          is_available?: boolean
          metadata?: Json | null
        }
      }
      categories: {
        Row: {
          id: string
          created_at: string
          name: string
          description: string | null
          parent_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          description?: string | null
          parent_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          description?: string | null
          parent_id?: string | null
        }
      }
      book_borrows: {
        Row: {
          id: string
          created_at: string
          book_id: string
          user_id: string
          borrowed_at: string
          returned_at: string | null
          due_date: string
        }
        Insert: {
          id?: string
          created_at?: string
          book_id: string
          user_id: string
          borrowed_at?: string
          returned_at?: string | null
          due_date: string
        }
        Update: {
          id?: string
          created_at?: string
          book_id?: string
          user_id?: string
          borrowed_at?: string
          returned_at?: string | null
          due_date?: string
        }
      }
      bookmarks: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          book_id: string
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          book_id: string
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id?: string
          book_id?: string
          notes?: string | null
        }
      }
    }
  }
} 