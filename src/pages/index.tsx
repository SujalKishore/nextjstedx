"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(45deg, transparent 40%, #ff0000 40%, #ff0000 60%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, #ff0000 40%, #ff0000 60%, transparent 60%)
          `,
        }}
      />
      <canvas></canvas>

      {/* Black Gradient Blurred Background */}
      <div className="absolute inset-0 z-5 bg-black/80 backdrop-blur-md"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full p-12 ">
        <div className="max-w-xl mx-auto text-center space-y-12 mb-72">
          <div className="space-y-4">
            <Image
              src="/images/logo-rights.png"
              alt="TEDx Logo"
              width={700}
              height={700}
            />
            <div className="text-2xl md:text-4xl text-red-600 font-bold tracking-wider">
              INVERSO <span className="text-white">CLESSIDRA</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              We will be back. Stay tuned for something amazing!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
