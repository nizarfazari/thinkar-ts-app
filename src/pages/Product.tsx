import {
    CloudFog,
    StackSimple,
    Globe,
    Users
} from "@phosphor-icons/react"


export default function Product() {
    const features = [
        {
            icon: CloudFog,
            title: "AI Smart Glasses and Wearable Products",
            description: "ThinkAR specializes in AI smart glasses and other AI wearable products. Our products are designed to enhance productivity and provide innovative solutions for various industries. We are dedicated to bringing reality to imagination through cutting-edge technology."
        },
        {
            icon: StackSimple,
            title: "Wearable AI Assistants",
            description: "At ThinkAR, we offer wearable AI assistants that are powered by advanced data science and analytics. These assistants are designed to accelerate data processing and provide valuable insights, empowering users to make informed decisions in real-time."
        },
        {
            icon: Globe,
            title: "Global Reach and Adaptability",
            description: "With a focus on global business, ThinkAR's products exhibit versatility in application across diverse geographical and cultural landscapes. Our solutions are adaptable to various industries and user preferences, ensuring a seamless and tailored experience for our clients worldwide."
        },
        {
            icon: Users,
            title: "Enhanced Customer Engagement",
            description: "We prioritize the full customer experience by providing seamless integration of our wearable products with the client's ecosystem. Our solutions are designed to enhance customer engagement, streamline processes, and deliver exceptional value to businesses and end-users."
        }
    ]
    return (
        <div className="">
            {/* Hero Section with Background */}
            <div
                className="relative h-[500px] flex items-center px-6 md:px-12"
                style={{
                    backgroundImage: 'url("/product-bg.avif")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h1 className="text-white/80 text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
                    Empower Your Business and Life with Wearable Products
                </h1>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-11 py-16">
                <div className="space-y-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:items-start gap-x-20">
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
                                    <feature.icon
                                        className="text-[#2697FF]"
                                        size={48}
                                        weight="light"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 max-w-[700px]">
                                <h2 className="text-4xl font-semibold text-[#2697FF]">
                                    {feature.title}
                                </h2>
                                <p className="text-[#5F5F5F] text-lg leading-relaxed">
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

