import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900 text-white">
      <nav className="container mx-auto p-4">
        {/* Hamburger Icon */}
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">ANoNyMail</div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex md:flex-row md:justify-evenly mt-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `relative group transition duration-300 ${isActive ? 'text-purple-400' : 'text-white'}`
              }
            >
              Home
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `relative group transition duration-300 ${isActive ? 'text-purple-400' : 'text-white'}`
              }
            >
              About
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `relative group transition duration-300 ${isActive ? 'text-purple-400' : 'text-white'}`
              }
            >
              Contact
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;