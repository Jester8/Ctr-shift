"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import robotImg from "../../../public/assets/img/robot.png";

export default function SpeakerSlide() {
  // Card data
  const cards = [
    {
      title: "Speakers",
      text: "Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.",
      color: "bg-purple-600 text-white",
      textColor: "text-purple-100",
      avatars: [robotImg, robotImg, robotImg],
    },
    {
      title: "Technologies",
      text: "Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.",
      color: "bg-gray-100 text-black",
      textColor: "text-black-100",
      avatars: [],
    },
    {
      title: "Networking Opportunities",
      text: "Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.",
      color: "bg-purple-600 text-white",
      textColor: "text-white",
      avatars: [],
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
            viewport={{ once: false, amount: 0.2 }} // triggers when 20% is visible
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
                  And more →
                </button>
              )}
            </div>
            {card.avatars.length > 0 && (
              <div className="flex -space-x-3 mt-4">
                {card.avatars.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt={`Speaker ${i}`}
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
