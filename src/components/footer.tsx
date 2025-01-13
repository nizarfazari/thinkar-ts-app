export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#71AED0] to-[#71AED0] pb-8 shadow-footer">
            <div className="container mx-auto border-t-[2px] border-white py-8">
                <ul className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                    <li>
                        <a
                            href="/about"
                            className="text-gray-200 hover:text-white transition-colors"
                        >
                            <img src="/logo-3.png" className="w-28 " alt="" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
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
                            href="/privacy"
                            className="text-gray-200 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="text-gray-200 hover:text-white transition-colors"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

