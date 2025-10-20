import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-32 overflow-hidden"
    >
      {/* Irregular Gradient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Blue Glow */}
        <div className="absolute top-10 left-[-120px] w-[400px] h-[400px] bg-blue-400 rounded-[60%] blur-3xl opacity-60 animate-pulse" />
        {/* Green Glow */}
        <div className="absolute bottom-10 right-[-150px] w-[450px] h-[450px] bg-green-400 rounded-[70%] blur-3xl opacity-60 animate-pulse delay-2000" />
        {/* Soft white overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-transparent backdrop-blur-sm" />
      </div>

      {/* Left Side - Text */}
      <motion.div
        className="flex-1 text-center md:text-left relative z-10"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
          Dawit H.mariam
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Full Stack Web Developer
          </span>
        </h2>

        {/* Updated Description with elegant font */}
        <p className="mt-6 max-w-md text-gray-600 font-serif italic tracking-wide leading-relaxed text-lg">
          “I craft modern, responsive, and high-performing web applications with
          a passion for clean design and smooth user experiences.”
        </p>

        {/* Call-to-Action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {/* Resume Download Button */}
          <a
            href="/last_cv.pdf"
            download="Dawit_HMariam_Resume.pdf"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white shadow-lg hover:shadow-xl hover:bg-blue-700 transition"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-green-600 text-white shadow-lg hover:shadow-xl hover:bg-green-700 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0 relative z-10"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Circle container with gradient border */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-green-500 shadow-2xl">
          <img
            src="./3.JPG"
            alt="Hero"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}
