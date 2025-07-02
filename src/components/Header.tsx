import Link from "next/link";

const Header = () => (
  <header className="w-full bg-gradient-to-r from-black via-gray-900 to-red-900 border-b border-red-700 shadow-lg">
    <nav className="max-w-5xl mx-auto flex items-center justify-between py-5 px-6">
      <div className="text-2xl font-extrabold text-white tracking-widest drop-shadow">
        Daniel
      </div>
      <div className="space-x-8">
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
    </nav>
  </header>
);

export default Header;
