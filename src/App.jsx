import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDarkMode(shouldBeDark);
    applyTheme(shouldBeDark);
  }, []);

  // Apply theme to document
  const applyTheme = (isDark) => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    applyTheme(newTheme);
  };

  return (
    <>
      <style>{`
        @import "tailwindcss";

        * {
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        html {
          scroll-behavior: smooth;
          transition: background-color 0.5s ease, color 0.5s ease;
          overflow-y: scroll;
        }

        html.dark {
          color-scheme: dark;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }

        @keyframes slide-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-in {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-slide-in-down {
          animation: slide-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }

        .animate-glow {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        a, button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        ::selection {
          background-color: rgb(16 185 129);
          color: white;
        }

        html.dark ::selection {
          background-color: rgb(16 185 129 / 0.8);
        }

        ::-moz-selection {
          background-color: rgb(16 185 129);
          color: white;
        }

        html.dark ::-moz-selection {
          background-color: rgb(16 185 129 / 0.8);
        }

        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background-color: #f3f4f6;
        }

        html.dark ::-webkit-scrollbar-track {
          background-color: #0f172a;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #9ca3af;
          border-radius: 9999px;
        }

        html.dark ::-webkit-scrollbar-thumb {
          background-color: #475569;
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: #6b7280;
        }

        html.dark ::-webkit-scrollbar-thumb:hover {
          background-color: #64748b;
        }

        * {
          scrollbar-color: rgba(156, 163, 175, 0.6) #f3f4f6;
        }

        html.dark * {
          scrollbar-color: rgba(71, 85, 105, 0.6) #0f172a;
        }

        input:focus,
        textarea:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgb(16 185 129);
        }

        html.dark input:focus,
        html.dark textarea:focus {
          box-shadow: 0 0 0 2px rgb(52 211 153);
        }

        @media (prefers-contrast: more) {
          html.dark {
            background-color: #000000;
            color: #ffffff;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        @media print {
          * {
            background: transparent !important;
            color: black !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }
          a, a:visited {
            text-decoration: underline;
          }
          a[href]:after {
            content: " (" attr(href) ")";
          }
          img {
            max-width: 100% !important;
          }
        }

        .skip-to-content {
          position: absolute;
          top: -40px;
          left: 0;
          background: #000;
          color: white;
          padding: 8px;
          text-decoration: none;
          z-index: 100;
        }

        .skip-to-content:focus {
          top: 0;
        }

        :focus-visible {
          outline: 2px solid rgb(5 150 105);
          outline-offset: 2px;
        }

        html.dark :focus-visible {
          outline-color: rgb(52 211 153);
        }

        body {
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        code {
          background-color: #f3f4f6;
          padding: 0.375rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        html.dark code {
          background-color: #1e293b;
        }

        pre {
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        html.dark pre {
          background-color: #1e293b;
        }
      `}</style>

      {currentPage === 'auth' ? (
        <>
          <div className="flex items-center justify-between gap-4 p-4 bg-white dark:bg-slate-950 border-b dark:border-slate-800 sticky top-0 z-40 transition-colors duration-300">
            <button
              onClick={() => setCurrentPage('landing')}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-2 transition-colors duration-300"
            >
              ← Back to Home
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <Auth />
        </>
      ) : (
        <LandingPage onNavigateToAuth={() => setCurrentPage('auth')} isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      )}
    </>
  );
}