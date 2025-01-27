import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isFadedIn, setIsFadedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadedIn(true);
    }, 200);

    const clipTimer = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(clipTimer);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .hero-container {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .hero-container.fade-in {
          opacity: 1;
        }
        .bg-image {
          position: absolute;
          inset: 0;
          background-image: url("/images/image.png");
          background-size: cover;
          background-position: center;
          transition: clip-path 1s ease-in-out;
        }
        .clip-initial {
          clip-path: polygon(
            10% 0%,
            0% 0%,
            10% 50%,
            0% 100%,
            10% 100%,
            17% 70%,
            24% 100%,
            33% 100%,
            24% 50%,
            32% 0%,
            23% 0%,
            17% 38%
          );
        }
        .clip-active {
          clip-path: polygon(
            10% 0%,
            0% 0%,
            10% 50%,
            0% 100%,
            10% 100%,
            16% 100%,
            24% 100%,
            100% 100%,
            100% 50%,
            100% 0%,
            23% 0%,
            16% 0%
          );
        }
        // .black-overlay {
        //   position: absolute;
        //   inset: 0;
        //   background-color: rgba(0, 0, 0, 0.7); /* Increased opacity */
        // }
      `}</style>
      <div
        className={`hero-container ${
          isFadedIn ? "fade-in" : ""
        } relative h-[80vh] w-full overflow-hidden bg-black text-white flex items-center justify-center`}
      >
        <div
          className={`bg-image ${isActive ? "clip-active" : "clip-initial"}`}
        ></div>

        <div className="black-overlay"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-6xl md:text-8xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TEDx <span className="text-[#FF3A3A]">Rewind</span>
          </motion.h1>
        </div>
      </div>
    </>
  );
};
export default Hero;
