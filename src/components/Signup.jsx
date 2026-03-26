import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, CheckCircle } from 'lucide-react';

export default function Signup({ onSwitchToLogin }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateForm = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return false;
    }

    if (fullName.length < 2) {
      setError('Full name must be at least 2 characters');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return false;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    if (!agreed) {
      setError('Please agree to the terms and conditions');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess('Account created successfully! Redirecting to login...');
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAgreed(false);
    }, 1500);
  };

  const passwordStrength = password ? (
    password.length < 8 
      ? { level: 'Weak', color: 'red' }
      : password.length < 12
      ? { level: 'Medium', color: 'yellow' }
      : { level: 'Strong', color: 'green' }
  ) : null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center p-4 transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-20 dark:opacity-5 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-100 dark:bg-teal-900/10 rounded-full blur-3xl opacity-15 dark:opacity-5 -z-10"></div>

      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-10 text-center transform transition-all duration-500">
          <div className="mb-6 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 animate-fade-in-up transition-colors duration-300">
            <span className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium tracking-widest text-emerald-700 dark:text-emerald-300">⚡ JOIN OUR COMMUNITY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-3 transition-colors duration-300">
            Create Your
            <br />
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">Account</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-light transition-colors duration-300">Get started with premium power solutions</p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg dark:shadow-xl p-8 md:p-10 border border-gray-200 dark:border-slate-700 backdrop-blur transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <div className="space-y-2 transform transition-all duration-300">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">
                Full Name
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 dark:text-gray-500 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors duration-300" />
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:focus:ring-emerald-400 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2 transform transition-all duration-300">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 dark:text-gray-500 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors duration-300" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:focus:ring-emerald-400 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2 transform transition-all duration-300">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 dark:text-gray-500 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors duration-300" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:focus:ring-emerald-400 outline-none transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {passwordStrength && (
                <p className={`mt-1 text-xs font-medium transition-colors duration-300 ${
                  passwordStrength.color === 'red' ? 'text-red-600 dark:text-red-400' :
                  passwordStrength.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                  'text-green-600 dark:text-green-400'
                }`}>
                  Strength: {passwordStrength.level}
                </p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-2 transform transition-all duration-300">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">
                Confirm Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 dark:text-gray-500 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors duration-300" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:focus:ring-emerald-400 outline-none transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-3.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {password && confirmPassword && password === confirmPassword && (
                <div className="mt-2 flex items-center text-xs text-green-600 dark:text-green-400 font-medium transition-colors duration-300 animate-fade-in-up">
                  <CheckCircle className="w-4 h-4 mr-1.5" />
                  Passwords match
                </div>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start pt-2 transition-all duration-300">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 accent-emerald-600 dark:accent-emerald-400 rounded cursor-pointer transition-all duration-300"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                I agree to the{' '}
                <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-300">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-300">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-lg animate-fade-in-up transition-all duration-300">
                <p className="text-sm text-red-700 dark:text-red-400 font-medium transition-colors duration-300">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 rounded-lg animate-fade-in-up transition-all duration-300">
                <p className="text-sm text-green-700 dark:text-green-400 font-medium transition-colors duration-300">{success}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 hover:from-emerald-700 hover:to-teal-700 dark:hover:from-emerald-600 dark:hover:to-teal-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/40 disabled:shadow-none transform hover:scale-105 disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                '✓ Create Account'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-grow h-px bg-gradient-to-r from-gray-300 dark:from-slate-600 to-transparent"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">OR</span>
            <div className="flex-grow h-px bg-gradient-to-l from-gray-300 dark:from-slate-600 to-transparent"></div>
          </div>

          {/* Social Signup */}
          <div className="space-y-3">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 font-light transition-colors duration-300">Sign up with</p>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center py-3 px-4 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 font-medium text-sm transition-all duration-300 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-slate-900/50 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button className="flex items-center justify-center py-3 px-4 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 font-medium text-sm transition-all duration-300 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-slate-900/50 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Switch to Login */}
        <p className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors duration-300"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
