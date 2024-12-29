'use client'

import { useState } from 'react'

export default function SubscriptionSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <div className="bg-gradient-to-br from-blue-950 to-blue-900 min-h-screen">
      {/* Wave animation container */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 transform"
            style={{
              animation: `wave ${12 + i * 4}s infinite linear`,
              backgroundImage: 'linear-gradient(45deg, transparent 45%, rgba(59, 130, 246, 0.1) 50%, transparent 55%)',
              backgroundSize: '200% 200%',
              zIndex: i,
              animationDelay: `${-i * 4}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl space-y-16">
          {/* Description Text */}
          <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed">
            Elevate connectivity with AR glasses. Perfect for enhancing daily
            interactions with hands-free technology.
          </p>

          {/* Subscription Form */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Get in touch
            </h2>

            <form onSubmit={handleSubmit} className="max-w-xl">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                  className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm 
                           border border-white/20 text-white placeholder-blue-100/50
                           focus:outline-none focus:ring-2 focus:ring-blue-400/50 pr-32"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 
                         transition-colors duration-200 text-white font-medium
                         focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

