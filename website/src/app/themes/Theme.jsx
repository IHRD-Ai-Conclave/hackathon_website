import React from 'react';

// Marquee component for announcements
const Marquee = ({ text }) => {
  return (
    <div className="marquee-container overflow-hidden bg-[#003399] flex items-center w-full relative" style={{ height: '40px' }}>
      <div className="marquee-content font-bold text-white text-lg sm:text-2xl flex items-center whitespace-nowrap">
        {/* Repeat the text twice for a continuous scroll effect */}
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
};

function Theme() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      {/* Hackathon title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#003399]">Hackathon Themes</h2>

      {/* Main container */}
      <div className="w-screen min-h-[20vh] sm:min-h-[30vh] flex flex-col justify-center items-center bg-[#003399]">
        {/* Marquee announcement */}
        <Marquee text="🚀 Tracks will be announced at a later date. Stay tuned for updates! 🚀" />
      </div>
    </div>
  );
}

export default Theme;
