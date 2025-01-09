'use client'

import React, { useRef, useState } from 'react';

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault();
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play().then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.error("Error attempting to play video:", error);
                });
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between relative h-auto md:h-[200px] gap-10 pt-10">
            <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-[2.5rem] sm:text-2xl md:text-6xl font-semibold leading-[1.3] sm:leading-[1.2] md:leading-[60px] font-redhat text-center md:text-left">
                    Enhancing <span className="text-blue-400">Vision</span> <br /> Empowering You
                </h1>
            </div>

            <div className="w-full md:w-2/3 relative shadow-wrapper">
                <div className="relative max-w-[800px] mx-auto h-[497px] overflow-hidden ">
                    <div 
                        className="relative h-[480px] w-full cursor-pointer "
                        onClick={toggleVideo}
                        onTouchEnd={toggleVideo}
                        role="button"
                        tabIndex={0}
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                        <video
                            ref={videoRef}
                            controls

                            loop
                            className="absolute top-[20px] lg:left-[24px] left-[10px] w-calc object-cover rounded-xl"
                            preload="metadata"
                            src="/video/home.mp4"
                             
                        >
                            
                            
                        </video>
                        {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center ">
                                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" fillRule="evenodd" />
                                </svg>
                            </div>
                        )}
                    </div>
               
                </div>
            </div>
        </section>
    );
}

