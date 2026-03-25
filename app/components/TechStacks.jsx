"use client";

import {
  FaJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDatabase,
  FaNode,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

import {
  SiPython,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiPandas,
  SiScikitlearn,
  SiTypescript,
  SiExpress,
  SiNumpy,
  SiSqlalchemy,
  SiVercel,
} from "react-icons/si";

/* DATA */
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
      { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AI & Data",
    skills: [
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
      { name: "AWS", icon: <FaAws /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
    gradient: "from-orange-500 to-amber-500",
  },
];

export default function TechStacks() {
  return (
    <section
      id="tech"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* HEADER */}
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-4xl font-semibold">
          <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
          Tools I use to build scalable backend systems and cloud applications.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
          >
            {/* Gradient Glow */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r ${cat.gradient} blur-xl rounded-2xl`}
            />

            <div className="relative z-10">
              {/* TITLE */}
              <h3 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">
                {cat.title}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 flex items-center gap-1"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}