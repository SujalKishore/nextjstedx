import React, { useEffect, useState } from "react";
import Image from "next/image";

const DigitalWalls: React.FC = () => {
  const [activeSection, setActiveSection] = useState("Vienna");

  const sections = [
    { id: "vienna", title: "Vienna", coordinates: "48.21°N, 16.36°E" },
    { id: "lisbon", title: "Lisbon", coordinates: "38.72°N, 9.14°W" },
    { id: "newyork", title: "New York", coordinates: "40.71°N, 74.01°W" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left Fixed Section */}
      <div className="w-2/5 bg-black text-white flex flex-col justify-start p-8 fixed top-0 h-screen overflow-y-scroll mt-200">
        <div className="sticky top-0">
          <h1 className="text-5xl font-bold mb-4 transition-opacity duration-500">
            {sections.find((s) => s.id === activeSection)?.title}
          </h1>
          <p className="text-lg transition-opacity duration-500">
            {sections.find((s) => s.id === activeSection)?.coordinates}
          </p>
        </div>
      </div>

      {/* Right Scrollable Section */}
      <div className="w-3/5 ml-auto overflow-y-scroll">
        <main>
          {/* Vienna Section */}
          <section
            id="vienna"
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lonelyplanetimages.imgix.net/mastheads/stock-photo-st-stephens-church-112868985.jpg?sharp=10&w=2000')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-5/6 grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded h-40 transform hover:scale-105 transition duration-300">
                <p>
                  <span className="text-2xl">27°C</span>
                  <br />
                  Cloudy
                </p>
              </div>
              <div className="bg-gray-800 rounded h-40 col-span-2 transform hover:scale-105 transition duration-300">
                <Image
                  src="/images/sponsor.jpg"
                  alt="Nature"
                  className="rounded object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </section>

          {/* Lisbon Section */}
          <section
            id="lisbon"
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lonelyplanetimages.imgix.net/mastheads/54989636.jpg?sharp=10&w=2000')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-5/6 grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded h-40 transform hover:scale-105 transition duration-300">
                <p>
                  <span className="text-2xl">22°C</span>
                  <br />
                  Sunny
                </p>
              </div>
              <div className="bg-gray-800 rounded h-40 col-span-2 transform hover:scale-105 transition duration-300">
                <Image
                  src="/images/sponsorhero.jpg"
                  alt="Ocean"
                  className="rounded object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </section>

          {/* New York Section */}
          <section
            id="newyork"
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&w=2000')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-5/6 grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded h-40 transform hover:scale-105 transition duration-300">
                <p>
                  <span className="text-2xl">18°C</span>
                  <br />
                  Rainy
                </p>
              </div>
              <div className="bg-gray-800 rounded h-40 col-span-2 transform hover:scale-105 transition duration-300">
                <Image
                  src="/images/sponsor.jpg"
                  alt="Cityscape"
                  className="rounded object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DigitalWalls;
