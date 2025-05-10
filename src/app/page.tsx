import Link from 'next/link'
import Navigation from '@/components/Navigation'

const categories = [
  {
    name: 'Quran',
    description: 'Explore translations and tafsir of the Holy Quran',
    href: '/quran',
  },
  {
    name: 'Hadith',
    description: 'Access authentic hadith collections and explanations',
    href: '/hadith',
  },
  {
    name: 'Fiqh',
    description: 'Study Islamic jurisprudence from various schools of thought',
    href: '/fiqh',
  },
  {
    name: 'Aqeedah',
    description: 'Learn about Islamic beliefs and creed',
    href: '/aqeedah',
  },
  {
    name: 'Seerah',
    description: 'Discover the life and teachings of Prophet Muhammad (peace be upon him)',
    href: '/seerah',
  },
  {
    name: 'Arabic',
    description: 'Master the Arabic language and grammar',
    href: '/arabic',
  },
  {
    name: 'History',
    description: 'Explore Islamic history and civilization',
    href: '/history',
  },
]

export default function Home() {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Talib Al-Ilm Library
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              A comprehensive digital library for seekers of Islamic knowledge
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
