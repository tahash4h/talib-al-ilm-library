import { auth } from '@clerk/nextjs/server'
import { getUserBookmarks } from '@/lib/supabase/bookmarks'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function BookmarksPage() {
  const session = await auth()
  
  if (!session?.userId) {
    redirect('/sign-in')
  }

  const bookmarks = await getUserBookmarks(session.userId)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Bookmarks</h1>
      
      {bookmarks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">You haven't bookmarked any books yet.</p>
          <Link 
            href="/books" 
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Browse Books
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((bookmark) => (
            <div 
              key={bookmark.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">
                {bookmark.books.title}
              </h2>
              <p className="text-gray-600 mb-2">
                By {bookmark.books.author}
              </p>
              {bookmark.books.description && (
                <p className="text-gray-500 mb-4 line-clamp-3">
                  {bookmark.books.description}
                </p>
              )}
              {bookmark.notes && (
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Your notes:</span> {bookmark.notes}
                  </p>
                </div>
              )}
              <div className="mt-4 flex justify-between items-center">
                <Link
                  href={`/books/${bookmark.book_id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  View Book
                </Link>
                <span className="text-sm text-gray-500">
                  Bookmarked {new Date(bookmark.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 