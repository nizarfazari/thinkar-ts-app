interface FeatureCardProps {
    title: string;
    image: string;
  }
  
  function FeatureCard({ title, image }: FeatureCardProps) {
    return (
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className=" object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-start p-6">
          <h3 className="text-xl font-semibold text-white w-[100px]">
            {title}
          </h3>
        </div>
      </div>
    );
}

  interface Feature {
    title: string;
    image: string;
  }
  
  export function Features() {
    const features: Feature[] = [
      {
        title: "160-inch 4K Screen",
        image: "/aira/features/feature-1.png",
      },
      {
        title: "Seamless Connectivity",
        image: "/aira/features/feature-2.png",
      },
      {
        title: "Lightweight Design",
        image: "/aira/features/feature-3.png",
      },
      {
        title: "4 Color Options",
        image: "/aira/features/feature-4.png",
      },
    ];
  
    return (
      <section className="container mx-auto pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              image={feature.image}
            />
          ))}
        </div>
      </section>
    );
  }
  