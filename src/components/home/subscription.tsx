'use client'

import { useState } from 'react'
import { motion } from "motion/react"

export default function SubscriptionSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <div className="bg-gradient-to-br from-blue-950 to-blue-900 min-h-screen overflow-x-clip">
      {/* Content Container */}
      <div className="container mx-auto px-4 py-24 flex">
        <div className="max-w-2xl space-y-28">
          {/* Description Text */}
          <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed">
            Elevate connectivity with AR glasses. Perfect for enhancing daily
            interactions with hands-free technology.
          </p>

          {/* Subscription Form */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
              Get in touch
            </h2>

            <form onSubmit={handleSubmit} className="w-full">
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
                  className="absolute right-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#214373] from-10% to-[#2869B5] shadow-md text-white rounded-full"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='w-64 relative'>
            <motion.div className='absolute'
               initial={{ opacity: 1, x: 400 }}
            >
                <img src="/home/sunglasses-desc.png" className='scale-[9]' alt="" />
            </motion.div>
        </div>
      </div>
    </div>
  )
}

