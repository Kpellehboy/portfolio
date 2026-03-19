import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  // 🔥 CORE BACKEND PROJECTS
  {
    title: "Student Management System API (In Progress)",
    description:
      "Developing a backend system using FastAPI and PostgreSQL with authentication, optimized CRUD operations, and RESTful APIs for efficient student data management.",
    tech: "FastAPI • PostgreSQL • Authentication",
    github: null,
    image: "/SMS.jpeg",
  },
  {
    title: "E-Commerce Backend API",
    description:
      "Built a scalable backend using FastAPI and PostgreSQL with product management, order processing, and RESTful APIs. Designed for performance and clean architecture.",
    tech: "FastAPI • PostgreSQL • REST API",
    github: "https://github.com/Kpellehboy/Leelah-carft_Backend",
    image: "/leela.jpg",
  },
  
  {
    title: "Country Currency Exchange API",
    description:
      "Engineered a Flask-based REST API integrating external exchange rate data with CRUD operations and MySQL caching for improved performance and reliability.",
    tech: "Flask • MySQL • REST API",
    github: "https://github.com/Kpellehboy/Country-Currency-Exchange-API",
    image: "/Currency.png",
  },

  // 📊 DATA / ML PROJECTS
  {
    title: "Student Admission Predictor",
    description:
      "Machine learning model using Random Forest Regression to predict student admission volumes based on historical data.",
    tech: "Python • Scikit-learn • Pandas",
    github: "https://github.com/Kpellehboy/Student-Admission-Predictor-MachineLearning",
    image: "/Admission.jpeg",
  },
  {
    title: "Health AI Conversation Agent",
    description:
      "AI-powered conversational assistant using Google Gemini API for context-aware health-related interactions.",
    tech: "Python • AI • LLM",
    github: "https://github.com/Kpellehboy/AI-agent--Health",
    image: "/Ai.png",
  },

  // 📈 DATA ANALYSIS PROJECT (NEW ADDITION)
  {
    title: "Recruitment Data Analysis",
    description:
      "Performed data analysis on student enrollment trends using Python and SQL, identifying key patterns and generating insights to improve recruitment strategies.",
    tech: "Python • SQL • Data Analysis",
    github: "https://github.com/Kpellehboy/Recruitment-Strategy-Optimization-Data-Driven-Enrolment-Analysis",
    image: "/data.jpeg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Projects
          </h2>
          <div className="mt-2 h-1 w-16 bg-gray-900" />
        </div>

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
              <div className="mb-3 relative h-28 w-full overflow-hidden rounded">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-base font-semibold text-gray-900">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-snug">
                {project.description}
              </p>

              <p className="mt-2 text-xs text-gray-500">
                {project.tech}
              </p>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}