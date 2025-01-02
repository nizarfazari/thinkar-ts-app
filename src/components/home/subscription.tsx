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
    <div className="">
      {/* Content Container */}
      <div className="container mx-auto px-4 py-24 flex">
        <div className="max-w-[580px] space-y-44">
          {/* Description Text */}
          <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed">
            Elevate connectivity with AR glasses. Perfect for enhancing daily
            interactions with hands-free technology.
          </p>

          {/* Subscription Form */}
          <div className="space-y-6 ">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
              Get in touch
            </h2>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative flex items-center z-10">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                  className="w-full px-10 py-4 rounded-full bg-[#324F79] backdrop-blur-sm 
                            text-white placeholder-white
                           focus:outline-none focus:ring-2 focus:ring-blue-400/50 pr-32
                          
                           "
                />
                <button
                  type="submit"
                  className="absolute right-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#214373] from-45% to-[#2869B5] shadow-md text-white rounded-full"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='w-64 relative'>
            <motion.div className='absolute'
               initial={{ opacity: 1, x: 400, y : 40 }}
            >
                <img src="/home/glasses/AiLens_2-transformed.webp" className='scale-[9]' alt="" />
            </motion.div>
        </div>
      </div>
    </div>
  )
}

