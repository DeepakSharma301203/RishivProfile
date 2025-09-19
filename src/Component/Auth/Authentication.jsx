import React, { useState } from 'react';

const AuthPage = () => {
  const [authMode, setAuthMode] = useState('login'); // Can be 'login' or 'signup'

  const handleModeChange = (mode) => {
    setAuthMode(mode);
  };

  const commonInputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition shadow-sm";
  const commonButtonClasses = "w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {authMode === 'login' ? 'Sign in to your account' : 'Create a new account'}
          </h2>
        </div>

        {/* --- Toggle Buttons --- */}
        <div className="flex justify-center bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => handleModeChange('login')}
            className={`w-1/2 py-2 px-4 text-sm font-medium rounded-md transition-all duration-300 focus:outline-none ${
              authMode === 'login' ? 'bg-white text-blue-700 shadow' : 'text-gray-500 hover:bg-gray-200'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => handleModeChange('signup')}
            className={`w-1/2 py-2 px-4 text-sm font-medium rounded-md transition-all duration-300 focus:outline-none ${
              authMode === 'signup' ? 'bg-white text-blue-700 shadow' : 'text-gray-500 hover:bg-gray-200'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* --- Forms --- */}
        <div className="mt-8">
          {authMode === 'login' ? (
            // --- Login Form ---
            <form className="space-y-6" action="#" method="POST">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email-address-login" className="sr-only">Email address</label>
                  <input id="email-address-login" name="email" type="email" autoComplete="email" required className={commonInputClasses} placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="password-login" className="sr-only">Password</label>
                  <input id="password-login" name="password" type="password" autoComplete="current-password" required className={commonInputClasses} placeholder="Password" />
                </div>
              </div>
              <div>
                <button type="submit" className={commonButtonClasses}>
                  Sign in
                </button>
              </div>
            </form>
          ) : (
            // --- Sign Up Form ---
            <form className="space-y-6" action="#" method="POST">
              <div className="space-y-4">
                <div>
                  <label htmlFor="username-signup" className="sr-only">Username</label>
                  <input id="username-signup" name="username" type="text" required className={commonInputClasses} placeholder="Username" />
                </div>
                <div>
                  <label htmlFor="email-address-signup" className="sr-only">Email address</label>
                  <input id="email-address-signup" name="email" type="email" autoComplete="email" required className={commonInputClasses} placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="password-signup" className="sr-only">Password</label>
                  <input id="password-signup" name="password" type="password" required className={commonInputClasses} placeholder="Password" />
                </div>
                <div>
                  <label htmlFor="confirm-password-signup" className="sr-only">Confirm Password</label>
                  <input id="confirm-password-signup" name="confirm-password" type="password" required className={commonInputClasses} placeholder="Confirm Password" />
                </div>
              </div>
              <div>
                <button type="submit" className={commonButtonClasses}>
                  Create Account
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

