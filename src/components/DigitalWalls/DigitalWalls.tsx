import React, { useEffect, useState } from "react";

const DigitalWalls: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position on scroll
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to calculate parallax effect based on scroll
  const getParallaxStyle = (offset: number) => {
    const movement = scrollPosition * -offset; // Negative movement for upward direction
    return { transform: `translateY(${movement}px)` };
  };

  return (
    <div className="text-white bg-black mt-96">
      {/* Main Content */}
      <main className="space-y-8">
        {/* Vienna Section */}
        <section id="vienna" className="relative min-h-screen mb-8">
          <header
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lonelyplanetimages.imgix.net/mastheads/stock-photo-st-stephens-church-112868985.jpg?sharp=10&w=2000')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            <h1
              className="absolute top-20 left-8 z-10 text-5xl font-bold"
              style={getParallaxStyle(0.05)} // Reduced offset for slower effect
            >
              Vienna
            </h1>
            <p
              className="absolute top-36 left-8 z-10 text-lg"
              style={getParallaxStyle(0.02)} // Reduced offset for slower effect
            >
              48.21°N, 16.36°E
            </p>

            {/* Smaller Cards with Parallax Effect */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-5/6 grid grid-cols-3 gap-4">
              <div
                className="bg-gray-800 p-4 rounded h-40 transform hover:scale-105 transition duration-300"
                style={getParallaxStyle(0.02)} // Smaller movement for the first card
              >
                <p>
                  <span className="text-2xl">27°C</span>
                  <br />
                  Cloudy
                </p>
              </div>
              <div
                className="bg-gray-800 rounded h-40 col-span-2 transform hover:scale-105 transition duration-300"
                style={getParallaxStyle(0.05)} // Slightly more movement for the second card
              >
                <img
                  src="https://source.unsplash.com/600x400/?nature"
                  alt="Nature"
                  className="rounded h-full object-cover w-full"
                />
              </div>
            </div>
          </header>
        </section>

        {/* Lisbon Section */}
        <section id="lisbon" className="relative min-h-screen mb-8">
          <header
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lonelyplanetimages.imgix.net/mastheads/54989636.jpg?sharp=10&w=2000')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            <h1
              className="absolute top-20 left-8 z-10 text-5xl font-bold mt-10"
              style={getParallaxStyle(0.05)} // Reduced offset for slower effect
            >
              Lisbon
            </h1>
            <p
              className="absolute top-36 left-8 z-10 text-lg"
              style={getParallaxStyle(0.02)} // Reduced offset for slower effect
            >
              38.72°N, 9.14°W
            </p>

            {/* Smaller Cards with Parallax Effect */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-5/6 grid grid-cols-3 gap-4">
              <div
                className="bg-gray-800 p-4 rounded h-40 transform hover:scale-105 transition duration-300"
                style={getParallaxStyle(0.02)} // Smaller movement for the first card
              >
                <p>
                  <span className="text-2xl">22°C</span>
                  <br />
                  Sunny
                </p>
              </div>
              <div
                className="bg-gray-800 rounded h-40 col-span-2 transform hover:scale-105 transition duration-300"
                style={getParallaxStyle(0.05)} // Slightly more movement for the second card
              >
                <img
                  src="https://source.unsplash.com/600x400/?ocean"
                  alt="Ocean"
                  className="rounded h-full object-cover w-full"
                />
              </div>
            </div>
          </header>
        </section>

        {/* New York Section */}
        <section id="newyork" className="relative min-h-screen mb-8">
          <header
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&w=2000')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            <h1
              className="absolute top-20 left-8 z-10 text-5xl font-bold mt-20"
              style={getParallaxStyle(0.05)} // Reduced offset for slower effect
            >
              New York
            </h1>
            <p
              className="absolute top-36 left-8 z-10 text-lg"
              style={getParallaxStyle(0.02)} // Reduced offset for slower effect
            >
              40.71°N, 74.01°W
            </p>

            {/* Smaller Cards with Parallax Effect */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-5/6 grid grid-cols-3 gap-4">
              <div
                className="bg-gray-800 p-4 rounded h-40 transform hover:scale-105 transition duration-300"
                style={getParallaxStyle(0.02)} // Smaller movement for the first card
              >
                <p>
                  <span className="text-2xl">18°C</span>
                  <br />
                  Rainy
                </p>
              </div>
              <div
                className="bg-gray-800 rounded h-40 col-span-2 transform hover:scale-105 transition duration-300"
                style={getParallaxStyle(0.05)} // Slightly more movement for the second card
              >
                <img
                  src="https://source.unsplash.com/600x400/?cityscape"
                  alt="Cityscape"
                  className="rounded h-full object-cover w-full"
                />
              </div>
            </div>
          </header>
        </section>
      </main>
    </div>
  );
};

export default DigitalWalls;
