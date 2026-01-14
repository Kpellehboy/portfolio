import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiMysql,
  SiSupabase,
  SiPandas,
  SiScikitlearn,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: <FaCss3Alt />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: <FaJs />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: <SiTypescript />, link: "https://www.typescriptlang.org/" },
  { icon: <FaReact />, link: "https://react.dev/" },
  { icon: <SiNextdotjs />, link: "https://nextjs.org/" },
  { icon: <SiTailwindcss />, link: "https://tailwindcss.com/" },

  { icon: <FaNodeJs />, link: "https://nodejs.org/" },
  { icon: <SiExpress />, link: "https://expressjs.com/" },
  { icon: <SiFlask />, link: "https://flask.palletsprojects.com/" },
  { icon: <SiFastapi />, link: "https://fastapi.tiangolo.com/" },

  { icon: <SiMongodb />, link: "https://www.mongodb.com/" },
  { icon: <SiMysql />, link: "https://www.mysql.com/" },
  { icon: <SiSupabase />, link: "https://supabase.com/" },
  { icon: <FaDatabase />, link: "https://en.wikipedia.org/wiki/Database" },

  { icon: <SiPython />, link: "https://www.python.org/" },
  { icon: <SiPandas />, link: "https://pandas.pydata.org/" },
  { icon: <SiScikitlearn />, link: "https://scikit-learn.org/" },

  { icon: <FaGitAlt />, link: "https://git-scm.com/" },
  { icon: <FaGithub />, link: "https://github.com/" },
  { icon: <FaAws />, link: "https://aws.amazon.com/" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-sky-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-extrabold mb-10 text-gray-900">
          Technical Skills
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <SkillIcon key={index} icon={skill.icon} link={skill.link} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Skill link"
      className="
        h-16 w-16
        flex items-center justify-center
        rounded-lg
        bg-white
        shadow-sm
        hover:bg-sky-200
        hover:scale-105
        transition
      "
    >
      <div className="text-3xl text-gray-800">
        {icon}
      </div>
    </a>
  );
}
