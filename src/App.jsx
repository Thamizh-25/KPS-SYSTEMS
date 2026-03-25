import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' or 'auth'

  if (currentPage === 'auth') {
    return (
      <>
        <div className="flex items-center gap-4 p-4 bg-white border-b sticky top-0 z-40">
          <button
            onClick={() => setCurrentPage('landing')}
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
          >
            ← Back to Home
          </button>
        </div>
        <Auth />
      </>
    );
  }

  return <LandingPage onNavigateToAuth={() => setCurrentPage('auth')} />;
}