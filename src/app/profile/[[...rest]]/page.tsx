'use client'

import Navigation from '@/components/Navigation'
import { UserProfile } from '@clerk/nextjs'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <UserProfile 
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'shadow-none p-0',
                  navbar: 'hidden',
                  pageScrollBox: 'p-0',
                  profilePage: 'p-0',
                  profileSection: 'p-0',
                  profileSectionTitle: 'text-xl font-semibold text-gray-900',
                  profileSectionContent: 'mt-4',
                  formButtonPrimary: 'bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-2 px-4 font-medium transition-colors duration-200',
                  formFieldInput: 'rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500',
                  formFieldLabel: 'text-gray-700 font-medium',
                  formFieldAction: 'text-emerald-600 hover:text-emerald-700',
                  alertText: 'text-red-600',
                  alert: 'bg-red-50 border-red-200'
                }
              }}
            />
          </div>
        </div>
      </main>
    </div>
  )
} 