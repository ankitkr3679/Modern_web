import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      {/* Mobile and Desktop top bar */}
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16 flex items-center justify-between">

        {/* Mobile Layout */}
        <div className="flex md:hidden w-full items-center justify-between relative">
          {/* Toggle Button (Left) */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 z-10">
            {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
          </button>

          {/* Logo (Center Absolute) */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
              <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
            </div>
          </div>

          {/* Login Button (Right) */}
          <a href="LoginModal" className="z-10">
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-all hover:shadow-md hover:shadow-blue-100">
              Login
            </button>
          </a>

        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
            <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
          </div>

          {/* Nav Items */}
          <div className="flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all ${activeLink === link.href
                  ? 'text-blue-600 after:w-full'
                  : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Login */}
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
            <a href="LoginModal">Login</a>
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col items-center space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 text-center ${activeLink === link.href
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
