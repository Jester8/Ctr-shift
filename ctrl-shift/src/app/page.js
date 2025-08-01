"use client";

import Image from "next/image";
import { useState } from "react";
import { Orbitron } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import robotImg from "../../public/assets/img/robot.png";
import SpeakerSlide from "./components/Speakerslide";
import Event from "./components/Event";
import ScrollToTop from "./components/ScrollToTop";
// Load Orbitron font
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-orbitron",
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-purple-800 via-black to-mint-400 text-white relative overflow-hidden ${orbitron.variable} font-sans`}
    >
      {/* Glow Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-500/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-300/40 rounded-full blur-3xl"></div>

      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] rounded-2xl px-6 py-3 flex justify-between items-center backdrop-blur-md bg-white/10 border border-white/20 shadow-lg z-50">
        {/* Logo */}
        <div className="text-lg font-extrabold text-mint-300 tracking-wide">
          CTRL<span className="text-purple-300">+</span>SHIFT
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold">
          <li className="hover:text-mint-300 cursor-pointer transition">Home</li>
          <li className="hover:text-mint-300 cursor-pointer transition">About</li>
          <li className="hover:text-mint-300 cursor-pointer transition">Event</li>
          <li className="hover:text-mint-300 cursor-pointer transition">Contact</li>
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-green-300 text-black font-bold shadow hover:shadow-lg hover:shadow-mint-300/50 transition">
          Register
        </button>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="w-6 h-[2px] bg-white"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="w-6 h-[2px] bg-white"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="w-6 h-[2px] bg-white"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 flex flex-col gap-4 md:hidden z-40"
          >
            <a className="hover:text-mint-300 transition">Home</a>
            <a className="hover:text-mint-300 transition">About</a>
            <a className="hover:text-mint-300 transition">Event</a>
            <a className="hover:text-mint-300 transition">Contact</a>
            <button className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-green-300 text-black font-bold shadow hover:shadow-lg hover:shadow-mint-300/50 transition">
              Register
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 md:pt-40">
        {/* Text Content */}
        <div className="max-w-lg text-center md:text-left z-10">
          <p className="bg-white/10 text-xs inline-block px-3 py-1 rounded-full border border-white/20 mb-4">
            Gen Z Powered Christian Experience
          </p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6">
            SHIFT Culture for <span className="text-mint-300">His Kingdom</span>
          </h1>
          <p className="text-purple-200 mb-6">
            CTRL+SHIFT is not just another conference, it’s a divine command for
            a generation to surrender to God’s control and transform systems for
            His Kingdom.
          </p>

          {/* Glossy Button with Shine Animation */}
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-green-300 text-black font-bold shadow-lg overflow-hidden group">
              <span className="relative z-10">Join the Movement</span>
              {/* Shine Animation */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shine"></span>
              {/* Glossy Overlay */}
              <span className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent opacity-50 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Robot */}
        <div className="mt-10 md:mt-0 relative flex justify-center md:justify-end z-10">
          <Image
            src={robotImg}
            alt="CTRL+SHIFT Robot"
            className="relative w-[300px] md:w-[400px] lg:w-[450px] object-contain drop-shadow-[0_0_25px_rgba(45,212,191,0.8)]"
            priority
          />
        </div>
      </section>

      {/* Shine Animation Keyframes */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shine {
          animation: shine 2s infinite linear;
        }
      `}</style>

      {/* SPEAKER SLIDE */}
      <SpeakerSlide />
      {/* EVENT SECTION */}
      <Event />
      {/* SCROLL TO TOP BUTTON */}
      <ScrollToTop />
    </div>
  );
}
