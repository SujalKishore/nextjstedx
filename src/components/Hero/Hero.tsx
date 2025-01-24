import React, { useState, useEffect } from "react";
interface CountdownProps {
  targetDate: Date;
}
const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 9,
    hours: 0,
    minutes: 10,
    seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <div className="text-white flex justify-center items-center space-x-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center text-center p-2">
          <div className="text-5xl md:text-7xl font-bold text-neon-blue">
            {value}
          </div>
          <span className="uppercase text-sm md:text-base tracking-widest text-neon-red">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};
const Hero: React.FC = () => {
  const eventDate = new Date("2025-01-01T00:00:00");
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="flex-1 flex justify-center items-center p-10">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-neon-blue">
            Countdown to New Beginnings
          </h1>
          <CountdownTimer targetDate={eventDate} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center p-10">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-neon-red">
            Simplify Your Journey
          </h2>
          <p className="text-lg md:text-xl max-w-lg mx-auto text-gray-300 leading-relaxed">
            Join us to unlock tools and insights that empower your ambitions.
          </p>
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-red hover:from-neon-red hover:to-neon-blue text-black font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;