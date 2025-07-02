import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-red-900 flex flex-col items-center py-16">
      <section className="w-full max-w-6xl bg-white/10 rounded-3xl shadow-2xl p-10 border border-red-700 backdrop-blur">
        <h1 className="text-4xl font-bold text-red-400 mb-4 text-center">
          Get in touch
        </h1>
        <p className="text-xl text-gray-200 mb-10 text-center">
          Have questions, feedback, or just want to say hello? <br />
          Get in touch with me using the form below or through my contact
          details!
        </p>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <form className="flex-1 bg-black/30 rounded-2xl p-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-800 text-gray-200 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-800 text-gray-200 focus:outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded bg-gray-800 text-gray-200 focus:outline-none min-h-[120px]"
              required
            />
            <button
              type="submit"
              className="bg-red-700/80 text-white px-6 py-2 rounded-full text-base font-medium shadow hover:bg-red-400 cursor-pointer transition-colors"
            >
              Send
            </button>
          </form>
          {/* Contact Details */}
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-3 text-gray-200">
              <FaMapMarkerAlt className="text-red-400" />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <FaPhoneAlt className="text-red-400" />
              <span>9863861483</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <FaEnvelope className="text-red-400" />
              <span>dbaidya.me@gmail.com</span>
            </div>
            {/* Social Links */}
            <div className="flex gap-5 mt-4">
              <a
                href="https://www.linkedin.com/in/daniel-baidya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-gray-200 hover:text-red-400 transition" />
              </a>
              <a
                href="https://github.com/DanielBaidya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-gray-200 hover:text-red-400 transition" />
              </a>
              <a
                href="https://www.instagram.com/daniel_baidya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-gray-200 hover:text-red-400 transition" />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
