import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black rounded-full text-white shadow-lg border-4 border-white/30 flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
          isOpen ? "shadow-2xl bg-white-600" : "shadow-lg"
        }`}
        style={{ width: "80px", height: "80px" }}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X size={40} />
        ) : (
          <div className="relative w-[250px] h-[250px] overflow-hidden rounded-full flex items-center justify-center scale-150">
            <Image
              src="/images/color_hourglass.png"
              alt="Menu Icon"
              width={200} // Increased image width
              height={200} // Increased image height
              objectFit="cover"
            />
          </div>
        )}
      </button>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-red-600/0 backdrop-blur-lg z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-start h-full space-y-6 px-6 mb-36 mt-36">
          {/* White Box with Links (Positioned at the top just below the button) */}
          <div className="bg-white/0 rounded-lg w-[90%] shadow-md">
            <Link
              href="/speakers"
              className="block text-white text-2xl font-bold tracking-wider px-6 py-6 text-center"
            >
              Speakers
            </Link>
            <Link
              href="/sponsor"
              className="block text-white text-2xl font-bold tracking-wider px-6 py-6 text-center"
            >
              Sponsors
            </Link>
            <Link
              href="/rewind"
              className="block text-white text-2xl font-bold tracking-wider px-6 py-6 text-center"
            >
              Rewind
            </Link>
            <Link
              href="/preevents"
              className="block text-white text-2xl font-bold tracking-wider px-6 py-6 text-center"
            >
              Pre-Events
            </Link>
            <Link
              href="/about"
              className="block text-white text-2xl font-bold tracking-wider px-6 py-6 text-center"
            >
              About
            </Link>
          </div>

          {/* White Button for "MERCHANDISE" */}
          <Link
            href="/merchandise"
            className="bg-red-600/0 text-white border-red-600 border-2 px-6 py-4 w-[90%] rounded-lg font-bold shadow-md text-center hover:shadow-lg transition text-xl"
          >
            Merchandise
          </Link>

          {/* Black Rectangle for "TICKETS" */}
          <Link
            href="/register"
            className="bg-black text-white px-6 py-4 w-[90%] rounded-lg flex items-center justify-center shadow-md text-xl"
          >
            <span className="text-xl font-semibold fixed">Tickets</span>
            <span className="text-2xl ml-auto">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
