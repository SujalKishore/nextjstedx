import Link from "next/link";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#222222] to-[#181818] backdrop-blur-lg border border-white/10 p-8 shadow-lg text-white">
      <div className="container mx-auto space-y-12">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <Image
              src="/images/logo-rights.png"
              alt="TEDx Logo"
              width={290}
              height={290}
            />
            <p className="mt-4 text-sm text-white/80">
              Ideas Worth Spreading. Join the movement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/speakers"
                className="hover:underline hover:text-red-500"
              >
                Speakers
              </Link>
              <Link
                href="/sponsor"
                className="hover:underline hover:text-red-500"
              >
                Sponsors
              </Link>
              <Link
                href="/rewind"
                className="hover:underline hover:text-red-500"
              >
                Rewind
              </Link>
              <Link
                href="/preevents"
                className="hover:underline hover:text-red-500"
              >
                Pre-Events
              </Link>
              <Link
                href="/about"
                className="hover:underline hover:text-red-500"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p>
                Email:{" "}
                <a
                  href="mailto:Tedx@niituniversity.in"
                  className="hover:underline hover:text-red-500"
                >
                  Tedx@niituniversity.in
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:underline hover:text-red-500"
                >
                  +91 93155 08567
                </a>
              </p>
              <p>
                NIIT University, NH 8, Delhi - Jaipur Expy,<br></br> Neemrana,
                Majrakath, Rajasthan 301705
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-white/20" />

        {/* Socials */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/tedxniituniversity/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="w-6 h-6 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://twitter.com/@TEDxNIITUni"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="w-6 h-6 hover:text-sky-300 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/tedxniituniversity/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-6 h-6 hover:text-pink-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/school/tedxniituniversity/?originalSubdomain=in"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="w-6 h-6 hover:text-sky-500 transition-colors" />
          </a>
        </div>
      </div>

      {/* Vertical Year */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 rotate-90 text-lg font-bold text-white/50 hidden md:block">
        © 2025
      </div>
    </footer>
  );
};

export default Footer;
