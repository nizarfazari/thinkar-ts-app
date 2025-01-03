import { motion } from "motion/react";

interface HeroProps {
    toggleFade?: () => void;
}

export function Hero({
    toggleFade
}: HeroProps) {
    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between relative h-auto md:h-[200px] px-6 md:px-20 py-12 md:py-0">
            
            <motion.div className="w-full md:w-1/2 space-y-4"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-[1.3] sm:leading-[1.2] md:leading-[80px] font-redhat text-center md:text-left">
                    Enhancing <span className="text-blue-400">Vision</span> <br /> Empowering You
                </h1>
            </motion.div>


            <div className="w-full md:w-1/2 mt-8 md:mt-0 relative flex justify-center md:justify-end order-first md:order-none">
                <motion.div
         
                    className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl translate-x-[0px] scale-[2] md:scale-[2.4] md:translate-x-[100px] md:-translate-y-[-90px] -translate-y-[50px] rotate-6 "
                >
                    <img
                        src="/home/glasses/AiLens_Full-transformed.webp"
                        alt="Smart Glasses"
                        className="w-full h-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
}
