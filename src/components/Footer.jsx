import React from 'react';
import { FaServer, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
  ];

  return (
    <div className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Branding */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <FaServer className="text-2xl text-blue-500" />
              <span className="text-white font-bold text-2xl">EliteHosting</span>
            </div>
            <p className="text-gray-300">
              Reliable, fast, and secure hosting solutions for your website. We are committed to keeping your site online 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <p className="text-gray-300">123 Hosting Street</p>
            <p className="text-gray-300">City, Country</p>
            <p className="text-gray-300">Email: <a href="mailto:support@elitehost.com" className="hover:text-blue-500">support@elitehost.com</a></p>
            <p className="text-gray-300">Phone: <a href="tel:+1234567890" className="hover:text-blue-500">+123 456 7890</a></p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="text-center text-gray-400 mt-10">
          &copy; {new Date().getFullYear()} EliteHosting. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
