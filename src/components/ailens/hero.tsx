import { motion } from "motion/react";



export function HeroAilens() {
    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between relative h-auto md:h-[200px] px-6 md:px-20 py-12 md:py-0">

            <div className="w-full md:w-1/2 space-y-4"
            >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-blue-400 sm:leading-[1.2] font-redhat text-center md:text-left">
                    Ailens
                </h1>
                <h2 className="text-[#5F5F5F] text-3xl font-inter font-medium">
                    Your Everyday Personal Assistant.
                </h2>
            </div>


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
