"use client";

import React from "react";
import Image from "next/image";
import { Download, ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "John_Doe_CV.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 relative "
    >
      <div className="max-w-6xl mx-auto w-full mt-12 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Daniel...
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              I am a Next.js developer skilled in building modern, responsive
              websites and web apps using Next.js, TypeScript, Tailwind CSS,
              Framer Motion, and React. I specialize in creating fast, clean,
              and dynamic user experiences.
            </p>

            <div className="mb-8">
              <button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 mx-auto lg:mx-0 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                aria-label="Download CV"
              >
                <Download size={24} />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-red-500/30 shadow-2xl relative">
                <Image
                  src="/me.JPG"
                  alt="John Doe - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNextSection}
            className="text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
