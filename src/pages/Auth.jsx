import React from 'react';
import { FaServer } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-xl mx-auto p-12 shadow-lg rounded-2xl bg-white">
        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          className="flex items-center justify-center gap-2 mb-12 cursor-pointer"
        >
          <FaServer className="text-primary text-2xl" />
          <span className="text-3xl text-dark font-bold">EliteHosting</span>
        </div>

        {/* Sign In Form */}
        <h1 className="text-2xl text-dark font-bold text-center mb-8">Sign In</h1>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block mb-2 text-dark/80 font-medium">Email Address</label>
            <input
              className="w-full px-4 py-2 border border-dark/20 rounded-lg outline-none placeholder:text-dark/50 focus:ring-2 focus:ring-primary/40"
              placeholder="Enter email"
              type="email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-dark/80 font-medium">Password</label>
            <input
              className="w-full px-4 py-2 border border-dark/20 rounded-lg outline-none placeholder:text-dark/50 focus:ring-2 focus:ring-primary/40"
              placeholder="Enter password"
              type="password"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Sign In
          </button>

          {/* Bottom Link */}
          <p className="text-center text-dark/70 mt-4">
            Don’t have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
