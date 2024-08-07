import React from 'react';

const Infinite = ({ children }) => {
  const wrapperStyle = {
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
  };

  const contentStyle = {
    display: 'flex',
    animation: 'scroll-left 20s linear infinite',
  };

  // Add keyframe animation directly in the component
  const globalStyle = `
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
  `;

  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = globalStyle;
    document.head.appendChild(styleElement);

    // Clean up on component unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div style={wrapperStyle}>
      <div style={contentStyle}>
        {children}
        {children} {/* Duplicate children to create a seamless loop */}
      </div>
    </div>
  );
};

export default Infinite;
