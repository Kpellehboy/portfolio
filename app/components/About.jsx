"use client";

import Image from "next/image";
import {
  CheckCircle,
  Brain,
  Rocket,
  Cloud,
} from "lucide-react";

import personal from "../../data/personal";

const icons = [
  <CheckCircle className="w-4 h-4" />,
  <Brain className="w-4 h-4" />,
  <Rocket className="w-4 h-4" />,
  <Cloud className="w-4 h-4" />,
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-grid-slate-800/20" />

      <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Image */}

          <div className="flex justify-center">

            <div className="group relative">

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 opacity-50 blur-xl transition group-hover:opacity-70" />

              <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-white shadow-2xl transition duration-500 group-hover:scale-105 dark:border-gray-800 md:h-80 md:w-80">

                <Image
                  src={personal.aboutImage}
                  alt={personal.name}
                  fill
                  priority
                  className="object-cover object-top"
                />

              </div>

            </div>

          </div>

          {/* Content */}

          <div>

            <h2 className="text-3xl font-bold md:text-4xl">

              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                About Me
              </span>

            </h2>

            <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-500" />

            <div className="mt-6 space-y-4 leading-relaxed text-gray-600 dark:text-gray-400">

              {personal.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

            </div>

            {/* Highlights */}

            <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">

              {personal.highlights.map((item, index) => (
                <FeatureItem
                  key={item}
                  icon={icons[index]}
                  text={item}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">

      <span className="text-blue-600 dark:text-blue-400">
        {icon}
      </span>

      <span>{text}</span>

    </div>
  );
}