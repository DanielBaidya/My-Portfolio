"use client";

import React from "react";
import { ExternalLink, Award } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Frontend Developement Internship",
      issuer: "Monal Tech Pvt Ltd",
      date: "2025",
      imageUrl: "./certificate.png",
    },
  ];

  const viewCertificate = (imageUrl: string) => {
    window.open(imageUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 "
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-red-500">Certifications</span> & Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise and
            commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-900 border-2 border-yellow-400/20 rounded-xl overflow-hidden hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                <Award
                  size={48}
                  className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">{cert.issuer}</span>
                  <span className="text-yellow-400 font-medium">
                    {cert.date}
                  </span>
                </div>

                <button
                  onClick={() => viewCertificate(cert.imageUrl)}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <ExternalLink size={18} />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
