"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <span className="text-lg font-semibold text-red-600">
          Elijah M. Flomo
        </span>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {/* HOME (active / parent) */}
          <a
            href="#home"
            className="text-red-600 font-semibold"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-blue-600 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-blue-600 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-blue-600 transition"
          >
            Projects
          </a>

          <a
            href="#resume"
            className="hover:text-blue-600 transition"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden border-t bg-white shadow-sm">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">

            <a
              href="#home"
              className="text-red-600 font-semibold"
              onClick={() => setOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>

            <a
              href="#resume"
              className="hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>

            <a
              href="#contact"
              className="hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
