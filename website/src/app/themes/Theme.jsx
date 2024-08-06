import React from 'react';

const themeData = [
    {
      title: 'Natural Language Processing',
      description: 'Explore advancements in NLP >',
      icon: '🗣️', // Replace with the actual icon or image URL
      color: '#FFDD00' // Optional: Color for the icon background
    },
    {
      title: 'Machine Learning',
      description: 'Dive into ML techniques >',
      icon: '📊', // Replace with the actual icon or image URL
      color: '#FFDD00' // Optional: Color for the icon background
    },
    {
      title: 'Computer Vision',
      description: 'Discover CV innovations >',
      icon: '👁️', // Replace with the actual icon or image URL
      color: '#FFDD00' // Optional: Color for the icon background
    },
    {
      title: 'Robotics & Automation',
      description: 'Learn about robotics >',
      icon: '🤖', // Replace with the actual icon or image URL
      color: '#FFDD00' // Optional: Color for the icon background
    }
  ];
function Theme() {
  return (
    <div className='w-screen h-fit py-8 flex flex-col justify-center items-center'>
      <h2 className='text-3xl font-bold mb-4'>Hackathon themes</h2>
      <p className='text-lg mb-8'>Submit your transformative idea that aligns with one of the four themes:</p>
      <div className='w-screen h-fit flex flex-col gap-10 md:gap-0 md:flex-row  justify-around items-center'>
        {themeData.map((theme, index) => (
          <div key={index} className='bg-blue-500 rounded-lg p-6 flex flex-col items-center w-screen justify-between md:w-[20vw] h-full'>
            <div className='w-16 h-16 rounded-full flex items-center justify-center mb-4' style={{ backgroundColor: theme.color }}>
              <span className='text-3xl'>{theme.icon}</span> {/* Use an <img> tag if using image URLs */}
            </div>
            <h3 className='text-xl font-semibold mb-2 text-center '>{theme.title}</h3>
            <p className='text-white'>{theme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Theme;
