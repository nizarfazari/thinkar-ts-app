import { Button } from "@/components/ui/button"

export default function Description() {

  const features = [
    {
      icon: "/home/icons/Asset 1.svg",
      title: "ChatGPT Integration",
      description: "Experience real-time assistance powered by advanced Large Language Models (LLM).",
    },
    {
      icon: "/home/icons/Asset 2.svg",
      title: "Daily Assistant",
      description: "Enhance your daily routine with seamless integration of music, translation, maps, teleprompter, calls, and more.",
    },
    {
      icon: "/home/icons/Asset 3.svg",
      title: "Lightweight Design",
      description: "Enjoy all-day comfort with a device that weighs only 37g.",
    },
    {
      icon: "/home/icons/Asset 4.svg",
      title: "Extended Battery Life",
      description: "Benefit from up to 8 hours of continuous use on a single charge.",
    },
  ]


  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto pb-20 pt-28 relative">
        <img
          src="/home/glasses/KACAMATA_4-transformed.png"
          className="animate-slide absolute right-[130px] top-[90px] w-[580px] scale-[1.2] hidden sm:block"
          alt=""
        />
        <div className="max-w-xl">
          <h1 className="text-[70px] leading-[80px]  md:text-4xl font-semibold text-[#2697FF] mix-blend-normal mb-12 font-redhat">
            At ThinkAR,
          </h1>
          <p className="text-[20px] leading-[29px] font-inter text-[#5F5F5F] max-w-[500px] mb-8">
            Our expertise lies in harnessing AI to drive business transformation and deliver unparalleled value to our clients.
          </p>
          <Button
          className="bg-gradient-to-r from-[#1F78CD] from-20% to-[#4B86B0] shadow-md text-white rounded-full px-6"
          >
            Learn more
            <span className="ml-2">→</span>
          </Button>



        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#444A4D]/80 to-[#444A4D]/90 p-6  backdrop-blur-md "
            >
              <div className="space-y-5">
                <img src={feature.icon} className="h-14" alt="" />
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-blue-100/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
