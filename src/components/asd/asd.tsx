"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Placeholder components for the scrollable sections with the new layout
const Component1 = () => (
  <div className="w-full ml-auto overflow-y-scroll">
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
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-3/4 grid grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded h-52 transform hover:scale-105 transition duration-300">
            <p>
              <span className="text-3xl">27°C</span>
              <br />
              Cloudy
            </p>
          </div>
          <div className="bg-gray-800 rounded h-52 col-span-2 transform hover:scale-105 transition duration-300">
            <Image
              src="/images/sponsor.jpg"
              alt="Nature"
              className="rounded object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>
    </main>
  </div>
);

const Component2 = () => (
  <div className="w-full ml-auto overflow-y-scroll">
    <main>
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
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-3/4 grid grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded h-52 transform hover:scale-105 transition duration-300">
            <p>
              <span className="text-3xl">22°C</span>
              <br />
              Sunny
            </p>
          </div>
          <div className="bg-gray-800 rounded h-52 col-span-2 transform hover:scale-105 transition duration-300">
            <Image
              src="/images/sponsorhero.jpg"
              alt="Ocean"
              className="rounded object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>
    </main>
  </div>
);

const Component3 = () => (
  <div className="w-full ml-auto overflow-y-scroll">
    <main>
      <section
        id="newyork"
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-3/4 grid grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded h-52 transform hover:scale-105 transition duration-300">
            <p>
              <span className="text-3xl">18°C</span>
              <br />
              Rainy
            </p>
          </div>
          <div className="bg-gray-800 rounded h-52 col-span-2 transform hover:scale-105 transition duration-300">
            <Image
              src="/images/sponsor.jpg"
              alt="Cityscape"
              className="rounded object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default function StickyScrollGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const refs = observerRefs.current; // Stable reference
    const sections = [
      {
        title: "Custom Title for Section 1",
        description: "Description for Section 1. You can change this.",
      },
      {
        title: "Custom Title for Section 2",
        description: "Description for Section 2. You can change this too.",
      },
      {
        title: "Custom Title for Section 3",
        description: "Description for Section 3. And this as well.",
      },
    ];

    const intersectionObservers = sections.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.5 }
      );
    });

    refs.forEach((ref, index) => {
      if (ref) intersectionObservers[index].observe(ref);
    });

    return () => {
      refs.forEach((ref, index) => {
        if (ref) intersectionObservers[index].unobserve(ref);
      });
    };
  }, []);

  const components = [Component1, Component2, Component3];
  return (
    <div className="flex h-screen">
      <div className="w-2/3 overflow-y-auto">
        {components.map((Component, index) => (
          <div
            key={`section-${index}`} // Proper key
            ref={(el) => {
              observerRefs.current[index] = el;
            }}
            className="h-screen flex items-center justify-center"
          >
            <div className="w-full max-w-16xl flex flex-col items-center justify-center space-y-10">
              <Component />
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/3 sticky top-0 flex items-center justify-center bg-gray-100/70 p-10 text-black">
        <div className="max-w-md">
          <h2 className="text-5xl font-bold mb-6">{`Section ${activeIndex + 1}: ${
            [
              "Custom Title for Section 1",
              "Custom Title for Section 2",
              "Custom Title for Section 3",
            ][activeIndex]
          }`}</h2>
          <p className="text-xl">
            {
              [
                "Description for Section 1. You can change this.",
                "Description for Section 2. You can change this too.",
                "Description for Section 3. And this as well.",
              ][activeIndex]
            }
          </p>
        </div>
      </div>
    </div>
  );
}
