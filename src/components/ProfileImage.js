// src/components/ProfileImage.js
import React from 'react';
import profileImage from '../assets/kerryathompson_blog_emoji.jpg'; // Import your profile image

function ProfileImage({ alt, className }) {
  const divStyle = {
    backgroundImage: `url(${profileImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '150px', // Set the width of the container
    height: '150px', // Set the height of the container
    borderRadius: '50%', // Ensure the container has rounded corners
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={divStyle} className={className} alt={alt}></div>
  );
}

export default ProfileImage;
