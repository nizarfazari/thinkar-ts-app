import { Hero } from "../components/Hero";
import Carousel from "@/components/Carousel";
import Description from "@/components/home/description";
import SubscriptionSection from "@/components/home/subscription";



export default function Home() {

    return (
        <main >
            <section className="min-h-[700px]  text-[#5F5F5F] overflow-hidden flex flex-col">
                <div className="flex-1 xl:pt-52">
                    <Hero />
                </div>
            </section>
            <section className=" pb-14 overflow-hidden relative">
                <Carousel />
            </section>

            <section className="  overflow-hidden">
                <Description />
            </section>

            <section className=" pb-40   overflow-x-clip">
                <SubscriptionSection />
            </section>

        </main>
    );
}
