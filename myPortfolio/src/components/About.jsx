import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          About Me
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            boxShadow: "0 30px 80px rgba(59,130,246,0.25)",
          }}
          className="backdrop-blur-md bg-white/5 rounded-2xl p-10 border border-white/10
                     hover:bg-white/10 hover:border-blue-500/30 transition-all"
          style={{ transformStyle: "preserve-3d" }}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            MERN Stack Developer with hands-on experience in building full-stack
            web applications, REST APIs, authentication systems, and scalable
            backend architectures. Strong focus on clean code, performance
            optimization, and real-world problem solving. Passionate about
            creating efficient, user-centric applications that deliver tangible
            business value.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
