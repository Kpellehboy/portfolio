"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  "home",
  "services",
  "projects",
  "tech",
  "about",
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <button onClick={() => scrollTo("home")} className="text-xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
            Menuo Tech
          </span>{" "}
          <span className="text-white">Solutions</span>
        </button>

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="capitalize text-gray-300 hover:text-blue-400 transition"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 px-6 pb-4 pt-2 space-y-3">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left capitalize text-gray-300 hover:text-blue-400 transition py-2"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}