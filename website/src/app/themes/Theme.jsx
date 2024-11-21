import React, { useEffect, useRef } from 'react';

function AIEducationTheme() {
  return (
    <div className="h-auto w-screen flex flex-col justify-center items-center gap-10 mt-4">
      <h2 className="text-4xl font-extrabold text-[#003399] m-4">Hackathon Theme</h2>
      <div className="min-h-[60vh] w-screen flex-col bg-gradient-to-r from-[#66CC33] to-[#003399] relative overflow-hidden flex items-center justify-center p-4">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Glowing Orbs */}
          <div className="w-[300px] h-[300px] bg-[#ffffff22] blur-3xl animate-pulse rounded-full absolute -top-10 left-1/4"></div>
          <div className="w-[400px] h-[400px] bg-[#ffffff33] blur-[150px] animate-bounce rounded-full absolute bottom-0 right-1/3"></div>
          <div className="w-[500px] h-[500px] bg-[#ffffff1a] blur-[200px] rounded-full absolute -bottom-10 left-[10%]"></div>

          {/* Animated Particles */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[4px] h-[4px] bg-white rounded-full opacity-70 particle-animation"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`, // Random start delay
                animationDuration: `${4 + Math.random() * 6}s`, // Random duration for variation
              }}
            ></div>
          ))}
        </div>

        {/* Content Section */}
        <div className="z-10 text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl transform transition-transform duration-500 hover:scale-105">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight animate-pulse">
            AI In Education
          </h1>
          <p className="text-lg md:text-xl text-white/95 leading-relaxed">
            All hackathon projects will focus on the theme{" "}
            <span className="font-semibold text-white">"AI in Education."</span>{" "}
            The full problem statement will be revealed exclusively at the venue, sparking creativity and innovation
            right <span className="font-bold">from the start!</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AIEducationTheme;
