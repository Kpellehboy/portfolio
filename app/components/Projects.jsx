import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Health AI Conversation Agent (Ongoing)",
    description:
      "AI health assistant for intelligent, context-aware conversations using A2A protocol and Google Gemini AI.",
    github: "https://github.com/Kpellehboy/AI-agent--Health",
    image: "/Ai.png",
  },
  {
    title: "Student Admission Count Predictor",
    description:
      "Machine learning project using Random Forest Regression to predict student admission volumes.",
    github: "https://github.com/Kpellehboy/Student-Admission-Predictor-MachineLearning",
    image: "/Admission.jpeg",
  },
  {
    title: "Recruitment Strategy Optimization",
    description:
      "Data-driven enrolment analysis identifying trends and bottlenecks to improve recruitment outcomes.",
    github: "https://github.com/Kpellehboy/Recruitment-Strategy-Optimization-Data-Driven-Enrolment-Analysis",
    image: "/data.jpeg",
  },
  {
    title: "Country Currency & Exchange API",
    description:
      "RESTful API built with Python and Flask supporting CRUD operations and MySQL caching.",
    github: "https://github.com/Kpellehboy/Country-Currency-Exchange-API",
    image: "/Currency.png",
  },
  {
    title: "Productivity Pulse",
    description:
      "Productivity tracking application built with TypeScript and Supabase.",
    github: "https://github.com/Kpellehboy/productivity-pulse",
    image: "/product.png",
  },
  {
    title: "KpellehTech-Solution",
    description:
      "Single-page web application with HTML/CSS/JS frontend and Node.js + MongoDB backend.",
    github: "https://github.com/Kpellehboy/KpellehTech-Solution",
    image: "/kbk.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Projects
          </h2>
          <div className="mt-2 h-1 w-16 bg-gray-900" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                rounded-lg
                bg-white
                p-5
                border
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              {/* Project Image */}
              <div className="mb-3 relative h-28 w-full overflow-hidden rounded">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 leading-snug">
                {project.description}
              </p>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
