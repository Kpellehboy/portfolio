"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        {/* NAME / BRAND */}
        <h3 className="text-xl font-semibold text-white">
          Elijah M. Flomo
        </h3>

        {/* ROLE */}
        <p className="mt-2 text-sm text-gray-400">
          Backend-Focused Full-Stack Developer | AI & Cloud Engineering Enthusiast
        </p>

        {/* SOCIAL */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/Kpellehboy"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/elijah-m-flomo-a7a253267"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="mailto:elijahmflomo@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* BACK TO TOP */}
        <button
          onClick={scrollToTop}
          className="mt-6 text-sm text-gray-400 hover:text-blue-400 transition flex items-center justify-center gap-2 mx-auto"
        >
          <FaArrowUp size={12} />
          Back to top
        </button>

        {/* COPYRIGHT */}
        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Elijah M. Flomo
        </p>
      </div>
    </footer>
  );
}