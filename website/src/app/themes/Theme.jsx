import React, { useEffect, useRef } from 'react';

// Theme data for the hackathon
const themeData = [
  {
    title: 'Natural Language Processing',
    description: 'Explore advancements in NLP >',
    icon: '🗣️',
    color: '#003399' // Dark blue
  },
  {
    title: 'Machine Learning',
    description: 'Dive into ML techniques >',
    icon: '📊',
    color: '#003399' // Dark blue
  },
  {
    title: 'Computer Vision',
    description: 'Discover CV innovations >',
    icon: '👁️',
    color: '#003399' // Dark blue
  },
  {
    title: 'Robotics & Automation',
    description: 'Learn about robotics >',
    icon: '🤖',
    color: '#003399' // Dark blue
  }
];

// Marquee component for announcements
const Marquee = ({ text }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const marqueeContent = marqueeElement.firstChild;
    
    const marqueeAnimation = () => {
      // Reset the scroll position only after the entire content has been scrolled through
      if (marqueeElement.scrollLeft >= marqueeContent.scrollWidth - marqueeElement.clientWidth) {
        marqueeElement.scrollLeft = 0;
      } else {
        marqueeElement.scrollLeft += 1; // Control speed of scroll by changing the value
      }
    };

    // Reduce interval to 10ms to increase speed
    const animationInterval = setInterval(marqueeAnimation, 10);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div 
      ref={marqueeRef} 
      className=" py-7 overflow-hidden whitespace-nowrap"
      style={{ width: '100%' }}
    >
      <div className='font-bold text-white text-4xl' style={{ display: 'inline-block', paddingLeft: '100%', animation: 'none' }}>
        {text} {text}
      </div>
    </div>
  );
};

function Theme() {
  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      {/* Hackathon title */}
      <h2 className='text-3xl font-bold mb-4 text-[#66CC33]'>Hackathon themes</h2>
      
      {/* Description */}
      
      {/* Main container */}
      <div className='w-screen min-h-screen flex flex-col justify-center items-center bg-[#003399]'>
        
        {/* Uncomment this section if you want to display the themes */}
        {/* <div className='w-screen flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center p-8'>
          {themeData.map((theme, index) => (
            <div key={index} className='bg-[#003399] rounded-lg p-6 flex flex-col items-center w-full md:w-[20vw] h-[300px] justify-between shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#FFDD00]'>
                <span className='text-3xl'>{theme.icon}</span>
              </div>
              <h3 className='text-xl font-semibold mb-2 text-center text-[#FFDD00]'>{theme.title}</h3>
              <p className='text-[#FFDD00]'>{theme.description}</p>
            </div>
          ))}
        </div> */}
        
        {/* Marquee announcement */}
        <Marquee text="🚀 Tracks will be announced at a later date. Stay tuned for updates! 🚀" />
      </div>
    </div>
  );
}

export default Theme;
