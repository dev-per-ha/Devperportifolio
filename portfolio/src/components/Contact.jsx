import {
  FaPhoneAlt,
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const contacts = [
    {
      id: 1,
      icon: <FaPhoneAlt />,
      text: "+251 991 450 499",
      link: "tel:+251991450499",
      bg: "bg-blue-100",
      hover: "hover:bg-blue-500 hover:text-white",
    },
    {
      id: 2,
      icon: <HiOutlineMail />,
      text: "devper95@gmail.com",
      link: "mailto:devper95@gmail.comg",
      bg: "bg-yellow-100",
      hover: "hover:bg-yellow-500 hover:text-white",
    },
     {
      id: 3,
      icon: <FaGithub />,
      text: "GitHub",
      link: "https://github.com/dev-per-ha",
      bg: "bg-gray-200",
      hover: "hover:bg-gray-800 hover:text-white",
    },
    
    {
      id: 4,
      icon: <FaTelegramPlane />,
      text: "Telegram",
      link: "https://t.me/Devper17",
      bg: "bg-cyan-100",
      hover: "hover:bg-cyan-500 hover:text-white",
    },
    {
      id: 5,
      icon: <FaInstagram />,
      text: "Instagram",
      link: "https://instagram.com/devper17/",
      bg: "bg-pink-100",
      hover: "hover:bg-pink-500 hover:text-white",
    },
   {
      id: 6,
      icon: <FaFacebookF />,
      text: "Facebook",
      link: "https://facebook.com/deva.afewerk",
      bg: "bg-blue-200",
      hover: "hover:bg-blue-700 hover:text-white",
    },
    {
      id: 7,
      icon: <FaLinkedinIn />,
      text: "LinkedIn",
      link: "https://linkedin.com/in/dev-per-185342372",
      bg: "bg-blue-300",
      hover: "hover:bg-blue-600 hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-green-50 via-white to-blue-50">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 p-5 rounded-xl shadow-md ${contact.bg} ${contact.hover} transition-all transform hover:scale-105`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="text-2xl">{contact.icon}</div>
            <span className="font-medium text-gray-800">{contact.text}</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Dawit Hailemariam. All rights reserved.
      </footer>
    </section>
  );
}
