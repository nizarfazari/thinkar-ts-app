import { Play } from "@phosphor-icons/react";
import { motion } from "motion/react";



export function Hero() {
    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between relative h-auto md:h-[200px] px-6 md:px-20 py-12 md:py-0">
            
            <motion.div className="w-full md:w-1/2 space-y-4"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-[2.5rem] sm:text-4xl md:text-6xl font-semibold leading-[1.3] sm:leading-[1.2] md:leading-[80px] font-redhat text-center md:text-left">
                    Enhancing <span className="text-blue-400">Vision</span> <br /> Empowering You
                </h1>
            </motion.div>

            <div className="w-full md:w-1/2 mt-8 md:mt-0 relative flex justify-center md:justify-end order-first md:order-none h-[300px] md:h-[500px]">
                <div className="relative w-full h-full">
                    {/* Mockup Image */}
                    <img
                        src="/home/border.png"
                        alt="Device mockup"
                        className="w-full h-full object-contain pointer-events-none"
                    />
                    
                    {/* Video Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        <video
                            className="w-[85%] h-[85%] object-cover rounded-xl"
                            poster="/video/home.mp4"
                            autoPlay
                            loop
                            muted
                        >
                            <source src="/your-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                                <Play size={32} color="#60A5FA" weight="fill" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
