import React from "react";
import { Mona_Sans } from "next/font/google";
import Ticket from "@/components/Ticket/Ticket";

const mona = Mona_Sans({
  subsets: ["latin"],
});

const Register: React.FC = () => {
  return (
    <div className={mona.className}>
      {/* Ticket Section */}
      <Ticket />

      {/* Original Section */}
      <section className="relative w-full h-screen grid grid-cols-1 md:grid-cols-2 py-8 px-4 mt-18">
        {/* Left Column - Horizontal Split for Ticket Images */}
        <div className="flex h-full space-x-4 px-4">
          {/* Ticket Front Image */}
          <div
            className="bg-cover bg-center w-1/2 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url('/images/VIP_front.png')`,
            }}
          />
          {/* Ticket Back Image */}
          <div
            className="bg-cover bg-center w-1/2 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url('/images/VIP_Back.png')`,
            }}
          />
        </div>

        {/* Right Column - Text Section */}
        <div className="flex items-center justify-center bg-gray-900 text-white p-8">
          <div className="max-w-lg space-y-6">
            <h1 className="text-4xl font-bold mb-4">Perks Available</h1>
            <ul className="list-disc list-inside space-y-4">
              <li className="text-lg">Get exclusive discounts on services.</li>
              <li className="text-lg">24/7 support for all users.</li>
              <li className="text-lg">Access to premium features.</li>
              <li className="text-lg">Flexible payment options.</li>
              <li className="text-lg">Early access to new updates.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inverted Section */}
      <section className="relative w-full h-screen grid grid-cols-1 md:grid-cols-2 py-8 px-4">
        {/* Left Column - Text Section */}
        <div className="flex items-center justify-center bg-gray-900 text-white p-8">
          <div className="max-w-lg space-y-6">
            <h1 className="text-4xl font-bold mb-4">More Benefits</h1>
            <ul className="list-disc list-inside space-y-4">
              <li className="text-lg">Exclusive networking opportunities.</li>
              <li className="text-lg">Personalized experiences.</li>
              <li className="text-lg">Complimentary access to events.</li>
              <li className="text-lg">Loyalty rewards program.</li>
              <li className="text-lg">Dedicated account managers.</li>
            </ul>
          </div>
        </div>

        {/* Right Column - Horizontal Split for Ticket Images */}
        <div className="flex h-full space-x-4 px-4">
          {/* Ticket Front Image */}
          <div
            className="bg-cover bg-center w-1/2 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url('/images/Front.png')`,
            }}
          />
          {/* Ticket Back Image */}
          <div
            className="bg-cover bg-center w-1/2 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url('/images/Back.png')`,
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Register;
