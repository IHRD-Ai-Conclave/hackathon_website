import React, { useRef, useEffect, useCallback, useState } from "react";
import confetti from "canvas-confetti";

export function PrizeSectionWithConfetti() {
  const sectionRef = useRef(null);
  const [hasFired, setHasFired] = useState(false); // To ensure confetti triggers only once

  const fireConfetti = useCallback(() => {
    if (hasFired) return; // Avoid multiple triggers
    setHasFired(true);
    
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#66CC33", "#003399"];

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
      { threshold: 0.5 } // Trigger when 50% of the section is in view
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
    <div ref={sectionRef} className="prize-section">
      <h2 className="text-2xl font-bold text-center mt-8">Prize Section</h2>
      {/* Prize content */}
    </div>
  );
}

export default PrizeSectionWithConfetti;
