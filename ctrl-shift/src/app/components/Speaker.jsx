"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import gasieImg from "../../../public/assets/img/gaise.jpg";
import foyImg from "../../../public/assets/img/drfoy.jpg";
import godswillImg from "../../../public/assets/img/godswill.jpg";
import jaymikeeImg from "../../../public/assets/img/jaymikee.jpg";

export default function Speakers() {
  const speakers = [
    {
      name: "Gaise baba",
      role: "Gospel Artist & Creattive",
      img: gasieImg,
    },
    {
      name: "Dr Foy",
      role: "Media Mogul",
      img: foyImg,
    },
    {
      name: "Pastor Godswill",
      role: "Worship Minister & Financial Coach",
      img: godswillImg,
    },
    {
      name: "Jay Mikee",
      role: "Creative Director, Gospel Artist",
      img: jaymikeeImg,
    },
    // Duplicate entries to ensure smooth infinite loop
    {
      name: "Gaise baba",
      role: "Chief AI Scientist, OpenAI",
      img: gasieImg,
    },
    {
      name: "Dr Foy",
      role: "CTO, DeepMind",
      img: foyImg,
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;
    let scrollSpeed = 0.5;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-purple-700 via-black to-green-600 text-white">
      {/* Section Header */}
      <div className="flex justify-between items-start mb-10">
        <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
          Keynote <br /> Speakers
        </h2>
      
      </div>

      {/* Scrolling Speaker Cards */}
      <div
        className="flex space-x-6 overflow-x-auto no-scrollbar"
        ref={scrollRef}
      >
        {speakers.map((speaker, idx) => (
          <div
            key={idx}
            className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-700 to-green-500"
          >
            <div className="relative w-full h-[450px]">
              <Image
                src={speaker.img}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 py-4 text-center bg-black/70">
              <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
              <p className="text-sm text-green-200">{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
