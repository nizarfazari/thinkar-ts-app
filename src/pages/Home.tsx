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
    const [toggle, setToggle] = useState<"left" | "right">("right");

    const handleToggle = (position: "left" | "right") => {
        setToggle(position);
    };



    return (
        <main>
            <nav className="fixed top-0 left-0 w-full  shadow-header z-[50]">
                <div className="container mx-auto flex items-center justify-between ">
                    <div className="flex items-center gap-36">
                        <img src="/home/logo.png" alt="" className="w-24 " />

                        <div className="hidden md:flex items-center space-x-20">
                            <a href="#" className="text-white">
                                Products
                            </a>

                            <a href="#" className="text-white">
                                Store
                            </a>
                            <a href="#" className="text-white">
                                Support
                            </a>
                        </div>
                    </div>

                    <div className="form-box relative w-[240px] bg-gray-700 px-5 py-2 rounded-full">
                        <div className="button-box relative bg-gray-700 rounded-full flex items-center p-1 text-white">
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
                </div>
            </nav>

            <section className="min-h-screen bg-[url('/home/background/BG_1.webp')] bg-cover bg-center text-white overflow-hidden flex flex-col">
                <div className="flex-1 pt-52">
                    <Hero toggleFade={toggleFade} />
                    <motion.div>
                        <Specs />
                        <Features />
                    </motion.div>
                </div>

                <div className="shadow-nav-footer pt-4 mt-auto">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
                            <div className="w-full md:w-[550px] flex justify-between items-center border-t py-4 border-gray-500">
                                <p className="text-sm">Instagram</p>
                                <InstagramLogo size={20} />
                            </div>
                            <div className="w-full md:w-[550px] flex justify-between items-center border-t py-4 border-gray-500">
                                <p className="text-s,">WhatsApp</p>
                                <WhatsappLogo size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="min-h-screen bg-[url('/home/background/BG_2.webp')]  py-14 bg-cover bg-center overflow-hidden relative">
                <Carousel />
            </section>

            <section className="min-h-screen bg-[url('/home/background/BG_3.webp')] bg-cover bg-center overflow-hidden">
                <Description />
            </section>

            <section className="min-h-screen bg-[url('/home/background/BG_4.webp')] bg-cover   overflow-x-clip">
                <SubscriptionSection />
            </section>

            <Footer />


        </main>
    );
}
