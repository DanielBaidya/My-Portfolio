"use client"; // Enables client-side rendering in Next.js

import Link from "next/link"; // For internal navigation
import { useState } from "react"; // To manage state (menu toggle)
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  return (
    <header className="w-full bg-gradient-to-r from-black via-gray-900 to-red-900 border-b border-red-700 shadow-lg">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-5 px-6 relative">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-extrabold text-white tracking-widest drop-shadow">
          Daniel
        </div>

        {/* Desktop Navigation Menu (visible on md and above) */}
        <div className="space-x-8 hidden md:flex">
          <Link
            href="/"
            className="text-white hover:text-red-400 font-semibold transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-red-400 font-semibold transition-colors"
          >
            About me
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-red-400 font-semibold transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://wa.me/9863861493"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-2 rounded-full text-base font-medium shadow hover:bg-green-400 cursor-pointer transition-colors"
          >
            Whatsapp 📞
          </a>
        </div>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}{" "}
          {/* Show X if open, bars if closed */}
        </button>

        {/* Mobile Navigation Menu (visible when menuOpen is true) */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 flex flex-col items-center gap-6 py-8 z-50 md:hidden">
            <Link
              href="/"
              className="text-white text-xl"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white text-xl"
              onClick={() => setMenuOpen(false)}
            >
              About me
            </Link>
            <Link
              href="/contact"
              className="text-white text-xl"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://wa.me/9863861493"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-full text-base font-medium shadow hover:bg-green-400 cursor-pointer transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Whatsapp 📞
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; // Export the Header component
