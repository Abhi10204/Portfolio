import { motion } from "framer-motion";

const techStack = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "Git",
];

export default function TechMarquee() {
  return (
    <section className="relative py-16 overflow-hidden bg-linear-to-r from-blue-950/20 to-purple-950/20">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...techStack, ...techStack].map((tech, idx) => (
          <span
            key={idx}
            className="text-2xl font-bold text-gray-500
                       hover:text-blue-400 hover:scale-110
                       transition-transform duration-300
                       cursor-pointer select-none"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
