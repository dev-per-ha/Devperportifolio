import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUser,
  FaBriefcase,
  FaBullseye,
  FaArrowRight,
  FaArrowDown,
} from "react-icons/fa";

export default function About() {
  const aboutCards = [
    {
      id: 1,
      title: "Education",
      icon: <FaGraduationCap className="text-4xl text-blue-700" />,
      description:
        "I am currently a Computer Science student at Haramaya University. Alongside my formal studies, I have invested significant time in learning modern web development and working on diverse projects in both academic and private contexts. Through over a year of dedicated practice, I have developed strong expertise as a full-stack web developer.",
      bg: "from-blue-100 to-blue-200",
      border: "border-blue-400 hover:border-blue-600",
    },
    {
      id: 2,
      title: "Who I Am",
      icon: <FaUser className="text-4xl text-green-700" />,
      description:
        "My name is Dawit, and I am a passionate full-stack web developer. With a strong academic foundation and years of disciplined learning, I am now fully committed to building innovative, user-focused technology solutions.",
      bg: "from-green-100 to-green-200",
      border: "border-green-400 hover:border-green-600",
    },
    {
      id: 3,
      title: "Experience",
      icon: <FaBriefcase className="text-4xl text-indigo-700" />,
      description:
        "I have over two years of hands-on experience with the MERN stack, developing real-world projects such as hotel and hospital management systems. Most notably, I built a complete online learning platform as part of my internship, which strengthened my ability to design and deliver scalable applications.",
      bg: "from-indigo-100 to-indigo-200",
      border: "border-indigo-400 hover:border-indigo-600",
    },
    {
      id: 4,
      title: "Future Drives",
      icon: <FaBullseye className="text-4xl text-pink-700" />,
      description:
        "Looking ahead, I am eager to expand my expertise in artificial intelligence and digital marketing. I have already begun studying AI in my spare time and aim to integrate these skills into future projects that create meaningful impact.",
      bg: "from-pink-100 to-pink-200",
      border: "border-pink-400 hover:border-pink-600",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.7 },
    }),
  };

  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-12">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
        {aboutCards.map((card, index) => (
          <motion.div
            key={card.id}
            className="relative flex flex-col items-center text-center"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            {/* Card */}
            <div
              className={`w-full rounded-2xl shadow-lg p-6 border-2 ${card.border} bg-gradient-to-br ${card.bg} hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="italic text-lg text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Arrow */}
            {index < aboutCards.length - 1 && (
              <>
                <motion.div
                  className="hidden md:flex absolute top-1/2 right-[-28px] text-3xl text-green-500"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 1) * 0.4 }}
                >
                  <FaArrowRight />
                </motion.div>
                <motion.div
                  className="md:hidden mt-4 text-3xl text-green-500"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.4 }}
                >
                  <FaArrowDown />
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
