'use client'

import { SignUp } from '@clerk/nextjs'
import Navigation from '@/components/Navigation'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <SignUp 
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-emerald-600 hover:bg-emerald-700',
                  footerActionLink: 'text-emerald-600 hover:text-emerald-700'
                }
              }}
            />
          </div>
        </div>
      </main>
    </div>
  )
} 