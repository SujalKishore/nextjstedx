import React from "react";
import dynamic from "next/dynamic";
import CustomBackground from "@/components/CustomBackground/CustomBackground"; // Import your CustomBackground component
import CardSpeaker from "@/components/speakersGrid/speakersGrid";

const SpeakersPage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background Section */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          background:
            "linear-gradient(to bottom, rgba(10, 22, 33, 1) 0%, rgba(16, 71, 130, 1) 100%)",
        }}
      >
        <CustomBackground />

        {/* Foreground Text */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
        >
          <h1
            className="md:text-7xl text-5xl font-bold mb-4 text-white mt-14 md:mt-0"
            style={{
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
            }}
          >
            Our Esteemed Speakers
          </h1>
          <p
            className="text-lg md:text-2xl max-w-800 text-gray-300 mb-4 text-center"
            style={{
              lineHeight: "1.8",
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
            }}
          >
            Meet the inspiring thought leaders and innovators from various fields
            who are set to share their valuable insights and experiences.
          </p>
        </div>
      </div>

      {/* Black Region with Gradient */}
      <div className="relative z-10 bg-gradient-to-br from-red-900 via-black to-red-900">
        <div className="relative z-10">
          <CardSpeaker />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SpeakersPage), { ssr: false });
