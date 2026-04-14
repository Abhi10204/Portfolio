import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Shield } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code />,
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    category: "Backend",
    icon: <Server />,
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    icon: <Database />,
    items: ["MongoDB", "Mongoose"],
  },
  {
    category: "Auth & APIs",
    icon: <Shield />,
    items: ["JWT", "REST APIs"],
  },
  {
    category: "Tools",
    icon: <Wrench />,
    items: ["Git", "Postman", "VS Code"],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{  amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          <span className="relative inline-block">
            Technical Skills
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{  amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-0 -bottom-2 w-full h-1 origin-left
                         bg-linear-to-r from-blue-500 to-purple-500"
            />
          </span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={card}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 60px rgba(59,130,246,0.25)",
              }}
              className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10
                         hover:bg-white/10 hover:border-blue-500/40 transition-all"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div whileHover={{ rotate: 12 }} className="text-blue-400">
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm
                               bg-blue-500/20 border border-blue-500/30
                               hover:bg-blue-500/30 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
