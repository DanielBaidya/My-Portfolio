"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Github,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/daniel_baidya/",
      color: "hover:text-pink-400",
    },
    {
      name: "Facebook",
      icon: <Facebook size={24} />,
      url: "https://www.facebook.com/daniel.baidya02/",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/daniel-baidya/",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/DanielBaidya",
      color: "hover:text-gray-300",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "dbaidya.me@gmail.com",
      href: "mailto:dbaidya.me@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+977 9863861483",
      href: "tel:+977 9863861483",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Kathmandu, Nepal",
      href: null,
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-gradient-to-t from-black to-gray-900 py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="text-red-500">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to work together? Get in touch and let&apos;s create something
            amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-red-400 bg-red-400/10 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Follow Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-800 border border-red-400 rounded-xl p-6 hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3 text-gray-300 ${social.color}`}
                  aria-label={`Follow on ${social.name}`}
                >
                  {social.icon}
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4 md:mb-0">
              Portfolio
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © {currentYear} Daniel Baidya. All rights reserved. Built with
              passion and React.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
