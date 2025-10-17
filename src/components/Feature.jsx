import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import sharedDomainImg from '../assets/shareddomain.webp'
import vpsDomainImg from '../assets/vpsdomain.webp'
import cloudHosting from '../assets/cloudhosting.svg'

const features = [
  {
    img: sharedDomainImg,
    title: 'Shared Hosting',
    description:
      'Shared hosting is our most popular and affordable plan, perfect for small websites and startups.',
  },
  {
    img: vpsDomainImg,
    title: 'VPS Hosting',
    description:
      'Get more control and performance with Virtual Private Servers designed for growing websites.',
  },
  {
    img: cloudHosting,
    title: 'Cloud Hosting',
    description:
      'Experience lightning-fast speed and scalability with our modern cloud hosting solutions.',
  },
]

const Feature = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Provide Hosting Solutions
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Select your solution and we’ll help you find the best high-speed hosting option to fit your needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-blue-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-20 h-20 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">{feature.description}</p>
              <a
                href="#"
                className="flex items-center justify-center text-blue-600 font-semibold hover:underline gap-2"
              >
                View Details <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feature
