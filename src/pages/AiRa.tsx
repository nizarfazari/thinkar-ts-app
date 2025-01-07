import { Features } from "@/components/aira/Feature";
import { HeroAilens } from "@/components/aira/HeroAilens";
import { Specs } from "@/components/aira/Specs";
import SubscriptionAilens from "@/components/aira/subscription";


export default function Aira() {
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
      <section className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <img
              src="/aira/details/details-1.png"
              alt="Smart Glasses"
              className="w-full "
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
            160-inch 4K Screen
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
            Transform your viewing experience with a massive 160-inch 4K display, bringing cinematic visuals to life wherever you are.
            </p>
          
          </div>
        </div>
      </section>

      {/* Light Design Section */}
      <section className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
              Light Design
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed max-w-xl mx-auto md:mx-0 font-inter">
              At just 37g, AiLens is designed to be ultra-lightweight for
              maximum comfort and ease of wear.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/aira/details/details-2.png"
              alt="Light Design"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Intuitive Operation Section */}
      <section className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <img
              src="/aira/details/details-3.png"
              alt="Intuitive Operation"
              className="w-full max-w-lg mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
              Intuitive Operation
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
              Seamlessly access a wide range of features through voice commands,
              simple button operations, swipe gestures, and tap controls.
            </p>
          </div>
        </div>
      </section>

      {/* iOS App Section */}
      <section className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
              iOS APP
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed max-w-xl mx-auto md:mx-0 font-inter">
              Comes with a dedicated application for enhanced functionality and
              seamless control.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/aira/details/details-4.png"
              alt="iOS App"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="min-h-screen overflow-x-clip mt-20">
        <SubscriptionAilens />
      </section>
    </main>
  );
}
