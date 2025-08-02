"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function WhyAttend() {
  const features = [
    {
      title: "Faith-Fueled Innovation",
      desc: "Discover how Christian creatives and developers are shaping media and tech through faith-driven innovation.",
      number: "01",
    },
    {
      title: "Spirit-Led Creativity",
      desc: "Engage with artists, musicians, and designers using their gifts to spread the Gospel through creativity.",
      number: "02",
    },
    {
      title: "Purpose-Driven Tech",
      desc: "Explore platforms and tools built with biblical values, solving real-world problems through tech for good.",
      number: "03",
    },
    {
      title: "Kingdom Networking",
      desc: "Connect with believers in media, startups, and creative industries who share your Kingdom vision.",
      number: "04",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-24 bg-gradient-to-br from-purple-950 via-black to-green-900 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 md:mb-0">
          Why Attend?
        </h2>
        <p className="text-gray-300 max-w-md text-base md:text-lg">
          Explore how faith, innovation, and creativity collide at the intersection of tech and media. Join a movement of believers reshaping culture.
        </p>
      </div>

      {/* Flipping Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((item, idx) => {
          const [flipped, setFlipped] = useState(false);

          return (
            <motion.div
              key={idx}
              className="relative w-full h-[260px] cursor-pointer perspective"
              onHoverStart={() => setFlipped(true)}
              onHoverEnd={() => setFlipped(false)}
              onTap={() => setFlipped(!flipped)}
            >
              {/* Front */}
              <motion.div
                initial={false}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-[#1a1a1a] rounded-3xl shadow-2xl p-8 backface-hidden"
              >
                <h3 className="text-sm font-semibold tracking-widest text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-4 right-6 text-[80px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-green-400">
                  {item.number}
                </div>
              </motion.div>

              {/* Back */}
              <motion.div
                initial={false}
                animate={{ rotateY: flipped ? 0 : 180 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-600 to-green-500 rounded-3xl shadow-2xl p-8 backface-hidden text-black"
                style={{ transform: "rotateY(180deg)" }}
              >
                <h3 className="text-lg font-bold uppercase mb-4">{item.title}</h3>
                {/* <p className="text-sm">
                  Join believers redefining excellence in tech, design, and content creation—all rooted in Kingdom values.
                </p> */}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
