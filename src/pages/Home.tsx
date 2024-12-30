import { useState } from "react";
import { Hero } from "../components/Hero";
import { Specs } from "../components/Specs";
import { Features } from "../components/Feature";
import Carousel from "@/components/Carousel";
import { motion } from "motion/react"
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import Description from "@/components/home/description";
import Footer from "@/components/footer";
import SubscriptionSection from "@/components/home/subscription";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleFade = () => {
        setIsVisible(!isVisible);
    };
    const [toggle, setToggle] = useState<"left" | "right">("left");

    const handleToggle = (position: "left" | "right") => {
        setToggle(position);
    };

    if (!isVisible) {
        return (
            <main className="min-h-screen bg-[url('/home/background.webp')] bg-cover bg-center text-white overflow-hidden">
                <section className=" ">
                    <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative z-[2]">
                        <div className="flex items-center gap-20">
                            <img src="/home/logo.png" alt="" />

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
                                    className={`absolute bg-gradient-to-r from-[#1B64A7] from-70% to-[#2697FF] shadow-md top-0 bottom-0 w-1/2 rounded-full transition-all duration-300 ${toggle === "left" ? "left-0 " : "left-1/2 "}`}
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

                    <Hero isVisible={isVisible} toggleFade={toggleFade} />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Specs />
                        <Features />
                    </motion.div>
                    <div className="bg-gradient-to-b from-black/20 to-black py-8">
                        <div className="container mx-auto ">
                            <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
                                <div className="w-full md:w-[550px] flex justify-between items-center border-t py-4 border-gray-500">
                                    <p className="text-lg">Instagram</p>
                                    <InstagramLogo size={32} />
                                </div>
                                <div className="w-full md:w-[550px] flex justify-between items-center border-t py-4 border-gray-500">
                                    <p className="text-lg">WhatsApp</p>
                                    <WhatsappLogo size={32} />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main>
            <section className="min-h-screen bg-[url('/home/background.webp')] bg-cover bg-center text-white overflow-hidden ">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative z-[2]">
                    <div className="flex items-center gap-20">
                    <img src="/home/logo.png" alt="" />

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
                                className={`absolute bg-gradient-to-r from-[#1B64A7] from-70% to-[#2697FF] shadow-md top-0 bottom-0 w-1/2 rounded-full transition-all duration-300 ${toggle === "left" ? "left-0 " : "left-1/2 "}`}
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

                <Hero isVisible={isVisible} toggleFade={toggleFade} />
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <Specs />
                    <Features />
                </motion.div>
                <div className="bg-gradient-to-b from-black/20 to-black py-8">
                    <div className="container mx-auto ">
                        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
                            <div className="w-full md:w-[550px] flex justify-between items-center border-t py-4 border-gray-500">
                                <p className="text-lg">Instagram</p>
                                <InstagramLogo size={32} />
                            </div>
                            <div className="w-full md:w-[550px] flex justify-between items-center border-t py-4 border-gray-500">
                                <p className="text-lg">WhatsApp</p>
                                <WhatsappLogo size={32} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="min-h-screen bg-[url('/home/background/BG_2.png')]  py-14 bg-cover bg-center overflow-hidden relative border-t-[0.2px] border-slate-200">
                <div className="absolute inset-0 bg-black opacity-20 "></div>
                <Carousel />
            </section>

            <section className="min-h-screen bg-[url('/home/background/BG_3.png')] bg-cover bg-center overflow-hidden">
                <Description />
            </section>

            <section className="min-h-screen bg-[url('/home/background/BG_4.png')] bg-cover   overflow-x-clip">
                <SubscriptionSection />
            </section>

            <Footer />



        </main>
    );
}
