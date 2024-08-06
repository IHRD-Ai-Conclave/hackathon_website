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
    <div className='w-screen h-screen flex  justify-center items-center'>
      {timelineData.map((item, index) => (
        <div key={index} className='w-fit h-fit text-blue flex  flex-col justify-center items-center'>
          <div className='w-fit md:w-[30vh] h-[5vh] flex items-center justify-center'>
            <h1 className='font-bold text-2xl'>{item.date}</h1>
          </div>
          <div className=' w-[50vh] h-[10vh] flex items-center justify-center gap-2 '>
            <hr className="border-2 w-[10vw]" />
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <hr className="border-2 w-[10vw]" />
          </div>
          <div className='w-[50vh] h-[10vh] flex items-center justify-center'>
            <p className='font-semibold text-xl'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
