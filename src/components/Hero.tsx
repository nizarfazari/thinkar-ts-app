



export function Hero() {
    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between relative h-auto md:h-[200px] gap-10 pt-10">

            <div className="w-full md:w-1/3 space-y-4"
            >
                <h1 className="text-[2.5rem] sm:text-2xl md:text-5xl font-semibold leading-[1.3] sm:leading-[1.2] md:leading-[60px] font-redhat text-center md:text-left">
                    Enhancing <span className="text-blue-400">Vision</span> <br /> Empowering You
                </h1>
            </div>

         

            <div className="w-full md:w-2/3 relative">
                <div className="relative w-full h-[497px] max-w-[800px] overflow-hidden">
                    <video  controls className="absolute top-[-15px] px-4 left-0 w-full h-full rounded-md z-20">
                        <source src="/video/home.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <img src="/home/border.png" alt="Device Frame" className="relative z-10 w-full  h-full" />
                </div>
            </div>
        </section>
    );
}
