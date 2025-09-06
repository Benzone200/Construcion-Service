import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeDown, slideInRight } from '../animations/variant.js';
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <motion.nav
      variants={fadeDown}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="flex items-center justify-between px-6 py-4 pt-[40px] relative"
    >
      {/* Logo */}
      <div className="flex-1">
        <img src={Logo} alt="Fixora Logo" className="w-[120px]" />
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex justify-center space-x-8">
        {navLinks.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="hover:text-[#007bff] text-[18px] font-medium transition-colors duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Book A Service */}
      <div className="hidden md:block flex-1 text-right">
        <a
          href="#book"
          className="bg-[#007bff] px-[18px] py-[13px] rounded-[15px] text-white font-medium"
        >
          Book A Service
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden absolute right-6 top-[45px] z-50">
        <button onClick={toggleMenu} className="text-[#007bff]" aria-label="Toggle menu">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg z-40 flex flex-col pt-[100px] px-6 space-y-6 md:hidden"
          >
            <ul className="flex flex-col space-y-6">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[20px] font-semibold hover:text-[#007bff] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <a
                href="#book"
                className="bg-[#007bff] px-[18px] py-[13px] rounded-[15px] text-white inline-block mt-4 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Book A Service
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;