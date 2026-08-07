"use client";

import skills from "../../data/skills";

import {
  Code2,
  Brain,
  Database,
  Cloud,
  Wrench,
  Monitor,
  BookOpen,
  Languages,
  Server,
  BarChart3,
  Cpu,
} from "lucide-react";

const iconMap = {
  code: Code2,
  frontend: Monitor,
  server: Server,
  ai: Brain,
  database: Database,
  cloud: Cloud,
  tools: Wrench,
  research: BookOpen,
  language: Languages,
  analytics: BarChart3,
  engineering: Cpu,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

        {/* Cyan glow */}
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* Purple glow */}
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-[160px]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Expertise
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Technical Skills
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" />

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            A focused technical stack spanning{" "}
            <span className="font-medium text-slate-200">
              Artificial Intelligence
            </span>
            ,{" "}
            <span className="font-medium text-slate-200">
              Backend Engineering
            </span>
            ,{" "}
            <span className="font-medium text-slate-200">
              Databases
            </span>
            ,{" "}
            <span className="font-medium text-slate-200">
              Cloud Computing
            </span>
            , and{" "}
            <span className="font-medium text-slate-200">
              Data Analytics
            </span>
            .
          </p>
        </div>

        {/* =========================================================
            SKILL CATEGORIES
        ========================================================== */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => {
            const Icon = iconMap[category.icon] || Code2;

            return (
              <article
                key={category.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900 hover:shadow-2xl"
              >
                {/* =================================================
                    RAINBOW BORDER EFFECT
                ================================================== */}

                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-violet-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="relative z-10">
                  {/* Icon */}

                  <div className="mb-5 flex items-center justify-between">
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80">
                      {/* Gradient glow */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-violet-500/20 opacity-70" />

                      <Icon
                        size={21}
                        className="relative z-10 text-blue-400 transition-colors duration-300 group-hover:text-cyan-300"
                      />
                    </div>

                    {/* Category number */}

                    <span className="text-xs font-medium text-slate-600">
                      {String(category.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Category */}

                  <h3 className="text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {category.category}
                  </h3>

                  {/* Description */}

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-400">
                    {category.description}
                  </p>

                  {/* =================================================
                      SKILLS
                  ================================================== */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-700/80 bg-slate-800/70 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-800 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    BOTTOM GRADIENT LINE
                ================================================== */}

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 opacity-20 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM SUMMARY
        ========================================================== */}

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 px-6 py-5 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <div>
                <p className="text-sm font-semibold text-white">
                  Engineering + Research
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Building intelligent systems from research concepts to
                  production-ready applications.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                  AI
                </span>

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  Backend
                </span>

                <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                  Cloud
                </span>

                <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                  Research
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}