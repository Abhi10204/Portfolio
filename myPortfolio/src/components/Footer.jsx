import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer({ scrollToSection }) {
  return (
    <footer className="relative py-14 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center space-y-6">

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-gray-500"
        >
          © 2025 Abhijeet Singh Bais. Built with React, Tailwind & Framer Motion.
        </motion.p>

        {/* Back to Top */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.4 }}
          onClick={() => scrollToSection("hero")}
          className="inline-flex items-center gap-2 px-6 py-3
                     bg-white/5 backdrop-blur-md
                     border border-white/10 rounded-full
                     text-sm font-medium text-gray-300
                     hover:bg-blue-500/20 hover:border-blue-500/40
                     hover:text-blue-400
                     transition-all duration-300 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 " />
          Back to Top
        </motion.button>

      </div>
    </footer>
  );
}
