"use client";

import { motion } from "framer-motion";

export default function Event() {
  const events = [
    {
      time: "09:00 – 11:00",
      title: "Panel Sessions",
      description:
        "Engaging conversations with industry leaders, creatives, and innovators discussing creativity, faith, and excellence in their fields.",
    },
    {
      time: "11:30 – 13:30",
      title: "Brand Promotions & Networking",
      description:
        "Explore brand showcases, connect with sponsors, and network with fellow participants for collaboration opportunities.",
    },
    {
      time: "14:00 – 16:00",
      title: "Questions & Answers + Prayers",
      description:
        "Interactive Q&A sessions followed by prayer time to seek divine direction, empowerment, and breakthrough.",
    },
    {
      time: "16:30 – 19:00",
      title: "Impartation & Worship",
      description:
        "Powerful impartation session with anointed ministers, ending the day with heartfelt worship and thanksgiving.",
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
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-2">Event Outline</h2>
          <p className="text-sm text-gray-300">
            18th October 2025 | Davidic Generation Church, Farayola Layout Bodija, Ibadan
          </p>
        </div>

        {/* Event Sections */}
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
                <p className="font-semibold text-lg">{event.time}</p>
              </div>
              <div className="md:w-2/3">
                <p className="font-bold text-lg mb-1">{event.title}</p>
                <p className="text-gray-300 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.5)" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 text-black font-bold shadow-lg"
          >
            View Detailed Schedule
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
