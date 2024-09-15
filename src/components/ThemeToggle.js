// src/components/ThemeToggle.js
import React from 'react';
import SunIcon from '../assets/sun.png';
import MoonIcon from '../assets/moon.png';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="fixed top-20 right-5 z-50 flex items-center">
      <input
        type="checkbox"
        id="theme-toggle"
        className="hidden"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label
        htmlFor="theme-toggle"
        className={`cursor-pointer rounded-full w-10 h-10 flex items-center justify-center shadow-md ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-blue-200 opacity-50' // Adjusted opacity to make it more transparent
        }`}
        style={{ padding: '3px' }} // Added padding to make the images fit properly
      >
        {theme === 'dark' ? (
          <img src={SunIcon} className="w-6 h-6 text-yellow-500" alt="Sun Icon" />
        ) : (
          <img src={MoonIcon} className="w-6 h-6 text-grey-500" alt="Moon Icon" />
        )}
      </label>
    </div>
  );
}

export default ThemeToggle;
