import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gradient-to-r from-kerala-dark to-kerala-green text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-kerala-dark font-bold text-lg md:text-xl">🏛️</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-2xl font-bold">Kerala Lottery</h1>
              <p className="text-xs md:text-sm opacity-90">Govt. of Kerala</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
            <a href="#" className="text-sm lg:text-base hover:opacity-80 transition">Home</a>
            <a href="#" className="text-sm lg:text-base hover:opacity-80 transition">Results</a>
            <a href="#" className="text-sm lg:text-base hover:opacity-80 transition">Types</a>
            <a href="#" className="text-sm lg:text-base hover:opacity-80 transition">About</a>
            <button className="bg-kerala-gold text-kerala-dark px-4 md:px-6 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-yellow-300 transition">
              Buy Ticket
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/20 pt-4">
            <a href="#" className="block text-sm hover:opacity-80 transition">Home</a>
            <a href="#" className="block text-sm hover:opacity-80 transition">Results</a>
            <a href="#" className="block text-sm hover:opacity-80 transition">Types</a>
            <a href="#" className="block text-sm hover:opacity-80 transition">About</a>
            <button className="w-full bg-kerala-gold text-kerala-dark px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-300 transition">
              Buy Ticket
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
