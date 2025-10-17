import React from 'react';
import { domainData } from '../assets/assets';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Domain = () => {
  return (
    <div className="py-40 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-dark font-bold">
            Find Best Unique Domains Check
          </h1>
          <p className="text-xl text-dark/80">
            Web hosting domain and hosting center solution
          </p>
        </div>

        {/* Domain Search Box */}
        <div className="bg-white rounded-xl shadow-lg max-w-3xl mx-auto p-6 mb-16">
          <div className="flex flex-col md:flex-row">
            <input
              className="flex-grow px-4 py-3 border border-primary rounded-t-md md:rounded-l-md md:rounded-t-none outline-none text-dark"
              placeholder="Search for your domain"
              type="text"
            />
            <select className="px-4 py-3 border border-primary border-t-0 md:border-t md:border-l-0 outline-none text-dark">
              <option>.com</option>
              <option>.in</option>
              <option>.net</option>
              <option>.org</option>
              <option>.co</option>
              <option>.io</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-b-md md:rounded-r-md md:rounded-b-none font-medium cursor-pointer hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-40 text-center">
          <h1 className="max-w-2xl mx-auto text-4xl md:text-5xl text-dark font-bold">
            Elitehosting straightforward domain pricing
          </h1>
        </div>

        {/* Domain Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 mt-16 gap-6">
          {domainData.map((domain, index) => (
            <div
              key={index}
              className="p-10 border border-primary rounded-2xl text-center hover:shadow-lg transition"
            >
              <img src={domain.image} alt={domain.name || 'domain'} className="mb-6 mx-auto" />
              <p className="text-dark/80 mb-4">{domain.content}</p>
              <h1 className="text-dark text-xl font-bold mb-4">{domain.price}</h1>
              <a
                href="#"
                className="text-blue-600 font-bold flex items-center justify-center gap-2 hover:underline"
              >
                Get Offer
                <FaLongArrowAltRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domain;
