
import { Specs } from "../components/Specs";
import { Features } from "../components/Feature";
import { motion } from "motion/react"

import SubscriptionSection from "@/components/home/subscription";
import { Hero } from "@/components/ailens/hero";
import FeaturesAilens from "@/components/ailens/features";


export default function Ailens() {



    return (
        <main>


            <section className="min-h-screen  text-white overflow-hidden flex flex-col">
                <div className="flex-1 pt-52">
                    <Hero />
                    <motion.div>
                        <Specs />
                        <Features />
                    </motion.div>
                </div>

            </section>


            <section className="min-h-screen   pb-14 overflow-hidden relative">
                <FeaturesAilens />
            </section>

         

            <section className="min-h-screen    overflow-x-clip">
                <SubscriptionSection />
            </section>




        </main>
    );
}
