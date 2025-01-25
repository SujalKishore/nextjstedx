import React, { useEffect, useState } from "react";
import _ from "lodash";

const slides = [
  {
    title: "Full Page Parallax Effect",
    subtitle: "Scroll down and up to see the effect!",
    image: "https://i.postimg.cc/kXq9Qmnj/bgd1.jpg",
  },
  {
    title: "Cras lacinia non eros nec semper.",
    subtitle:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.",
    image: "https://i.postimg.cc/W14vywqg/photo-1424746219973-8fe3bd07d8e3.jpg",
  },
  {
    title: "Etiam consequat lectus.",
    subtitle:
      "Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at nibh aliquam dapibus.",
    image: "https://i.postimg.cc/TY0xQ41T/photo-1433840496881-cbd845929862.jpg",
  },
];

export const ParallaxSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  const slideDuration = 600; // Duration for locking slide
  const scrollSensitivity = 30; // Sensitivity to scroll gestures
  const [isLocked, setIsLocked] = useState(false);

  const handleScroll = (event: WheelEvent) => {
    if (isLocked) return;

    const delta = event.deltaY;
    if (delta > scrollSensitivity && currentSlide < totalSlides - 1) {
      // Scroll down
      setIsLocked(true);
      setCurrentSlide((prev) => prev + 1);
    } else if (delta < -scrollSensitivity && currentSlide > 0) {
      // Scroll up
      setIsLocked(true);
      setCurrentSlide((prev) => prev - 1);
    }

    setTimeout(() => setIsLocked(false), slideDuration);
  };

  useEffect(() => {
    const throttledScroll = _.throttle(handleScroll, 60);
    window.addEventListener("wheel", throttledScroll);

    return () => {
      window.removeEventListener("wheel", throttledScroll);
    };
  }, [currentSlide, isLocked]);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-screen bg-cover bg-center transition-transform duration-700 ease-out ${
            index === currentSlide
              ? "translate-y-0 z-10"
              : index < currentSlide
              ? "-translate-y-full z-0"
              : "translate-y-full z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
            <p className="mt-4 text-lg md:text-xl">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxSlider;
