import {
  FaPhoneAlt,
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      id: 1,
      icon: <FaPhoneAlt />,
      text: "+251 991 450 499",
      link: "tel:+251991450499",
      bg: "from-blue-100/40 to-blue-200/40",
      hover: "hover:from-blue-600 hover:to-blue-700 hover:text-white",
    },
    {
      id: 2,
      icon: <HiOutlineMail />,
      text: "devper95@gmail.com",
      link: "mailto:devper95@gmail.com",
      bg: "from-yellow-100/40 to-yellow-200/40",
      hover: "hover:from-yellow-500 hover:to-yellow-600 hover:text-white",
    },
    {
      id: 3,
      icon: <FaGithub />,
      text: "GitHub",
      link: "https://github.com/dev-per-ha",
      bg: "from-gray-100/40 to-gray-200/40",
      hover: "hover:from-gray-800 hover:to-gray-900 hover:text-white",
    },
    {
      id: 4,
      icon: <FaTelegramPlane />,
      text: "Telegram",
      link: "https://t.me/Devper17",
      bg: "from-cyan-100/40 to-cyan-200/40",
      hover: "hover:from-cyan-500 hover:to-cyan-600 hover:text-white",
    },
    {
      id: 5,
      icon: <FaInstagram />,
      text: "Instagram",
      link: "https://instagram.com/devper17/",
      bg: "from-pink-100/40 to-pink-200/40",
      hover: "hover:from-pink-500 hover:to-pink-600 hover:text-white",
    },
    {
      id: 6,
      icon: <FaFacebookF />,
      text: "Facebook",
      link: "https://facebook.com/deva.afewerk",
      bg: "from-blue-200/40 to-blue-300/40",
      hover: "hover:from-blue-700 hover:to-blue-800 hover:text-white",
    },
    {
      id: 7,
      icon: <FaLinkedinIn />,
      text: "LinkedIn",
      link: "https://linkedin.com/in/dev-per-185342372",
      bg: "from-blue-300/40 to-blue-400/40",
      hover: "hover:from-blue-600 hover:to-blue-700 hover:text-white",
    },
    {
      id: 8,
      icon: <FaTiktok className="text-black" />,
      text: "TikTok",
      link: "https://www.tiktok.com/@dev_per_",
      bg: "from-gray-50/60 to-white/70",
      hover: "hover:from-yellow-400 hover:to-yellow-500 hover:text-black",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 relative bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background decorative blur circles */}
      <div className="absolute top-0 left-[-100px] w-[400px] h-[400px] bg-green-300/40 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-[-100px] w-[450px] h-[450px] bg-blue-300/40 blur-[120px] rounded-full -z-10 animate-pulse delay-1000"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h2>

      {/* Contact Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {contacts.map((contact) => (
          <motion.a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className={`flex items-center gap-4 p-5 rounded-xl shadow-lg bg-gradient-to-br ${contact.bg} ${contact.hover} backdrop-blur-md transition-all transform hover:scale-105 hover:shadow-2xl border border-white/20`}
          >
            <div className="text-3xl">{contact.icon}</div>
            <span className="font-medium text-gray-800 text-lg tracking-wide">
              {contact.text}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm tracking-wide">
        &copy; {new Date().getFullYear()} Dawit Hailemariam. All rights reserved.
      </footer>
    </section>
  );
}
