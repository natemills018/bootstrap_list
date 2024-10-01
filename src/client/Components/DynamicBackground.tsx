import React, { useState } from 'react';
import '../styles/DynamicBackground.css';


type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

const SmallDynamicBackground: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('morning');

  // Define CSS classes for each time of day
  const backgroundClasses: Record<TimeOfDay, string> = {
    morning: 'bg-abstract-morning',
    afternoon: 'bg-abstract-afternoon',
    evening: 'bg-abstract-evening',
    night: 'bg-abstract-night',
  };

  // Function to handle changing the time of day based on user input
  const handleChangeTimeOfDay = (newTime: TimeOfDay) => {
    setTimeOfDay(newTime);
  };

  return (
    <div className={`abstract-container ${backgroundClasses[timeOfDay]}`}>
      <div className="content">
        <h3 className="text-dark mb-3">Good {timeOfDay}!</h3>
        <div className="btn-group">
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => handleChangeTimeOfDay('morning')}
          >
            Morning
          </button>
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => handleChangeTimeOfDay('afternoon')}
          >
            Afternoon
          </button>
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => handleChangeTimeOfDay('evening')}
          >
            Evening
          </button>
          <button
            className="btn btn-outline-light btn-sm"
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
