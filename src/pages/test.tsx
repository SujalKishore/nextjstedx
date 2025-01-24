// pages/test.tsx
import React, { useEffect, useState } from "react";

const TestPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: "section-1",
      title: "Section 1",
      image:
        "https://via.placeholder.com/1920x1080/FF5733/FFFFFF?text=Section+1",
    },
    {
      id: "section-2",
      title: "Section 2",
      image:
        "https://via.placeholder.com/1920x1080/33FF57/FFFFFF?text=Section+2",
    },
    {
      id: "section-3",
      title: "Section 3",
      image:
        "https://via.placeholder.com/1920x1080/3399FF/FFFFFF?text=Section+3",
    },
  ];

  const scrollToSection = (nextSectionIndex: number) => {
    const section = document.getElementById(`section-${nextSectionIndex}`);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setCurrentSection(nextSectionIndex);
  };

  const handleScroll = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      // Scroll Down
      if (currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      }
    } else {
      // Scroll Up
      if (currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="text-white bg-black overflow-hidden">
      <main>
        {sections.map((section, index) => (
          <section
            id={`section-${index}`}
            key={section.id}
            className="w-full h-screen flex items-center justify-center sticky top-0"
            style={{
              backgroundImage: `url(${section.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: currentSection === index ? 10 : 1, // Keep active section on top
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
            <h1 className="relative z-10 text-5xl font-bold">
              {section.title}
            </h1>
          </section>
        ))}
      </main>
    </div>
  );
};

export default TestPage;
