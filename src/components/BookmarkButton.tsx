'use client'

import { useState, useEffect } from 'react'
import { Book } from '@/types/book'
import { Bookmark } from '@/types/bookmark'

interface BookmarkButtonProps {
  book: Book
  onToggle: (book: Book) => void
  isBookmarked: boolean
}

export default function BookmarkButton({ book, onToggle, isBookmarked }: BookmarkButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        onToggle(book)
      }}
      className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      {isBookmarked ? (
        <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-400 hover:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      )}
    </button>
  )
} 