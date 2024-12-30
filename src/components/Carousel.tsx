'use client'

import { useState, useRef } from 'react'
import { PlayCircle, PauseCircle, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const slides = [
    {
        id: 1,
        title: 'Gaming',
        videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        description: 'Elevate gaming experiences with AI-powered solutions'
    },
    {
        id: 2,
        title: 'Aviation',
        videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        description: 'Transform aviation with cutting-edge AI technology'
    },
    {
        id: 3,
        title: 'Healthcare',
        videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        description: 'Revolutionize healthcare delivery through AI integration'
    },
    {
        id: 4,
        title: 'Office',
        videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        description: 'Optimize office workflows with intelligent solutions'
    }
]

export default function YouTubeVideoCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        pauseAllVideos()
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        pauseAllVideos()
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    //     pauseAllVideos()
    // }

    const togglePlay = (index: number) => {
        const iframe = iframeRefs.current[index]
        if (iframe) {
            if (!isPlaying) {
                iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
                setIsPlaying(true)
            } else {
                iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
                setIsPlaying(false)
            }
        }
    }

    const pauseAllVideos = () => {
        iframeRefs.current.forEach(iframe => {
            iframe?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        })
        setIsPlaying(false)
    }

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
                                className={`transform transition-all duration-500 ease-in-out ${
                                    index === currentSlide
                                        ? 'flex-grow-[2] opacity-100 w-full md:w-[600px]'
                                        : 'flex-grow-0 opacity-60 w-[100px] md:w-[200px]'
                                } relative rounded-3xl overflow-hidden`}
                            >
                                <div className="relative h-[300px] md:h-[400px] ">
                                    {/* YouTube Thumbnail */}
                                    <img
                                        src={`https://img.youtube.com/vi/${slide.videoId}/0.jpg`}
                                        alt={`${slide.title} thumbnail`}
                                        className="w-full h-full object-cover"
                                    />
                                    <iframe
                                        ref={el => iframeRefs.current[index] = el}
                                        src={`https://www.youtube.com/embed/${slide.videoId}?enablejsapi=1&version=3&playerapiid=ytplayer`}
                                        className="absolute inset-0 w-full h-full z-10"
                                        style={{ display: isPlaying && index === currentSlide ? 'block' : 'none' }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                 

                                    {/* Play/Pause Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button 
                                            onClick={() => togglePlay(index)}
                                            className="text-white hover:text-blue-300 transition-colors"
                                            aria-label={isPlaying && index === currentSlide ? "Pause video" : "Play video"}
                                        >
                                            {isPlaying && index === currentSlide ? (
                                                <PauseCircle className="w-12 h-12 md:w-16 md:h-16" />
                                            ) : (
                                                <PlayCircle className="w-12 h-12 md:w-16 md:h-16" />
                                            )}
                                        </button>
                                    </div>

                                  
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Left Arrow */}
                    {/* <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </button> */}

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
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

