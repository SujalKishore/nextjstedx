"use client";
import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TeamMemberX } from "../TeamMemberX/TeamMemberX";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const teamMembers = [
  {
    name: "Shreeya Singh",
    role: "Organizer",
    imgSrc: "/core/IMG_7900.png",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Zain Khan",
    role: "Co-organizer",
    imgSrc: "/core/IMG_7863.png",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Shivanshi Sharma",
    role: "Editorial Curation and Speakers' Experience Core",
    imgSrc: "/core/IMG_7874.png",
    linkedin: "https://linkedin.com/in/alicejohnson",
  },
  {
    name: "Kavneet Kaur",
    role: "Sponsorship and Finance Core",
    imgSrc: "/core/IMG_7931.png",
    linkedin: "https://linkedin.com/in/boblee",
  },
  {
    name: "Divay Gupta",
    role: "Design Core",
    imgSrc: "/core/IMG_7902.png",
    linkedin: "https://linkedin.com/in/charliebrown",
  },
  {
    name: "Koushik Reddy",
    role: "Production Core",
    imgSrc: "/core/IMG_7868.png",
    linkedin: "https://linkedin.com/in/davidwhite",
  },
  {
    name: "Sujal Kishore",
    role: "Tech Core",
    imgSrc: "/core/IMG_7765.png",
    linkedin: "https://linkedin.com/in/evagreen",
  },
  {
    name: "Amy Sony",
    role: "Creative Core",
    imgSrc: "/core/IMG_7847.png",
    linkedin: "https://linkedin.com/in/frankharris",
  },
  {
    name: "Indranil Saha",
    role: "Marketing and Social Media Core",
    imgSrc: "/core/IMG_8772.png",
    linkedin: "https://linkedin.com/in/frankharris",
  },
  {
    name: "Aditi Saini",
    role: "Capture and Post Production Core",
    imgSrc: "/core/IMG_3158.png",
    linkedin: "https://linkedin.com/in/frankharris",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 bg-gradient-to-b from-black to-[#000000] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#FF3A3A]">
            About TED and TEDx
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-black/50 border border-[#FF3A3A]/20 overflow-hidden rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#FF3A3A]">TED</h3>
                <p className="text-white">
                  TED is a nonprofit devoted to spreading ideas, usually in the
                  form of short, powerful talks (18 minutes or less). TED began
                  in 1984 as a conference where Technology, Entertainment and
                  Design converged, and today covers almost all topics — from
                  science to business to global issues.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border border-[#FF3A3A]/20 overflow-hidden rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#FF3A3A]">TEDx</h3>
                <p className="text-white">
                  TEDx are independent TED-like events, which can be organized
                  by anyone who obtains a free license from TED, agreeing to
                  follow certain principles. TEDx events are non-profit but may
                  use an admission fee or commercial sponsorship to cover costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-black to-[#1A0000] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#FF3A3A]">
            Our Event Theme
          </h2>
          <Card className="bg-black/50 border border-[#FF3A3A]/20 overflow-hidden rounded-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative w-full h-80 rounded-lg overflow-hidden md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 rounded-lg" />
                  <Image
                    src="/images/theme.jpeg"
                    alt="Event Theme"
                    layout="fill"
                    objectFit="cover"
                    className="object-center w-full h-full z-0 filter brightness-90 rounded-lg"
                  />
                </div>
                <div className="text-center md:text-left md:order-1">
                  <h3 className="text-3xl font-bold mb-4 text-[#FF3A3A]">
                    The Future of Innovation
                  </h3>
                  <p className="text-lg text-white mb-6">
                    Our TEDx event is themed around innovation — exploring the
                    cutting-edge ideas shaping the future. From technological
                    breakthroughs to groundbreaking concepts in society, we aim
                    to spark creativity and discussion on how we can drive the
                    future forward.
                  </p>
                  <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/90 text-white text-lg px-6 py-3">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"></div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-[#1A0000] to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#FF3A3A]">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative ${
                  index === 8
                    ? "md:col-start-2"
                    : index === 9
                    ? "md:col-start-3"
                    : ""
                }`}
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-transparent mb-4">
                  <div className="absolute inset-0 text-[#FF3A3A]/20 group-hover:text-[#FF3A3A]/30 transition-colors">
                    <TeamMemberX />
                  </div>
                  <div className="absolute inset-0 z-10">
                    <Image
                      src={member.imgSrc}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF3A3A] hover:text-[#FF3A3A]/90 inline-block"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1A0000] to-[#FF3A3A] opacity-50 z-0" />
        <div className="relative container mx-auto px-4 z-10">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Frequently Asked <span className="text-[#FF3A3A]">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#FF3A3A]/20 z-10">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white text-left">
                  What is TEDx and how is it different from TED?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  TEDx events are independently organized TED-style events that
                  bring people together to share ideas worth spreading at the
                  local level. While TED is the parent organization, TEDx events
                  are organized by local communities under a free license from
                  TED.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-white text-left">
                  How can I join the TEDx organizing team?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {`We welcome passionate individuals who want to contribute to
                  spreading ideas in our community. You can apply to join our
                  team by sending your resume and a letter of interest
                  explaining why you'd like to be part of TEDx. We have various
                  roles available throughout the year.`}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-white text-left">
                  What roles are available on the team?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We have diverse roles including event planning, speaker
                  curation, marketing, technical production, volunteer
                  coordination, and sponsorship management. Each role is crucial
                  to creating an impactful TEDx event.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-white text-left">
                  How much time commitment is required?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {`Time commitment varies by role and event phase. Generally,
                  team members commit 5-10 hours per week, with increased
                  involvement closer to the event date. We value flexibility and
                  work with each team member's schedule.`}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-white text-left">
                  Do I need previous experience with TEDx?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {`While previous TEDx experience is valuable, it's not required.
                  We look for individuals who are passionate about ideas, have
                  relevant skills for their role, and are committed to our
                  mission of spreading innovative ideas in the community.`}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-white text-left">
                  How can I get involved without joining the core team?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  There are many ways to get involved! You can volunteer during
                  the event, become a sponsor, nominate speakers, or help
                  promote the event in your network. Each contribution helps
                  make our TEDx event more impactful.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="text-center mt-12 z-10">
            <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/90 text-white text-lg px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />
      </section>
    </main>
  );
}
