"use client";

import research from "../../data/research";
import {
  Cpu,
  Eye,
  ShieldCheck,
  Cloud,
  Lock,
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
      className="relative bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Research Interests
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            My research explores efficient, scalable, and trustworthy
            computing systems across Artificial Intelligence, Cloud
            Computing, Distributed Systems, and Cybersecurity.
          </p>

        </div>

        {/* Research Interests */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {research.interests.map((item) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  {Icon && <Icon size={28} />}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Current Focus */}

        <div className="mt-20">

          <h3 className="mb-8 text-2xl font-semibold text-white">
            Current Research Focus
          </h3>

          <div className="grid gap-4">

            {research.currentFocus.map((focus) => (
              <div
                key={focus}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <p className="text-slate-300">
                  {focus}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Favorite Subjects */}

        <div className="mt-20">

          <h3 className="mb-8 text-2xl font-semibold text-white">
            Favorite Subjects
          </h3>

          <div className="grid gap-6 md:grid-cols-2">

            {research.favoriteSubjects.map((subject) => (
              <div
                key={subject.name}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <h4 className="mb-3 text-lg font-semibold text-white">
                  {subject.name}
                </h4>

                <p className="text-slate-400">
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