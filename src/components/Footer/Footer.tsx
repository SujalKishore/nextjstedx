import Link from "next/link";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 p-8 shadow-lg text-white">
      <div className="container mx-auto space-y-12">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <img
              src="/images/logo-rights.png"
              alt="TEDx Logo"
              className="w-auto h-12"
            />
            <p className="mt-4 text-sm text-white/80">
              Ideas Worth Spreading. Join the movement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:underline hover:text-red-500">
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
                href="/contact"
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
                  href="mailto:info@tedx.com"
                  className="hover:underline hover:text-red-500"
                >
                  info@tedx.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:underline hover:text-red-500"
                >
                  +1 (234) 567-890
                </a>
              </p>
              <p>Address: 123 Innovation St, Knowledge City</p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-white/20" />

        {/* Socials */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="w-6 h-6 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="w-6 h-6 hover:text-sky-300 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-6 h-6 hover:text-pink-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
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
