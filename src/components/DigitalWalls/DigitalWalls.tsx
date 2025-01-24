import React, { useEffect, useState } from "react";
import gsap from "gsap";

const DigitalWalls: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll position
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // GSAP Animations
    const sections = document.querySelectorAll(".animated-section");
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getParallaxStyle = (offset: number) => ({
    transform: `translateY(${scrollPosition * -offset}px)`,
  });

  return (
    <div className="text-white bg-black mt-96">
      {/* Main Content */}
      <main className="space-y-8">
        {/* Vienna Section */}
        <section
          id="vienna"
          className="relative min-h-screen mb-8 animated-section"
        >
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
              style={getParallaxStyle(0.05)}
            >
              Vienna
            </h1>
            <p
              className="absolute top-36 left-8 z-10 text-lg"
              style={getParallaxStyle(0.02)}
            >
              48.21°N, 16.36°E
            </p>
          </header>
        </section>

        {/* Lisbon Section */}
        <section
          id="lisbon"
          className="relative min-h-screen mb-8 animated-section"
        >
          <header
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lonelyplanetimages.imgix.net/mastheads/54989636.jpg?sharp=10&w=2000')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            <h1
              className="absolute top-20 left-8 z-10 text-5xl font-bold"
              style={getParallaxStyle(0.05)}
            >
              Lisbon
            </h1>
            <p
              className="absolute top-36 left-8 z-10 text-lg"
              style={getParallaxStyle(0.02)}
            >
              38.72°N, 9.14°W
            </p>
          </header>
        </section>

        {/* New York Section */}
        <section
          id="newyork"
          className="relative min-h-screen mb-8 animated-section"
        >
          <header
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&w=2000')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            <h1
              className="absolute top-20 left-8 z-10 text-5xl font-bold"
              style={getParallaxStyle(0.05)}
            >
              New York
            </h1>
            <p
              className="absolute top-36 left-8 z-10 text-lg"
              style={getParallaxStyle(0.02)}
            >
              40.71°N, 74.01°W
            </p>
          </header>
        </section>
      </main>
    </div>
  );
};

export default DigitalWalls;
