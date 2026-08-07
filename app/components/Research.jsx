"use client";

import research from "../../data/research";

import {
  Cpu,
  Eye,
  ShieldCheck,
  Cloud,
  Lock,
} from "lucide-react";

/* ==========================================================
   ICON MAP
   ========================================================== */

const iconMap = {
  cpu: Cpu,
  eye: Eye,
  "shield-check": ShieldCheck,
  cloud: Cloud,
  lock: Lock,
};

/* ==========================================================
   RESEARCH COMPONENT
   ========================================================== */

export default function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-28"
    >
      {/* ======================================================
          BACKGROUND EFFECTS
          ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Top-left glow */}
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />

        {/* Bottom-right glow */}
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      {/* ======================================================
          CONTENT
          ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* ====================================================
            HEADER
            ==================================================== */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Research
          </span>

          <h2
            id="research-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Research Interests
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500"
          />

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            My research explores intelligent, efficient, scalable, and
            trustworthy computing systems, with a focus on Edge AI,
            Computer Vision, and secure cloud and distributed systems.
          </p>
        </div>

        {/* ====================================================
            RESEARCH INTERESTS
            ==================================================== */}

        <div
          className={`grid gap-6 ${
            research.interests.length === 1
              ? "mx-auto max-w-md"
              : research.interests.length === 2
                ? "mx-auto max-w-4xl md:grid-cols-2"
                : "mx-auto max-w-6xl md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {research.interests.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/60 hover:bg-slate-900 hover:shadow-xl hover:shadow-blue-500/10 sm:p-7"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-500/10 transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/15">
                  {Icon && (
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-300"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-blue-400">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* ====================================================
            CURRENT RESEARCH FOCUS
            ==================================================== */}

        {research.currentFocus?.length > 0 && (
          <div className="mx-auto mt-16 max-w-5xl border-t border-slate-800/80 pt-10">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Current Focus
              </span>

              <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
                {research.currentFocus.map((focus, index) => (
                  <div
                    key={`${index}-${focus.slice(0, 30)}`}
                    className="rounded-xl border border-slate-800/70 bg-slate-900/40 px-5 py-4"
                  >
                    <div className="flex gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-semibold text-blue-400">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-7 text-slate-400">
                        {focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}