'use client'

import { useState, useRef, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ReactPlayer from 'react-player'
import { Play } from '@phosphor-icons/react'

const slides = [
    {
        id: 1,
        title: 'Aviation',
        videoUrl: '/home/video/aviation.mp4',
        description: 'Elevate gaming experiences with AI-powered solutions',
        thumbnailUrl: '/thumbnails/aviation.jpg' // Added thumbnailUrl
    },
    {
        id: 2,
        title: 'Healthcare',
        videoUrl: '/home/video/healthcare.mp4',
        description: 'Transform aviation with cutting-edge AI technology',
        thumbnailUrl: '/thumbnails/healthcare.jpg' // Added thumbnailUrl
    },
    {
        id: 3,
        title: 'Office Work',
        videoUrl: '/home/video/office.mp4',
        description: 'Revolutionize healthcare delivery through AI integration',
        thumbnailUrl: '/thumbnails/office.jpg' // Added thumbnailUrl
    },
    {
        id: 4,
        title: 'Gaming',
        videoUrl: '/home/video/gaming.mp4',
        description: 'Optimize office workflows with intelligent solutions',
        thumbnailUrl: '/thumbnails/gaming.jpg' // Added thumbnailUrl
    },
    {
        id: 5,
        title: 'Navigation',
        videoUrl: '/home/video/navigation.mp4',
        description: 'Optimize office workflows with intelligent solutions',
        thumbnailUrl: '/thumbnails/navigation.jpg' // Added thumbnailUrl
    },
    {
        id: 6,
        title: 'Home Theatre',
        videoUrl: '/home/video/home.mp4',
        description: 'Optimize office workflows with intelligent solutions',
        thumbnailUrl: '/thumbnails/home.jpg' // Added thumbnailUrl
    }
]

export default function VideoCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [playingSlide, setPlayingSlide] = useState<number | null>(null)
    const [videoVisible, setVideoVisible] = useState<number | null>(null)
    const playerRefs = useRef<(ReactPlayer | null)[]>([])
    // Removed: const [thumbnails, setThumbnails] = useState<string[]>([])

    // Removed: useEffect hook for generating thumbnails

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

    // const togglePlay = useCallback((index: number) => {
    //     if (playingSlide === index) {
    //         setPlayingSlide(null)
    //     } else {
    //         setPlayingSlide(index)
    //         setVideoVisible(index)
    //     }
    // }, [playingSlide])

    return (
        <div className="">
            <div className="container mx-auto py-12">
                {/* Header */}
                <div className='flex flex-col md:flex-row mb-12 justify-between items-start md:items-center'>
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-4xl md:text-5xl leading-tight md:leading-[60px] font-semibold mb-4">
                            <span className="text-[#3B82F6]">AI-Powered</span>{' '}
                            <span className="text-white">Solutions.</span>
                        </h1>
                        <h2 className="text-4xl md:text-5xl leading-tight md:leading-[60px] font-semibold text-white">Global Impact.</h2>
                    </div>

                    <div>
                        <p className='max-w-[450px] text-white text-base md:text-lg font-[300] font-inter leading-[30px]'>Elevate connectivity with AR glasses seamlessly integrate calls, music, translation, navigation, and AI assistants.</p>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="flex gap-4 overflow-hidden">
                        {slides.map((slide, index) => (
                            <Card
                                key={slide.id}
                                onClick={() => goToSlide(index)}
                                className={`transform transition-all duration-500 !border-none ease-in-out group ${index === currentSlide
                                    ? 'flex-grow-[2] opacity-100 w-full md:w-[600px]'
                                    : 'flex-grow-0 opacity-60 w-[100px] md:w-[200px] cursor-pointer'
                                    } relative rounded-3xl overflow-hidden`}
                            >
                                <div className="relative h-[300px] wrapper-vidio md:h-[400px]">
                                    {/* Thumbnail */}
                                    <img
                                        src={slide.thumbnailUrl}
                                        alt={`${slide.title} thumbnail`}
                                        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${videoVisible === index ? 'opacity-0' : 'opacity-100'
                                            }`}
                                    />
                                    <div className={`absolute inset-0 bg-blue-700/80 mix-blend-multiply ${videoVisible === index ? 'opacity-0 z-[-2px]' : 'opacity-100'}`} />

                                    {/* Video Player */}
                                    <ReactPlayer
                                        className="h-full"
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


                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            goToSlide(index)
                                        }}
                                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-full p-4 transition-opacity duration-300 border-4 border-solid border-white ${videoVisible === index && playingSlide === index ? 'opacity-0' : 'opacity-100'
                                            }`}
                                        aria-label={playingSlide === index ? "Pause" : "Play"}
                                    >
                                        <Play weight="fill" className="w-8 h-8 text-white" />
                                    </button>
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

