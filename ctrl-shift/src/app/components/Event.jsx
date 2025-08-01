"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import markImg from "../../../public/assets/img/Mark.png";

export default function Event() {
  const events = [
    {
      day: "Day 1",
      time: "09:00 – 19:00",
      title: "AI Innovations & Trends",
      description:
        "The summit kicks off with a keynote, expert panels, and discussions on AI strategies, ethics, and automation. Hands-on workshops and networking events wrap up the day.",
    },
    {
      day: "Day 2",
      time: "09:00 – 20:00",
      title: "AI Technologies & Applications",
      description:
        "Explore the latest in generative AI, robotics, and NLP, with industry-led discussions and tech demos. A startup showcase and investor insights highlight AI's business potential.",
    },
    {
      day: "Day 3",
      time: "09:30 – 16:00",
      title: "Future of AI & Networking",
      description:
        "Dive into AI’s future: seminars, global expert workshops, and watch the startup pitch competition. The event ends with a visionary keynote and final networking sessions.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full py-20 px-6 md:px-20 flex justify-center">
      <motion.div
        className="max-w-4xl w-full bg-gradient-to-br from-purple-800/40 via-black/40 to-purple-900/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2">Event-Outline</h2>
          <p className="text-sm text-gray-300">
            October 16–19, 2025 | Horizon Convention Centre, Amsterdam
          </p>
        </div>

        {/* Event Items */}
        <div className="flex flex-col gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-white/10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="md:w-1/3">
                <p className="font-semibold text-lg">{event.day}</p>
                <p className="text-sm text-gray-300">{event.time}</p>
              </div>
              <div className="md:w-2/3">
                <p className="font-bold text-lg mb-1">{event.title}</p>
                <p className="text-gray-300 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* <Image
            src={markImg}
            alt="Event Logo"
            width={200}
            height={100}
            className="object-contain"
          /> */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.5)" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 text-black font-bold shadow-lg"
          >
            View detailed schedule 
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
