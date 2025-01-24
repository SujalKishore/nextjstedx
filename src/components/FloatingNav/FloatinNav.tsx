import React from "react";
import { motion } from "framer-motion";
interface FloatingNavProps {
  activeSection: string;
}
const FloatingNav: React.FC<FloatingNavProps> = ({ activeSection }) => {
  return (
    <motion.nav
      className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <ul className="space-y-4">
        <li>
          <a
            href="#upcoming"
            className={`block w-3 h-3 rounded-full ${
              activeSection === "upcoming" ? "bg-red-600" : "bg-white"
            }`}
          />
        </li>
        <li>
          <a
            href="#past"
            className={`block w-3 h-3 rounded-full ${
              activeSection === "past" ? "bg-red-600" : "bg-white"
            }`}
          />
        </li>
      </ul>
    </motion.nav>
  );
};
export default FloatingNav;