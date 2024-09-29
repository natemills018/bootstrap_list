import React, { useState, useEffect } from 'react';
import '../styles/DynamicBackground.css';

type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

const DynamicBackground: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('morning');

  // Function to determine the time of day based on the current hour
  const getTimeOfDay = (): TimeOfDay => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour >= 12 && hour < 18) return 'afternoon';
    if (hour >= 18 && hour < 21) return 'evening';
    return 'night';
  };

  useEffect(() => {
    // Set the time of day when the component mounts
    setTimeOfDay(getTimeOfDay());
  }, []);

  // Define CSS classes for each time of day
  const backgroundClasses: Record<TimeOfDay, string> = {
    morning: 'bg-morning',
    afternoon: 'bg-afternoon',
    evening: 'bg-evening',
    night: 'bg-night',
  };

  return (
    <div className={`d-flex justify-content-center align-items-center vh-100 ${backgroundClasses[timeOfDay]}`}>
      <h1 className="text-light">Good {timeOfDay} get a job!</h1>
    </div>
  );
};

export default DynamicBackground;
