import React from "react";
import AboutPage from "@/components/Team.tsx/teamMembers";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="h-[100vh] bg-black flex items-center justify-center text-center relative">
        <div className="z-10">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="w-full max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-5xl md:text-9xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                TEDx<span className="text-[#FF3A3A]">About</span>
              </motion.h1>
              <motion.p
                className="text-2xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Meet the passionate individuals behind our TEDx event.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <AboutPage />
    </div>
  );
};

export default About;
