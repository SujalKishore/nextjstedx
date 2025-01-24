import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
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

      {/* <section className="py-20 bg-gradient-to-b from-black to-[#1A0000]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#FF3A3A]">
            OUR IMPACT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: "1M+", description: "Trees Planted" },
              { stat: "500K", description: "Youth Educated" },
              { stat: "2000+", description: "Miles of Trail Maintained" },
              { stat: "$10M", description: "Raised for Conservation" },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-black/50 border border-[#FF3A3A]/20 overflow-hidden rounded-lg transform transition-all hover:scale-105 hover:border-[#FF3A3A]"
              >
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-[#FF3A3A] mb-2">
                    {item.stat}
                  </p>
                  <p className="text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Sponsorship Tiers */}
      {/* <section className="py-20 bg-gradient-to-b from-[#1A0000] to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#FF3A3A]">
            JOIN OUR MISSION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Trailblazer", price: "$5,000" },
              { name: "Peak Performer", price: "$10,000" },
              { name: "Summit Seeker", price: "$25,000" },
              { name: "Legacy Leader", price: "$50,000" },
            ].map((tier, index) => (
              <Card
                key={index}
                className="bg-black/50 border border-[#FF3A3A]/20 overflow-hidden rounded-lg transform transition-all hover:scale-105 hover:border-[#FF3A3A]"
              >
                <div className="h-40 bg-gradient-to-br from-[#FF3A3A] to-[#800000] flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-3xl font-bold text-[#FF3A3A] mb-4">
                    {tier.price}
                  </p>
                  <ul className="text-sm mb-6 space-y-2">
                    <li>✓ Exclusive event access</li>
                    <li>✓ Brand visibility</li>
                    <li>✓ Impact reports</li>
                    <li>✓ Custom perks</li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-[#FF3A3A] text-[#FF3A3A] hover:bg-[#FF3A3A] hover:text-white"
                  >
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Impact Section */}
      {/* <section className="relative py-20">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Dramatic nature scene"
          width={1920}
          height={800}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative bg-gradient-to-r from-black to-transparent py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-12">
              FORGE YOUR <span className="text-[#FF3A3A]">LEGACY</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Preserve Pristine Wilderness",
                "Empower Future Explorers",
                "Champion Sustainable Adventure",
              ].map((impact, index) => (
                <div
                  key={index}
                  className="bg-black/70 p-6 rounded-lg border border-[#FF3A3A]/20 transform transition-all hover:scale-105 hover:border-[#FF3A3A]"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF3A3A] to-[#800000] flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{impact}</h3>
                  <p className="text-gray-400">
                    Your sponsorship directly contributes to our mission of
                    preserving natural wonders and inspiring the next generation
                    of responsible adventurers.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Past Sponsors */}
      <section className="py-20 bg-gradient-to-b from-[#1A0000] to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#FF3A3A]">
            OUR ESTEEMED PARTNERS
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Join these visionary brands in our quest to redefine adventure and
            conservation. Together, we're writing the next chapter of
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
          {/* <div className="mt-12 text-center">
            <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/90 text-white">
              Join Our Visionary Circle
            </Button>
          </div> */}
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

  const nextSponsor = () =>
    setCurrentSponsor((prev) => (prev + 1) % sponsors.length);
  const prevSponsor = () =>
    setCurrentSponsor((prev) => (prev - 1 + sponsors.length) % sponsors.length);

  useEffect(() => {
    const timer = setInterval(nextSponsor, 5000);
    return () => clearInterval(timer);
  }, []);

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

function ParallaxMountains() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
      <div className="relative w-full h-full">
        <Image
          src="/images/sponsor.jpg"
          alt="Mountain Background"
          layout="fill"
          objectFit="cover"
          className="parallax"
          style={{ transform: "translateY(0px)" }}
        />
        <Image
          src="/images/sponsor.jpg"
          alt="Mountain Midground"
          layout="fill"
          objectFit="cover"
          className="parallax"
          style={{ transform: "translateY(0px)" }}
        />
        <Image
          src="/images/sponsorhero.jpg"
          alt="Mountain Foreground"
          layout="fill"
          objectFit="cover"
          className="parallax"
          style={{ transform: "translateY(0px)" }}
        />
      </div>
    </div>
  );
}
