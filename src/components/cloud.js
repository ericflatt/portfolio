import React, { useState } from 'react';
import "../styles/newhero.scss"
import cloud from "../images/cloud.webp"


const Cloud = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="image-container">
      <img
        src={cloud} // Replace with your image URL
        alt="Repeating"
        className={`repeating-image ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default Cloud;
