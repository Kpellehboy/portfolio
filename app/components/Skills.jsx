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
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST APIs", icon: <FaRocket /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <FaDatabase /> },
      { name: "Database Design", icon: <FaDatabase /> },
      { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
    ],
  },
  {
    title: "Data Science & AI",
    skills: [
      { name: "Generative AI", icon: <FaBrain /> },
      { name: "Applied NLP", icon: <FaLanguage /> },
      { name: "Machine Learning", icon: <FaChartLine /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Railway", icon: <FaTrain /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS (EC2, S3 basics)", icon: <FaAws /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-sky-50 dark:bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>

        {/* Horizontal scrollable carousel */}
        <div className="overflow-x-auto pb-6 -mb-6 scrollbar-hide">
          <div className="flex gap-6 w-max">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="w-80 flex-shrink-0 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <SkillPill key={i} name={skill.name} icon={skill.icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center md:hidden">
          ← Scroll horizontally →
        </p>
      </div>
    </section>
  );
}

function SkillPill({ name, icon }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md hover:scale-105 transition">
      <span className="text-base text-blue-600 dark:text-blue-400">{icon}</span>
      <span>{name}</span>
    </span>
  );
}