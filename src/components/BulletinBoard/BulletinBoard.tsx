import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Event {
  title: string;
  date: string;
  images: string[];
}

interface BulletinBoardProps {
  recentEvents: Event[];
  nextEvent: Event;
}

export const BulletinBoard: React.FC<BulletinBoardProps> = ({
  recentEvents,
  nextEvent,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBoard = () => setIsOpen(!isOpen);

  return (
    <motion.div
      initial={{ right: 0 }}
      animate={{ right: isOpen ? "0px" : "-320px" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 bottom-0 right-0 z-[99999] flex items-stretch"
    >
      <button
        onClick={toggleBoard}
        className="bg-[#fa3e3e] text-white h-[15vh] w-12 flex-shrink-0 flex flex-col items-center justify-center focus:outline-none mt-[110%] rounded-l-md"
      >
        {isOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-black bg-opacity-100 w-80 overflow-y-auto z-[10000]"
      >
        <div className="p-4 h-full flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-[#FF3A3A]">
            Recent Events
          </h3>
          <div className="space-y-6 flex-grow">
            {recentEvents.map((event, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-white font-bold">{event.title}</h4>
                <p className="text-gray-300 text-sm">{event.date}</p>
                <div className="flex space-x-2">
                  {event.images.slice(0, 2).map((image, imgIndex) => (
                    <div key={imgIndex} className="relative w-full h-24">
                      <Image
                        src={image}
                        alt={`${event.title} image ${imgIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  ))}
                </div>
                <Link href="/preevents" passHref>
                  <Button variant="outline" size="sm" className="w-full">
                    Show More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2 text-[#FF3A3A]">
              Upcoming Event
            </h3>
            <div className="bg-white bg-opacity-10 p-3 rounded-md">
              <p className="text-white font-bold">{nextEvent.title}</p>
              <p className="text-white text-sm">{nextEvent.date}</p>
              <div className="mt-2 flex space-x-2">
                {nextEvent.images.slice(0, 2).map((image, index) => (
                  <div key={index} className="relative w-1/2 h-24">
                    <Image
                      src={image}
                      alt={`${nextEvent.title} image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/timeline" passHref>
                  <Button
                    variant="default"
                    className="w-full bg-[#FF3A3A] text-white"
                  >
                    View Timeline
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
