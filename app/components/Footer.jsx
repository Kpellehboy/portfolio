"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-950 border-t border-gray-800">
      {/* Decorative grid overlay (subtle) */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                Menuo Tech
              </span>{" "}
              <span className="text-white">Solutions</span>
            </h3>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Building scalable backend systems, AI-powered applications, and modern cloud solutions for startups and businesses.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "Projects", id: "projects" },
                { name: "Tech Stack", id: "tech" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-300 hover:text-blue-400 transition inline-flex items-center gap-1"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:elijahmflomo@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  elijahmflomo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">📍</span>
                <span>India</span>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/elijah-m-flomo-a7a253267"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="mailto:elijahmflomo@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition"
                aria-label="Email"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition"
            >
              <FaArrowUp size={14} />
              Back to top
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Menuo Tech Solutions. All rights reserved.
      </div>
    </footer>
  );
}