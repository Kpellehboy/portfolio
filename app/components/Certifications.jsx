"use client";

import certifications from "../../data/certifications";

import {
  Award,
  Calendar,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#081221] to-slate-900 py-24"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Professional Development
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Licenses & Certifications
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-500" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
            Selected professional certifications demonstrating continuous learning in{" "}
            <span className="font-semibold text-white">
              Artificial Intelligence
            </span>
            ,{" "}
            <span className="font-semibold text-white">
              Natural Language Processing
            </span>
            ,{" "}
            <span className="font-semibold text-white">
              Software Engineering
            </span>
            ,{" "}
            <span className="font-semibold text-white">
              Cloud Computing
            </span>
            ,{" "}
            <span className="font-semibold text-white">
              Backend Development
            </span>
            , and{" "}
            <span className="font-semibold text-white">
              Generative AI
            </span>
            .
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {certifications.map((certificate) => (

            <article
              key={certificate.id}
              className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >

              {/* Top */}

              <div className="flex items-start justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">

                  <Award
                    size={22}
                    className="text-blue-400"
                  />

                </div>

                {certificate.featured && (

                  <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-1 text-[11px] font-semibold text-yellow-300">
                    Featured
                  </span>

                )}

              </div>

              {/* Title */}

              <h3 className="mt-5 text-xl font-bold leading-snug text-white">
                {certificate.title}
              </h3>

              {/* Issuer */}

              <p className="mt-2 font-medium text-blue-400">
                {certificate.issuer}
              </p>

              {/* Date */}

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">

                <Calendar size={15} />

                {certificate.issued}

              </div>

              {/* Skills */}


              <div className="mt-5 flex flex-wrap gap-2">

                {certificate.skills.slice(0, 4).map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {skill}
                  </span>

                ))}

                {certificate.skills.length > 4 && (

                  <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    +{certificate.skills.length - 4}
                  </span>

                )}

              </div>

              {/* Footer */}

              <div className="mt-auto pt-6">

                {certificate.credentialUrl ? (

                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                  >

                    <BadgeCheck size={17} />

                    View Credential

                    <ExternalLink size={15} />

                  </a>

                ) : (

                  <span className="inline-flex items-center gap-2 text-sm text-slate-500">

                    <BadgeCheck size={17} />

                    Certificate Completed

                  </span>

                )}

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}