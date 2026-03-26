import { useState } from 'react';

export default function Navbar({ onAuthClick, isDarkMode, onToggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-emerald-600/50">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="text-lg font-light tracking-tight transition-all duration-300">
              <span className="font-bold text-emerald-600">KPS</span>
              <span className="text-gray-600 dark:text-gray-400"> SYSTEMS</span>
            </span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#home" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 relative group overflow-hidden transition-colors duration-300">
              <span className="inline-block transition-all duration-300 group-hover:translate-y-1.5">Components</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#products" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 relative group overflow-hidden transition-colors duration-300">
              <span className="inline-block transition-all duration-300 group-hover:translate-y-1.5">Features</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 relative group overflow-hidden transition-colors duration-300">
              <span className="inline-block transition-all duration-300 group-hover:translate-y-1.5">Pricing</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 relative group overflow-hidden transition-colors duration-300">
              <span className="inline-block transition-all duration-300 group-hover:translate-y-1.5">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Switch */}
            <button
              onClick={onToggleTheme}
              className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-slate-600 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
              aria-label="Toggle theme"
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all duration-500 shadow-md ${isDarkMode ? 'translate-x-6' : ''}`}>
              </div>
              <span className={`absolute text-xs font-bold transition-opacity duration-500 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} style={{left: '2px', top: '4px'}}>☀️</span>
              <span className={`absolute text-xs font-bold transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} style={{right: '2px', top: '4px'}}>🌙</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Auth Button - Hidden on mobile */}
            <button
              onClick={onAuthClick}
              className="hidden md:block px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/40"
            >
              Account
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200 dark:border-slate-800 transition-all duration-300">
            <a href="#home" className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">Components</a>
            <a href="#products" className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">Features</a>
            <a href="#about" className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">Pricing</a>
            <a href="#contact" className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">Contact</a>
            <button
              onClick={onAuthClick}
              className="w-full mt-4 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-full transition-all duration-300"
            >
              Account
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
