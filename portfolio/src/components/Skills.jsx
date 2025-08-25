import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaJava,
  FaBootstrap,
  FaComments,
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiDjango } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const techSkills = [
    { id: 1, icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { id: 2, icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { id: 3, icon: <FaJsSquare className="text-yellow-400" />, name: "JavaScript" },
    { id: 4, icon: <FaReact className="text-cyan-400" />, name: "React" },
    { id: 5, icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { id: 6, icon: <SiExpress className="text-gray-800" />, name: "Express.js" },
    { id: 7, icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { id: 8, icon: <FaDatabase className="text-indigo-500" />, name: "SQL" },
    { id: 9, icon: <SiTailwindcss className="text-sky-500" />, name: "Tailwind CSS" },
    { id: 10, icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
    { id: 11, icon: <FaPython className="text-blue-400" />, name: "Python" },
    { id: 12, icon: <SiDjango className="text-green-700" />, name: "Django" },
  ];

  const softSkills = [
    { id: 1, icon: <FaComments className="text-blue-500" />, text: "Effective Communication" },
    { id: 2, icon: <FaUsers className="text-green-500" />, text: "Team Collaboration" },
    { id: 3, icon: <FaLightbulb className="text-yellow-500" />, text: "Problem-Solving" },
    { id: 4, icon: <FaHandsHelping className="text-pink-500" />, text: "Leadership & Support" },
  ];

  return (
    <section id="skills" className="w-full py-20 px-6 bg-gradient-to-r from-green-100 via-blue-50 to-green-200
">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Skills
        </h2>

        {/* Tech Skills with glassmorphism border */}
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-green-400 to-blue-400 shadow-lg hover:shadow-blue-500/50 transition-all">
          <div className="rounded-2xl bg-white/60 backdrop-blur-md p-8">
            <h3 className="text-2xl font-semibold text-center mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Technical Skills
            </h3>

            <div className="overflow-hidden relative w-full">
              <motion.div
                className="flex gap-14 text-6xl px-10 whitespace-nowrap min-w-max"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
              >
                {[...techSkills, ...techSkills].map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center min-w-[100px] sm:min-w-[120px] p-4 rounded-xl border border-blue-300 bg-white/70 shadow-md hover:shadow-xl hover:scale-110 transition-transform"
                  >
                    {skill.icon}
                    <p className="text-sm mt-2 font-semibold text-gray-800">{skill.name}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Soft Skills with gradient border */}
        <div className="mt-16 relative rounded-2xl p-[2px] bg-gradient-to-r from-blue-400 to-green-400 shadow-lg hover:shadow-green-500/50 transition-all">
          <div className="rounded-2xl bg-gradient-to-r from-green-50 to-blue-50 p-8">
            <h3 className="text-2xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-4 p-5 rounded-xl border border-green-200 bg-white shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all"
                >
                  <div className="text-3xl">{skill.icon}</div>
                  <p className="text-lg font-medium text-gray-700">{skill.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
