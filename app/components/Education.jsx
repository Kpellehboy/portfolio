"use client";

import education from "../../data/education";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-gray-50 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
            My academic journey has provided a strong foundation in computer
            science, artificial intelligence, cloud computing, and backend
            engineering while supporting my research interests.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-blue-500 md:left-1/2 md:-translate-x-1/2" />

          {education.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-16 flex flex-col md:flex-row ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >

              {/* Dot */}
              <div className="absolute left-2.5 top-5 z-10 h-6 w-6 rounded-full border-4 border-white bg-blue-600 shadow-lg md:left-1/2 md:-translate-x-1/2 dark:border-slate-900" />

              {/* Card */}
              <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-8">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">

                  {/* Degree */}
                  <div className="mb-4 flex items-center gap-3">
                    <GraduationCap className="text-blue-500" size={28} />

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>

                      <p className="font-medium text-blue-500">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="mb-5 space-y-2 text-sm text-slate-500">

                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {item.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {item.location}
                    </div>

                    <div>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        {item.status}
                      </span>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  {/* Coursework */}
                  <div className="mt-6">

                    <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">
                      Relevant Coursework
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Technologies */}
                  <div className="mt-6">

                    <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                        >
                          {tech}
                        </span>
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