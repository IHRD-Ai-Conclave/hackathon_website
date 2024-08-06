import React from 'react';

const timelineData = [
  {
    date: 'July 15, 2024',
    description: 'Applications open',
    color: 'blue'
  },
  {
    date: 'Aug. 16, 2024',
    description: 'Last day to apply',
    color: 'yellow'
  },
  {
    date: 'Aug. 30, 2024',
    description: 'Finalists announcement',
    color: 'blue'
  },
  {
    date: 'Sept. 20, 2024',
    description: 'Winners announcement',
    color: 'yellow'
  }
];

function Timeline() {
  return (
    <div className="w-screen h-[150vh] md:h-screen flex flex-col items-center justify-start m-5">
      <h1 className="font-bold text-3xl text-center m-5">Timeline</h1>
      <div className="flex items-center justify-center w-screen">
        <ol className="relative border-s border-black dark:border-gray-700 h-screen flex flex-col justify-between">
          {timelineData.map((item, index) => (
            <li key={index} className="mb-5 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
              <h3 className="text-lg font-semibold text-gray-900">{item.description}</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {/* Add additional details here if needed */}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Timeline;
