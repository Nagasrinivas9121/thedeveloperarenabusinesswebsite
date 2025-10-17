import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={assets.HeroImg} // Fixed import
          alt="Hero Background"
          className="object-cover object-center w-full h-full scale-105 animate-[slowzoom_15s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay for contrast */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              
              {/* Badge */}
              <div className="px-4 py-2.5 w-[300px] bg-blue-600/40 text-white shadow rounded-full mb-6 text-center">
                <span>Supercharge your website today</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Fast, Secure & Reliable Hosting
              </h1>

              {/* Description */}
              <p className="text-gray-200 mb-8 max-w-md">
                Get enterprise-grade hosting solutions for your business with 24/7 support and unbeatable uptime.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                  Get Started
                </button>
                <button className="border border-white hover:bg-white hover:text-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition">
                  View Plans
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          </div>
        </div>
      </div>

      {/* Keyframes for smooth zoom animation */}
      <style>{`
        @keyframes slowzoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
