import { useState } from "react";
import Link from "next/link";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        onClick={handleMenuToggle}
        className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex justify-center items-center"
      >
        <span className="w-1/2 h-[2px] bg-white mb-1"></span>
        <span className="w-1/2 h-[2px] bg-white mb-1"></span>
        <span className="w-1/2 h-[2px] bg-white"></span>
      </button>

      {/* Dimmed Background and Blur Effect */}
      <div
        className={`fixed inset-0 bg-blue-800 opacity-60 transition-opacity duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={handleMenuToggle}
      ></div>
      <div
        className={`fixed top-0 right-0 w-3/4 bg-white p-6 pt-12 transition-transform duration-500 ${
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6">LUSION</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="text-xl text-black hover:text-[#eb0028]">
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-xl text-black hover:text-[#eb0028]"
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-xl text-black hover:text-[#eb0028]"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-xl text-black hover:text-[#eb0028]"
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              href="/letstalk"
              className="text-xl text-black hover:text-[#eb0028]"
            >
              LET&apos;S TALK
            </Link>
          </li>
          <li>
            <Link
              href="/labs"
              className="text-xl text-black hover:text-[#eb0028]"
            >
              LABS
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
