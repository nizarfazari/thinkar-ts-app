import { Specs } from "../components/ailens/Specs";
import { Features } from "../components/ailens/Feature";


import SubscriptionAilens from "@/components/ailens/subscription";
import { HeroAilens } from "@/components/ailens/HeroAilens";

export default function Ailens() {
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
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <img
              src="/ailens/details/glasses-2.png"
              alt="Smart Glasses"
              className="w-full "
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
              Various features
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
              Experience the power of a hands-free personal assistant with
              advanced AI integration, real-time translation, notifications, and
              music playback, all in a stylish glasses design.
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-6 text-3xl text-gray-500">
              <img
                src="/ailens/details/icons.png"
                className="h-12"
                alt="Features Icon"
              />
            </div>
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
              src="/ailens/details/glasses-3.png"
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
              src="/ailens/details/glasses-4.png"
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
              src="/ailens/details/handphone.png"
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
