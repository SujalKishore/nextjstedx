"use client";
import React, { useState, useRef, useEffect } from "react";

const images = [
  "https://highflyer.sirv.com/cloud/15_voqq0c.png",
  "https://highflyer.sirv.com/cloud/21_wbsty7.png",
  "https://highflyer.sirv.com/cloud/1_zlqnwl.jpg",
  "https://highflyer.sirv.com/cloud/16_epnmqm.png",
  "https://highflyer.sirv.com/cloud/Screenshot_23_8_nbzwdm.png",
  "https://highflyer.sirv.com/cloud/29_jbd4di.jpg",
  "https://highflyer.sirv.com/cloud/14_zkwtff.png",
  "https://highflyer.sirv.com/cloud/8_ucihr5.png",
  "https://highflyer.sirv.com/cloud/18_bguamv.png",
  "https://highflyer.sirv.com/cloud/Screenshot_18_4_mscxmr.jpg",
  "https://highflyer.sirv.com/cloud/2_zja2bq.png",
  "https://highflyer.sirv.com/cloud/11_p1oi8m.png",
];
const Carousel: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageClick = (index: number) => {
    if (!isMobile) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-[70vh]">
      <div
        ref={carouselRef}
        className={`
          flex 
          ${
            isMobile
              ? "overflow-x-auto snap-x no-scrollbar gap-4 px-4"
              : "gap-2"
          }
          items-center 
          ${isMobile ? "w-full" : ""}
        `}
      >
        {images.map((image, index) => {
          const isHovered = !isMobile && hoveredIndex === index;
          const isAdjacent =
            !isMobile &&
            (hoveredIndex === index - 1 || hoveredIndex === index + 1);
          const isDistant =
            !isMobile &&
            (hoveredIndex === index - 2 || hoveredIndex === index + 2);

          return (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              className={`
                relative 
                flex-shrink-0 
                bg-cover 
                bg-center 
                ${!isMobile && "cursor-pointer"}
                transition-all 
                duration-500 
                transform
                ${isMobile ? "snap-center" : ""}
                ${
                  !isMobile
                    ? expandedIndex === index
                      ? "w-[24vw] h-[50vh] z-10 scale-105"
                      : "w-[calc(4vw+4vh)] h-[calc(26vw+-10vh)] grayscale brightness-50"
                    : "w-[70vw] h-[50vh]"
                }
                ${
                  !isMobile && expandedIndex === null
                    ? "hover:scale-110 hover:grayscale-0 hover:brightness-100"
                    : ""
                }
                ${!isMobile && isHovered ? "scale-110 brightness-100" : ""}
                ${!isMobile && isAdjacent ? "scale-105 brightness-75" : ""}
                ${!isMobile && isDistant ? "brightness-50" : ""}
              `}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
