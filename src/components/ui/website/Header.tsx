import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-xl font-bold"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
            style={{ background: 'linear-gradient(45deg, #22c55e, #16a34a)' }}
          >
            <span className="text-white font-bold">F</span>
          </div>
          FruitPack
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="hover:text-green-600 transition">
            About
          </Link>
          <Link href="/signin" className="hover:text-green-600 transition">
            Dashboard
          </Link>
          <Link href="#contact" className="hover:text-green-600 transition">
            Contact
          </Link>
          <Link
            href="#download"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Download App
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center p-2 rounded-lg hover:bg-gray-100 transition">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
