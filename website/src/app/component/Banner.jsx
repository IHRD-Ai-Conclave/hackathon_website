import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set the isMobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Call on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        zIndex:'-1',
        height: isMobile ? '20vh' : '60vh', // Adjust height for mobile and desktop
        overflow: 'hidden',
      }}
    >
      <Image
        src="/bnr2.JPG"
        alt="Conclave Banner"
        layout="fill" // Makes the image fill the container
        objectFit={isMobile ? 'contain' : 'cover'} // Adjusts how the image fits based on screen size
        priority // Optimizes loading
      />
    </div>
  );
};

export default Banner;
