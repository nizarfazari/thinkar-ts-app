import { useState } from "react";
import { Hero } from "../components/Hero";
import { Specs } from "../components/Specs";
import { Features } from "../components/Feature";
import Carousel from "@/components/Carousel";
import { motion } from "motion/react"

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleFade = () => {
        setIsVisible(!isVisible);
    };
    const [toggle, setToggle] = useState<"left" | "right">("left");

    const handleToggle = (position: "left" | "right") => {
        setToggle(position);
    };

    return (
        <main className="min-h-screen bg-[url('/home/background.png')] bg-cover bg-center text-white overflow-hidden">
            <section>
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-20">
                        <div className="text-2xl font-bold">THINKARI</div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-white/80 hover:text-white">
                                Products
                            </a>
                            <button onClick={toggleFade}>
                                {isVisible ? 'Fade Up' : 'Fade Down'}
                            </button>
                            <a href="#" className="text-white/80 hover:text-white">
                                Store
                            </a>
                            <a href="#" className="text-white/80 hover:text-white">
                                Support
                            </a>
                        </div>
                    </div>

                    <div className="form-box relative w-[240px] bg-gray-700 px-5 py-2 rounded-full">
                        <div className="button-box relative bg-gray-700 rounded-full flex items-center p-1">
                            <div
                                id="btn"
                                className={`absolute top-0 bottom-0 w-1/2 rounded-full transition-all duration-300 ${toggle === "left" ? "left-0 bg-blue-500" : "left-1/2 bg-green-500"}`}
                            ></div>
                            <button
                                type="button"
                                className="w-1/2 text-center relative z-10 focus:outline-none"
                                onClick={() => handleToggle("left")}
                            >
                                AiLens
                            </button>
                            <button
                                type="button"
                                className="w-1/2 text-center relative z-10 focus:outline-none"
                                onClick={() => handleToggle("right")}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </nav>

                <Hero isVisible={isVisible}  />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <Specs />
                    <Features />
                </motion.div>

            </section>
            <section>
                <Carousel />
            </section>
        </main>
    );
}
