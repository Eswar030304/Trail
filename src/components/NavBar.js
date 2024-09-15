// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-gray-100 shadow-lg ${navbarVisible ? '' : 'hidden'}`}>
      <div className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-xl font-bold">Logo</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:items-center md:space-x-4 ${menuOpen ? 'block' : 'hidden'}`}>
          <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Home</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Portfolio</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
