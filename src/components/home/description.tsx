import { Button } from "@/components/ui/button"

export default function Description() {

  const features = [
    {
      icon: "Brain",
      title: "ChatGPT Integration",
      description: "Experience real-time assistance powered by advanced Large Language Models (LLM).",
    },
    {
      icon: "Mic",
      title: "Daily Assistant",
      description: "Enhance your daily routine with seamless integration of music, translation, maps, teleprompter, calls, and more.",
    },
    {
      icon: "Feather",
      title: "Lightweight Design",
      description: "Enjoy all-day comfort with a device that weighs only 37g.",
    },
    {
      icon: "Battery",
      title: "Extended Battery Life",
      description: "Benefit from up to 8 hours of continuous use on a single charge.",
    },
  ]


  return (
    <div className="min-h-screen bg-[#020B2D] text-white overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            At ThinkAR,
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Our expertise lies in harnessing AI to drive business transformation and deliver unparalleled value to our clients.
          </p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
          >
            Learn more
            <span className="ml-2">→</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-blue-800/30 backdrop-blur-sm p-6 transition-all hover:bg-blue-800/40"
            >
              <div className="space-y-4">
                <feature.icon className="h-8 w-8 text-white" />
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
    </div>
  )
}
