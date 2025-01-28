import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImmersiveForm } from "@/components/ImmersiveForm/ImmersiveForm";

export default function SponsorshipPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-screen overflow-hidden">
        {/* Cool Animated Gradient Background */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(circle at center, #000000, #761901, #000000, #000000)",
            backgroundSize: "200% 200%",
            animation: "gradientShift 5s ease infinite",
          }}
        ></div>

        {/* Particle Animation */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-[#E7000B]/80"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${
                  Math.random() * 5 + 5
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-4xl font-bold mb-4 md:mt-10 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                CHAMPIONS OF <span className="text-[#FF3A3A]">ADVENTURE</span>
              </motion.h1>
              <SponsorShowcase />
              <motion.p
                className="text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Discover the visionary partners who fuel our mission to preserve
                nature and inspire adventure.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              ></motion.div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Past Sponsors */}
      <section className="py-20 bg-gradient-to-b from-[#1A0000] to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#FF3A3A]">
            OUR ESTEEMED PARTNERS
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Join these visionary brands in our quest to redefine adventure and
            conservation. Together, we&apos;re writing the next chapter of
            exploration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Rallison", image: "/sponsors/rallison.jpg" },
              { name: "EcoTrek Adventures", image: "/sponsors/ecotrek.jpg" },
              { name: "Mountain Solutions", image: "/sponsors/mountain.jpg" },
              { name: "Nature First", image: "/sponsors/naturefirst.jpg" },
              { name: "Summit Technologies", image: "/sponsors/summit.jpg" },
              {
                name: "Green Path Initiative",
                image: "/sponsors/greenpath.jpg",
              },
              { name: "Adventure Dynamics", image: "/sponsors/adventure.jpg" },
              { name: "Sustainable Paths", image: "/sponsors/sustainable.jpg" },
            ].map((sponsor, index) => (
              <div
                key={index}
                className="group relative bg-black/20 border border-[#FF3A3A]/10 rounded-lg p-6 hover:border-[#FF3A3A]/50 transition-all hover:scale-105"
              >
                <div className="aspect-square relative mb-4 overflow-hidden">
                  <Image
                    src={sponsor.image}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain p-4 filter grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">{sponsor.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ImmersiveForm />
    </main>
  );
}

function SponsorShowcase() {
  const [currentSponsor, setCurrentSponsor] = useState(0);
  const sponsors = [
    {
      name: "Rallison",
      image: "/sponsors/rallison.jpg",
      description: "Empowering adventurers with cutting-edge equipment",
    },
    {
      name: "Servo",
      image: "/sponsors/servo.jpg",
      description: "Pioneering sustainable tourism practices",
    },
  ];

  const nextSponsor = useCallback(() => {
    setCurrentSponsor((prev) => (prev + 1) % sponsors.length);
  }, [sponsors.length]);

  const prevSponsor = useCallback(() => {
    setCurrentSponsor((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  }, [sponsors.length]);

  useEffect(() => {
    const timer = setInterval(nextSponsor, 5000);
    return () => clearInterval(timer);
  }, [nextSponsor]);

  return (
    <div className="mb-12 relative text-center">
      <p className="text-xl font-semibold mb-4 text-[#ff4747]">
        Featured <span className="text-white">Sponsor</span>
      </p>
      <div className="relative overflow-hidden rounded-xl mx-auto shadow-lg border border-gray-700/30 bg-gray-800 w-[90%] sm:w-[500px] h-[200px] sm:h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSponsor}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full"
          >
            <Image
              src={sponsors[currentSponsor].image}
              alt={sponsors[currentSponsor].name}
              fill
              className="rounded-xl object-cover filter brightness-75 hover:brightness-100 transition-all"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-4">
              <h3 className="text-lg font-bold text-white">
                {sponsors[currentSponsor].name}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSponsor}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700/50 text-white p-2 rounded-full hover:bg-gray-700/80 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSponsor}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700/50 text-white p-2 rounded-full hover:bg-gray-700/80 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <p className="text-sm mt-4 text-gray-400">
        {sponsors[currentSponsor].description}
      </p>
    </div>
  );
}
