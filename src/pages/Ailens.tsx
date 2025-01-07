
import { Specs } from "../components/ailens/Specs";
import { Features } from "../components/ailens/Feature";
import { motion } from "motion/react"

import SubscriptionSection from "@/components/home/subscription";

import FeaturesAilens from "@/components/ailens/Detail";
import { HeroAilens } from "@/components/ailens/hero";


export default function Ailens() {



    return (
        <main>


            <section className="min-h-screen  text-white overflow-hidden flex flex-col">
                <div className="flex-1 pt-20">
                    <HeroAilens />
                    <motion.div>
                        <Specs />
                        <Features />
                    </motion.div>
                </div>

            </section>


            <section className="container mx-auto">
                <div className="grid grid-cols-2 items-center gap-10">
                    <div>
                        <img src="/ailens/details/glasses-2.png" alt="Smart Glasses" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl font-bold text-blue-500">Various features</h1>
                        <p className="mt-4 text-xl font-inter text-[#5F5F5F] leading-relaxed">
                            Experience the power of a hands-free personal assistant with advanced AI integration,
                            real-time translation, notifications, and music playback, all in a stylish glasses design.
                        </p>
                        <div className="mt-6 flex space-x-6 text-3xl text-gray-500">
                            <img src="/ailens/details/icons.png" className="h-12" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="container mx-auto">
                <div className="grid grid-cols-2 items-center ">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl font-bold text-blue-500">Light Design</h1>
                        <p className="mt-4 text-xl font-inter text-[#5F5F5F] leading-relaxed max-w-[600px]">
                            At just 37g, AiLens is designed to be ultra-lightweight for maximum comfort and ease of wear.
                        </p>

                    </div>
                    <div>
                        <img src="/ailens/details/glasses-3.png" alt="Smart Glasses" />
                    </div>
                </div>
            </section>

            <section className="container mx-auto">
                <div className="grid grid-cols-2 items-center gap-10">
                    <div>
                        <img src="/ailens/details/glasses-4.png" alt="Smart Glasses" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl font-bold text-blue-500">Intuitive Operation</h1>
                        <p className="mt-4 text-xl font-inter text-[#5F5F5F] leading-relaxed">
                            Seamlessly access a wide range of features through voice commands, simple button operations, swipe gestures, and tap controls.
                        </p>

                    </div>
                </div>
            </section>


            <section className="container mx-auto">
                <div className="grid grid-cols-2 items-center ">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl font-bold text-blue-500">iOS APP</h1>
                        <p className="mt-4 text-xl font-inter text-[#5F5F5F] leading-relaxed max-w-[600px]">
                        Comes with a dedicated application for enhanced functionality and seamless control.
                        </p>

                    </div>
                    <div>
                        <img src="/ailens/details/handphone.png" alt="Smart Glasses" />
                    </div>
                </div>
            </section>


            <section className="min-h-screen  overflow-x-clip mt-20">
                <SubscriptionSection />
            </section>




        </main>
    );
}
