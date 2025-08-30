"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import gasieImg from "../../../public/assets/img/Emmanuel.jpeg";
import foyImg from "../../../public/assets/img/ade.jpeg";
import godswillImg from "../../../public/assets/img/godswill.jpg";
import AbadiImg from "../../../public/assets/img/abadi.jpeg";
import Chineye from "../../../public/assets/img/chinenye.jpg";

import Mamad from "../../../public/assets/img/mamad.jpg";

export default function Speakers() {
  const speakers = [
    {
      name: "Emmanuel Samuel",
      role: "HR Professional",
      img: gasieImg,
    },

    {
      name: "Pastor Darasimi Oyor",
      role: "Spoken Word Artist & Creative",
      img: Mamad,
    },
    {
      name: "Mr Oluwaseyi Adefemi",
      role: "Founder, Drive45",
      img: foyImg,
    },
    {
      name: "Pastor Godswill Oyor",
      role: "Worship Minister & Financial Coach",
      img: godswillImg,
    },

    {
      name: "Mr Oluwaseyi Adefemi",
      role: "Founder, Drive45",
      img: foyImg,
    },
    {
      name: "Mr Emmanuel Abadi",
      role: "Partnership Specialist, Moniepoint",
      img: AbadiImg,
    },
    {
      name: "Chinneye Adeleye",
     role: "Founder, VHA",
      img: Chineye,
    },
    
    {
      name: "Mr Emmanuel Abadi",
      role: "Partnership Specialist, Moniepoint",
      img: AbadiImg,
    },
    {
      name: "Pastor Godswill Oyor",
      role: "Worship Minister & Financial Coach",
      img: godswillImg,
    },
    {
      name: "Chinenye Adeleye",
      role: "Founder, VHA",
      img: Chineye,
    },
    

     {
      name: "Emmanuel Samuel",
      role: "HR Professional",
      img: gasieImg,
    },
    
    {
      name: "Pastor Darasimi Oyor",
      role: "Spoken Word Artist & Creative",
      img: Mamad,
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;
    let scrollSpeed = 0.5;
    let isUserInteracting = false;

    const autoScroll = () => {
      if (scrollContainer && !isUserInteracting) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Loop back smoothly when halfway through
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    const handleTouchStart = () => {
      isUserInteracting = true;
    };
    const handleTouchEnd = () => {
      isUserInteracting = false;
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("touchstart", handleTouchStart, { passive: true });
      scrollContainer.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener("touchstart", handleTouchStart);
        scrollContainer.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-purple-700 via-black to-green-600 text-white">
      {/* Section Header */}
      <div className="flex justify-between items-start mb-10">
        <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
          Keynote <br /> Speakers
        </h2>
      </div>

      {/* Infinite Scrolling Speaker Cards */}
      <div
        className="flex space-x-6 overflow-x-auto no-scrollbar"
        ref={scrollRef}
      >
        {[...speakers, ...speakers].map((speaker, idx) => (
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
