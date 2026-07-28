"use client";

import education from "../../data/education";

import {
  GraduationCap,
  Calendar,
  MapPin,
  Globe,
  Award,
} from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-gray-50 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
            My academic journey has built a strong foundation in Computer
            Science, Artificial Intelligence, Cloud Computing, and Software
            Engineering while supporting my research interests.
          </p>

        </div>

        <div className="relative mx-auto max-w-6xl">

          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-blue-600 md:left-1/2 md:-translate-x-1/2" />

          {education.map((item, index) => (

            <div
              key={item.id}
              className={`relative mb-20 flex flex-col md:flex-row ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >

              <div className="absolute left-2.5 top-8 z-20 h-6 w-6 rounded-full border-4 border-white bg-blue-600 md:left-1/2 md:-translate-x-1/2 dark:border-slate-900" />

              <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-8">

                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">

                  <div className="flex items-start gap-4">

                    <GraduationCap
                      className="mt-1 text-blue-600"
                      size={30}
                    />

                    <div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>

                      <p className="font-semibold text-blue-600">
                        {item.institution}
                      </p>

                    </div>

                  </div>

                  <div className="mt-6 space-y-3 text-sm text-slate-500">

                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {item.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {item.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <Award size={16} />
                      {item.grade}
                    </div>

                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <Globe size={16} />
                        Visit University
                      </a>
                    )}

                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {item.status}
                    </span>

                  </div>

                  <p className="mt-6 leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  {item.highlights.length > 0 && (
                    <>

                      <h4 className="mt-8 mb-3 font-semibold text-slate-900 dark:text-white">
                        Highlights
                      </h4>

                      <div className="flex flex-wrap gap-2">

                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                          >
                            {highlight}
                          </span>
                        ))}

                      </div>

                    </>
                  )}

                  {item.coursework.length > 0 && (
                    <>

                      <h4 className="mt-8 mb-3 font-semibold text-slate-900 dark:text-white">
                        Relevant Coursework
                      </h4>

                      <div className="flex flex-wrap gap-2">

                        {item.coursework.map((course) => (
                          <span
                            key={course}
                            className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800"
                          >
                            {course}
                          </span>
                        ))}

                      </div>

                    </>
                  )}

                  {item.technologies.length > 0 && (
                    <>

                      <h4 className="mt-8 mb-3 font-semibold text-slate-900 dark:text-white">
                        Technologies
                      </h4>

                      <div className="flex flex-wrap gap-2">

                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-green-50 px-3 py-1 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-300"
                          >
                            {tech}
                          </span>
                        ))}

                      </div>

                    </>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}