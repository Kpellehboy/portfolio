"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import navigation from "../../data/navigation";
import personal from "../../data/personal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const offset = 80;

    const top =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setOpen(false);
  };

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = navigation[0]?.id || "home";

      navigation.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
          currentSection = item.id;
        }
      });

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-left"
          aria-label="Go to Home"
        >
          <h1 className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
            {personal.name}
          </h1>
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main Navigation"
        >
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-current={
                active === item.id ? "page" : undefined
              }
              className={`relative text-sm font-medium transition-colors duration-300
              ${active === item.id
                  ? "text-sky-400"
                  : "text-slate-300 hover:text-white"
                }`}
            >
              {item.label}

              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-sky-400 transition-all duration-300
                ${active === item.id
                    ? "w-full"
                    : "w-0"
                  }`}
              />
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          className="border-t border-slate-800 bg-slate-950/95 px-6 py-5 md:hidden"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-3">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full rounded-lg py-2 text-left transition
                ${active === item.id
                    ? "font-semibold text-sky-400"
                    : "text-slate-300 hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}