import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    date: '14.08.2024',
    description: 'Date of Registration Starts',
    color: 'blue'
  },
  {
    date: '06.09.2024',
    description: 'Date of Registration Ends',
    color: 'yellow'
  },
  {
    date: '13.09.2024',
    description: 'Intimation of Shortlisted Teams',
    color: 'blue'
  },
  {
    date: '03.10.2024',
    description: 'Final Event / Hackathon Begins',
    color: 'yellow'
  },
  {
    date: '04.10.2024',
    description: 'Hackathon Ends',
    color: 'blue'
  }
];

function Timeline() {
  useEffect(() => {
    const timelineItems = gsap.utils.toArray('.timeline-item');

    timelineItems.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom top',
            scrub: true,
            markers: false,
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <div className="w-screen h-[150vh] md:h-screen flex flex-col items-center justify-start m-5">
      <h1 className="font-bold text-3xl text-center m-5">Timeline</h1>
      <div className="flex items-center justify-center w-screen">
        <ol className="relative border-l border-black dark:border-gray-700 h-screen flex flex-col justify-between pl-6">
          {timelineData.map((item, index) => (
            <li key={index} className="relative mb-10 timeline-item">
             
              <div className="ml-10">
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
                <h3 className="text-lg font-semibold text-gray-900">{item.description}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Timeline;
