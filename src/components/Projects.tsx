"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: "Web App" | "Mobile App" | "Frontend" | "Full Stack";
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Event Management site",
      description:
        "A fullstack event management site built with NextJs15, Typescript , TailwindCSS , Framermotion",
      imageUrl: "/aoc.png",
      technologies: [
        "NextJs",
        "Typescript",
        "Tailwind CSS",
        "Framer Motion",
        "NodeMailer",
        "RHF+zod",
      ],
      liveUrl: "https://aocnepal.com.np",
      githubUrl: "https://github.com/dashboard",
      category: "Frontend",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full Stack":
        return "text-red-400 bg-red-400/10";
      case "Web App":
        return "text-blue-400 bg-blue-400/10";
      case "Mobile App":
        return "text-green-400 bg-green-400/10";
      case "UI/UX Design":
        return "text-purple-400 bg-purple-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 "
    >
      {/* Note:: In the future if u want to add more projects increase the max-w-2xl below to 7xl and also grid-cols-1 to 3 for larger and md devices */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-red-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I&apos;ve used to
            bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black border-2 border-yellow-400/20 rounded-xl overflow-hidden hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors duration-300"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <Eye size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-yellow-400/10 text-yellow-400 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center space-x-2 transition-all duration-300"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center transition-all duration-300"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
