'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import BookCard from '@/components/BookCard'
import SearchBar from '@/components/SearchBar'
import { books } from '@/data/books'
import { playlists, getPlaylistsByBookId } from '@/data/playlists'
import type { Book } from '@/types/book'

export default function AqeedahPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [showPlaylists, setShowPlaylists] = useState(false)

  const beginnerBookTitles = [
    'Usool Al Thalaatha: The 3 Fundamental Principles',
    'Al Qawaid Al Arba: The Four Fundamental Principles',
    'Nawaqaid Al Islam: The 10 Nullifiers of Islam',
    'Kashf ush Shubuhat: Refuting Doubts',
    'Usool al Sittah: The 6 Fundamental Principles'
  ]

  const intermediateBookTitles = [
    'Al Aqeedah Al Wasitiyah: Principles of Islamic Creed',
    'Kitab At Tawhid: The Book of Monotheism',
    'Usool as Sunnah: The Fundamental Principles of the Sunnah',
    'Ar Risalah At Tadmuriyyah: Towards Understanding Tadumiryyah',
    'Kitab Al Iman: The Book of Faith'
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      const aqeedahBooks = books.filter(book => book.category === 'aqeedah')
      setFilteredBooks(aqeedahBooks)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const aqeedahBooks = books.filter(book => book.category === 'aqeedah')
    const filtered = aqeedahBooks.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredBooks(filtered)
  }, [searchQuery])

  const beginnerBooks = filteredBooks.filter(book => beginnerBookTitles.includes(book.title))
  const intermediateBooks = filteredBooks.filter(book => intermediateBookTitles.includes(book.title))
  
  const handleBookClick = (book: Book) => {
    setSelectedBook(book)
    setShowPlaylists(true)
  }
  
  const closePlaylistModal = () => {
    setShowPlaylists(false)
    setSelectedBook(null)
  }
  
  const bookPlaylists = selectedBook ? getPlaylistsByBookId(selectedBook.id) : []

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Aqeedah</h1>
            <p className="mt-2 text-gray-600">
              Explore Islamic creed and theology
            </p>
          </div>

          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Aqeedah books..."
          />

          {/* Beginner Books Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Beginner Books</h2>
            <p className="text-gray-600 mb-6">
              You don't need any prior knowledge to learn or read any of these books! These books are the perfect place to start if you would like to seek Islamic knowledge. However, you must read them alongside a playlist of an ustadh/shaykh teaching the book. Click on any book to see available playlists.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                [1, 2, 3].map((i) => (
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
                ))
              ) : (
                beginnerBooks.map((book) => (
                  <div key={book.id} className="transition-transform hover:scale-105">
                    <BookCard 
                      book={book} 
                      onViewPlaylists={() => handleBookClick(book)} 
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Intermediate Books Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intermediate Books</h2>
            <p className="text-gray-600 mb-6">
              These books should be read after you have read the beginner books and have memorized their contents. Click on any book to see available playlists.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                [1, 2, 3].map((i) => (
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
                ))
              ) : (
                intermediateBooks.map((book) => (
                  <div key={book.id} className="transition-transform hover:scale-105">
                    <BookCard 
                      book={book} 
                      onViewPlaylists={() => handleBookClick(book)} 
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Playlist Recommendations Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Learning with Playlists</h2>
            <p className="text-gray-600 mb-6">
              For proper understanding of these books, it's essential to study them with qualified scholars. 
              Click on any book above to see recommended playlists from respected scholars who explain these texts in detail.
              These playlists will guide you through the proper understanding of Islamic creed.
            </p>
          </div>
        </div>
      </main>
      
      {/* Playlist Modal */}
      {showPlaylists && selectedBook && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-gray-900">{selectedBook.title}</h2>
                <button 
                  onClick={closePlaylistModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">Recommended Playlists</h3>
                <p className="text-gray-600 mt-1 mb-4">
                  The following playlists contain detailed explanations of {selectedBook.title} by qualified scholars.
                </p>
                
                {bookPlaylists.length > 0 ? (
                  <div className="space-y-4">
                    {bookPlaylists.map((playlist) => (
                      <div key={playlist.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition duration-150">
                        <h4 className="font-medium text-gray-900">{playlist.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">By {playlist.author} • {playlist.language}</p>
                        <p className="text-gray-700 mt-2">{playlist.description}</p>
                        <a 
                          href={playlist.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          Watch Playlist
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No playlists available for this book yet.</p>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={closePlaylistModal}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 