import React from 'react';
import Image from 'next/image';

const Banner = () => {
  // Check if window is available and determine if it's mobile or not
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: isMobile ? '60vh' : '60vh', // Adjust height for mobile and desktop
        overflow: 'hidden',
      }}
    >
      <Image
        src="/conclavebanner.jpg"
        alt="Conclave Banner"
        layout="fill" // Makes the image fill the container
        objectFit="contain" // Ensures the full image is visible without cropping
        priority // Optimizes loading
      />
    </div>
  );
};

export default Banner;
