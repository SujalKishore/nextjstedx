import React, { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { Mona_Sans } from 'next/font/google';
import gsap from 'gsap';
import './fontArray';
import fontArray from './fontArray';

const mona = Mona_Sans({
  subsets:['latin']
})

const Ticket = () => {
  useGSAP(() => {
      gsap.to('#ticketasset', {
           x: 100,
          duration: 0.75,
          opacity: 1
      })
  }, [])
  const [fonts, setFonts] = useState(mona)
  useEffect(() => {
    let list = fontArray
    for (let font = 0; font < list.length; font++) {
      setFonts;
    }
  }, [])
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Ticket Page bg.png')" }}>
      <div className="content flex gap-5 h-full mt-20">
        <div className="border-2 border-white w-[25%] h-[80%] opacity-0 bg-red-700" id='ticketasset'>
            heya bitches... here is ya ticket
        </div>
        <div className="content w-{75%} ml-40 text-white">
            <div className=" heading pt-36 font-bold text-6xl">
                <span className='text-[#eb0028]'>Leisure </span> 
                <span className={fonts.className}>Experience</span>
            </div>
            <div className="perks">
                <ul className='list-disc ml-24 text-xl font-semibold'>
                    <li className='mb-3 mt-8'>Perk 1</li>
                    <li className='mb-3 mt-3'>Perk 2</li>
                    <li className='mb-3 mt-3'>Perk 3</li>
                    <li className='mb-3 mt-3'>Perk 4</li>
                    <li className='mt-3'>Perk 5</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
