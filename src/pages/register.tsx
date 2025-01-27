import React from "react";
import { Mona_Sans } from "next/font/google";
import Ticket from "@/components/Ticket/Ticket";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScratchToReveal } from "@/components/ui/scratch-to-reveal";

const mona = Mona_Sans({
  subsets: ["latin"],
});

const Register: React.FC = () => {
  const openTicketForm = () => {
    alert("Ticket purchase form will open here!"); // Replace with actual form handling logic
  };

  const handleComplete = () => {};
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className={`${mona.className}`}>
      {/* Ticket Section */}
      <Ticket />

      {/* VIP Ticket Section */}
      <section className="relative w-full h-[250vh] md:h-screen grid grid-cols-1 md:grid-cols-2 py-8 px-4 mt-18 bg-gradient-to-br from-cyan-700 via-black to-cyan-800">
        {/* Left Column - Horizontal Split for Ticket Images */}
        <motion.div
          className="flex flex-col h-full space-y-4 px-4 md:flex-row md:space-y-0 md:space-x-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div
            className="bg-cover bg-center w-full h-[70vh] md:w-1/2 md:h-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url('/images/VIP_front.png')`,
            }}
          />
          <div
            className="bg-cover bg-center w-full h-[80vh] md:w-1/2 md:h-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url('/images/VIP_Back.png')`,
            }}
          />
        </motion.div>

        {/* Right Column - Text Section */}
        <motion.div
          className="flex items-center justify-center bg-black/70 text-white p-8 rounded-lg shadow-lg h-[90vh] md:h-[95vh]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-lg space-y-6">
            <h1 className="text-4xl font-bold mb-4 text-center text-cyan-300">
              VIP Ticket Perks
            </h1>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 text-xl">✔</span>Priority entry
                to the event, avoiding general admission queues.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 text-xl">✔</span> Premium
                Seating, reserved seating in the VIP section, offering the best
                views of the stage.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 text-xl">✔</span>Premium event
                kit with exclusive TEDx merchandise (e.g., tote bag, premium
                notebook, pen, and badge).
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 text-xl">✔</span>Opportunity to
                meet and take photos with speakers or performers (if permitted).
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 text-xl">✔</span>
                Complimentary light refreshments/snacks during breaks.
              </li>
            </ul>
            <div className="flex justify-center mt-6">
              <p className="text-2xl text-center text-cyan-400 mb-2 whitespace-nowrap mr-4 mt-6">
                Get your tickets @
              </p>

              <ScratchToReveal
                width={250}
                height={80}
                minScratchPercentage={70}
                className="flex items-center justify-center overflow-hidden rounded-2xl"
                onComplete={handleComplete}
                gradientColors={["#007595", "#00B8DB", "#ffffff"]}
              >
                <p className="text-7xl text-white font-bold">2199/-</p>
              </ScratchToReveal>
            </div>
            <div className="flex justify-center mt-16">
              <Button
                onClick={openTicketForm}
                className="bg-cyan-600 hover:bg-cyan-700 text-black font-bold px-8 py-8 rounded-lg shadow-md text-lg"
              >
                Buy Tickets
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* General Ticket Section */}
      <section className="relative w-full h-[250vh] md:h-screen grid grid-cols-1 md:grid-cols-2 py-8 px-4 bg-gradient-to-br from-red-700 via-black to-red-800">
        {/* Left Column - Text Section */}
        <motion.div
          className="flex items-center justify-center bg-black/70 text-white p-8 rounded-lg shadow-lg h-[90vh] md:h-[95vh]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-lg space-y-6">
            <h1 className="text-4xl font-bold mb-4 text-center text-red-300">
              Attendee Ticket Perks
            </h1>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-red-400 text-xl">✔</span> Access to the
                main event, including speaker sessions and general activities.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400 text-xl">✔</span> Basic event kit
                (e.g., event schedule, pen, and notebook).
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400 text-xl">✔</span> Access to
                general seating, available on a first-come, first-served basis.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400 text-xl">✔</span> Participate in
                open networking sessions with other attendees.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400 text-xl">✔</span> Complimentary
                light refreshments/snacks during breaks.
              </li>
            </ul>
            {/* <div className="flex justify-center mt-8">
              <p className="text-3xl text-center text-red-400 font-bold animate-pulse">
                🔥Early Bird Offer!🔥
              </p>
            </div> */}
            <div className="flex justify-center mt-6">
              <p className="text-2xl text-center text-red-400 mb-2 whitespace-nowrap mr-4 mt-6">
                Get your tickets @
              </p>

              <ScratchToReveal
                width={250}
                height={80}
                minScratchPercentage={70}
                className="flex items-center justify-center overflow-hidden rounded-2xl"
                onComplete={handleComplete}
                gradientColors={["#C10007", "#FB2C36", "#ffffff"]}
              >
                <p className="text-7xl text-white font-bold">699/-</p>
              </ScratchToReveal>
            </div>
            <div className="flex justify-center mt-16">
              <Button
                onClick={openTicketForm}
                className="bg-red-500 hover:bg-red-600 text-black font-bold px-8 py-8 rounded-lg shadow-md text-lg"
              >
                Buy Tickets
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Images */}
        <motion.div
          className="flex flex-col md:flex-row h-full space-y-4 md:space-y-0 md:space-x-4 px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div
            className="bg-cover bg-center w-full h-[70vh] md:h-[95vh] md:w-1/2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url('/images/Front.png')`,
            }}
          />
          <div
            className="bg-cover bg-center w-full h-[80vh] md:h-[95vh] md:w-1/2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url('/images/Back.png')`,
            }}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Register;
