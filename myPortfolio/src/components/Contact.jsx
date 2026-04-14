import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL; // e.g. http://localhost:5000

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Let’s Connect
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-md bg-white/5 rounded-2xl p-10
                     border border-white/10
                     hover:border-blue-500/30 hover:bg-white/10
                     transition-all duration-500"
        >
          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500/50
                         focus:border-blue-500 transition-all"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500/50
                         focus:border-blue-500 transition-all"
            />

            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg resize-none
                         focus:outline-none focus:ring-2 focus:ring-blue-500/50
                         focus:border-blue-500 transition-all"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 font-semibold rounded-lg
                         bg-linear-to-r from-blue-600 to-purple-600
                         hover:shadow-xl hover:shadow-blue-500/30
                         hover:scale-[1.02] active:scale-95
                         transition-all duration-300
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status */}
            {status === "success" && (
              <p className="text-green-400 text-center">
                Message sent successfully ✔
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center">
                Something went wrong. Try again.
              </p>
            )}
          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-12">
            {[
              { icon: <Github className="w-6 h-6" />, link: "https://github.com/Abhi10204" },
              { icon: <Linkedin className="w-6 h-6" />, link: "https://www.linkedin.com/in/abhijeet-singh-bais-152897249/" },
              { icon: <Mail className="w-6 h-6" />, link: "mailto:abhijeet.singhbais10@example.com" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4 rounded-full bg-white/5 border border-white/10
                           hover:bg-blue-500/20 hover:border-blue-500/50
                           transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
