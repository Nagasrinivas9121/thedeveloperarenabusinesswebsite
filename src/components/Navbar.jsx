import React, { useState } from 'react'
import { FaServer, FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hosting', path: '/hosting' },
    { name: 'Domain', path: '/domain' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between py-4 px-6 sm:px-12 md:px-24">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaServer className="text-blue-600 text-2xl" />
          <span className="text-2xl font-bold text-gray-800">ElithHosting</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 font-semibold text-gray-800">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={location.pathname === link.path ? 'text-blue-600' : 'hover:text-blue-600 transition'}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/auth"
            className="text-gray-800 font-semibold hover:text-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/auth"
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {showMenu ? (
            <FaTimes
              className="text-2xl text-gray-800 cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <FaBars
              className="text-2xl text-gray-800 cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4 font-semibold text-gray-800">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setShowMenu(false)}
              className={location.pathname === link.path ? 'text-blue-600' : 'hover:text-blue-600 transition'}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/auth"
            onClick={() => setShowMenu(false)}
            className="text-blue-600 font-semibold hover:text-blue-700 transition"
          >
            Login / Signup
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
