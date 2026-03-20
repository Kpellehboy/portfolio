"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDatabase,
  FaNode,
  FaRocket,
  FaBrain,
  FaChartLine,
  FaTrain,
  FaLanguage,
} from "react-icons/fa";

import {
  SiPython,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiPandas,
  SiScikitlearn,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNumpy,
  SiSqlalchemy,
  SiVercel,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Node.js", icon: <FaNode /> },
    ],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST APIs", icon: <FaRocket /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <FaDatabase /> },
      { name: "Database Design", icon: <FaDatabase /> },
      { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AI & Data",
    skills: [
      { name: "Generative AI", icon: <FaBrain /> },
      { name: "NLP", icon: <FaLanguage /> },
      { name: "Machine Learning", icon: <FaChartLine /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
    ],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "AWS (Basics)", icon: <FaAws /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Railway", icon: <FaTrain /> },
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    gradient: "from-rose-500 to-pink-500",
  },
];

export default function TechStacks() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 360; // card width (320) + gap (16) ≈ 336, plus a bit
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="tech"
      className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-grid-slate-800/20" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Tech Stack & Capabilities
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Technologies and tools used to build scalable backend systems,
            AI-powered applications, and modern cloud solutions.
          </p>
        </div>

        {/* Scrollable area with side buttons */}
        <div className="relative mt-12">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex gap-6 w-max px-12 md:px-12">
              {skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="group relative w-80 flex-shrink-0 snap-start bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-r ${category.gradient} blur-md`}
                  />

                  <div className="relative z-10 p-6">
                    {/* Title */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${category.gradient} opacity-70`}
                      />
                    </div>

                    <div
                      className={`h-0.5 w-12 bg-gradient-to-r ${category.gradient} mb-4`}
                    />

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <SkillPill
                          key={i}
                          name={skill.name}
                          icon={skill.icon}
                          gradient={category.gradient}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        {/* Mobile Hint */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center md:hidden">
          ← Scroll to explore →
        </p>
      </div>
    </section>
  );
}

function SkillPill({ name, icon, gradient }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full border border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200">
      <span
        className={`text-base bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
      >
        {icon}
      </span>
      <span>{name}</span>
    </span>
  );
}