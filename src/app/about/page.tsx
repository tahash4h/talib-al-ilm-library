import Navigation from '@/components/Navigation'

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">About Talib Al-Ilm Library</h1>
          
          <div className="prose prose-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Talib Al-Ilm Library is dedicated to providing easy access to authentic Islamic knowledge
              through a comprehensive digital library. Our goal is to make Islamic literature, from
              classical to contemporary works, accessible to seekers of knowledge worldwide.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Authentic translations of the Quran and Hadith</li>
              <li>Classical and contemporary Islamic books</li>
              <li>Resources for learning Arabic</li>
              <li>Islamic history and biography</li>
              <li>Books on Islamic jurisprudence and creed</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="text-gray-600">
              <p>Email: contact@talibalilm.org</p>
              <p>Follow us on social media for updates and new additions to our library.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 