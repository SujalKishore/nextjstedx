import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
interface Speaker {
  name: string;
  topic: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
  };
  tedTalkUrl: string;
}
interface SpeakersListProps {
  speakers: Speaker[];
}
export const SpeakersList: React.FC<SpeakersListProps> = ({ speakers }) => {
  return (
    <div className="mb-0">
      <h3 className="text-2xl font-bold mb-6 text-[#FF3A3A]">Talks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            className="bg-[#1A0000] p-4 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg group">
              <Image
                src={speaker.image}
                alt={speaker.name}
                layout="fill"
                objectFit="cover"
                objectPosition="0px -50px"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black"
                  onClick={() => window.open(speaker.tedTalkUrl, "_blank")}
                >
                  Watch TED Talk
                </Button>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-2">{speaker.name}</h4>
            <p className="text-gray-400 mb-4">{speaker.topic}</p>
            <div className="flex space-x-4">
              {speaker.socialLinks.linkedin && (
                <a
                  href={speaker.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FF3A3A]"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {speaker.socialLinks.twitter && (
                <a
                  href={speaker.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FF3A3A]"
                >
                  <Twitter size={20} />
                </a>
              )}
              <a
                href={speaker.tedTalkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF3A3A]"
              >
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};