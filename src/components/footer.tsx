export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#71AED0] to-[#71AED0] pb-8 shadow-footer">
            <div className="container mx-auto border-t-[2px] border-white py-8">
                <ul className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                    {/* Logo */}
                    <li className="col-span-2 md:col-span-1 flex justify-center md:block">
                        <a
                            href="/about"
                            className="text-gray-200 hover:text-white transition-colors"
                        >
                            <img src="/logo-3.png" className="w-28" alt="Logo" />
                        </a>
                    </li>

                    {/* Navigation Links */}
                    <li>
                        <a
                            href="/products"
                            className="text-gray-200 hover:text-white transition-colors"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="/products"
                            className="text-gray-200 hover:text-white transition-colors"
                        >
                            Products
                        </a>
                    </li>
                    <li>
                        <a
                            href="/privacy-policy"
                            className="text-gray-200 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact-us"
                            className="text-gray-200 hover:text-white transition-colors"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
