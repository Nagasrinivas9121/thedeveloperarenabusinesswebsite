import React from 'react';
import supportImg from '../assets/support.webp';

const Support = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={supportImg}
            alt="Expert Support"
            className="w-full min-h-[300px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Expert 24/7 Support
          </h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Our support team is available around the clock to help you with any hosting issues. 
            Whether you need guidance, troubleshooting, or advice, we are here to ensure your 
            website runs smoothly.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With EliteHost, you’re never alone. Fast, friendly, and expert support is just a 
            click away, so you can focus on growing your business while we handle the technical details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
