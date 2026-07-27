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
      className="relative py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold">

            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Licenses & Certifications
            </span>

          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            Professional certifications and technical training supporting
            my expertise in Artificial Intelligence, Backend Engineering,
            Data Analytics, and Software Development.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {certifications.map((certificate) => (

            <article
              key={certificate.id}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
            >

              <div className="flex justify-between items-start">

                <Award className="text-blue-600" size={34} />

                {certificate.featured && (
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                    Featured
                  </span>
                )}

              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                {certificate.title}
              </h3>

              <p className="mt-2 font-medium text-blue-600">
                {certificate.issuer}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">

                <Calendar size={16} />

                {certificate.issued}

              </div>

              {certificate.credentialId && (

                <div className="mt-3 text-sm text-slate-500">

                  Credential ID

                  <div className="font-medium">
                    {certificate.credentialId}
                  </div>

                </div>

              )}

              <div className="mt-6 flex flex-wrap gap-2">

                {certificate.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              {certificate.credentialUrl && (

                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <BadgeCheck size={18} />

                  Verify Credential

                  <ExternalLink size={16} />

                </a>

              )}

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}