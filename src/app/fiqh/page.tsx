'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import BookCard from '@/components/BookCard'
import SearchBar from '@/components/SearchBar'
import { books } from '@/data/books'
import { playlists, getPlaylistsByBookId } from '@/data/playlists'
import type { Book } from '@/types/book'
import { Playlist } from '@/data/playlists'
import { Bookmark } from '@/types/bookmark'

interface PlaylistModalProps {
  isOpen: boolean
  onClose: () => void
  book: Book
  playlists: Playlist[]
}

const PlaylistModal = ({ isOpen, onClose, book, playlists }: PlaylistModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative z-50 w-full max-w-4xl mx-4 bg-white rounded-lg shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{book.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-6">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {playlist.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  By {playlist.author} • {playlist.language}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  {playlist.description}
                </p>
                <a
                  href={playlist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Watch Playlist
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FiqhPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [showPlaylists, setShowPlaylists] = useState(false)
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

  const beginnerBookTitles = [
    'The Reliance of the Traveller',
    'The Beginning of Guidance',
    'The Book of Purification',
    'The Book of Prayer',
    'The Book of Fasting'
  ]

  const intermediateBookTitles = [
    'Al-Hidayah',
    'Al-Muhalla',
    'Al-Mughni',
    'Al-Majmu',
    'Al-Umm'
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      const fiqhBooks = books.filter(book => book.category === 'fiqh')
      setFilteredBooks(fiqhBooks)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const fiqhBooks = books.filter(book => book.category === 'fiqh')
    const filtered = fiqhBooks.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredBooks(filtered)
  }, [searchQuery])

  // Load bookmarks from localStorage on component mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks')
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks))
    }
  }, [])

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  const beginnerBooks = filteredBooks.filter(book => beginnerBookTitles.includes(book.title))
  const intermediateBooks = filteredBooks.filter(book => intermediateBookTitles.includes(book.title))
  
  const handleBookClick = (book: Book) => {
    setSelectedBook(book)
    setShowPlaylists(true)
    document.body.style.overflow = 'hidden'
  }
  
  const closePlaylistModal = () => {
    setShowPlaylists(false)
    setSelectedBook(null)
    document.body.style.overflow = 'auto'
  }
  
  const bookPlaylists = selectedBook ? getPlaylistsByBookId(selectedBook.id) : []

  const toggleBookmark = (book: Book) => {
    setBookmarks(prevBookmarks => {
      const isBookmarked = prevBookmarks.some(b => b.bookId === book.id)
      
      if (isBookmarked) {
        return prevBookmarks.filter(b => b.bookId !== book.id)
      } else {
        const newBookmark: Bookmark = {
          id: Date.now(),
          bookId: book.id,
          title: book.title,
          author: book.author,
          timestamp: Date.now()
        }
        return [...prevBookmarks, newBookmark]
      }
    })
  }

  const isBookmarked = (bookId: number) => {
    return bookmarks.some(bookmark => bookmark.bookId === bookId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Fiqh</h1>
            <p className="mt-2 text-gray-600">
              Explore Islamic jurisprudence and legal rulings
            </p>
          </div>

          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Fiqh books..."
          />

          {/* Beginner Books Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Beginner Books</h2>
            <p className="text-gray-600 mb-6">
              These books provide a solid foundation in Islamic jurisprudence.
              They cover essential topics like purification, prayer, and fasting.
            </p>
            {isLoading ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white overflow-hidden shadow rounded-lg animate-pulse"
                  >
                    <div className="h-48 bg-gray-200" />
                    <div className="px-4 py-5 sm:p-6">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {beginnerBooks.map((book) => (
                  <BookCard 
                    key={book.id} 
                    book={book} 
                    onViewPlaylists={() => handleBookClick(book)}
                    onToggleBookmark={() => toggleBookmark(book)}
                    isBookmarked={isBookmarked(book.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Intermediate Books Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intermediate Books</h2>
            <p className="text-gray-600 mb-6">
              These are comprehensive works of Islamic jurisprudence from different schools of thought.
              They require a good understanding of Arabic and basic fiqh principles.
            </p>
            {isLoading ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white overflow-hidden shadow rounded-lg animate-pulse"
                  >
                    <div className="h-48 bg-gray-200" />
                    <div className="px-4 py-5 sm:p-6">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {intermediateBooks.map((book) => (
                  <BookCard 
                    key={book.id} 
                    book={book} 
                    onViewPlaylists={() => handleBookClick(book)}
                    onToggleBookmark={() => toggleBookmark(book)}
                    isBookmarked={isBookmarked(book.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Playlist Modal */}
      {selectedBook && (
        <PlaylistModal
          isOpen={showPlaylists}
          onClose={closePlaylistModal}
          book={selectedBook}
          playlists={bookPlaylists}
        />
      )}
    </div>
  )
} 