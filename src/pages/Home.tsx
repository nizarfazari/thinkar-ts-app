import { Hero } from "../components/Hero";
import Carousel from "@/components/Carousel";
import Description from "@/components/home/description";
import SubscriptionSection from "@/components/home/subscription";



export default function Home() {

    return (
        <main >
            <section className="min-h-[700px]  text-[#5F5F5F] overflow-hidden flex flex-col">
                <div className="flex-1 pt-52">
                    <Hero />
                </div>
            </section>
            <section className="min-h-screen   pb-14 overflow-hidden relative">
                <Carousel />
            </section>

            <section className="min-h-screen  overflow-hidden">
                <Description />
            </section>

            <section className="min-h-screen    overflow-x-clip">
                <SubscriptionSection />
            </section>

        </main>
    );
}
