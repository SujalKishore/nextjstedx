import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { X } from "lucide-react";
import Image from "next/image";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path: string) => {
    router.push(path);
    setIsOpen(false); // Close the menu on navigation
  };

  return (
    <>
      {/* Top Bar with Logo and Hamburger Button */}
      <div className="fixed top-4 left-0 w-full z-50 flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center"
        >
          <Image
            src="/images/logo-rights.png"
            alt="Logo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`bg-black rounded-full text-white shadow-lg border-4 border-white/30 flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
            isOpen ? "shadow-2xl bg-white-600" : "shadow-lg"
          }`}
          style={{ width: "60px", height: "60px" }} // Decreased circle size
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={30} />
          ) : (
            <div className="relative w-[250px] h-[50px] overflow-hidden rounded-full flex items-center justify-center scale-150">
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
      </div>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-lg z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-start h-full space-y-6 px-6 mb-36 mt-24">
          {/* White Box with Links */}
          <div className="bg-white rounded-lg w-[90%] shadow-md">
            {[
              { name: "SPEAKERS", href: "/speakers" },
              { name: "SPONSORS", href: "/sponsor" },
              { name: "REWIND", href: "/rewind" },
              { name: "PRE-EVENTS", href: "/preevents" },
              { name: "TIMELINE", href: "/timeline" },
              { name: "ABOUT", href: "/about" },
            ].map((link) => (
              <div
                key={link.href}
                className="relative block text-black text-lg font-bold tracking-wider px-6 py-4 text-left"
              >
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className={`flex justify-between w-full ${
                    router.pathname === link.href ? "bg-red-100/0" : ""
                  }`}
                >
                  {link.name}
                </button>
                {/* Red dot for the active link */}
                {router.pathname === link.href && (
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-2 h-2 bg-red-600 rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          {/* White Button for "MERCHANDISE" */}
          {/* <button
            onClick={() => handleLinkClick("/merchandise")}
            className="bg-white text-black px-6 py-4 w-[90%] rounded-lg font-bold shadow-md text-left hover:shadow-lg transition text-lg"
          >
            MERCHANDISE
          </button> */}

          {/* Black Rectangle for "TICKETS" */}
          <button
            onClick={() => handleLinkClick("/register")}
            className="bg-[#fa3e3e] text-white px-6 py-4 w-[90%] rounded-lg flex items-left text-left justify-left shadow-md text-lg hover:shadow-lg transition"
          >
            <span className="text-lg font-semibold">TICKETS</span>
          </button>
        </div>
      </div>
    </>
  );
}
