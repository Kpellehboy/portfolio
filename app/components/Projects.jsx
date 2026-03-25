"use client";

import {
  Bot,
  Server,
  Cloud,
  ArrowRight,
  ShoppingCart,
  Users,
  Database,
  Zap,
} from "lucide-react";

const projects = [
  // 🤖 AI PROJECTS
  
  {
    title: "AI-Commerce Assistant API",
    category: "AI & Backend",
    description:
      "AI-powered API for assisting users in e-commerce platforms with recommendations and queries.",
    tech: ["Node.js", "Express", "AI API"],
    result: "Enhanced user interaction with intelligent product suggestions.",
    icon: ShoppingCart,
    hoverGradient: "from-indigo-500 to-blue-500",
    github: "https://github.com/your-username/AI-Commerce-Assistant-API",
    live: "#",
    featured: true,
  },
  {
    title: "Real-Time Object Detection (YOLOv8)",
    category: "AI & Computer Vision",
    description:
      "Real-time object detection system using YOLOv8 for detecting and tracking objects in live video streams.",
    tech: ["Python", "YOLOv8", "OpenCV"],
    result: "Achieved fast and accurate object detection in real-time scenarios.",
    icon: Bot,
    hoverGradient: "from-blue-500 to-cyan-400",
    github: "https://github.com/your-username/Real-Time-Object-Detection-using-YOLOv8",
    live: "#",
    featured: true,
  },

  // 🧠 ML PROJECT
  {
    title: "Student Admission Predictor",
    category: "Machine Learning",
    description:
      "Machine learning model using Random Forest to predict student admission chances.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    result: "Achieved high prediction accuracy for admission forecasting.",
    icon: Users,
    hoverGradient: "from-purple-500 to-pink-500",
    github: "https://github.com/your-username/Student-Admission-Predictor-MachineLearning",
    live: "#",
  },

  // ⚙️ BACKEND PROJECTS
  {
    title: "TaskFlow API",
    category: "Backend Engineering",
    description:
      "REST API for task management with CRUD operations and structured backend logic.",
    tech: ["Python", "FastAPI", "MongoDB"],
    result: "Efficient task handling system with scalable API design.",
    icon: Server,
    hoverGradient: "from-emerald-500 to-teal-400",
    github: "https://github.com/your-username/TaskFlowApp_API",
    live: "#",
  },
  {
    title: "Currency Exchange API",
    category: "Backend Engineering",
    description:
      "API providing real-time currency conversion using external exchange rate data.",
    tech: ["Python", "API Integration"],
    result: "Accurate and fast currency conversion system.",
    icon: Cloud,
    hoverGradient: "from-orange-500 to-red-500",
    github: "https://github.com/your-username/Country-Currency-Exchange-API",
    live: "#",
  },
  {
    title: "String Analyzer Service",
    category: "Backend Engineering",
    description:
      "Service for analyzing strings including character count, patterns, and transformations.",
    tech: ["Python"],
    result: "Efficient string processing with optimized logic.",
    icon: Database,
    hoverGradient: "from-rose-500 to-pink-500",
    github: "https://github.com/your-username/String_Analyzer_Service",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gray-50 dark:bg-gray-950"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
            I build scalable backend systems, AI-powered applications, and
            cloud-ready solutions focused on real-world impact.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Featured */}
                {project.featured && (
                  <span className="absolute top-3 right-3 text-xs bg-yellow-400 text-black px-2 py-1 rounded">
                    Featured
                  </span>
                )}

                {/* Card */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.hoverGradient} flex items-center justify-center mb-5`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  {/* Category */}
                  <span className="text-xs text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>

                  {/* Description */}
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Result */}
                  <p className="mt-4 text-sm font-semibold text-blue-600 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    {project.result}
                  </p>

                  {/* Links */}
                  <div className="mt-5 flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="text-sm font-medium text-blue-600 hover:underline flex items-center"
                    >
                      Live Demo <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
        <a
         href="#contact"
         className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
        Let’s Work Together
         </a>
        </div>
      </div>
    </section>
  );
}