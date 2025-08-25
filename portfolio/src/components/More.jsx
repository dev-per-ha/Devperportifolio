import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MoreProjects() {
  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          More Projects
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          I’ve worked on several other exciting projects beyond what’s listed
          here. You can explore them on my{" "}
          <span className="font-semibold text-green-600">GitHub account</span>.
          These include smaller experiments, open-source contributions, and
          practice apps that reflect my learning journey.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="https://github.com/dev-per-ha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 text-lg font-medium rounded-2xl shadow-md bg-black text-white hover:bg-gray-800 transition-all"
          >
            <FaGithub className="text-2xl" />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
