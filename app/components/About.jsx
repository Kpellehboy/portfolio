"use client";

import Image from "next/image";
import {
  Brain,
  Cloud,
  Code2,
  Eye,
  Network,
  Shield,
} from "lucide-react";

import personal from "../../data/personal";

const iconMap = {
  "Artificial Intelligence": Brain,
  "Backend Engineering": Code2,
  "Cloud Computing": Cloud,
  "Computer Vision": Eye,
  "Distributed Systems": Network,
  "Network Security": Shield,
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#081221] to-slate-900 py-16 lg:py-20"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">

        {/* Left Glow */}

        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[130px]" />

        {/* Right Glow */}

        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Soft Grid */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:72px_72px]" />

      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr]">

          {/* ================= IMAGE ================= */}

          <div className="flex justify-center lg:justify-start">

            <div className="relative">

              {/* Glow */}

              <div className="absolute -bottom-6 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[90px]" />

              {/* Image */}

              <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">

                <Image
                  src={personal.aboutImage}
                  alt={personal.name}
                  width={340}
                  height={420}
                  priority
                  className="h-[420px] w-[320px] object-cover object-top transition duration-500 hover:scale-[1.03]"
                />

              </div>

            </div>

          </div>

          {/* ================= TEXT ================= */}

          <div className="max-w-3xl">

            {/* Section Label */}

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              About Me
            </span>

            {/* Heading */}

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white lg:text-4xl">
              Building Intelligent Systems
              <span className="block text-blue-400">
                for Real-World Impact.
              </span>
            </h2>

            {/* Divider */}

            <div className="mt-5 h-1 w-16 rounded-full bg-blue-500" />

            {/* Intro */}

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Passionate about combining Artificial Intelligence, Backend Engineering, Cloud Computing, and Computer Vision to design scalable, secure, and research-driven software solutions.
            </p>

            {/* About */}

            <div className="mt-8 max-w-2xl space-y-5">

              {personal.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-[17px] font-medium leading-8 text-slate-200"
                      : "text-[16px] font-light leading-8 tracking-[0.01em] text-slate-400"
                  }
                >
                  {paragraph}
                </p>
              ))}

            </div>

            {/* Expertise */}

            <div className="mt-10">

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Areas I'm Exploring
              </h3>

              <div className="flex flex-wrap gap-3">

                {personal.highlights.map((item) => {

                  const Icon = iconMap[item];

                  return (

                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 transition duration-300 hover:border-blue-500 hover:bg-slate-900"
                    >

                      {Icon && (
                        <Icon
                          size={16}
                          className="text-blue-400"
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

          </div>

        </div>

      </div>
    </section>
  );
}