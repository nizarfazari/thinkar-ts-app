export default function FeaturesAilens() {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto space-y-24">
                {/* C-bridge Design */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-500 mb-4">C-bridge Design</h2>
                        <p className="text-gray-600">
                            The minimalist spherical shape makes earbuds stylish, while the ergonomic design ensures comfort and feather-light wearing.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/placeholder.svg"
                            alt="Black SoraClip"
                            width={200}
                            height={200}
                            className="w-full"
                        />
                        <img
                            src="/placeholder.svg"
                            alt="White SoraClip"
                            width={200}
                            height={200}
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Open-ear Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-500 mb-4">Open-ear, open mind.</h2>
                    <p className="text-gray-600 mb-8">
                        Immerse yourself in crystal-clear sound.
                    </p>
                    <img
                        src="/placeholder.svg"
                        alt="SoraClip Design"
                        width={300}
                        height={300}
                        className="mx-auto"
                    />
                </div>

                {/* Battery Life */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-500 mb-4">Long Hour to Play</h2>
                    <p className="text-gray-600 mb-8">
                        Listen for up to 28 hours with a fully charged charging case. Wearing a single earbud while having a fully charged charging case ensures a longer battery life.
                    </p>
                    <div className="relative inline-block">
                        <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center">
                            <span className="text-2xl font-bold">28H</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}