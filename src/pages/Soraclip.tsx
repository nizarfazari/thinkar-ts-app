import { Features } from "@/components/soraclip/Feature";
import { HeroAilens } from "@/components/soraclip/HeroAilens";
import { Specs } from "@/components/soraclip/Specs";
import SubscriptionAilens from "@/components/soraclip/subscription";



export default function Soraclip() {
    return (
        <main>
            {/* Hero Section */}
            <section className=" text-white overflow-hidden flex flex-col">
                <div className="flex-1 pt-20">
                    <HeroAilens />
                    <div>
                        <Specs />
                        <Features />
                    </div>
                </div>
            </section>

            {/* Various Features Section */}
            <section className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div className="grid grid-cols-2">
                        <img
                            src="/soraclip/details/detail-1-1.png"
                            alt="Smart Glasses"
                            className="w-full "
                        />
                        <img
                            src="/soraclip/details/detail-1-2.png"
                            alt="Smart Glasses"
                            className="w-full "
                        />
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
                        Open-ear, open mind.
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        Immerse yourself in crystal-clear sound.
                        </p>

                    </div>
                </div>
            </section>

            {/* Light Design Section */}
            <section className="container mx-auto px-4 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
                        C-bridge Design
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed max-w-xl mx-auto md:mx-0 font-inter">
                        The minimalist spherical shape makes earbuds stylish, while the ergonomic design ensures comfort and feather-light wearing.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src="/soraclip/details/detail-2.png"
                            alt="Light Design"
                            className="w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Intuitive Operation Section */}
            <section className="container mx-auto  mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div>
                        <img
                            src="/soraclip/details/detail-3.png"
                            alt="Intuitive Operation"
                            className="w-full "
                        />
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
                        4.6g Lightweight
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        These earbuds are lightweight at just 4.6 g, and the open-ear design ensures your ears can breathe thoroughly.
                        </p>
                    </div>
                </div>
            </section>

            {/* iOS App Section */}
            <section className="container mx-auto  mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
                        Long Hour to Play
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] max-w-[500px] leading-relaxed max-w-xl mx-auto md:mx-0 font-inter">
                        Listen for for up to 28 hours with a fully charged charging case. Wearing a single earbud while having a fully charged charging case ensures a longer battery life*.
                        </p>
                        <p className="text-sm font-light mt-8 max-w-[500px]  text-[#5F5F5F]">
                        *Battery life and charging data is from laboratory, tested with fully charged earbuds and charging case, connected to a smartphone during which audio was played in default mode and AAC format. Actual results may vary depending on volume, audio source, environment interference, product features, and usage habits.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src="/soraclip/details/detail-4.png"
                            alt="iOS App"
                            className="w-full max-w-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Subscription Section */}
            <section className="pb-20 overflow-x-clip mt-20">
                <SubscriptionAilens />
            </section>
        </main>
    );
}
