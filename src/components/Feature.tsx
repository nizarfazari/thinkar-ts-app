interface FeatureCardProps {
    title: string;
    image: string;
  }
  
  function FeatureCard({ title, image }: FeatureCardProps) {
    return (
      <div className="relative overflow-hidden rounded-2xl group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
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
        title: "Various Features",
        image: "/home/features/Group 112.png",
      },
      {
        title: "Lightweight Design",
        image: "/home/features/Group 111.png",
      },
      {
        title: "Intuitive Operation",
        image: "/home/features/Group 110.png",
      },
      {
        title: "iOS APP",
        image: "/home/features/Group 109.png",
      },
    ];
  
    return (
      <section className="container mx-auto px-4 py-16">
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
  