"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";

const Page: React.FC = () => {
  return (
    <div className="relative">
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
      </main>
    </div>
  );
};

export default Page;
