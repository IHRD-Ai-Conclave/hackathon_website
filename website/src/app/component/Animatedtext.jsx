// components/AnimatedText.js

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedText = () => {
  const textRef = useRef([]);
  textRef.current = [];

  const addToRefs = (el) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.to(textRef.current, {
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div style={{ height: '30vh', width: '50vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'7vh' }}>
      <div className="text-left">
        <h1 ref={addToRefs} className="opacity-0 mb-4 text-6xl font-bold text-gray-800">Gen AI</h1>
        <h1 ref={addToRefs} className="opacity-0 mb-4 text-6xl font-bold text-gray-800">Conclave</h1>
        <h1 ref={addToRefs} className="opacity-0 text-6xl font-bold text-gray-800">Hackathon</h1>
      </div>
    </div>
  );
};

export default AnimatedText;
