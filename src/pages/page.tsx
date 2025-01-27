"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header/Header";
import HeaderMob from "@/components/HeaderMob/HeaderMob";
import Footer from "@/components/Footer/Footer";
import CustomTimer from "@/components/Timer/Timer";

interface InnovativeSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  ctaText: string;
  isReversed: boolean;
  className?: string;
}

const InnovativeSection: React.FC<InnovativeSectionProps> = ({
  title,
  description,
  imageSrc,
  ctaText,
  isReversed,
  className,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const xOffset = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const negatedXOffset = useTransform(xOffset, (value) => -value);

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, scale }}
      className={`flex flex-col md:flex-row items-center min-h-screen ${
        isReversed ? "md:flex-row-reverse" : ""
      } ${className || ""}`}
    >
      <motion.div
        style={{ x: isReversed ? xOffset : negatedXOffset }}
        className="w-full md:w-1/2 p-6 md:p-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300">
          {description}
        </p>
        <button className="bg-red-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-red-700 transition-colors">
          {ctaText}
        </button>
      </motion.div>
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-2xl"
        />
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10 * 24 * 60 * 60);
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const progress = Math.min(scrollPosition / heroHeight, 1);
        setScrollProgress(progress);

        // Check if the second InnovativeSection is reached
        const secondSection = document.getElementById("second-section");
        if (secondSection) {
          const secondSectionTop = secondSection.getBoundingClientRect().top;
          if (secondSectionTop <= window.innerHeight) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        }
      }
    };

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const logoScale = 2.3 + scrollProgress * 5.5;
  const blurIntensity = scrollProgress * 10;
  const contentOpacity = scrollProgress >= 1 ? 1 : 0;
  const contentTranslateY = scrollProgress >= 1 ? 0 : 100;

  return (
    <div className="relative bg-black/80">
      {isMobile ? <HeaderMob /> : <Header />}
      <div
        ref={heroRef}
        className={`sticky top-0 h-[130vh] overflow-hidden ${
          isFixed ? "fixed" : ""
        }`}
      >
        <div className="h-screen relative">
          <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-to-br from-black-600 to-transparent transform overflow-hidden z-30 blur-sm">
            <Image
              src="/images/test/7.jpg"
              alt="Hourglass"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-600 to-transparent transform overflow-hidden z-30 blur-sm">
            <Image
              src="/images/test/8.jpg"
              alt="Hourglass"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute md:right-1/2 right-1/3 bottom-0 w-1/2 h-1/2 bg-gradient-to-bl from-cyan-600 via-black to-black transform overflow-hidden z-0 blur-sm"></div>
          <div className="absolute md:left-1/2 left-1/3 top-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-600 via-black to-black transform overflow-hidden z-20 blur-sm"></div>

          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[1000]">
            <h1 className="text-6xl md:text-6xl font-bold text-white">
              INVE
              <span className="inline-block transform scale-x-[-1] text-cyan-400">
                R
              </span>
              SO{" "}
              <span className="text-white whitespace-nowrap">
                CLESSID
                <span className="inline-block transform scale-x-[-1] text-red-600">
                  R
                </span>
                A
              </span>
            </h1>
            <p className="text-xl md:text-xl mt-4 mb-12 text-white">
              As <span className="text-red-600 font-bold">time</span> folds,
              perspectives unfold.
            </p>
          </div>
          <div className="relative z-40 flex items-center justify-center w-full h-full">
            <div className="relative">
              <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] border-white/10 border-2 transform rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-[225px] h-[225px] md:w-[450px] md:h-[450px] bg-white/5 transform rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] border-white/20 border-2 transform rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div
                className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(-50%, -50%) scale(${logoScale})`,
                }}
              >
                <Image
                  src="/themes/Logo.png"
                  alt="Hourglass"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-24 absolute top-2/4 bottom-0 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-2xl z-50 flex items-center justify-center">
            <CustomTimer />
          </div>
        </div>
      </div>

      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity pointer-events-none z-20"
        style={{
          opacity: scrollProgress,
          backdropFilter: `blur(${blurIntensity}px)`,
        }}
      />

      {/* Content Sections */}
      <div
        ref={contentRef}
        className="relative z-30 transition-all duration-1000"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentTranslateY}px)`,
        }}
      >
        <div className="h-[100vh]"></div>
        <div className="h-[70vh]"></div>
        {/* Innovative Sections */}
        <InnovativeSection
          title="Revolutionize Your Workflow"
          description="Experience unparalleled efficiency with our cutting-edge tools designed to streamline your daily tasks and boost productivity."
          imageSrc="/images/test/1.png"
          ctaText="Get Started"
          isReversed={false}
          className="z-30"
        />
        {/* Spacer div */}
        <div className="h-[100vh]"></div>
        <InnovativeSection
          title="Unleash Your Creativity"
          description="Dive into a world of endless possibilities. Our platform provides the canvas for your imagination to run wild and bring your ideas to life."
          imageSrc="/images/test/2.png"
          ctaText="Explore Features"
          isReversed={true}
          className="z-30"
        />
        {/* Spacer div */}
        <div className="h-[100vh]"></div>
        <InnovativeSection
          title="Connect and Collaborate"
          description="Break down barriers and foster seamless collaboration. Join a community of innovators and take your projects to new heights."
          imageSrc="/images/test/3.png"
          ctaText="Join Now"
          isReversed={false}
          className="z-30"
        />

        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
