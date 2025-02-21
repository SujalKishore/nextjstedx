import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TeamMemberX } from "../TeamMemberX/TeamMemberX";

interface SpeakerCardProps {
  name: string;
  title: string;
  image: string;
  longDescription: string;
  additionalStyles?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  title,
  image,
  longDescription,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="relative">
      <motion.div
        className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-red-800/20 via-black to-gray-900 shadow-lg cursor-pointer h-96 w-[100%] transform transition-transform"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        onClick={toggleExpand}
      >
        <div className="absolute inset-0 top-[-96px] bg-slate-800 opacity-40 z-0">
          <svg className="w-full h-full scale-125" viewBox="0 0 100 100">
            <clipPath id="halfXClip">
              <rect x="0" y="0" width="50" height="100" />
            </clipPath>
            <path
              d="M20 20 L80 80 M80 20 L20 80"
              stroke="currentColor"
              strokeWidth="15"
              clipPath="url(#halfXClip)"
            />
          </svg>
        </div>
        <div className="absolute inset-0 z-[-1]">
          <div className="w-full h-full bg-gradient-to-tr from-red-500/20 via-transparent to-red-800/10 opacity-60 transform rotate-45 scale-150"></div>
        </div>
        <div className="relative w-full h-[75%] grayscale group-hover:grayscale-0 transition-all duration-200">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4 h-[30%] flex flex-col justify-start items-center text-center bg-black">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-red-600">{title}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-10" />
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={toggleExpand}
          >
            <div className="relative w-full h-[85%] max-w-[900px]">
              {/* Laptop view */}
              <div className="hidden md:block relative w-full h-full">
                <div className="absolute inset-0 z-0 top-0 flex flex-col items-center">
                  <div className="relative w-[60%] h-[90%] mt-22">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={name}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      quality={100}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-3xl md:text-6xl font-bold mb-2">{name}</h2>
                    <p className="text-xl md:text-2xl text-red-600 mb-4">{title}</p>
                    <p className="text-sm md:text-lg leading-relaxed max-w-6xl">
                      {longDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile view */}
              <div className="md:hidden flex flex-col w-full h-full">
                <div className="relative w-full h-[60%] flex items-center justify-center pt-12">
                  <div className="relative w-[80%] h-[100%]">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={name}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      quality={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h2 className="text-3xl font-bold mb-2">{name}</h2>
                      <p className="text-xl text-red-600 mb-4">{title}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[40%] bg-black p-4 overflow-y-auto">
                  <p className="text-sm leading-relaxed text-white">
                    {longDescription}
                  </p>
                </div>
              </div>

              {/* Team Member X in the background */}
              <div className="absolute inset-0 z-[-10] transform scale-x-[1.75] scale-y-[1.75]">
                <TeamMemberX className="text-red-600" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpeakerCard;