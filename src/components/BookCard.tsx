'use client'

import { Book } from '@/types/book'
import BookmarkButton from './BookmarkButton'

interface BookCardProps {
  book: Book
  onClick: () => void
  onToggleBookmark: (book: Book) => void
  isBookmarked: boolean
}

export default function BookCard({ book, onClick, onToggleBookmark, isBookmarked }: BookCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer relative h-full flex flex-col"
      onClick={onClick}
    >
      <div className="absolute top-2 right-2">
        <BookmarkButton 
          book={book}
          onToggle={onToggleBookmark}
          isBookmarked={isBookmarked}
        />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-gray-900 mb-1.5 line-clamp-2 mr-8">
            {book.title}
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            By {book.author}
          </p>
          <p className="text-gray-700 mb-3 line-clamp-3">
            {book.description}
          </p>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div className="flex items-center text-emerald-600">
            <span className="text-sm font-medium">View Playlists</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          {book.downloadUrl && (
            <a
              href={book.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  )
} 