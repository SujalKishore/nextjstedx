import React, { useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EventCard from "@/components/EventCard/EventCard";
import AnimatedBackground from "@/components/AnimatedBackground/AnimatedBackground";
import MorphingText from "@/components/ui/morphing-text";

const texts = [
  "Adventure Day",
  "Beyond the Frame",
  "Trick or Terror",
  "S.Y.M.P",
];

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  images: string[];
  status: "upcoming" | "past";
}

const events: Event[] = [
  {
    id: "Main Day",
    title: "TEDxNIITUniversity 2025",
    date: "2025-03-09",
    time: "9:00 - 5:30",
    location: "Auditorium",
    description:
      "The main event where the speakers will share their ideas worth spreading.",
    images: [],
    status: "past",
  },
  {
    id: "event2",
    title: "Adventure Day",
    date: "2025-02-16",
    time: "Entire Day",
    location: "Bowl Area",
    description:
      "Event where all the volunteers have fun with diverse games and activities.",
    images: ["/bulletin/ad3.jpg", "/bulletin/ad2.jpg", "/bulletin/ad1.jpg"],
    status: "past",
  },
  {
    id: "Panel Reveal",
    title: "Echoes of the Hourglass: Perspectives Unveiling",
    date: "2025-01-28",
    time: "18:30 - 20:00",
    location: "Auditorium",
    description:
      "Join us for the grand reveal of the panelists for the main event.",
    images: [
      "/bulletin/panel (1).jpg",
      "/bulletin/panel (2).jpg",
      "/bulletin/panel (3).jpg",
      "/bulletin/panel (4).jpg",
    ],
    status: "past",
  },
  {
    id: "event5",
    title: "Say.Your.Mind.People",
    date: "2024-11-21",
    time: "18:30 - 20:00",
    location: "Auditorium",
    description: "Awareness session on the importance of mental health.",
    images: ["/bulletin/symp1.png", "/bulletin/symp2.png"],
    status: "past",
  },
  {
    id: "event4",
    title: "Trick or Terror",
    date: "2024-10-24",
    time: "19:00 - 21:00",
    location: "Amphitheatre-1",
    description: "A Halloween-themed event to celebrate the spooky season.",
    images: ["/bulletin/tot1.png", "/bulletin/tot2.png"],
    status: "past",
  },
  {
    id: "event3",
    title: "Beyond the Frame",
    date: "2024-09-02",
    time: "18:30 - 21:00",
    location: "Auditorium",
    description: "The theme reveal of the 8th edition of TEDxNIITUniversity.",
    images: [
      "/bulletin/pan1.jpg",
      "/bulletin/pan2.jpg",
      "/bulletin/pan3.jpg",
      "/bulletin/pan4.jpg",
    ],
    status: "past",
  },
];

const PreEventsPage: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const [upcomingRef, upcomingInView] = useInView({ threshold: 0.5 });
  const [pastRef, pastInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (upcomingInView || pastInView) {
      // Handle any side effect for section changes, if needed
    }
  }, [upcomingInView, pastInView]);

  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "past");

  return (
    <div className="min-h-screen bg-black text-white relative">
      <section className="relative h-[50vh] md:h-[100vh] overflow-hidden flex flex-col items-center justify-center z-20 text-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatedBackground />
        </div>
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: y1,
          }}
        />
        <div className="relative z-20 text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pre<span className="text-red-600"> Events</span>
          </motion.h1>
          <motion.div
            className="text-white"
            style={{ marginTop: "20px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <MorphingText texts={texts} className="inline-block" />
          </motion.div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16 z-10" id="events">
        <section ref={upcomingRef} className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <p className="text-gray-400 text-center text-xl">Stay tuned for TEDx'26!!</p>
            )}
          </div>
        </section>
        <section ref={pastRef}>
          <h2 className="text-3xl font-semibold mb-8">Past Events</h2>
          <div className="space-y-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PreEventsPage;
