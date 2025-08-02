"use client";

import { motion } from "framer-motion";

export default function SpeakerSlide() {
  // Card data with updated agenda text (avatars removed)
  const cards = [
    {
      title: "Keynote Speakers",
      text: "Be inspired by powerful sessions from Gaise Baba, Dr Foy, Pastor Godswill, Jay Mikee, Chineye, and Iyinoluwa as they share insights on creativity, faith, and purpose.",
      color: "bg-purple-600 text-white",
      textColor: "text-purple-100",
    },
    {
      title: "Workshops & Panels",
      text: "Engage in interactive discussions and practical workshops covering music ministry, media innovation, leadership, and spiritual growth.",
      color: "bg-gray-100 text-black",
      textColor: "text-black-100",
    },
    {
      title: "Networking & Collaborations",
      text: "Connect with fellow creatives, industry leaders, and visionaries to explore collaborations that can impact communities and inspire change.",
      color: "bg-purple-600 text-white",
      textColor: "text-white",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className={`${card.color} rounded-2xl p-6 flex flex-col justify-between shadow-lg h-[240px] w-full`}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className={`text-sm ${card.textColor} mb-4`}>{card.text}</p>
              {idx === 0 && (
                <button className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500 hover:bg-purple-400 transition text-white font-semibold text-xs">
                  View Full Agenda →
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
