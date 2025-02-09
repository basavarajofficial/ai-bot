"use client"


import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center space-x-2 text-blue-500 mb-8">
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
          </svg>
          <span className="text-2xl font-semibold">deepseek</span>
        </div>

        {/* Login Notice */}
        <div className="text-gray-300 text-center mb-6">
          Only login via email, Google, or +86 phone number<br />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email/Phone Input */}
          <div>
            <input
              type="text"
              placeholder="Phone number / email address"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded bg-gray-800 border-gray-700"
              checked={credentials.agreeToTerms}
              onChange={(e) => setCredentials({...credentials, agreeToTerms: e.target.checked})}
            />
            <label htmlFor="terms" className="text-sm text-gray-300">
              I confirm that I have read, consent and agree to our {' '}
              <a href="#" className="text-blue-500 hover:underline">Terms of Use</a>
              {' '}and{' '}
              <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Log in
          </button>

          {/* Additional Links */}
          <div className="flex justify-between text-sm">
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </div>

          {/* OR Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-400">OR</span>
            </div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full py-3 px-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors"
          >
            <img src="/api/placeholder/20/20" alt="Google" className="w-5 h-5" />
            <span>Log in with Google</span>
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-8">
          Thank you
          <a href="#" className="hover:text-gray-400"> Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
