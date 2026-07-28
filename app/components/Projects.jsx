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
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#081221] to-slate-900 py-24"
    >
      {/* Background Effects */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:70px_70px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Portfolio
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-500" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            A selection of research and software engineering projects
            demonstrating my interests in Artificial Intelligence,
            Backend Engineering, Computer Vision, and Cloud Computing.
          </p>

        </div>

        {/* Featured Projects */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {featuredProjects.map((project) => {

            const Icon =
              iconMap[project.icon] || Database;

            return (

              <article
                key={project.id}
                className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${project.hoverGradient}`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-1 text-[11px] font-semibold text-yellow-300">
                    Featured
                  </span>
                </div>

                {/* Category */}
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Status */}
                <div className="mt-3">
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[11px] font-semibold text-blue-300">
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-300 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies
                    .slice(0, 4)
                    .map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-[11px] font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                {/* Key Highlights */}
                <div className="mt-5 space-y-2">
                  {project.highlights
                    ?.slice(0, 2)
                    .map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-2"
                      >
                        <Zap
                          size={14}
                          className="mt-1 shrink-0 text-blue-400"
                        />

                        <span className="text-sm leading-6 text-slate-300">
                          {highlight}
                        </span>
                      </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between border-t border-slate-800 pt-5">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-blue-400"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  ) : (
                    <div />
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                    >
                      Live Demo
                      <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </article>

            );

          })}

        </div>

        {/* CTA */}

        <div className="mt-24 text-center">

          <p className="mb-6 text-lg text-slate-400">
            Interested in collaborating on AI research, backend engineering,
            or cloud-native software development?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
          >

            Let's Work Together

            <ArrowRight size={20} />

          </a>

        </div>

      </div>

    </section>
  );
}