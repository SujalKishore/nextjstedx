"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return; // Stop the countdown when the target date is reached
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Update immediately on mount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-white">
        Countdown to <span className="text-black">Something</span> Epic
      </h1>
      <div className="flex gap-6 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="flex flex-col items-center bg-gray-800 bg-opacity-75 rounded-xl p-6 shadow-md"
          >
            <div className="text-7xl font-bold text-white">
              {String(value).padStart(2, "0")}
            </div>
            <span className="mt-2 uppercase text-sm tracking-wide text-gray-400">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CountdownApp = () => {
  // Set the target date to 41 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 41);

  return <CountdownTimer targetDate={targetDate} />;
};

export default CountdownApp;
