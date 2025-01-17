export default function OurVision() {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Section */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2697FF]">Our Mission</h1>
          <div className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
            <p>Handles AI smart glasses and other AI wearable products.</p>
            <p>Our key message is 'Bring Reality to Imagination'.</p>
          </div>
        </section>
  
        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative aspect-[4/3] bg-[#1a1f35] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[url('/our-vision/vision-2.avif')] bg-cover bg-center opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white text-center">Our Story</h2>
            </div>
          </div>
          <div className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter space-y-4">
            <p>
              At ThinkAR, we are dedicated to revolutionizing the way people interact with technology. Our journey began with
              a vision to bridge the gap between imagination and reality, leading us to develop cutting-edge AI smart glasses and
              other wearable products. Our commitment to innovation and quality sets us apart in the industry, and our
              global expansion reflects our passion for bringing the future to the present.
            </p>
          </div>
        </section>
  
        {/* Leadership Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter space-y-4 lg:order-1 order-2">
            <p>
              Our team at ThinkAR is comprised of experienced leaders who bring a diverse range of expertise to the table. From
              design and engineering to business development and marketing, our collective vision drives us to create
              impactful solutions that redefine the boundaries of technology. Together, we strive to shape a future where AI
              wearable products seamlessly integrate into daily life, enhancing experiences and unlocking new possibilities.
            </p>
          </div>
          <div className="relative aspect-[4/3] bg-[#1a1f35] rounded-lg overflow-hidden lg:order-2 order-1">
            <div className="absolute inset-0 bg-[url('/our-vision/vision.avif')] bg-cover bg-center opacity-50 mix-blend-color-dodge"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white text-center">
                Experienced<br />Leadership
              </h2>
            </div>
          </div>
        </section>
      </main>
    )
  }
  
  