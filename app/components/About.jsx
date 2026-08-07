"use client";

import Image from "next/image";
import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  Eye,
  Network,
} from "lucide-react";

import personal from "../../data/personal";

/* ==========================================================
   ICON MAPPING
   ========================================================== */

const iconMap = {
  "Artificial Intelligence": Brain,
  "Edge AI": Cpu,
  "Computer Vision": Eye,
  "Backend Engineering": Code2,
  "Cloud Computing": Cloud,
  "Distributed Systems": Network,
};

/* ==========================================================
   ABOUT COMPONENT
   ========================================================== */

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-28"
    >
      {/* ======================================================
          BACKGROUND
          ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Left glow */}
        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[130px]" />

        {/* Right glow */}
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      {/* ======================================================
          CONTENT
          ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">
          {/* ==================================================
              PROFILE IMAGE
              ================================================== */}

          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Image glow */}
              <div
                aria-hidden="true"
                className="absolute -bottom-8 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[90px]"
              />

              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 shadow-2xl shadow-black/30">
                <Image
                  src={personal.aboutImage}
                  alt={`Portrait of ${personal.name}`}
                  width={340}
                  height={420}
                  priority
                  sizes="(max-width: 1024px) 320px, 340px"
                  className="h-[420px] w-[320px] object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* ==================================================
              ABOUT CONTENT
              ================================================== */}

          <div className="min-w-0 max-w-3xl">
            {/* Section label */}
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              About Me
            </span>

            {/* Heading */}
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Building Intelligent Systems
              <span className="mt-1 block text-blue-400">
                for Real-World Impact.
              </span>
            </h2>

            {/* Divider */}
            <div
              aria-hidden="true"
              className="mt-6 h-1 w-16 rounded-full bg-blue-500"
            />

            {/* Intro */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              {personal.aboutIntro}
            </p>

            {/* ==================================================
                ABOUT PARAGRAPHS
                ================================================== */}

            <div className="mt-8 max-w-2xl space-y-5">
              {personal.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={`${index}-${paragraph.slice(0, 30)}`}
                  className={
                    index === 0
                      ? "text-[17px] font-medium leading-8 text-slate-200"
                      : "text-[16px] leading-8 tracking-[0.01em] text-slate-400"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* ==================================================
                AREAS OF EXPLORATION
                ================================================== */}

            <div className="mt-10">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Areas I&apos;m Exploring
              </h3>

              <div className="flex flex-wrap gap-3">
                {personal.highlights.map((item) => {
                  const Icon = iconMap[item];

                  return (
                    <div
                      key={item}
                      className="group inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/70 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500/5"
                    >
                      {Icon && (
                        <Icon
                          size={16}
                          strokeWidth={2}
                          aria-hidden="true"
                          className="text-blue-400 transition-colors duration-300 group-hover:text-blue-300"
                        />
                      )}

                      <span className="text-sm font-medium text-slate-200">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ==================================================
                RESEARCH POSITIONING
                ================================================== */}

            {personal.researchAreas?.length > 0 && (
              <div className="mt-10 border-t border-slate-800/80 pt-7">
                <p className="text-sm leading-7 text-slate-500">
                  <span className="font-medium text-slate-400">
                    Research focus:
                  </span>{" "}
                  {personal.researchAreas.join(" · ")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}