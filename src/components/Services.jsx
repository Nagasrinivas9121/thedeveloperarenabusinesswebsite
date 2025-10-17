import React from 'react';

const serviceData = [
  {
    icon: "💻",
    title: "High Performance",
    description: "Our servers guarantee lightning-fast speed and uptime, ensuring your website is always available."
  },
  {
    icon: "🔒",
    title: "Secure Hosting",
    description: "Top-notch security features including SSL, firewalls, and daily backups to protect your data."
  },
  {
    icon: "⚡",
    title: "Easy Setup",
    description: "Get started in minutes with our simple one-click installation for popular CMS platforms."
  },
  {
    icon: "🛠️",
    title: "24/7 Support",
    description: "Our expert support team is available round the clock to assist you with any technical issues."
  },
];

const Services = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-6">
            Why EliteHost
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-md p-10 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
