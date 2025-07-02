import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-black via-gray-900 to-red-900 border-t border-red-700 shadow-lg py-8 mt-12">
    <div className="max-w-5xl mx-auto flex flex-col items-center space-y-2">
      <p className="text-white font-semibold text-lg">
        © 2025 Daniel's Website
      </p>
      <p className="text-gray-300">
        Contact: 9863861483 | dbaidya.me@gmail.com
      </p>
      <div className="flex items-center space-x-4">
        <a
          href="http://instagram.com/daniel_baidya/"
          className="text-red-400 hover:text-white text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/daniel.baidya02/"
          className="text-red-400 hover:text-white text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
