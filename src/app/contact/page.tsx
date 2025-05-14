'use client'

import { useState, useRef, useEffect } from 'react'
import Navigation from '@/components/Navigation'

// Custom hook for auto-resizing textarea
function useAutoResizeTextarea() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const adjustHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  useEffect(() => {
    adjustHeight()
  }, [])

  return { textareaRef, adjustHeight }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const { textareaRef, adjustHeight } = useAutoResizeTextarea()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message. We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (name === 'message') {
      adjustHeight()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-4 py-2.5 rounded-md border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-2.5 rounded-md border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="block w-full px-4 py-2.5 rounded-md border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                Message
              </label>
              <textarea
                ref={textareaRef}
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="block w-full px-4 py-2.5 rounded-md border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 min-h-[100px] overflow-hidden resize-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-900">
          <p>You can also reach us at: contact@talibalilm.org</p>
        </div>
      </main>
    </div>
  )
}