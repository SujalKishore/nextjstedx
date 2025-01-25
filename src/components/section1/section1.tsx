"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function TalksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center overflow-hidden snap-start relative"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=TEDx+Talks+Background"
          alt="TEDx Talks Background"
          fill
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="relative z-10 text-center space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]) }}
        >
          Inspiring Talks
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl text-gray-300"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        >
          From Global Thought Leaders
        </motion.p>
      </motion.div>
    </section>
  );
}
