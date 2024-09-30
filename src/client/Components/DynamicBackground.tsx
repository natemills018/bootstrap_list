import React, { useState } from 'react';
import '../styles/DynamicBackground.css';

type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

const SmallDynamicBackground: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('morning');

  // Define CSS classes for each time of day
  const backgroundClasses: Record<TimeOfDay, string> = {
    morning: 'bg-neutral-morning',
    afternoon: 'bg-neutral-afternoon',
    evening: 'bg-neutral-evening',
    night: 'bg-neutral-night',
  };

  // Function to handle changing the time of day based on user input
  const handleChangeTimeOfDay = (newTime: TimeOfDay) => {
    setTimeOfDay(newTime);
  };

  return (
    <div className={`small-container p-3 ${backgroundClasses[timeOfDay]}`}>
      <div className="text-center">
        <h3 className="text-dark mb-3">Good {timeOfDay}!</h3>
        <div className="btn-group">
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => handleChangeTimeOfDay('morning')}
          >
            Morning
          </button>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => handleChangeTimeOfDay('afternoon')}
          >
            Afternoon
          </button>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => handleChangeTimeOfDay('evening')}
          >
            Evening
          </button>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => handleChangeTimeOfDay('night')}
          >
            Night
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallDynamicBackground;


