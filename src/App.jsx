import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
    applyTheme(isDark);
  }, []);

  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
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
      {currentPage === 'auth' ? (
        <Auth onBack={() => setCurrentPage('landing')} isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      ) : (
        <LandingPage onNavigateToAuth={() => setCurrentPage('auth')} isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      )}
    </>
  );
}