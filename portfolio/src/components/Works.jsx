import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare  ,} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";


export default function Works() {
  const works = [
     {
      id: 1,
      title: "Online Learning Platform",
      description:
        "A MERN stack online learning platform with user authentication, course management, and interactive quizzes.",
      images: [
        "/lx1.png",
        "/lx2.png",
        "/lx3.png",
        "/lx4.png",
        "/lx5.png",
        "/lx6.png",
        "/lx7.png",
        "/lx8.png",
        "/lx9.png",
        "/lx10.png",
      ],
      tech: [
        { icon: <FaReact className="text-cyan-500" />, name: "React" },
        { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
        { icon: <SiExpress className="text-gray-800" />, name: "Express.js" },
        { icon: <SiTailwindcss className="text-sky-500" />, name: "Tailwindcss" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
      ],
        link: "https://learnx-5rau.onrender.com"
    },
   
    {
      id: 2,
      title: "Hospital Appointment System",
      description: "A full-stack Doctor Appointment Booking System with user authentication, doctor approval, appointment scheduling, and MongoDB backend.  ",
          images: [
        "/Screenshot (466).png",
        "/Screenshot (467).png",
        "/Screenshot (468).png",
        "/Screenshot (469).png",
        "/Screenshot (470).png",
        "/Screenshot (471).png",
        "/Screenshot (472).png",
        "/Screenshot (473).png",
        
       
      ],
      tech: [
        { icon: <FaReact className="text-cyan-500" />, name: "React" },
        { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
        { icon: <SiExpress className="text-gray-800" />, name: "Express.js" },
        {  icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
      ],
        link: "https://devperhospital.onrender.com/"
    },
    {
      id: 3,
      title: "Hotel Management System",
      description:
        "A full-stack Hotel Management System with user and admin roles, secure authentication, room booking with simulated payment, and admin dashboards to manage bookings, customers, and rooms. Built using MERN stack (MongoDB, Express, React, Node.js).",
      images: [
        "/Screenshot (458).png",
        "/Screenshot (459).png",
        "/Screenshot (460).png",
        "/Screenshot (461).png",
        "/Screenshot (462).png",
        "/Screenshot (463).png",
        "/Screenshot (464).png",
        "/Screenshot (465).png",
       
      ],
      tech: [
        { icon: <FaReact className="text-cyan-500" />, name: "React" },
        { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
        { icon: <SiExpress className="text-gray-800" />, name: "Express.js" },
        {  icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
      ],
        link: "https://devperhotel.onrender.com"

    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
        My Works
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            {/* Image carousel */}
            <div className="relative w-full h-64 overflow-hidden rounded-xl mb-4">
              {work.images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={work.title}
                  className="absolute w-full h-full object-cover rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }} // fade in and out
                  transition={{ repeat: Infinity, duration: 6, delay: i * 2 }}
                />
              ))}
            </div>

            {/* Title and Description */}
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{work.title}</h3>
            <p className="text-gray-600 italic mb-4">{work.description}</p>

            {/* Technologies */}
          <div className="flex flex-col gap-3 mt-4">
            {work.tech.map((techItem, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg text-sm hover:bg-gray-200 transition"
              >
                {techItem.icon}
                <span className="font-medium text-gray-700">{techItem.name}</span>
              </div>
            ))}
          </div>
            <div className="mt-6">
              <a
                href={work.link ? work.link : "#"} // replace "#" with your project link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
              >
                View Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
