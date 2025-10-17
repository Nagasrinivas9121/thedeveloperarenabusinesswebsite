import React from 'react';
import { assets, teamData } from '../assets/assets';

const About = () => {
  return (
    <div className="py-40 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-dark font-bold mb-4">
            About EliteHosting
          </h1>
          <p className="text-xl text-dark/80 max-w-2xl mx-auto">
            Learn about our story and mission to provide the best hosting experience.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl text-dark font-bold mb-6">Our Story</h2>
            <p className="text-dark/80 leading-relaxed mb-4">
              Founded in 2020, <span className="font-semibold text-dark">EliteHosting</span> started with a simple mission — 
              to make web hosting accessible, reliable, and affordable for everyone.
            </p>
            <p className="text-dark/80 leading-relaxed mb-4">
              Over the years, we’ve grown from a small startup into a trusted hosting provider, 
              serving clients worldwide with cutting-edge technology and unmatched customer support.
            </p>
            <p className="text-dark/80 leading-relaxed">
              Whether you’re a freelancer, a business owner, or a developer, we’re here to help 
              you build, grow, and scale your online presence with confidence.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src={assets.aboutImg}
              alt="Our Team"
              className="rounded-2xl shadow-lg mx-auto"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mt-32">
          <h2 className="text-3xl md:text-4xl text-dark font-bold mb-6">
            Meet Our Team
          </h2>
          <p className="text-dark/80 max-w-2xl mx-auto mb-12">
            We’re a passionate group of developers, designers, and hosting experts 
            dedicated to making your online journey smooth and successful.
          </p>

          {/* Example Team Layout (Optional) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamData?.map((member, index) => (
              <div
                key={index}
                className="p-6 border border-primary rounded-2xl shadow-sm hover:shadow-lg transition text-center"
              >
                <img
                  src={assets.team1Img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-dark font-semibold text-lg">{member.name}</h3>
                <p className="text-dark/70">{member.role}</p>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
