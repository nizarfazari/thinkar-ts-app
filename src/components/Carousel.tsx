'use client'

import { useState } from 'react'
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const slides = [
    {
        id: 1,
        title: 'Gaming',
        image: '/placeholder.svg?height=400&width=600',
        description: 'Elevate gaming experiences with AI-powered solutions'
    },
    {
        id: 2,
        title: 'Aviation',
        image: '/placeholder.svg?height=400&width=600',
        description: 'Transform aviation with cutting-edge AI technology'
    },
    {
        id: 3,
        title: 'Healthcare',
        image: '/placeholder.svg?height=400&width=600',
        description: 'Revolutionize healthcare delivery through AI integration'
    },
    {
        id: 4,
        title: 'Office',
        image: '/placeholder.svg?height=400&width=600',
        description: 'Optimize office workflows with intelligent solutions'
    }
]

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div className=" p-8">
            <div className="container mx-auto">
                {/* Header */}
                <div className='flex mb-12 justify-between items-center'>
                    <div className="">
                        <h1 className="text-[60px] leading-[60px] font-semibold mb-4">
                            <span className="text-[#3B82F6]">AI-Powered</span>{' '}
                            <span className="text-white">Solutions.</span>
                        </h1>
                        <h2 className="text-[60px] leading-[60px] font-semibold text-white">Global Impact.</h2>
                    </div>

                    <div>
                        <p className='max-w-[470px] text-white text-[18px] font-inter leading-[30px]'>Elevate connectivity with AR glasses seamlessly integrate calls, music, translation, navigation, and AI assistants.</p>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="flex gap-4 overflow-hidden">
                        {slides.map((slide, index) => (
                            <Card
                                key={slide.id}
                                className={`transform transition-all duration-500 ease-in-out ${index === currentSlide
                                    ? 'flex-grow-[2] opacity-100 w-[600px]'
                                    : 'flex-grow-0 opacity-60 w-[200px]'
                                    } relative rounded-3xl overflow-hidden`}
                            >
                                <div className="relative h-[400px] bg-blue-900/40">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/40" />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <PlayCircle className="w-16 h-16 text-white" />
                                    </div>

                                    {/* Title */}
                                    <div className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                                        {slide.title}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        {slides.map((slide, index) => (
                            <Button
                                key={index}
                                onClick={() => goToSlide(index)}
                                variant={currentSlide === index ? "default" : "ghost"}
                                className={`
                  px-6 py-2 rounded-full transition-all
                  ${currentSlide === index
                                        ? 'bg-white text-black hover:bg-white/90'
                                        : 'text-white hover:bg-white/10'
                                    }
                `}
                            >
                                {slide.title}
                            </Button>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    )
}

