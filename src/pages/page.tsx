"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
  const ticketsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const eventDate = new Date(Date.now() + 42 * 24 * 60 * 60 * 1000);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Cards */}
      <section className="min-h-screen flex flex-col">
        <div className="flex-1 bg-gradient p-4">
          <motion.div
            className="h-full rounded-lg overflow-hidden shadow-2xl relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/tedx-hero.jpg"
              alt="TEDx Event"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <div className="absolute inset-0 z-20 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
                    TEDx Event 2023
                  </h1>
                  <p className="text-xl mb-8">Ideas Worth Spreading</p>
                  <motion.button
                    className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Tickets
                  </motion.button>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="bg-black bg-opacity-50 p-6 rounded-lg w-full max-w-md">
                  <h2 className="text-2xl font-semibold mb-4 text-center">
                    Event Starts In
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
                  Discover more about our exciting {title.toLowerCase()} and
                  what to expect at TEDx 2023.
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
      </section>
    </main>
  );
}
