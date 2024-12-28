import { motion } from "motion/react"

interface HeroProps  {
    isVisible: boolean


}

export function Hero({
    isVisible,
}: HeroProps) {

    console.log(isVisible);
    return (
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
            <motion.div className="md:w-1/2 space-y-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5 }}

            >
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Enhancing <span className="text-blue-400">Vision</span>
                    <br />
                    Empowering You
                </h1>
            </motion.div>

            {/* <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Smart Glasses"
            className="w-full h-auto transform rotate-6 hover:rotate-0 transition-transform duration-500"
          />
        </div> */}
        </section>
    );
}
