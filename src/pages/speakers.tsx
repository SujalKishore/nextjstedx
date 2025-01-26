import React from "react";
import dynamic from "next/dynamic";
import CustomBackground from "@/components/CustomBackground/CustomBackground"; // Import your CustomBackground component
import CardSpeaker from "@/components/speakersGrid/speakersGrid";

const SpeakersPage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background Section */}
      <div className="relative h-[85vh] md:h-[100vh] overflow-hidden bg-gradient-to-b from-[#0a1621] to-black">
        <CustomBackground />

        {/* Foreground Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1
            className="md:text-7xl text-5xl font-bold mb-4 text-white mt-14 md:mt-0 text-center px-6 md:px-16"
            style={{
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
            }}
          >
            Our Esteemed Speakers
          </h1>
          <p
            className="text-lg md:text-2xl max-w-800 text-gray-300 mb-4 text-center px-6 md:px-16"
            style={{
              lineHeight: "1.8",
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
            }}
          >
            Meet the inspiring thought leaders and innovators from various
            fields who are set to share their valuable insights and experiences.
          </p>
        </div>
      </div>

      {/* Black Region with Gradient */}
      <div className="relative z-10 bg-gradient-to-br from-black via-zinc-950 to-red-800">
        <div className="relative z-10">
          <CardSpeaker />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SpeakersPage), { ssr: false });
