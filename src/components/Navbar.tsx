import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const location = useLocation();


    const isActive = (path: string) => {
        return location.pathname === path ? '#5F5F5F' : '#FFFFFF';
    };
    const isActiveMobile = (path: string) => {
        return location.pathname === path ? '#2697FF' : '#5F5F5F';
    };

    return (
        <nav className="fixed top-0 left-0 w-full shadow-header z-50 h-[150px] ">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="flex items-center gap-10">
                    <img src="/logo-3.png" alt="Logo" className="w-28 mr-[40px]" />

                    <div className="hidden font-extrabold md:flex items-center space-x-[80px]">
                        <Link
                            to="/"
                            className="hover:text-gray-400 transition"
                            style={{ color: isActive('/') }}
                        >
                            Home
                        </Link>
                        <Link
                            to="/ailens"
                            className="hover:text-gray-400 transition"
                            style={{ color: isActive('/ailens') }}
                        >
                            Ailens
                        </Link>
                        <Link
                            to="/aira"
                            className="hover:text-gray-400 transition"
                            style={{ color: isActive('/aira') }}
                        >
                            AiRA
                        </Link>
                        <Link
                            to="/soraclip"
                            className="hover:text-gray-400 transition"
                            style={{ color: isActive('/soraclip') }}
                        >
                            SoraClip
                        </Link>
                        <Link
                            to="/our-vision"
                            className="hover:text-gray-400 transition"
                            style={{ color: isActive('/our-vision') }}
                        >
                            Our Vision
                        </Link>
                        <Link
                            to="/contact-us"
                            className="hover:text-gray-400 transition"
                            style={{ color: isActive('/contact-us') }}
                        >
                            Contact Us
                        </Link>

                    </div>
                </div>

                <div className="md:flex items-center gap-10 text-white hidden ">
                    <InstagramLogo size={28} />
                    <WhatsappLogo size={28} />
                    <button
                        type="button"
                        className="px-5 py-1 bg-gradient-to-r from-[#1F78CD] to-[#4B86B0] shadow-md text-center rounded-full relative z-10 focus:outline-none"
                    >
                        Buy Now
                    </button>
                </div>

                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none" onClick={() => setOpen(!open)}>
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: open ? 45 : 0 }}
                            className="text-3xl"
                        >
                            {open ? '×' : '☰'}
                        </motion.div>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: '0%' }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="md:hidden bg-blue-100 fixed top-0 right-0 w-3/4 h-full z-20 overflow-hidden mt-[55px] shadow-lg"
                    >
                        <Link
                            to="/"
                            className="block py-3 px-4 hover:bg-blue-200 hover:text-blue-900 transition duration-300"
                            style={{ color: isActiveMobile('/') }}
                            onClick={() => setOpen(false)} // Menutup navbar saat item diklik
                        >
                            Home
                        </Link>
                        <Link
                            to="/ailens"
                            className="block py-3 px-4 hover:bg-blue-200 hover:text-blue-900 transition duration-300"
                            style={{ color: isActiveMobile('/ailens') }}
                            onClick={() => setOpen(false)} // Menutup navbar saat item diklik
                        >
                            Ailens
                        </Link>
                        <Link
                            to="/aira"
                            className="block py-3 px-4 hover:bg-blue-200 hover:text-blue-900 transition duration-300"
                            style={{ color: isActiveMobile('/aira') }}
                            onClick={() => setOpen(false)} // Menutup navbar saat item diklik
                        >
                            AiRa
                        </Link>
                        <Link
                            to="/soraclip"
                            className="block py-3 px-4 hover:bg-blue-200 hover:text-blue-900 transition duration-300"
                            style={{ color: isActiveMobile('/soraclip') }}
                            onClick={() => setOpen(false)} // Menutup navbar saat item diklik
                        >
                            SoraClip
                        </Link>
                        <Link
                            to="/our-vision"
                            className="block py-3 px-4 hover:bg-blue-200 hover:text-blue-900 transition duration-300"
                            style={{ color: isActiveMobile('/our-vision') }}
                            onClick={() => setOpen(false)} // Menutup navbar saat item diklik
                        >
                            Our Vision
                        </Link>
                        <Link
                            to="/contact-us"
                            className="block py-3 px-4 hover:bg-blue-200 hover:text-blue-900 transition duration-300"
                            style={{ color: isActiveMobile('/contact-us') }}
                            onClick={() => setOpen(false)} // Menutup navbar saat item diklik
                        >
                            Contact Us
                        </Link>
                        <div className="px-5">
                            <button
                                type="button"
                                className="w-full px-5 py-2 mt-5 mx-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold shadow-md rounded-2xl hover:from-blue-500 hover:to-blue-600 focus:outline-none transition duration-300"
                                onClick={() => setOpen(false)} // Menutup navbar saat tombol diklik
                            >
                                Buy Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </nav>
    );
};

export default Navbar;
