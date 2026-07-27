"use client";

import skills from "../../data/skills";

import {
  Code2,
  Brain,
  Database,
  Cloud,
  Wrench,
  Shield,
  Monitor,
  Languages,
  BookOpen,
} from "lucide-react";

const iconMap = {
  code: Code2,
  frontend: Monitor,
  ai: Brain,
  database: Database,
  cloud: Cloud,
  tools: Wrench,
  security: Shield,
  research: BookOpen,
  language: Languages,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold">

            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Technical Skills
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Technologies, programming languages, frameworks, cloud platforms,
            databases, and research tools that I use to build modern software
            systems and AI solutions.
          </p>

        </div>

        {/* Skill Categories */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((category) => {

            const Icon = iconMap[category.icon] || Code2;

            return (

              <article
                key={category.id}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500">

                  <Icon className="h-7 w-7 text-white" />

                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </article>

            );
          })}

        </div>

      </div>
    </section>
  );
}