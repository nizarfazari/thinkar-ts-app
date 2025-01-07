import { Play } from "@phosphor-icons/react";




export function Hero() {
    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between relative h-auto md:h-[200px] px-6 md:px-20 py-12 md:py-0">
            
            <div className="w-full md:w-1/3 space-y-4"
            >
                <h1 className="text-[2.5rem] sm:text-2xl md:text-5xl font-semibold leading-[1.3] sm:leading-[1.2] md:leading-[60px] font-redhat text-center md:text-left">
                    Enhancing <span className="text-blue-400">Vision</span> <br /> Empowering You
                </h1>
            </div>

            <div className="w-full md:w-2/3 ">
                
            </div>
        </section>
    );
}
