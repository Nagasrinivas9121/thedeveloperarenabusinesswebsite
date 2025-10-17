import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2.99',
      description: 'Perfect for small websites and blogs',
      features: ['1 website', '10 GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL Certification'],
      buttonText: 'Get Started',
    },
    {
      name: 'Business',
      price: '$5.99',
      description: 'Ideal for growing businesses and larger websites',
      features: ['5 websites', '50 GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL Certification', 'Daily Backups'],
      buttonText: 'Get Started',
      popular: true,
    },
    {
      name: 'Premium',
      price: '$9.99',
      description: 'Best for large websites, e-commerce & high traffic',
      features: ['Unlimited websites', '200 GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL Certification', 'Daily Backups', 'Priority Support'],
      buttonText: 'Get Started',
    },
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">Choose Hosting</h1>
          <p className="text-gray-700 max-w-md mx-auto">
            Select your solution and we’ll help you find the best high-speed hosting option to fit your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md p-8 border transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 ${
                plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-gray-700 mb-6">{plan.description}</p>
              
              <p className="text-gray-900 mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-base">/month</span>
              </p>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-6 transition ${
                  plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {plan.buttonText}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
