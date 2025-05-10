export interface Book {
  id: number
  title: string
  author: string
  description: string
  downloadUrl?: string
  readUrl?: string
  category: 'quran' | 'hadith' | 'fiqh' | 'aqeedah' | 'seerah' | 'arabic' | 'history'
}

export interface Category {
  id: 'quran' | 'hadith' | 'fiqh' | 'aqeedah' | 'seerah' | 'arabic' | 'history'
  name: string
  description: string
  href: string
} 