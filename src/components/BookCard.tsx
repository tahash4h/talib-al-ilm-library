'use client'

import { Book } from '@/types/book'
import BookmarkButton from './BookmarkButton'

interface BookCardProps {
  book: Book
  onViewPlaylists: () => void
  onToggleBookmark: (book: Book) => void
  isBookmarked: boolean
}

export default function BookCard({ book, onViewPlaylists, onToggleBookmark, isBookmarked }: BookCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer relative h-full flex flex-col"
      onClick={onViewPlaylists}
    >
      <div className="absolute top-2 right-2 flex gap-2">
        <BookmarkButton 
          book={book}
          onToggle={onToggleBookmark}
          isBookmarked={isBookmarked}
        />
        {book.downloadUrl && (
          <a
            href={book.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            aria-label="Download book"
          >
            <svg className="w-5 h-5 text-gray-400 hover:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        )}
      </div>
      <div className="p-6 flex-grow">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {book.title}
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          By {book.author}
        </p>
        <p className="text-gray-700 mb-4 line-clamp-3">
          {book.description}
        </p>
        <div className="flex items-center text-emerald-600 mt-auto">
          <span className="text-sm font-medium">View Playlists</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
} 