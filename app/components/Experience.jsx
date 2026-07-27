"use client";

import experience from "../../data/experience";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Professional Experience
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            My experience spans backend engineering, AI development, and
            collaborative software engineering, with a strong focus on building
            scalable and production-ready systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-6xl">

          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-blue-500 md:left-1/2 md:-translate-x-1/2" />

          {experience.map((job, index) => (
            <div
              key={job.id}
              className={`relative mb-16 flex flex-col md:flex-row ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >

              {/* Timeline Dot */}
              <div className="absolute left-2.5 top-6 z-10 h-6 w-6 rounded-full border-4 border-slate-950 bg-blue-500 shadow-lg md:left-1/2 md:-translate-x-1/2" />

              {/* Card */}
              <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-8">

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500">

                  {/* Title */}
                  <div className="mb-5 flex items-start gap-3">

                    <Briefcase
                      className="mt-1 text-blue-400"
                      size={28}
                    />

                    <div>

                      <h3 className="text-2xl font-bold text-white">
                        {job.position}
                      </h3>

                      <p className="font-semibold text-blue-400">
                        {job.company}
                      </p>

                    </div>

                  </div>

                  {/* Meta */}

                  <div className="mb-6 space-y-2 text-sm text-slate-400">

                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {job.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </div>

                    <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                      {job.employmentType}
                    </span>

                  </div>

                  {/* Description */}

                  <p className="leading-7 text-slate-300">
                    {job.description}
                  </p>

                  {/* Responsibilities */}

                  <div className="mt-8">

                    <h4 className="mb-3 font-semibold text-white">
                      Responsibilities
                    </h4>

                    <div className="space-y-3">

                      {job.responsibilities.map((task) => (
                        <div
                          key={task}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-1 text-blue-400"
                          />

                          <p className="text-slate-400">
                            {task}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>

                  {/* Technologies */}

                  <div className="mt-8">

                    <h4 className="mb-3 font-semibold text-white">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">

                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Achievements */}

                  <div className="mt-8">

                    <h4 className="mb-3 font-semibold text-white">
                      Key Achievements
                    </h4>

                    <div className="space-y-2">

                      {job.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-1 text-green-400"
                          />

                          <p className="text-slate-400">
                            {achievement}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}