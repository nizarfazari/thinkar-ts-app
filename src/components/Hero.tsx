import { motion } from "motion/react"

interface HeroProps {
    toggleFade : () => void
}

export function Hero({
    toggleFade
}: HeroProps) {
    return (
        <section className="container mx-auto  flex flex-col md:flex-row items-center justify-between relative h-[200px]">
            <div onClick={toggleFade} className="absolute top-0 left-0 w-full h-full z-20 "></div>
          

            <motion.div className="md:w-1/2 space-y-4"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl md:text-6xl font-semibold leading-[80px] font-redhat pl-20">
                    Enhancing 
                    <br />
                    Empowering You
                </h1>
            </motion.div>

            <div className="md:w-1/2 mt-8 md:mt-0 relative">
                <motion.div
                    initial={{ y: 100, scale: 2.2 }}
                    animate={{ x: 100 , rotate: 5, }}
                    transition={{ duration: 0.5 }}
                    className=""
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
