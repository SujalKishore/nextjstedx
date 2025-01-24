import Link from "next/link";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="relative px-6 py-12 bg-gray-950 text-white">
      <div className="container mx-auto flex flex-wrap justify-between space-y-8 md:space-y-0">
        <div className="flex flex-col items-start w-full md:w-auto">
          <img
            src="/images/logo-rights.png"
            alt="TedX Logo"
            className="w-auto h-12"
          />
        </div>
        <div className="pl-6 w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:underline hover:text-red-600">
              Speakers
            </Link>
            <Link
              href="/sponsor"
              className="hover:underline hover:text-red-600"
            >
              Sponsors
            </Link>
            <Link href="/rewind" className="hover:underline hover:text-red-600">
              Rewind
            </Link>
            <Link
              href="/contact"
              className="hover:underline hover:text-red-600"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="pl-6 w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="not-italic space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:info@tedx.com"
                className="hover:underline hover:text-red-600"
              >
                info@tedx.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="hover:underline hover:text-red-600"
              >
                +1 (234) 567-890
              </a>
            </p>
            <p>Address: 123 Innovation St, Knowledge City</p>
          </address>
        </div>
        <div className="border-l border-gray-400 pl-6 w-full md:w-auto mt-4 md:mt-0">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-start space-x-4">
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
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 rotate-90 text-xl font-bold hidden md:block">
        © 2025
      </div>
    </footer>
  );
};
export default Footer;