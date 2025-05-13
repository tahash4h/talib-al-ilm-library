'use client'

import Link from 'next/link'
import { categories } from '@/data/books'
import { UserButton, useUser } from '@clerk/nextjs'

export default function Navigation() {
  const { isSignedIn } = useUser()

  return (
    <nav className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {isSignedIn ? (
              <>
                <Link
                  href="/profile"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Profile
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 