"use client";
import { BulletinBoard } from "@/components/BulletinBoard/BulletinBoard";
import DigitalWalls from "@/components/DigitalWalls/DigitalWalls";
import { useState, useEffect } from "react";
import ThreeScene from "@/components/ThreeScene/threescene";
interface CountdownProps {
  targetDate: Date;
}
const recentEvents = [
  {
    title: "S.Y.M.P",
    date: "2024-11-21",
    images: ["/bulletin/symp1.png", "/bulletin/symp2.png"],
  },
  {
    title: "Trick or Terror",
    date: "2024-10-24",
    images: ["/bulletin/tot1.png", "/bulletin/tot2.png"],
  },
];
const nextEvent = {
  title: "Panel Reveal",
  date: "2025-01-29",
  images: ["/path/to/image5.jpg", "/path/to/image6.jpg"],
};
const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
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
    <div className="grid grid-cols-2 gap-6 md:gap-8 justify-center items-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center text-center p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10"
        >
          <div className="text-4xl md:text-6xl font-bold text-white">
            {value}
          </div>
          <span className="uppercase text-sm md:text-base tracking-widest text-red-600 font-semibold">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};
export default function Hero() {
  const eventDate = new Date("2025-01-01T00:00:00");
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(45deg, transparent 40%, #ff0000 40%, #ff0000 60%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, #ff0000 40%, #ff0000 60%, transparent 60%)
          `,
        }}
      />
      <canvas></canvas>
      <BulletinBoard recentEvents={recentEvents} nextEvent={nextEvent} />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="flex flex-col justify-center items-center p-12 bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-sm">
          <div className="max-w-xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
                TEDx
              </h2>
              <div className="text-xl md:text-2xl text-red-600 font-bold tracking-wider">
                INVERSO CLESSIDRA
              </div>
            </div>
            <CountdownTimer targetDate={eventDate} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-12 bg-gradient-to-bl from-black/95 to-black/90 backdrop-blur-sm">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-red-600">theme</h3>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                theme
              </h1>
            </div>
            <p className="text-lg text-white/90 leading-relaxed"></p>
          </div>
        </div>
      </div> */}
      <div><ThreeScene/></div>
      
    </div>
  );
}