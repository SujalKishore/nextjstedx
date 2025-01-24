"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DigitalWalls from "@/components/DigitalWalls/DigitalWalls";
import { BulletinBoard } from "@/components/BulletinBoard/BulletinBoard";

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

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
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
          className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10"
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
  const ticketsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const eventDate = new Date(Date.now() + 42 * 24 * 60 * 60 * 1000);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden bg-black">
        {/* Gradient Layer */}
        <div
          className="absolute inset-0 z-20"
          style={{
            background: `
      radial-gradient(circle at center, rgba(255, 50, 50, 0.7) 0%, rgba(255, 0, 0, 0.4) 35%, rgba(0, 0, 0, 0.8) 75%, black 100%)
    `,
          }}
        />
        <canvas className="absolute inset-0 z-10" />
        <BulletinBoard recentEvents={recentEvents} nextEvent={nextEvent} />
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col justify-center items-center p-8 bg-gradient-to-bl from-black/95 to-black/90 backdrop-blur-sm">
            <div className="relative w-full h-full flex items-center justify-center mt-12 ml-20">
              <div className="absolute inset-0 -z-10 mt-36 ml-72">
                <Image
                  src="/themes/inverso.jpeg"
                  alt="Background Image"
                  width={500}
                  height={500}
                  className="object-cover rounded-lg shadow-lg opacity-50"
                />
              </div>
              <div className="relative mt-14 rotate-[-5deg]">
                <Image
                  src="/themes/color_hourglass.png"
                  alt="Color Hourglass"
                  width={200}
                  height={200}
                  className="object-cover rounded-lg shadow-lg relative z-10"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black rounded-lg pointer-events-none z-20" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black rounded-lg pointer-events-none z-20" />
                {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 rounded-bl-lg pointer-events-none z-20" />
                <div className="absolute top-0 left-0 w-1/3 h-full bg-black/80 rounded-tl-lg pointer-events-none z-20" /> */}
              </div>
              <div className="absolute inset-0 z-10 mt-96 ml-80">
                <Image
                  src="/themes/clessidra.jpeg"
                  alt="Background Image"
                  width={550}
                  height={550}
                  className="object-cover rounded-lg shadow-lg opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-sm">
            <div className="max-w-xl mx-auto text-center space-y-8 mt-20">
              <CountdownTimer targetDate={eventDate} />
            </div>
          </div>
        </div>
      </div>

      {/* Section Links */}
      <div className="h-2/5 flex flex-col md:flex-row">
        {["Tickets", "About", "Speakers"].map((title, index) => (
          <motion.div
            key={title}
            className="flex-1 p-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-full bg-gradient rounded-lg p-6 flex flex-col items-center justify-center card-hover">
              <h2 className="text-3xl font-semibold mb-6">{title}</h2>
              <p className="text-center mb-6">
                Discover more about our exciting {title.toLowerCase()} and what
                to expect at TEDx 2023.
              </p>
              <motion.button
                onClick={() =>
                  scrollTo([ticketsRef, aboutRef, speakersRef][index])
                }
                className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Digital Walls Section */}
      <DigitalWalls />
    </main>
  );
}
