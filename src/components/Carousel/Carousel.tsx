"use client";
import React, { useState } from "react";
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
  const handleImageClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className="relative flex items-center justify-center h-[70vh] ">
      <div className="flex gap-2 items-center overflow-y-auto">
        {images.map((image, index) => {
          const isHovered = hoveredIndex === index;
          const isAdjacent =
            hoveredIndex === index - 1 || hoveredIndex === index + 1;
          const isDistant =
            hoveredIndex === index - 2 || hoveredIndex === index + 2;
          return (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative flex-shrink-10 bg-cover bg-center cursor-pointer transition-all duration-500 transform
                ${
                  expandedIndex === index
                    ? "w-[28vw] h-[60vh] z-10 scale-105"
                    : "w-[calc(4vw+4vh)] h-[calc(26vw+-10vh)] grayscale brightness-50"
                }
                ${
                  expandedIndex === null
                    ? "hover:scale-110 hover:grayscale-0 hover:brightness-100"
                    : ""
                }
                ${isHovered ? "scale-110 brightness-100" : ""}
                ${isAdjacent ? "scale-105 brightness-75" : ""}
                ${isDistant ? "brightness-50" : ""}
              `}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div
                className={`absolute inset-0 transition-all duration-500 transform
                  ${isHovered || isAdjacent ? "scale-100 brightness-100" : ""}
                  ${isDistant ? "brightness-50" : ""}
                `}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Carousel;
