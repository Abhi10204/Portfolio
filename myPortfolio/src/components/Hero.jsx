import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const nameLines = ["Abhijeet", "Singh Bais"];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const letter = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero({ scrollToSection }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* NAME */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          {nameLines.map((line, lineIndex) => (
            <div
              key={lineIndex}
              className="block md:inline-block md:mr-3"
            >
              {line.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="inline-block"
                  style={{
                    textShadow: "0 0 25px rgba(59,130,246,0.45)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.h1>

        {/* ROLE */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4"
        >
          MERN Stack Developer
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-10"
        >
          Building scalable full-stack applications with React, Node.js,
          Express, and MongoDB.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex gap-6 justify-center"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 font-semibold
            shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 rounded-lg border border-blue-500 text-blue-400
            hover:bg-blue-500/10 hover:scale-105 transition-transform"
          >
            Contact Me
          </button>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-8 h-8 text-blue-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
