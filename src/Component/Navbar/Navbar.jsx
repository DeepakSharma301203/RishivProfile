import React, { useState } from 'react';

// --- Navbar Component ---
const Navbar = ({ setCurrentPage }) => {
  const navLinks = ['Home', 'Form', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (page) => {
    setCurrentPage(page);// Close the mobile menu when a link is clicked
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div>
            <a 
              href="/home" 
              onClick={() => {handleLinkClick('Home'); }} 
              className="flex items-center py-5 px-2"
            >
              <span className="font-bold text-lg text-blue-400">Rishiv Goutam</span>
            </a>
          </div>

          {/* Primary Nav (Desktop) */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <a
                key={link}
                href={`/${link}`}
                onClick={() => { setCurrentPage(link) }}
                className="py-5 px-3 hover:text-gray-400 transition duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- Collapsible Mobile Menu --- */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <a
              key={link}
              href={`/${link}`}
              onClick={() => {setCurrentPage(link) }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

