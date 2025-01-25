import React, { useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EventCard from "@/components/EventCard/EventCard";
import AnimatedBackground from "@/components/AnimatedBackground/AnimatedBackground";
import MorphingText from "@/components/ui/morphing-text";

const texts = ["Adventure Day", "Beyond the Frame", "Trick or Terror", "S.Y.M.P"];

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
    id: "Panel Reveal",
    title: "Panel Reveal",
    date: "2025-01-29",
    time: "18:00 - 19:00",
    location: "Auditorium",
    description: "Lorem ipsum dolor sit amet, consectetur adipis",
    images: ["/pre-events/workshop1.jpg", "/pre-events/workshop2.jpg"],
    status: "upcoming",
  },
  {
    id: "event2",
    title: "TEDx Salon: AI and the Future of Work",
    date: "2023-09-05",
    time: "18:30 - 21:00",
    location: "Tech Hub Conference Center",
    description:
      "Explore the impact of artificial intelligence on the future of work. Engage in thought-provoking discussions with experts in AI and workforce development.",
    images: ["/pre-events/salon1.jpg", "/pre-events/salon2.jpg"],
    status: "upcoming",
  },
  {
    id: "event3",
    title: "TEDx AI and the Future of Work",
    date: "2023-09-05",
    time: "18:30 - 21:00",
    location: "Tech Hub Conference Center",
    description:
      "Explore the impact of artificial intelligence on the future of work. Engage in thought-provoking discussions with experts in AI and workforce development.",
    images: ["/pre-events/salon1.jpg", "/pre-events/salon3.jpg"],
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
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
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
