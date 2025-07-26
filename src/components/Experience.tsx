"use client";

import React from "react";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  level: "Junior" | "Mid-level" | "Trainee" | "Lead";
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Web Consultant",
      company: "Web Royale Pvt Ltd",
      period: "2024 (Jan - Sept)",
      location: "Ekta Marg, Baneswor",
      description:
        "Helped businesses from the UK to get more leads and visibility through website and SEO solutions",
      skills: ["Wordpress", "SEO"],
      level: "Mid-level",
    },
    {
      id: 2,
      role: "Frontend Trainee",
      company: "Monal Tech Pvt Ltd",
      period: "Feb - May",
      location: "Chahabil, Kathmandu",
      description:
        "Here I learned React and Tailwind CSS on detail and completed couple of practice projects. Got familiar with typescript aswell.",
      skills: ["React", "Tailwind", "Git"],
      level: "Trainee",
    },
    {
      id: 3,
      role: "NextJs Developer",
      company: "Ek ra Sunya INC",
      period: "2025 - present",
      location: "Lalitpur, Nepal",
      description:
        "I am working here as a full time Nextjs Developer. Building modern Websites and Webapps using latest technologies",
      skills: [
        "NextJs",
        "TailwindCSS",
        "TypeScript",
        "Framer Motion",
        "Javascript",
      ],
      level: "Junior",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Senior":
      case "Lead":
        return "text-red-400 bg-red-400/10";
      case "Mid-level":
        return "text-yellow-400 bg-yellow-400/10";
      case "Junior":
        return "text-green-400 bg-green-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 "
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-red-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I&apos;ve made at each
            organization
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-black border-2 border-red-400/20 rounded-xl p-8 hover:border-red-400/60 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(
                        exp.level
                      )}`}
                    >
                      {exp.level}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <TrendingUp size={16} />
                      <span className="font-semibold text-red-400">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
