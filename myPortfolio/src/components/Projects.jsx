import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

/* ===================== DATA ===================== */

const featuredProjects = [
  {
    title: "Thrift Hub – Full Stack E-commerce Platform",
    description:
      "A full-stack MERN e-commerce platform featuring a dedicated admin panel for product and order management, secure payments via Razorpay, and real-time order tracking updates. Includes user authentication, dynamic product search/filtering, cart functionality, and scalable REST APIs for efficient data handling.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://thrift-hub-frontend.vercel.app/",
    github: "https://github.com/Abhi10204/Thrift-Hub",
  },
  {
    title: "Fungrow Freelancing Platform",
    description:
      "A full-stack freelancing marketplace connecting clients and developers with project management, secure workflows, and real-time collaboration. Features user authentication, role-based access, task handling, and scalable REST APIs for efficient communication and project tracking.",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    live: "https://fun-groww.vercel.app/",
    github: "https://github.com/Abhi10204/FunGroww",
  },
];

const backendProjects = [
  {
    title: "Health Risk Monitoring API",
    description:
      "Backend system with BMI calculation, health risk classification, and secure user-based data handling.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Abhi10204/Health-Tracking-App",
  },
];

/* ===================== ANIMATIONS ===================== */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ===================== COMPONENT ===================== */

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ================= FEATURED ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: "0 30px 80px rgba(59,130,246,0.35)",
              }}
              className="group backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10
                         hover:bg-white/10 hover:border-blue-500/40 transition-all min-h-[340px]"
            >
              {/* Title + Badge */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold group-hover:text-blue-400">
                  {project.title}
                </h3>

                {project.live && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
                    Live
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full
                               bg-purple-500/20 border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:gap-3 transition-all"
                  >
                    Live
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white hover:gap-3 transition-all"
                >
                  Code
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= BACKEND ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mt-24 mb-12 text-center text-gray-300"
        >
          Backend Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {backendProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 50px rgba(139,92,246,0.25)",
              }}
              className="group backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10
                         hover:bg-white/10 hover:border-purple-500/40 transition-all min-h-[260px]"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full
                               bg-purple-500/20 border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm hover:gap-3 transition-all mt-auto"
              >
                View Code
                <Github className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}