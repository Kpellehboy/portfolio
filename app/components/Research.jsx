"use client";

import research from "../../data/research";
import {
  Cpu,
  Eye,
  ShieldCheck,
  Cloud,
  Lock,
  ArrowRight,
} from "lucide-react";

const icons = {
  cpu: Cpu,
  eye: Eye,
  "shield-check": ShieldCheck,
  cloud: Cloud,
  lock: Lock,
};

export default function Research() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#081221] to-slate-900 py-20"
    >
      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:72px_72px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Research
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Research Interests
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            My research focuses on developing intelligent, efficient,
            scalable, and trustworthy computing systems across Artificial
            Intelligence, Computer Vision, Cloud Computing, Distributed
            Systems, and Cybersecurity.
          </p>

        </div>

        {/* Research Cards */}

        <div className="flex flex-wrap justify-center gap-8">

          {research.interests.map((item) => {

            const Icon = icons[item.icon];

            return (

              <div
                key={item.title}
                className="group w-full max-w-[370px] rounded-3xl border border-[#1E40AF]/20 bg-gradient-to-br from-slate-900 to-[#111827] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#2563EB] hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-[#1E40AF]/15 p-4">

                  {Icon && (
                    <Icon
                      size={30}
                      className="text-blue-400"
                    />
                  )}

                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white transition group-hover:text-blue-400">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-400">
                  {item.description}
                </p>

              </div>

            );
          })}

        </div>

        {/* Current Research Focus */}

        <div className="mt-24">

          <div className="mb-8">

            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Current Focus
            </span>

            <h3 className="mt-2 text-3xl font-bold text-white">
              Current Research Focus
            </h3>

          </div>

          <div className="space-y-5">

            {research.currentFocus.map((focus) => (

              <div
                key={focus}
                className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500"
              >

                <ArrowRight
                  size={22}
                  className="mt-1 shrink-0 text-blue-400"
                />

                <p className="leading-8 text-slate-300">
                  {focus}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Favorite Subjects */}

        <div className="mt-24">

          <div className="mb-8">

            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Academic Interests
            </span>

            <h3 className="mt-2 text-3xl font-bold text-white">
              Favorite Subjects
            </h3>

          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            {research.favoriteSubjects.map((subject) => (

              <div
                key={subject.name}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-[#111827] p-5 transition-all duration-300 hover:border-blue-500"
              >

                <h4 className="mb-3 text-xl font-semibold text-white">
                  {subject.name}
                </h4>

                <p className="leading-8 text-slate-400">
                  {subject.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}