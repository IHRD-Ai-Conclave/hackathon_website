import React, { useRef, useEffect, useCallback, useState } from 'react';
import confetti from "canvas-confetti";

const Prizes = () => {
  const sectionRef = useRef(null);
  const [hasFired, setHasFired] = useState(false);
  
  const fireConfetti = useCallback(() => {
    if (hasFired) return;
    
    setHasFired(true);
    
    const end = Date.now() + 3 * 1000;
    const colors = ["#66CC33", "#003399", "#FFFFFF"];
    
    const frame = () => {
      if (Date.now() > end) return;
      
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
      
      requestAnimationFrame(frame);
    };
    
    frame();
  }, [hasFired]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fireConfetti();
        }
      },
      { threshold: 0.5 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [fireConfetti]);

  return (
    <div id='prize' ref={sectionRef} className="bg-white py-12 w-screen h-[200vh] md:h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Prize Distribution
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Here are the prizes for the top three positions.
        </p>
      </div>
      
      <div className="max-w-9xl md:h-[60vh] mx-auto mt-10 grid sm:grid-cols-3 text-center items-center gap-6">
        <div className="bg-[#003399] h-[50vh] p-10 rounded-lg shadow-md flex flex-col items-center justify-center">
          <h3 className="text-xl font-medium text-white">2nd Place</h3>
          <p className="mt-2 text-3xl text-white font-bold">₹30,000</p>
          <p className="mt-4 text-base text-gray-200">
            The runner-up receives a prize of ₹30,000 along with a medal and a certificate.
          </p>
        </div>
        
        <div className="bg-[#66CC33] h-[70vh]  p-10 rounded-lg shadow-xl drop-shadow-xl flex flex-col items-center justify-center">
          <h3 className="text-2xl font-medium text-white">1st Place</h3>
          <p className="mt-2 text-3xl text-white font-bold">₹50,000</p>
          <p className="mt-4 text-base text-white">
            The winner receives a grand prize of ₹50,000 along with a trophy and a certificate.
          </p>
        </div>
        
        <div className="bg-[#003399] h-[50vh] p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
          <h3 className="text-xl font-medium text-white">3rd Place</h3>
          <p className="mt-2 text-3xl text-white font-bold">₹20,000</p>
          <p className="mt-4 text-base text-gray-200">
            The third-place winner receives a prize of ₹20,000 along with a certificate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;