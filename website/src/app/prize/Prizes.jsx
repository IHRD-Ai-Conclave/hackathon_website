import React, { useRef, useEffect, useCallback, useState } from 'react';
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const Prizes = () => {
  const sectionRef = useRef(null);
  const [hasFired, setHasFired] = useState(false);
  
  const fireConfetti = useCallback(() => {
    if (hasFired) return;
    
    setHasFired(true);
    
    const end = Date.now() + 2 * 1000;
    const colors = ["#003399", "#66CC33"];
    
    const frame = () => {
      if (Date.now() > end) return;
      
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
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

  const PrizeCard = ({ place, amount, description, color, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 ${
        place === "1st" ? "md:-mt-8" : ""
      }`}
    >
      <div className={`w-20 h-20 ${color} rounded-full flex items-center justify-center mb-4`}>
        <Trophy size={40} className="text-white" />
      </div>
      <h3 className={`text-2xl font-bold ${color} mb-2`}>{place} Place</h3>
      <p className="text-4xl font-extrabold text-gray-800 mb-4">₹{amount}</p>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );

  return (
<div id="prize" ref={sectionRef} className="bg-white w-screen h-auto md:h-[90vh] py-20 flex items-start mt-3">

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#003399] mb-4">
            Prize Distribution
          </h2>
          <p className="text-xl text-gray-600">
            Recognizing excellence with these amazing rewards
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PrizeCard
            place="1st"
            amount="50,000"
            description="Grand prize with a certificate of excellence"
            color="bg-yellow-400"
            delay={0}
            className="order-1"
          />
          <PrizeCard
            place="2nd"
            amount="30,000"
            description="Runner-up prize with a certificate of achievement"
            color="bg-gray-400"
            delay={0.2}
            className="order-2 md:order-1"
          />
          <PrizeCard
            place="3rd"
            amount="20,000"
            description="Third-place prize with a certificate of recognition"
            color="bg-orange-400"
            delay={0.4}
            className="order-3 md:order-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
