'use client'

import React, { useState, useRef, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'
import { Play, Pause } from '@phosphor-icons/react'
import Slider from 'react-slick'
import ReactPlayer from 'react-player'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const slides = [
    {
        id: 1,
        title: 'Aviation',
        videoUrl: '/home/video/aviation.mp4',
        description: 'Elevate gaming experiences with AI-powered solutions',
        thumbnailUrl: '/thumbnails/aviation.jpg'
    },
    {
        id: 2,
        title: 'Healthcare',
        videoUrl: '/home/video/healthcare.mp4',
        description: 'Transform aviation with cutting-edge AI technology',
        thumbnailUrl: '/thumbnails/healthcare.jpg'
    },
    {
        id: 3,
        title: 'Office Work',
        videoUrl: '/home/video/office.mp4',
        description: 'Revolutionize healthcare delivery through AI integration',
        thumbnailUrl: '/thumbnails/office.jpg'
    },
    {
        id: 4,
        title: 'Gaming',
        videoUrl: '/home/video/gaming.mp4',
        description: 'Optimize office workflows with intelligent solutions',
        thumbnailUrl: '/thumbnails/gaming.jpg'
    },
    {
        id: 5,
        title: 'Navigation',
        videoUrl: '/home/video/navigation.mp4',
        description: 'Optimize office workflows with intelligent solutions',
        thumbnailUrl: '/thumbnails/navigation.jpg'
    },
    {
        id: 6,
        title: 'Home Theatre',
        videoUrl: '/home/video/home.mp4',
        description: 'Optimize office workflows with intelligent solutions',
        thumbnailUrl: '/thumbnails/home.jpg'
    }
]

export default function CarouselSlick() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [playingSlide, setPlayingSlide] = useState<number | null>(null)
    const [videoVisible, setVideoVisible] = useState<number | null>(null)
    const playerRefs = useRef<(ReactPlayer | null)[]>([])
    const sliderRef = useRef<Slider | null>(null)

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index)
        setVideoVisible(index)
        sliderRef.current?.slickGoTo(index)
    }, [])

    const toggleVideo = useCallback((index: number) => {
        if (playingSlide === index) {
            setPlayingSlide(null)
        } else {
            setPlayingSlide(index)
            setVideoVisible(index)
            goToSlide(index)
        }
    }, [playingSlide, goToSlide])

    const nextSlide = useCallback(() => {
        sliderRef.current?.slickNext()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        beforeChange: (_: number, next: number) => {
            setCurrentSlide(next)
        
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div>
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
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <Slider ref={sliderRef} {...settings}>
                        {slides.map((slide, index) => (
                            <div key={slide.id} className="px-2">
                                <Card
                                    key={slide.id}
                                    onClick={() => goToSlide(index)}
                                    className={`transform transition-all duration-500 !border-none ease-in-out group ${
                                        index === currentSlide
                                            ? 'flex-grow-[2] opacity-100 w-full md:w-[600px]'
                                            : 'flex-grow-0 opacity-60 w-[100px] md:w-[200px] cursor-pointer'
                                    } relative rounded-3xl overflow-hidden`}
                                >
                                    <div className="relative h-[300px] wrapper-vidio md:h-[400px]">
                                        {/* Thumbnail */}
                                        <img
                                            src={slide.thumbnailUrl}
                                            alt={`${slide.title} thumbnail`}
                                            className={`absolute pointer-events-none inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${
                                                videoVisible === index ? 'opacity-0' : 'opacity-100'
                                            }`}
                                        />

                                        {/* Video Player */}
                                        <ReactPlayer
                                            className="h-full"
                                            ref={el => playerRefs.current[index] = el}
                                            url={slide.videoUrl}
                                            width="100%"
                                            height="100%"
                                            playing={playingSlide === index}
                                            loop
                                            muted
                                            playsinline
                                            style={{ display: videoVisible === index ? 'block' : 'none' }}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        style: { objectFit: 'cover' },
                                                        playsInline: true,
                                                        preload: 'auto',
                                                    }
                                                }
                                            }}
                                            onTouchEnd={(e : Event) => {
                                                e.preventDefault()
                                                toggleVideo(index)
                                            }}
                                        />

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                toggleVideo(index)
                                            }}
                                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 transition-opacity duration-300 border-4 border-solid border-white ${
                                                videoVisible === index && playingSlide === index ? 'opacity-0' : 'opacity-100'
                                            }`}
                                            aria-label={playingSlide === index ? "Pause" : "Play"}
                                        >
                                            {playingSlide === index ? (
                                                <Pause weight="fill" className="w-8 h-8 text-white" />
                                            ) : (
                                                <Play weight="fill" className="w-8 h-8 text-white" />
                                            )}
                                        </button>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </Slider>

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
                                        ? 'bg-[#2697FF] text-white hover:bg-[#2697FF]/90'
                                        : 'bg-[#71AED0] text-white hover:text-white hover:bg-[#71AED0]/80'
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

