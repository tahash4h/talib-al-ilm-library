import type { Book } from '@/types/book'

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{book.author}</p>
        <p className="mt-2 text-sm text-gray-600">{book.description}</p>
        <div className="mt-4 flex space-x-4">
          <a
            href={book.downloadUrl}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Download
          </a>
          <a
            href={book.readUrl}
            className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Read Online
          </a>
        </div>
      </div>
    </div>
  )
} 