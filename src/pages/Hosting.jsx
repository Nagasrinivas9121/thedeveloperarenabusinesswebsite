import React from 'react'
import { FaArrowRight, FaCheckCircle, FaServer } from 'react-icons/fa'
import { assets } from '../assets/assets'

const Hosting = () => {
  return (
    <div className="py-40 bg-white">

      <div className="container mx-auto px-6">
       
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-dark font-bold mb-5">
            Web Hosting Solutions
          </h1>
          <p className="text-dark/80">
            Find the perfect hosting plan for your website needs
          </p>
        </div>

        {/* Shared Hosting Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/2 p-8">
            <FaServer className="text-3xl text-green-500 mb-4" />
            <h2 className="text-3xl text-dark font-bold mb-6">Shared Hosting</h2>
            <p className="text-xl text-dark/80 mb-6">
              Perfect for beginners and small websites — get started with our affordable shared hosting plans.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>Easy-to-use control panel</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>One-click WordPress install</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>99.9% uptime guarantee</span>
              </li>
            </ul>
            <a href="#" className="text-dark flex items-center gap-2 font-bold mt-6 hover:text-green-600 transition">
              Details
              <FaArrowRight />
            </a>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={assets.sharedDomainImg}
              alt="Shared Hosting"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* VPS Hosting Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              src={assets.vpsDomainImg}
              alt="VPS Hosting"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <FaServer className="text-3xl text-blue-500 mb-4" />
            <h2 className="text-3xl text-dark font-bold mb-6">VPS Hosting</h2>
            <p className="text-xl text-dark/80 mb-6">
              Get more control, performance, and flexibility with our Virtual Private Server hosting solutions.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" />
                <span>Dedicated resources for your site</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" />
                <span>Full root access and scalability</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" />
                <span>24/7 expert support</span>
              </li>
            </ul>
            <a href="#" className="text-dark flex items-center gap-2 font-bold mt-6 hover:text-blue-600 transition">
              Details
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
       
    </div>
  )
}

export default Hosting
