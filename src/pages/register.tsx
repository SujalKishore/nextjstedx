import React, { useState } from "react";
import { Mona_Sans } from "next/font/google";
import Ticket from "@/components/Ticket/Ticket";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScratchToReveal } from "@/components/ui/scratch-to-reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const mona = Mona_Sans({
  subsets: ["latin"],
});

const handleComplete = () => {};
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Register: React.FC = () => {
  const [showVIPForm, setShowVIPForm] = useState(false);
  const [showGeneralForm, setShowGeneralForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone field
    ticketType: "",
    bundle: "Single", // Default to single ticket
  });

  const handleSubmit = async (ticketType: string) => {
    try {
      // Set the ticket type
      const data = {
        ...formData,
        ticketType,
        bundle: ticketType === "VIP" ? "Single" : formData.bundle,
      };

      // Send data to SheetDB
      const response = await fetch("https://sheetdb.io/api/v1/rc3axzjqdcdwy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        alert("Your ticket has been successfully booked!");
        setShowVIPForm(false);
        setShowGeneralForm(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          ticketType: "",
          bundle: "",
        }); // Reset form
      } else {
        alert("Failed to book ticket. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className={`${mona.className}`}>
      {/* Ticket Section */}
      <Ticket />

      {/* VIP Ticket Section */}
      <section className="relative w-full h-[250vh] md:h-screen grid grid-cols-1 md:grid-cols-2 py-8 px-4 mt-18 bg-gradient-to-br from-cyan-700 via-black to-cyan-800">
        {/* Left Column */}
        <motion.div
          className="flex flex-col h-full space-y-4 px-4 md:flex-row md:space-y-0 md:space-x-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div
            className="bg-cover bg-center w-full h-[70vh] md:w-1/2 md:h-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url('/images/VIP_Front.png')`,
            }}
          />
          <div
            className="bg-cover bg-center w-full h-[80vh] md:w-1/2 md:h-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url('/images/VIP_Back.png')`,
            }}
          />
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="flex items-center justify-center bg-black/70 text-white p-4 md:p-8 rounded-lg shadow-lg h-auto md:h-[95vh]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-lg space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-cyan-300">
              VIP Ticket Perks
            </h1>
            <div className="w-full ">
              <ul className="list-disc list-inside space-y-4 text-sm md:text-lg break-words">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 md:text-xl">✔</span> Priority
                  entry to the event, avoiding general admission queues.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 md:text-xl">✔</span> Premium
                  Seating, reserved seating in the VIP section, offering the
                  best views of the stage.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 md:text-xl">✔</span> Premium
                  event kit with exclusive TEDx merchandise (e.g., tote bag,
                  premium notebook, pen, and badge).
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 md:text-xl">✔</span>{" "}
                  Opportunity to meet and take photos with speakers or
                  performers (if permitted).
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 md:text-xl">✔</span>{" "}
                  Complimentary light refreshments/snacks during breaks.
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
              <p className="text-xl md:text-2xl text-center text-cyan-400 mb-2 whitespace-nowrap">
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
                onClick={() => setShowVIPForm(true)}
                className="bg-cyan-600 hover:bg-cyan-700 text-black font-bold px-8 py-4 md:py-8 rounded-lg shadow-md text-lg"
              >
                Buy VIP Tickets
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* General Ticket Section */}
      <section className="relative w-full h-[250vh] md:h-screen grid grid-cols-1 md:grid-cols-2 py-8 px-4 bg-gradient-to-br from-red-700 via-black to-red-800">
        {/* Left Column */}
        <motion.div
          className="flex items-center justify-center bg-black/70 text-white p-8 rounded-lg shadow-lg h-[90vh] md:h-[95vh]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-lg space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-red-300">
              Attendee Ticket Perks
            </h1>
            <div className="w-full">
              <ul className="list-disc list-inside space-y-4 text-sm md:text-lg break-words">
                <li className="flex items-center gap-2">
                  <span className="text-red-400 md:text-xl">✔</span> Access to
                  the main event, including speaker sessions and general
                  activities.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400 md:text-xl">✔</span> Basic event
                  kit (e.g., event schedule, pen, and notebook).
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400 md:text-xl">✔</span> Access to
                  general seating, available on a first-come, first-served
                  basis.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400 md:text-xl">✔</span> Participate
                  in open networking sessions with other attendees.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400 md:text-xl">✔</span>{" "}
                  Complimentary light refreshments/snacks during breaks.
                </li>
              </ul>
            </div>

            <p className="text-xl md:text-2xl text-center text-red-400 mb-2 whitespace-nowrap">
              Limited Bundle Options: <br />
              <span className="text-white">
                Double - 1299/- <br />
                Triple - 1899/-
              </span>
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
              <p className="text-xl md:text-2xl text-center text-red-400 mb-2 whitespace-nowrap">
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
                onClick={() => setShowGeneralForm(true)}
                className="bg-red-600 hover:bg-red-700 text-black font-bold px-8 py-4 md:py-8 rounded-lg shadow-md text-lg"
              >
                Buy General Tickets
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="flex flex-col md:flex-row h-full space-y-4 md:space-y-0 md:space-x-4 px-4 mt-10 md:mt-0"
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

      <Dialog open={showVIPForm} onOpenChange={setShowVIPForm}>
        <DialogContent className="p-8 bg-transparent overflow-hidden rounded-lg flex justify-center items-center inset-0 z-50 top-1/2 left-1/2">
          <div className="absolute inset-0 bg-cyan-600/30 opacity-30  z-0">
            <span className="absolute top-1/3 left-1/4 text-9xl text-white font-bold rotate-45 opacity-50">
              X
            </span>
          </div>

          <DialogHeader className="relative z-10">
            <DialogTitle className="text-xl md:text-3xl font-bold text-white">
              VIP Ticket Registration
            </DialogTitle>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit("VIP");
            }}
            className="relative z-10 mt-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input-field py-3 px-4 rounded-lg w-full bg-transparent border-2 border-white text-white placeholder:text-white focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="input-field py-3 px-4 rounded-lg w-full bg-transparent border-2 border-white text-white placeholder:text-white focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="input-field py-3 px-4 rounded-lg w-full bg-transparent border-2 border-white text-white placeholder:text-white focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div className="flex justify-center mt-6">
              <Button
                type="submit"
                className="w-full text-lg bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg"
              >
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showGeneralForm} onOpenChange={setShowGeneralForm}>
        <DialogContent className="p-8 bg-transparent overflow-hidden rounded-lg flex justify-center items-center inset-0 z-50 top-1/2 left-1/2 ">
          <div className="absolute inset-0 bg-red-600/30 opacity-30  z-0">
            <span className="absolute top-1/3 left-1/4 text-9xl text-white font-bold rotate-45 opacity-50">
              X
            </span>
          </div>

          <DialogHeader className="relative z-10">
            <DialogTitle className="text-xl md:text-3xl font-bold text-white">
              General Ticket Registration
            </DialogTitle>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit("General");
            }}
            className="relative z-10 mt-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input-field py-3 px-4 rounded-lg w-full bg-transparent border-2 border-white text-white placeholder:text-white focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="input-field py-3 px-4 rounded-lg w-full bg-transparent border-2 border-white text-white placeholder:text-white focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="input-field py-3 px-4 rounded-lg w-full bg-transparent border-2 border-white text-white placeholder:text-white focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label htmlFor="bundle" className="block text-white">
                Select Bundle
              </label>
              <select
                id="bundle"
                value={formData.bundle}
                onChange={(e) =>
                  setFormData({ ...formData, bundle: e.target.value })
                }
                className="input-field py-3 px-4 rounded-lg w-full bg-transparent border-2 border-white text-red-400 focus:ring-2 focus:ring-red-500"
                required
              >
                <option value="Single">Single - 699/-</option>
                <option value="Double">Double - 1299/-</option>
                <option value="Triple">Triple - 1899/-</option>
              </select>
            </div>

            <div className="flex justify-center mt-6">
              <Button
                type="submit"
                className="w-full text-lg bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
              >
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Register;
