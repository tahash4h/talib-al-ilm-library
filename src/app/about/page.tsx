'use client'

import Navigation from '@/components/Navigation'
import { BookOpen, Users, Globe } from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Authentic Knowledge',
      description: 'Access verified translations of the Quran and Hadith collections from reliable sources.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Join a community of knowledge seekers and share insights with fellow learners.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Our digital library is accessible to seekers of knowledge worldwide, 24/7.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Talib Al-Ilm Library is dedicated to making authentic Islamic knowledge accessible to everyone.
            We believe that knowledge should be freely available to those who seek it, and our digital library
            serves as a bridge between classical Islamic scholarship and modern learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <feature.icon className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            [Your story will be added here]
          </p>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  )
} 