"use client";

import projects from "../../data/projects";

import {
  Bot,
  Server,
  Cloud,
  Database,
  Shield,
  ArrowRight,
  Zap,
  Github,
} from "lucide-react";

const iconMap = {
  bot: Bot,
  server: Server,
  cloud: Cloud,
  database: Database,
  shield: Shield,
};

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="relative py-24 bg-gray-50 dark:bg-gray-950"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Selected projects showcasing my work in backend engineering,
            artificial intelligence, cloud computing, and scalable software
            development.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => {
            const Icon = iconMap[project.icon] || Database;

            return (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Featured Badge */}
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
                    Featured
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${project.hoverGradient}`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Category */}
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Status */}
                <div className="mt-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                {project.highlights?.length > 0 && (
                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                      Highlights
                    </h4>

                    <div className="space-y-2">
                      {project.highlights
                        .slice(0, 3)
                        .map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <Zap className="mt-0.5 h-4 w-4 text-blue-500" />

                            <span>{highlight}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="mt-8 flex items-center gap-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
                    >
                      Live Demo

                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}