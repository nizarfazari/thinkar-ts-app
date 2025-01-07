import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState<'left' | 'right'>('right');
    const location = useLocation();

    const handleToggle = (position: 'left' | 'right') => {
        setToggle(position);
    };

    const isActive = (path: string) => {
        return location.pathname === path ? '#5F5F5F' : '#FFFFFF';
    };

    return (
        <nav className="fixed top-0 left-0 w-full shadow-header z-50 h-[150px] ">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="flex items-center gap-10">
                    <img src="/home/logo.png" alt="Logo" className="w-28 mr-[120px]" />

                    <div className="hidden md:flex items-center space-x-[80px]">
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
                            to="/support"
                            className="hover:text-gray-400 transition"
                            style={{ color: isActive('/support') }}
                        >
                            Support
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-10 text-white">
                    <InstagramLogo size={28} />
                    <WhatsappLogo size={28} />
                    <div className="hidden md:block relative w-[240px] bg-[#55A8EB] px-5 py-2 rounded-full">
                        <div className="relative flex items-center p-1 text-white">
                            <motion.div
                                layout
                                className="absolute bg-gradient-to-r from-[#1F78CD] to-[#4B86B0] shadow-md top-0 bottom-0 w-1/2 rounded-full"
                                animate={{ left: toggle === 'left' ? '0%' : '50%' }}
                                transition={{ duration: 0.3 }}
                            />
                            <button
                                type="button"
                                className="w-1/2 text-center relative z-10 focus:outline-none"
                                onClick={() => handleToggle('left')}
                            >
                                AiLens
                            </button>
                            <button
                                type="button"
                                className="w-1/2 text-center relative z-10 focus:outline-none"
                                onClick={() => handleToggle('right')}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
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
                        className="md:hidden bg-gray-800 fixed top-0 right-0 w-3/4 h-full z-20 overflow-hidden mt-[55px]"
                    >
                        <Link
                            to="/products"
                            className="block py-3 px-4 hover:bg-gray-700 transition"
                            style={{ color: isActive('/products') }}
                        >
                            Products
                        </Link>
                        <Link
                            to="/store"
                            className="block py-3 px-4 hover:bg-gray-700 transition"
                            style={{ color: isActive('/store') }}
                        >
                            Store
                        </Link>
                        <Link
                            to="/support"
                            className="block py-3 px-4 hover:bg-gray-700 transition"
                            style={{ color: isActive('/support') }}
                        >
                            Support
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
