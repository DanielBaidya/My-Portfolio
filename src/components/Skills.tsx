"use client";

import React from "react";
import Image from "next/image";
interface Skill {
  id: number;
  name: string;
  imgSrc: string;
  alt: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "TypeScript",
    imgSrc: "/ts.webp",
    alt: "TypeScript logo",
  },
  {
    id: 2,
    name: "Next.js",
    imgSrc: "/next.webp",
    alt: "Next.js logo",
  },
  { id: 3, name: "React", imgSrc: "/react.webp", alt: "React logo" },
  { id: 4, name: "Java", imgSrc: "/java.webp", alt: "Java logo" },
  {
    id: 5,
    name: "JavaScript",
    imgSrc: "Js.png",
    alt: "JavaScript logo",
  },
  {
    id: 6,
    name: "Tailwind",
    imgSrc: "/tailwind.webp",
    alt: "Tailwind CSS logo",
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Key technologies I specialize in.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 justify-center items-center">
          {skills.map(({ id, name, imgSrc, alt }) => (
            <div
              key={id}
              className="flex flex-col items-center space-y-3 py-10 cursor-pointer border border-red-900 rounded-xl hover:scale-110 duration-300"
              aria-label={name}
              title={name}
            >
              <Image
                src={imgSrc}
                alt={alt}
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
              <span className="text-white font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
