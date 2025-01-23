"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { YearSelector } from "@/components/YearSelector/YearSelector";
import { ThemeImage } from "@/components/ThemeImage/ThemeImage";
import { Description } from "@/components/desc/desc";
import { SpeakersList } from "@/components/SpeakersList/SpeakersList";
import TopBanner from "@/components/XHero/XHero";
import dynamic from "next/dynamic";
import Carousel from "@/components/Carousel/Carousel";
import { FC } from "react";

// Sample data for each year
const yearContent: {
  [key: number]: {
    theme: string;
    description: string;
    themeImage: string;
    speakers: Array<{
      name: string;
      topic: string;
      image: string;
      socialLinks: {
        linkedin?: string;
        twitter?: string;
      };
      tedTalkUrl: string;
    }>;
    gallery: Array<string>;
  };
} = {
  2018: {
    theme: "Ignite",
    description:
      "TEDxYouth@XYZ 2018 focused on igniting passion and sparking change in our community.",
    themeImage: "/themes/2018-ignite.jpg",
    speakers: [
      {
        name: "John Doe",
        topic: "The Future of AI",
        image: "/speakers/2018-john-doe.jpg",
        socialLinks: {
          linkedin: "https://linkedin.com/in/johndoe",
          twitter: "https://twitter.com/johndoe",
        },
        tedTalkUrl: "https://www.ted.com/talks/john_doe_the_future_of_ai",
      },
      {
        name: "Jane Smith",
        topic: "Sustainable Living",
        image: "/speakers/2018-jane-smith.jpg",
        socialLinks: {
          linkedin: "https://linkedin.com/in/janesmith",
        },
        tedTalkUrl: "https://www.ted.com/talks/jane_smith_sustainable_living",
      },
    ],
    gallery: [
      "/gallery/2018-1.jpg",
      "/gallery/2018-2.jpg",
      "/gallery/2018-3.jpg",
    ],
  },
  2019: {
    theme: "Breakthrough",
    description:
      "In 2019, TEDxYouth@XYZ explored groundbreaking ideas that push boundaries.",
    themeImage: "/themes/2019-breakthrough.jpg",
    speakers: [
      {
        name: "Alice Johnson",
        topic: "Gene Editing Ethics",
        image: "/speakers/2019-alice-johnson.jpg",
        socialLinks: {
          linkedin: "https://linkedin.com/in/alicejohnson",
          twitter: "https://twitter.com/alicejohnson",
        },
        tedTalkUrl:
          "https://www.ted.com/talks/alice_johnson_gene_editing_ethics",
      },
      {
        name: "Bob Williams",
        topic: "Urban Farming Revolution",
        image: "/speakers/2019-bob-williams.jpg",
        socialLinks: {
          twitter: "https://twitter.com/bobwilliams",
        },
        tedTalkUrl:
          "https://www.ted.com/talks/bob_williams_urban_farming_revolution",
      },
    ],
    gallery: [
      "/gallery/2019-1.jpg",
      "/gallery/2019-2.jpg",
      "/gallery/2019-3.jpg",
    ],
  },
  2020: {
    theme: "Resilience",
    description:
      "TEDxYouth@XYZ 2020 celebrated human resilience in the face of global challenges.",
    themeImage: "/themes/2020-resilience.jpg",
    speakers: [
      {
        name: "Eva Chen",
        topic: "Digital Education Revolution",
        image: "/speakers/2020-eva-chen.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/eva_chen_digital_education_revolution",
      },
      {
        name: "Michael Brown",
        topic: "Mental Health in Crisis",
        image: "/speakers/2020-michael-brown.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/michael_brown_mental_health_in_crisis",
      },
    ],
    gallery: [
      "/gallery/2020-1.jpg",
      "/gallery/2020-2.jpg",
      "/gallery/2020-3.jpg",
    ],
  },
  2021: {
    theme: "Reimagine",
    description:
      "In 2021, TEDxYouth@XYZ invited speakers to reimagine our world post-pandemic.",
    themeImage: "/themes/2021-reimagine.jpg",
    speakers: [
      {
        name: "Sarah Lee",
        topic: "The Future of Work",
        image: "/speakers/2021-sarah-lee.jpg",
        socialLinks: {},
        tedTalkUrl: "https://www.ted.com/talks/sarah_lee_the_future_of_work",
      },
      {
        name: "David Kim",
        topic: "Sustainable Cities",
        image: "/speakers/2021-david-kim.jpg",
        socialLinks: {},
        tedTalkUrl: "https://www.ted.com/talks/david_kim_sustainable_cities",
      },
    ],
    gallery: [
      "/gallery/2021-1.jpg",
      "/gallery/2021-2.jpg",
      "/gallery/2021-3.jpg",
    ],
  },
  2022: {
    theme: "Horizons",
    description:
      "TEDxYouth@XYZ 2022 explored new horizons in technology, society, and human potential.",
    themeImage: "/themes/2022-horizons.jpg",
    speakers: [
      {
        name: "Emily Watson",
        topic: "Space Exploration and Humanity",
        image: "/speakers/2022-emily-watson.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/emily_watson_space_exploration_and_humanity",
      },
      {
        name: "Alex Tran",
        topic: "Blockchain and Social Good",
        image: "/speakers/2022-alex-tran.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/alex_tran_blockchain_and_social_good",
      },
    ],
    gallery: [
      "/gallery/2022-1.jpg",
      "/gallery/2022-2.jpg",
      "/gallery/2022-3.jpg",
    ],
  },
  2023: {
    theme: "T.H.I.N.C",
    description:
      "In 2023, TEDxYouth@XYZ focused on the power of collaboration and interdisciplinary approaches.",
    themeImage: "/themes/thinc.png",
    speakers: [
      {
        name: "Olivia Martinez",
        topic: "Biomimicry in Design",
        image: "",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/olivia_martinez_biomimicry_in_design",
      },
      {
        name: "Ryan Patel",
        topic: "AI and Human Creativity",
        image: "/speakers/2023-ryan-patel.jpg",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
    ],
    gallery: [
      "/gallery/2023-1.jpg",
      "/gallery/2023-2.jpg",
      "/gallery/2023-3.jpg",
    ],
  },
  2024: {
    theme: "Saptaranga",
    description:
      "In 2023, TEDxYouth@XYZ focused on the power of collaboration and interdisciplinary approaches.",
    themeImage: "/themes/saptaranga.png",
    speakers: [
      {
        name: "Nikita Sharma",
        topic: "Biomimicry in Design",
        image: "/prev-speakers/nikita24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/olivia_martinez_biomimicry_in_design",
      },
      {
        name: "Vijendra Chauhan",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/vijendra24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
      {
        name: "Gaurav Juyal",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/gaurav24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
      {
        name: "Siddharth Jain",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/siddharth24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
      {
        name: "Vijendra Chauhan",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/vijendra24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
      {
        name: "Vijendra Chauhan",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/vijendra24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
      {
        name: "Vijendra Chauhan",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/vijendra24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
      {
        name: "Vijendra Chauhan",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/vijendra24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
      {
        name: "Vijendra Chauhan",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/vijendra24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
      {
        name: "Vijendra Chauhan",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/vijendra24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
      {
        name: "Vijendra Chauhan",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/vijendra24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
      {
        name: "Vijendra Chauhan",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/vijendra24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
      {
        name: "Vijendra Chauhan",
        topic: "AI and Human Creativity",
        image: "/prev-speakers/vijendra24.png",
        socialLinks: {},
        tedTalkUrl:
          "https://www.ted.com/talks/ryan_patel_ai_and_human_creativity",
      },
    ],
    gallery: [
      "/gallery/2023-1.jpg",
      "/gallery/2023-2.jpg",
      "/gallery/2023-3.jpg",
    ],
  },
};
const GalleryApp = dynamic(
  () => import("@/components/App").then((mod) => mod.default),
  {
    ssr: false, // Optional: Set to false if you want to disable server-side rendering for this component
  }
);
export default function RewindPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [isLoading, setIsLoading] = useState(true);
  const [isGalleryFocused, setIsGalleryFocused] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500); // Simulating content load
  }, [selectedYear]);

  useEffect(() => {
    if (isGalleryFocused) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isGalleryFocused]);

  const content = yearContent[selectedYear];

  if (!content) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-2xl">No content available for the selected year.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <TopBanner />

      {/* Year Selector */}
      <section className="bg-[#1A0000] py-4 sticky top-0 z-20">
        <div className="container mx-auto">
          <YearSelector
            onSelectYear={setSelectedYear}
            selectedYear={selectedYear}
          />
        </div>
      </section>

      {/* Content Section */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center h-[50vh]"
          >
            <div className="w-16 h-16 border-4 border-[#FF3A3A] border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        ) : (
          <motion.section
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="py-20 bg-gradient-to-b from-black to-[#1A0000]"
          >
            <div className="container mx-auto px-4">
              <ThemeImage theme={content.theme} imageSrc={content.themeImage} />
              <Description description={content.description} />
              <SpeakersList speakers={content.speakers} />
              <Carousel />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
