import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronUp, Calendar, Clock, MapPin } from "lucide-react";
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  images: string[];
  status: "upcoming" | "past";
}
const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      layout
      className="bg-gradient-to-b from-black to-[#1A0000] rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="p-6"
        animate={{
          backgroundColor: isHovered
            ? "rgba(255, 0, 0, 0.1)"
            : "rgba(0, 0, 0, 0)",
        }}
      >
        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-400 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-400 mb-2">
          <Clock className="w-4 h-4 mr-2" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-300 mb-4">{event.description}</p>
        <motion.button
          className="text-red-500 font-semibold flex items-center"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? "Hide Gallery" : "View Gallery"}
          {isExpanded ? (
            <ChevronUp className="ml-2 w-4 h-4" />
          ) : (
            <ChevronDown className="ml-2 w-4 h-4" />
          )}
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-gradient-to-b from-[#1A0000] to-black"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {event.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative h-48 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${event.title} - Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default EventCard;