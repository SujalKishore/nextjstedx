import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Mona_Sans } from 'next/font/google';
import gsap from 'gsap';
import './fontArray';
import fontArray from './fontArray';
import WaveSection from './hero/Wavesection';

const mona = Mona_Sans({
  subsets:['latin']
})

const Ticket = () => {
  const ticketRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ticketRef.current) {
        const rect = ticketRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          gsap.to(ticketRef.current, {
            x: 100,
            duration: 0.75,
            opacity: 1
          });
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [fonts, setFonts] = useState(mona)
  useEffect(() => {
    const applyFonts = async () => {
      let delay = 150; // Initial delay in milliseconds
      const maxDelay = 200; // Maximum delay
      const increment = 20; // Increment value for each step
  
      for (const font of fontArray) {
        setFonts(font);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay = Math.min(delay + increment, maxDelay); // Gradually increase the delay
      }
    };
  
    applyFonts();
  }, [fontArray]);  
  
  return (
    <div className="everything">
      <div className="hero h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-[-1]">
          <WaveSection />
        </div>
        <div className="w-full h-screen lg:text-9xl text-7xl text-center font-bold bg-white bg-opacity-20 backdrop-blur-lg pt-16 drop-shadow-sm flex flex-col items-center justify-center">
          <div className="lg:text-6xl text-[#eb0028] text-5xl">Buy</div>
          <div className={fonts.className}>Tickets</div>
          <div className="lg:text-4xl text-3xl">Now</div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[100vh]">
        {/*Baaki code idhr aayega */}
      </div>
    </div>
  );
};

export default Ticket;
