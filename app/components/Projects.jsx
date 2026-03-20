"use client";

import { Bot, Globe, Server, Cloud, ExternalLink, ArrowRight, ShoppingCart, Users, Database, Zap } from "lucide-react";

const projects = [
  {
    title: "Health AI Conversation Agent",
    service: "AI Chatbot Development",
    description:
      "AI health assistant for intelligent, context-aware conversations using A2A protocol and Google Gemini AI.",
    tech: ["Python", "FastAPI", "Gemini AI", "A2A Protocol"],
    result: "Delivered 24/7 patient support and reduced response time by 70%.",
    icon: Bot,
    hoverGradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "E-Commerce Platform",
    service: "Startup Website",
    description:
      "Full-stack e-commerce system with product management, cart functionality, and order processing.",
    tech: ["Node.js", "Express", "MongoDB", "Bootstrap"],
    result: "Enabled smooth product browsing and order management with scalable backend architecture.",
    icon: ShoppingCart,
    hoverGradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Student Admission Count Predictor",
    service: "Backend APIs",
    description:
      "Machine learning project using Random Forest Regression to predict student admission volumes.",
    tech: ["Python", "FastAPI", "Scikit-learn", "Pandas"],
    result: "Achieved 92% accuracy in forecasting admissions, aiding resource planning.",
    icon: Users,
    hoverGradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Recruitment Strategy Optimization",
    service: "Data Analytics",
    description:
      "Data-driven enrolment analysis identifying trends and bottlenecks to improve recruitment outcomes.",
    tech: ["Python", "SQL", "Pandas", "Matplotlib"],
    result: "Increased enrollment conversion by 25% through targeted strategies.",
    icon: Database,
    hoverGradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Cloud-Native API Gateway",
    service: "Cloud Deployment",
    description:
      "Deployed a scalable API gateway with auto-scaling and monitoring on AWS ECS.",
    tech: ["Docker", "AWS ECS", "FastAPI", "Prometheus"],
    result: "Handled 10k+ requests per minute with 99.9% uptime.",
    icon: Cloud,
    hoverGradient: "from-orange-500 to-red-500",
  },
  {
    title: "Backend API System",
    service: "Backend APIs",
    description:
      "Designed and developed REST APIs with authentication and database integration for modern web applications.",
    tech: ["FastAPI", "JWT Auth", "MongoDB"],
    result: "Provided secure and scalable API endpoints for frontend integration.",
    icon: Server,
    hoverGradient: "from-rose-500 to-pink-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-grid-slate-800/20" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
            Real-world solutions built to solve problems and deliver scalable results for modern applications.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-transparent"
              >
                {/* Unique gradient border on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-r ${project.hoverGradient} blur-md`}
                />

                <div className="relative z-10">
                  {/* Icon with unique gradient */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.hoverGradient} p-2.5 flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title & Service tag */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                      {project.service}
                    </span>
                  </div>

                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Result */}
                  <p className="mt-4 text-sm font-medium text-gray-800 dark:text-gray-300 flex items-start gap-2">
                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{project.result}</span>
                  </p>

                  {/* "Learn more" link */}
                  <div className="mt-5 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}