"use client";
import React, { useEffect } from "react";
const NakerEffect: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("data-who", "💎 Made with naker.io 💎");
    script.src = "https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/viewer.js";
    script.dataset.option = JSON.stringify({
      environment: {
        gradient: "horizontal",
        sensitivity: 0.8,
        colorStart: [72, 7, 7, 1],
        colorEnd: [0, 0, 0, 1],
      },
      particle: {
        life: 5,
        power: 0.01,
        texture:
          "https://res.cloudinary.com/naker-io/image/upload/v1566560053/star_07.png",
        number: 145,
        colorStart: [74, 72, 53, 1],
        colorEnd: [235, 0, 40, 1],
        sizeStart: 1.72,
        sizeEnd: 3.44,
        direction1: { x: 100, y: 100, z: 100 },
        direction2: { x: -100, y: -100, z: -100 },
      },
      waterMark: false,
    });
    document.getElementById("naker-container")?.appendChild(script);
    return () => {
      document.getElementById("naker-container")?.removeChild(script);
    };
  }, []);
  return <div id="naker-container" className="absolute inset-0 z-[-1]" />;
};
export default NakerEffect;