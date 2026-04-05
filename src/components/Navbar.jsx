import { useState } from 'react';
import { Menu, X, Sun, Moon, Facebook, Twitter, Youtube, Send } from 'lucide-react';

export default function Navbar({ onAuthClick, isDarkMode, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Blue Bar */}
      <div className="bg-blue-700 text-white py-3 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <a href="#" className="hover:text-orange-300 transition">Returns & Refunds</a>
            <a href="#" className="hover:text-orange-300 transition">Warranty Information</a>
            <a href="#" className="hover:text-orange-300 transition">Shipping & Delivery</a>
            <a href="#" className="hover:text-orange-300 transition">Track Order</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-orange-300 transition"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-orange-300 transition"><Youtube className="w-4 h-4" /></a>
            <a href="#" className="hover:text-orange-300 transition"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-orange-300 transition"><Send className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-800 dark:bg-gray-950 border-b border-gray-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-2xl">N</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-gray-400">Need help? Call us <span className="text-orange-500 font-bold">+1 (234) 567 89 00</span></p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-300 hover:text-orange-500 font-medium transition-colors">Categories</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 font-medium transition-colors">Deals</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 font-medium transition-colors">Sale</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 font-medium transition-colors">Partners</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 font-medium transition-colors">News</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 font-medium transition-colors">About Us</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 font-medium transition-colors">Contacts</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-orange-500"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={onAuthClick}
                className="hidden sm:block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Sign In
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-700 text-gray-400 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-700">
              <a href="#" className="block py-2 text-gray-300 hover:text-orange-500 transition">Categories</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-orange-500 transition">Deals</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-orange-500 transition">Sale</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-orange-500 transition">Partners</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-orange-500 transition">News</a>
              <button
                onClick={() => {
                  onAuthClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
