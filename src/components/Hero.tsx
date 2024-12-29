import { motion } from "motion/react"

interface HeroProps {
    isVisible: boolean


}

export function Hero({
    isVisible,
}: HeroProps) {
    console.log(isVisible)
    return (
        <section className="container mx-auto  flex flex-col md:flex-row items-center justify-between relative">
            <motion.div
                initial={{ opacity: 1, y: 50 }}
                animate={{ opacity: isVisible ? 0 : 1, y: isVisible ? 0 : 100 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${isVisible ? 'hidden' : ''}`}
            >
                <div className="relative flex items-center justify-center">
                    <h1 className="text-[400px] text-[#2697FF] opacity-50 font-bold">
                        VISION
                    </h1>
                    <motion.img
                        initial={{ opacity: 1, y: 50 }}
                        animate={{ opacity: isVisible ? 0 : 1, y: isVisible ? 0 : 100 }}
                        transition={{ duration: 0.5 }}
                        src="/home/arrow-down.png"
                        alt="Arrow Down"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[150px]"
                    />

                </div>
            </motion.div>

            <motion.div className="md:w-1/2 space-y-4"
                initial={{ opacity: 1, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5 }}

            >
                <h1 className="text-5xl md:text-6xl font-semibold leading-[80px] font-redhat pl-20">
                    Enhancing <span className="text-blue-400">Vision</span>
                    <br />
                    Empowering You
                </h1>
            </motion.div>

            <div className="md:w-1/2 mt-8 md:mt-0 relative">
                <motion.div
                    initial={{ y: 100, scale: 2 }}
                    animate={{ x: isVisible ? 100 : -320, rotate: isVisible ? 10 : 0, }}
                    transition={{ duration: 0.5 }}
                    className=""
                >
                    <img
                        src="/home/glasses.png"
                        alt="Smart Glasses"
                        className="w-full h-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
}
