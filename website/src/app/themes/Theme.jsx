import React, { useEffect, useRef } from 'react';

// Marquee component for announcements
const Marquee = ({ text }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const marqueeContent = marqueeElement.firstChild;

    const marqueeAnimation = () => {
      if (marqueeElement.scrollLeft >= marqueeContent.scrollWidth - marqueeElement.clientWidth) {
        marqueeElement.scrollLeft = 0;
      } else {
        marqueeElement.scrollLeft += 1; // Control speed of scroll by changing the value
      }
    };

    const animationInterval = setInterval(marqueeAnimation, 5);

    return () => clearInterval(animationInterval,20000);
  }, []);

  return (
    <div 
      ref={marqueeRef} 
      className="overflow-hidden whitespace-nowrap w-full bg-[#003399] flex items-center"
      style={{ height: '40px' }} // Reduced height
    >
      <div className='font-bold text-white text-lg sm:text-2xl' style={{ display: 'inline-block', paddingLeft: '100%', animation: 'none' }}>
        {text} {text}
      </div>
    </div>
  );
};

function Theme() {
  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      {/* Hackathon title */}

      <h2 className='text-2xl sm:text-3xl font-bold mb-4 text-[#66CC33]'>Hackathon Themes</h2>

      
      {/* Main container */}
      <div className='w-screen min-h-[20vh] sm:min-h-[90vh] flex flex-col justify-center items-center bg-[#003399]'>
        
        {/* Marquee announcement */}
        <Marquee text="🚀 Tracks will be announced at a later date. Stay tuned for updates! 🚀" />
      </div>
    </div>
  );
}

export default Theme;
