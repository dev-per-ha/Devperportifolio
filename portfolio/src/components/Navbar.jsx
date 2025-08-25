import { useState } from "react";
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "skills", label: "Skills", icon: <FaTools /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed w-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-500 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent drop-shadow-lg">
          DevPer
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 
                           hover:bg-white/20 hover:shadow-md"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-b from-blue-600 via-green-500 to-blue-500 shadow-md flex flex-col items-center space-y-4 py-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 
                           hover:bg-white/20 hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
