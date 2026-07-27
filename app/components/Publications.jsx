"use client";

import publications from "../../data/publications";
import {
  BookOpen,
  Calendar,
  ExternalLink,
  FileText,
} from "lucide-react";

export default function Publications() {
  return (
    <section
      id="publications"
      className="relative py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold">

            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Publications & Research
            </span>

          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            Research papers, publications, and ongoing academic work in
            Artificial Intelligence, Cloud Computing, Computer Vision,
            Distributed Systems, and Network Security.
          </p>

        </div>

        {/* Publications */}

        <div className="mt-16 space-y-8">

          {publications.map((publication) => (

            <article
              key={publication.id}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
            >

              <div className="flex flex-col gap-6 md:flex-row md:justify-between">

                <div className="flex-1">

                  <div className="flex items-center gap-3">

                    <BookOpen className="text-blue-600" />

                    <span className="text-sm font-medium text-blue-600">
                      {publication.type}
                    </span>

                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                    {publication.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                    {publication.abstract}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {publication.keywords.map((keyword) => (

                      <span
                        key={keyword}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800"
                      >
                        {keyword}
                      </span>

                    ))}

                  </div>

                </div>

                <div className="md:w-64">

                  <div className="space-y-4 rounded-xl bg-slate-50 p-5 dark:bg-slate-900">

                    <div className="flex items-center gap-2">

                      <Calendar size={16} />

                      <span>{publication.year}</span>

                    </div>

                    <div>

                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        {publication.status}
                      </span>

                    </div>

                    {publication.link && (

                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <ExternalLink size={16} />

                        View Publication

                      </a>

                    )}

                    {!publication.link && (

                      <div className="inline-flex items-center gap-2 text-slate-500">

                        <FileText size={16} />

                        Coming Soon

                      </div>

                    )}

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}