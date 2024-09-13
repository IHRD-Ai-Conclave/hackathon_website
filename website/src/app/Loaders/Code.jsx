"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { FaLessThan,FaGreaterThan } from "react-icons/fa";

export default function Code() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const boxm = useRef(null);

  useEffect(() => {
    // GSAP expects numeric values for opacity and duration
    gsap.fromTo(box1.current, { width: '50vw' }, { width: '0vw', duration: 2,delay:1});
    gsap.fromTo(boxm.current, { width: '0vw' }, { width: '100vw', duration: 2,delay:1 });
    gsap.fromTo(box2.current, { width: '50vw' }, { width: '0vw', duration: 2 ,delay:1});
  }, []);

  return (
    <div     style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'transparent', // Full-screen overlay
        zIndex: 9999, // Ensure it sits above everything
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        {/* Left red box */}
        <div
          ref={box1}
          style={{ width:'50vw',height: "100vh", backgroundColor: "whitesmoke", display: 'flex', justifyContent: 'end', alignItems: 'center' }}
        >
          <FaLessThan size={100} color="blue" />
        </div>

        {/* Middle box */}
        <div ref={boxm} style={{ height: '100vh', backgroundColor:'transparent',opacity:'0' }}>
        </div>

        {/* Right blue box */}
        <div
          ref={box2}
          style={{ width:'50vw',display:'flex', height: "100vh", backgroundColor: "whitesmoke", justifyContent: 'begin', alignItems: 'center' }}
        >
          <FaGreaterThan size={100} color="blue"/>

        </div>
      </div>
    </div>
  );
}
