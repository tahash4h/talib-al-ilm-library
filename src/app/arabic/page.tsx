'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import BookCard from '@/components/BookCard'
import SearchBar from '@/components/SearchBar'
import { books } from '@/data/books'
import type { Book } from '@/types/book'

export default function ArabicPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      const arabicBooks = books.filter(book => book.category === 'arabic')
      setFilteredBooks(arabicBooks)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const arabicBooks = books.filter(book => book.category === 'arabic')
    const filtered = arabicBooks.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredBooks(filtered)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Arabic</h1>
            <p className="mt-2 text-gray-600">
              Learn Arabic language and grammar
            </p>
          </div>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Arabic books..."
          />
          {isLoading ? (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
              {filteredBooks.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">No books found matching your search.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 