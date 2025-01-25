import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImmersiveForm } from "@/components/ImmersiveForm/ImmersiveForm";

export default function SponsorshipPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-99">
          <video autoPlay loop muted className="object-cover w-full h-full">
            <source src="/videos/sponsorhero.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-6xl font-bold mb-6"
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
              >
                <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/90 text-white text-lg px-8 py-3">
                  Explore Our Impact
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Alpine Gear Co.", years: "2021-2023" },
              { name: "EcoTrek Adventures", years: "2020-2023" },
              { name: "Mountain Solutions", years: "2019-2023" },
              { name: "Nature First", years: "2022-2023" },
              { name: "Summit Technologies", years: "2021-2023" },
              { name: "Green Path Initiative", years: "2020-2023" },
              { name: "Adventure Dynamics", years: "2019-2023" },
              { name: "Sustainable Paths", years: "2022-2023" },
            ].map((sponsor, index) => (
              <div
                key={index}
                className="group relative bg-black/20 border border-[#FF3A3A]/10 rounded-lg p-6 hover:border-[#FF3A3A]/50 transition-all hover:scale-105"
              >
                <div className="aspect-square relative mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain p-4 filter grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">{sponsor.name}</h3>
                  <p className="text-sm text-[#FF3A3A]">{sponsor.years}</p>
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
    <div className="mb-12 relative">
      <p className="text-2xl font-bold mb-4">Featured Sponsor</p>
      <div className="relative overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSponsor}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video"
          >
            <Image
              src={sponsors[currentSponsor].image}
              alt={sponsors[currentSponsor].name}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {sponsors[currentSponsor].name}
                </h3>
                <p className="text-lg text-gray-200">
                  {sponsors[currentSponsor].description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSponsor}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSponsor}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
