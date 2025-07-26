"use client";

import React, { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[70%] max-w-4xl">
      <nav className="bg-white text-black backdrop-blur-lg border border-neutral-200  rounded-2xl md:rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Daniel
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-black hover:text-red-400 transition-colors duration-300 font-medium cursor-pointer"
              aria-label="Navigate to home section"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-black hover:text-red-400 transition-colors duration-300 font-medium cursor-pointer"
              aria-label="Navigate to projects section"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-black hover:text-red-400 transition-colors duration-300 font-medium cursor-pointer"
              aria-label="Navigate to skills section"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-red-400 transition-colors duration-300 font-medium cursor-pointer"
              aria-label="Navigate to contact section"
            >
              Contact
            </button>
            <a
              href="https://wa.me/9863861483"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black hover:text-red-400 transition-colors duration-300"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-red-900/20">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-black hover:text-red-400 transition-colors duration-300 font-medium text-left"
                aria-label="Navigate to home section"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-black hover:text-red-400 transition-colors duration-300 font-medium text-left"
                aria-label="Navigate to projects section"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-black hover:text-red-400 transition-colors duration-300 font-medium text-left"
                aria-label="Navigate to skills section"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-black hover:text-red-400 transition-colors duration-300 font-medium text-left"
                aria-label="Navigate to contact section"
              >
                Contact
              </button>
              <a
                href="https://wa.me/9863861483"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 w-fit"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
