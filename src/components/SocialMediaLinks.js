// src/components/SocialMediaLinks.js
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function SocialMediaLinks() {
  return (
    <div className="flex space-x-4 mt-2">
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-blue-700">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700 hover:text-blue-900">
        <FaLinkedin />
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-gray-900">
        <FaGithub />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
