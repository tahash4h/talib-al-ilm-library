import Link from 'next/link'
import { categories } from '@/data/books'

export default function Navigation() {
  return (
    <nav className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 h-12">
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
      </div>
    </nav>
  )
} 