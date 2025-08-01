"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          whileHover={{
            scale: 1.1,
            rotate: 5, // slight tilt
            boxShadow: "0 0 20px rgba(168,85,247,0.6)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full 
                     bg-gradient-to-br from-purple-500 to-purple-300 
                     text-black shadow-lg backdrop-blur-md border border-white/20
                     hover:from-purple-400 hover:to-purple-200"
        >
          <motion.div
            whileHover={{ rotate: -15 }} // icon rotation
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <ArrowUpwardIcon fontSize="small" />
          </motion.div>
        </motion.button>
      )}
    </>
  );
}
