import React, { useState } from "react";
import { assets } from '../assets/assets';  // Adjust the path to your assets if needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        
      </div>

      {/* Navbar */}
      <nav className="w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50 ">
        {/* Logo */}
        <a href="#top" aria-label="Go to top">
          <h2 className="font-bold text-2xl text-black font-Ovo ">
            Sufyan Ali <span className="text-3xl text-red-400">.</span>
          </h2>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-3 bg-white shadow-sm bg-opacity-220 ">
          <li>
            <a
              className="font-Ovo text-gray-700 hover:text-blue-500 transition "
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-Ovo text-gray-700 hover:text-blue-500 transition "
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="font-Ovo text-gray-700 hover:text-blue-500 transition "
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-Ovo text-gray-700 hover:text-blue-500 transition "
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="font-Ovo text-gray-700 hover:text-blue-500 transition "
              href="#contact"
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Contact Button */}
          <a
            href="#contact"
            className="flex items-center gap-3 px-6 py-2.5 font-Ovo text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition rounded-full shadow-sm  dark:hover:border-blue-400"
          >
            Contact
            <img src={assets.arrow_icon} alt="Arrow Icon" className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full dark:text-white"
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? (
              <img src={assets.close_black} className="w-6" alt="Close Menu Icon" />
            ) : (
              <img src={assets.menu_black} className="w-6" alt="Open Menu Icon" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg py-4 z-40 dark:bg-gray-900">
            <ul>
              <li>
                <a
                  className="block px-5 py-3 font-Ovo text-gray-700 hover:text-blue-500 transition dark:text-white"
                  href="#top"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="block px-5 py-3 font-Ovo text-gray-700 hover:text-blue-500 transition dark:text-white"
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="block px-5 py-3 font-Ovo text-gray-700 hover:text-blue-500 transition dark:text-white"
                  href="#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="block px-5 py-3 font-Ovo text-gray-700 hover:text-blue-500 transition dark:text-white"
                  href="#work"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Work
                </a>
              </li>
              <li>
                <a
                  className="block px-5 py-3 font-Ovo text-gray-700 hover:text-blue-500 transition dark:text-white"
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
