export default function Navbar({ onAuthClick }) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-emerald-600/50">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="text-lg font-light tracking-tight transition-all duration-300">
              <span className="font-bold text-emerald-600">KPS</span>
              <span className="text-gray-600"> SYSTEMS</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#home" className="text-sm font-medium text-gray-700 relative group overflow-hidden">
              <span className="inline-block transition-all duration-300 group-hover:translate-y-1.5">Components</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#products" className="text-sm font-medium text-gray-700 relative group overflow-hidden">
              <span className="inline-block transition-all duration-300 group-hover:translate-y-1.5">Parts</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 relative group overflow-hidden">
              <span className="inline-block transition-all duration-300 group-hover:translate-y-1.5">Specs</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 relative group overflow-hidden">
              <span className="inline-block transition-all duration-300 group-hover:translate-y-1.5">Support</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button className="relative group">
              <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition-all duration-300">
                🔍
              </span>
            </button>
            <button
              onClick={onAuthClick}
              className="px-6 py-2 bg-emerald-600 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/40"
            >
              Account
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
      `}</style>
    </nav>
  );
}
