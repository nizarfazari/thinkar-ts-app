'use client'

import { useState } from 'react'

export default function SubscriptionAilens() {
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
            <p className="text-base sm:text-lg md:text-xl text-[#5F5F5F] font-inter font-medium leading-relaxed text-center lg:text-left">
              Elevate connectivity with AR glasses. Perfect for enhancing daily
              interactions with hands-free technology.
            </p>

            {/* Subscription Form */}
            <div className="space-y-6 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2697FF] text-center ">
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
                    className="w-full px-4 sm:px-10 py-3 sm:py-4 rounded-full bg-[#71AED0] backdrop-blur-sm 
                              text-white placeholder-white text-sm sm:text-base
                              focus:outline-none focus:ring-2 focus:ring-blue-400/50 pr-24 sm:pr-32"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 sm:right-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#2697FF] from-45% to-[#71AED0]  shadow-lg text-white text-sm sm:text-base"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='lg:absolute top-[-10px] right-[40px] static lg:order-none order-first'
          >
            <img src="/soraclip/details/subscriptions.png" className='2xl:w-[550px] xl:w-[400px] lg:w-[500px]' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

