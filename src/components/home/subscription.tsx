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
    <div className="relative">
      {/* Content Container */}
      <div className="container mx-auto py-24 flex ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-[580px] space-y-12 md:space-y-24 lg:space-y-44 mb-12 lg:mb-0">
            {/* Description Text */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed text-center lg:text-left">
              Elevate connectivity with AR glasses. Perfect for enhancing daily
              interactions with hands-free technology.
            </p>

            {/* Subscription Form */}
            <div className="space-y-6 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center lg:text-left">
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
                    className="w-full px-4 sm:px-10 py-3 sm:py-4 rounded-full bg-[#324F79] backdrop-blur-sm 
                              text-white placeholder-white text-sm sm:text-base
                              focus:outline-none focus:ring-2 focus:ring-blue-400/50 pr-24 sm:pr-32"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 sm:right-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#214373] from-45% to-[#2869B5] shadow-md text-white text-sm sm:text-base"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <motion.div className='lg:absolute transform lg:translate-x-[100px] lg:-translate-y-[100px]  top-0 right-0 static lg:order-none order-first'


            
          >
            <img src="/home/glasses/AiLens_2-transformed.png" className='2xl:w-[900px] xl:w-[800px] lg:w-[500px]' alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

