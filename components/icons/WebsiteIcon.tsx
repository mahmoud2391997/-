import React from 'react';

const WebsiteIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.491-6.168m-16.982 0A9.004 9.004 0 0 1 12 3a9.004 9.004 0 0 1 8.491 6.168m-16.982 0H12m0 0a9.004 9.004 0 0 0-8.491-6.168m16.982 0a9.004 9.004 0 0 1-8.491 6.168m0 0v11.332m0 0a9.005 9.005 0 0 1-8.491-6.168m16.982 0a9.005 9.005 0 0 0-8.491 6.168m0 0h-1.125" />
    </svg>
  );
};

export default WebsiteIcon;
