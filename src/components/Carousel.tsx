'use client'

import { useState, useRef, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ReactPlayer from 'react-player'

const slides = [
    {
        id: 1,
        title: 'Gaming',
        videoUrl: '/home/video/smart-watch-interface.mp4',
        thumbnailUrl: '/home/carousel/SS_1.png',
        description: 'Elevate gaming experiences with AI-powered solutions'
    },
    {
        id: 2,
        title: 'Aviation',
        videoUrl: '/home/video/prudential-app.mp4',
        thumbnailUrl: '/home/carousel/SS_2.png',
        description: 'Transform aviation with cutting-edge AI technology'
    },
    {
        id: 3,
        title: 'Healthcare',
        videoUrl: '/home/video/ai-for.mp4',
        thumbnailUrl: '/home/carousel/SS_3.png',
        description: 'Revolutionize healthcare delivery through AI integration'
    },
    {
        id: 4,
        title: 'Office',
        videoUrl: '/home/video/true-hydration.mp4',
        thumbnailUrl: '/home/carousel/SS_4.png',
        description: 'Optimize office workflows with intelligent solutions'
    }
]

export default function VideoCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [playingSlide, setPlayingSlide] = useState<number | null>(null)
    const [videoVisible, setVideoVisible] = useState<number | null>(null)
    const playerRefs = useRef<(ReactPlayer | null)[]>([])

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index)
        setVideoVisible(index)
        setPlayingSlide(index)
    }, [])

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setPlayingSlide(null)
        setVideoVisible(null)
    }, [])

    return (
        <div className="">
            <div className="container mx-auto py-12">
                {/* Header */}
                <div className='flex flex-col md:flex-row mb-12 justify-between items-start md:items-center'>
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-4xl md:text-[60px] leading-tight md:leading-[60px] font-semibold mb-4">
                            <span className="text-[#3B82F6]">AI-Powered</span>{' '}
                            <span className="text-white">Solutions.</span>
                        </h1>
                        <h2 className="text-4xl md:text-[60px] leading-tight md:leading-[60px] font-semibold text-white">Global Impact.</h2>
                    </div>

                    <div>
                        <p className='max-w-[470px] text-white text-base md:text-[18px] font-inter leading-[30px]'>Elevate connectivity with AR glasses seamlessly integrate calls, music, translation, navigation, and AI assistants.</p>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="flex gap-4 overflow-hidden">
                        {slides.map((slide, index) => (
                            <Card
                                key={slide.id}
                                onClick={() => goToSlide(index)}
                                className={`transform transition-all duration-500 !border-none ease-in-out group ${
                                    index === currentSlide
                                        ? 'flex-grow-[2] opacity-100 w-full md:w-[600px]'
                                        : 'flex-grow-0 opacity-60 w-[100px] md:w-[200px] cursor-pointer'
                                } relative rounded-3xl overflow-hidden`}
                            >
                                <div className="relative h-[300px] md:h-[400px]">
                                    {/* Thumbnail */}
                                    <img
                                        src={slide.thumbnailUrl}
                                        alt={`${slide.title} thumbnail`}
                                        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${
                                            videoVisible === index ? 'opacity-0' : 'opacity-100'
                                        }`}
                                    />

                                    {/* Video Player */}
                                    <ReactPlayer
                                        ref={el => playerRefs.current[index] = el}
                                        url={slide.videoUrl}
                                        width="100%"
                                        height="100%"
                                        playing={playingSlide === index}
                                        loop
                                        controls={index === currentSlide}
                                        playsinline
                                        style={{ display: videoVisible === index ? 'block' : 'none' }}
                                        config={{
                                            file: {
                                                attributes: {
                                                    style: { objectFit: 'cover' }
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 bottom-0 translate-y-1/2 rounded-full p-4 border border-white"
                        aria-label="Next slide"
                    >
                        <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </button>

                    {/* Navigation Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-8">
                        {slides.map((slide, index) => (
                            <Button
                                key={index}
                                onClick={() => goToSlide(index)}
                                variant={currentSlide === index ? "default" : "ghost"}
                                className={`
                                    px-3 py-1 md:px-6 md:py-2 text-sm md:text-base rounded-full transition-all shadow-lg
                                    ${currentSlide === index
                                        ? 'bg-black text-white hover:bg-black/90'
                                        : 'bg-[#062043] text-white hover:text-white hover:bg-[#062043]/80'
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

