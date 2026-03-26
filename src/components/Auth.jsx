import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Render Login or Signup with full screen */}
      {isLogin ? (
        <Login onSwitchToSignup={() => setIsLogin(false)} />
      ) : (
        <Signup onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
}
