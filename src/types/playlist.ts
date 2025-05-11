export interface Playlist {
  id: string
  title: string
  url: string
  teacher: {
    name: string
    bio?: string
    image?: string
  }
  bookId: string
  category: 'aqeedah' | 'hadith' | 'quran' | 'fiqh' | 'seerah' | 'arabic' | 'history'
  level: 'beginner' | 'intermediate' | 'advanced'
  description: string
  thumbnailUrl: string
  duration: string
  language: string
  videoCount: number
  lastUpdated: string
}
