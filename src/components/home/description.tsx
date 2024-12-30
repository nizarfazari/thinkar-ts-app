import { Button } from "@/components/ui/button"

export default function Description() {

  const features = [
    {
      icon: "/home/icons/gpt.png",
      title: "ChatGPT Integration",
      description: "Experience real-time assistance powered by advanced Large Language Models (LLM).",
    },
    {
      icon: "/home/icons/mic.png",
      title: "Daily Assistant",
      description: "Enhance your daily routine with seamless integration of music, translation, maps, teleprompter, calls, and more.",
    },
    {
      icon: "/home/icons/feather.png",
      title: "Lightweight Design",
      description: "Enjoy all-day comfort with a device that weighs only 37g.",
    },
    {
      icon: "/home/icons/battery.png",
      title: "Extended Battery Life",
      description: "Benefit from up to 8 hours of continuous use on a single charge.",
    },
  ]


  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto pb-20 pt-28 relative">
        <img src="/home/background/KACAMATA_4.png" className="absolute right-[-100px] top-[20px] w-[1000px]  mix-blend-lighten opacity-70" alt="" />
        <div className="max-w-xl">
          <h1 className="text-[60px]  md:text-4xl font-bold text-[#2697FF] mb-6">
            At ThinkAR,
          </h1>
          <p className="text-lg text-gray-300 max-w-[440px] mb-6">
            Our expertise lies in harnessing AI to drive business transformation and deliver unparalleled value to our clients.
          </p>
          <Button
            className="bg-gradient-to-r from-[#214373] from-10% to-[#2869B5] shadow-md text-white rounded-full px-6"
          >
            Learn more
            <span className="ml-2">→</span>
          </Button>



        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#2869B5] from-50% to-[#214373] p-6 "
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
