import React from 'react';

const Tab1Content: React.FC = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning!';
    } else if (hour < 18) {
      return 'Good afternoon!';
    } else {
      return 'Good evening!';
    }
  };

  return (
    <div className="min-h-screen bg-white rounded-lg p-11">
      <div className="text-6xl mb-4">{getGreeting()}</div>
      <div className="text-xl text-gray-500">Hi! I'm Ane</div>
    </div>
  );
};

export default Tab1Content;