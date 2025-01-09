'use client';

import React, { useRef, useState } from 'react';

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [thumbnail, setThumbnail] = useState<string>('');

    const toggleVideo = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault();
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play()
                    .then(() => setIsPlaying(true))
                    .catch((error) => console.error('Error attempting to play video:', error));
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    };

    const captureThumbnail = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (video && canvas) {
            // Set canvas dimensions to match video aspect ratio
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Draw the current frame of the video onto the canvas
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Convert canvas content to a data URL (image)
                const dataUrl = canvas.toDataURL('image/jpeg');
                setThumbnail(dataUrl);

                // Optionally, set the video poster to the generated thumbnail
                video.poster = dataUrl;
            }
        }
    };

    const handleLoadedMetadata = () => {
        captureThumbnail(); // Automatically capture the initial thumbnail
    };

    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between relative h-auto md:h-[200px] gap-10 pt-10">
            {/* Heading Section */}
            <div className="w-[800px] space-y-4">
                <h1 className="text-[2.5rem] sm:text-2xl md:text-6xl font-semibold leading-[1.3] sm:leading-[1.2] md:leading-[60px] font-redhat text-center md:text-left">
                    Enhancing <span className="text-blue-400">Vision</span> <br /> Empowering You
                </h1>
            </div>

            {/* Video Section */}
            <div className="w-full relative shadow-wrapper">
                <div className="relative w-full mx-auto h-[600px] overflow-hidden">
                    <div
                        className="relative h-[600px] w-full cursor-pointer"
                        onClick={toggleVideo}
                        onTouchEnd={toggleVideo}
                        role="button"
                        tabIndex={0}
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    >
                        {/* Video Element */}
                        <video
                            ref={videoRef}
                            className="rounded-xl w-full h-full object-cover"
                            src="/video/home.mp4"
                            poster={thumbnail || undefined}
                            preload="metadata"
                            controls
                            loop
                            onLoadedMetadata={handleLoadedMetadata}
                        />

                        {/* Canvas for Thumbnail Capture */}
                        <canvas ref={canvasRef} className="hidden" />

                        {/* Play Icon Overlay */}
                        {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className="w-16 h-16 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
