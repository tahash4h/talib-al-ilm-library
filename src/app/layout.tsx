import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talib Al-Ilm Library",
  description: "A comprehensive Islamic digital library for seekers of knowledge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link href="/" className="flex items-center">
                    <span className="text-xl font-semibold text-gray-900">Talib Al-Ilm Library</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 text-sm">
                © {currentYear} Talib Al-Ilm Library. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
