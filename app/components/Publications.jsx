"use client";

import publications from "../../data/publications";

import {
  Calendar,
  BookOpen,
  ExternalLink,
  FileText,
} from "lucide-react";

export default function Publications() {
  return (
    <section
      id="publications"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#081221] to-slate-900 py-24"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Research
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Publications
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-500" />

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Conference publications and ongoing research
            in Artificial Intelligence, Computer Vision,
            Edge AI and Intelligent Systems.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 h-full w-px bg-slate-700" />

          <div className="space-y-12">

            {publications.map((publication) => (

              <article
                key={publication.id}
                className="relative pl-16"
              >

                {/* Timeline Dot */}

                <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 bg-slate-950 shadow-lg shadow-blue-500/20">

                  <BookOpen
                    size={18}
                    className="text-blue-400"
                  />

                </div>

                {/* Publication Card */}

                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">

                  {/* Top Row */}

                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                    <div className="flex-1">

                      {/* Venue */}

                      <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">

                        {publication.venue}

                      </p>

                      {/* Title */}

                      <h3 className="mt-3 text-2xl font-bold leading-snug text-white">

                        {publication.title}

                      </h3>

                      {/* Meta */}

                      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">

                        <span>
                          {publication.authorPosition}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-slate-600" />

                        <div className="flex items-center gap-2">

                          <Calendar size={14} />

                          {publication.month} {publication.year}

                        </div>

                      </div>

                      {/* Description */}

                      <p className="mt-5 max-w-3xl leading-7 text-slate-300">

                        {publication.description}

                      </p>

                      {/* Keywords */}

                      <div className="mt-5 flex flex-wrap gap-2">

                        {publication.keywords
                          .slice(0, 4)
                          .map((keyword) => (

                            <span
                              key={keyword}
                              className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                            >
                              {keyword}
                            </span>

                          ))}
                      </div>

                    </div>

                    {/* Status Panel */}
                    <div className="w-full rounded-xl border border-slate-800 bg-slate-900 p-5 md:w-56">


                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${publication.status === "Accepted"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : publication.status === "Submitted"
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          }`}
                      >
                        {publication.status}
                      </span>

                      {/* Links */}

                      <div className="mt-6 space-y-3">

                        {publication.paper && (
                          <a
                            href={publication.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-blue-400"
                          >
                            <ExternalLink size={16} />
                            View Paper
                          </a>
                        )}

                        {publication.code && (
                          <a
                            href={publication.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-blue-400"
                          >
                            <ExternalLink size={16} />
                            Source Code
                          </a>
                        )}

                        {publication.doi && (
                          <a
                            href={`https://doi.org/${publication.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-blue-400"
                          >
                            <ExternalLink size={16} />
                            DOI
                          </a>
                        )}

                        {!publication.paper &&
                          !publication.code &&
                          !publication.doi && (
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <FileText size={16} />
                              Links coming soon
                            </div>
                          )}
                      </div>
                    </div>

                  </div>
                </div>
              </article>

            ))}

          </div>
        </div>

        {/* Bottom Note */}

        <div className="mx-auto mt-20 max-w-3xl text-center">

          <p className="text-sm leading-7 text-slate-500">
             Additional publications and research outputs will be added as they become available.
          </p>

        </div>

      </div>
    </section>
  );
}