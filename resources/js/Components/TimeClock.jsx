import { useState, useEffect } from 'react';

const TimeClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const options = {
    timeZone: 'Asia/Manila',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  const timeString = currentTime.toLocaleString('en-US', options);

  return (
    <div className="flex items-center justify-center py-5 h-full">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">PH Time</h1>
        <div className="text-6xl font-bold mt-4">{timeString}</div>
      </div>
    </div>
  );
};

export default TimeClock;
