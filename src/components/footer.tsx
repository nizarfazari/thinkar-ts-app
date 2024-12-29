export default function Footer() {
    return (
      <footer className="bg-gradient-to-b from-[#1a1a1a] to-black py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <li>
                <a 
                  href="/about" 
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>  <li>
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
  
  