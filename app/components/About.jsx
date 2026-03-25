"use client";

import Image from "next/image";
import { CheckCircle, Brain, Rocket, Cloud } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-grid-slate-800/20" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-gray-800 transform group-hover:scale-105 transition duration-500">
                <Image
                  src="/homepic.jpg"
                  alt="Elijah M. Flomo"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full" />

            <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I am a full-stack developer with a strong focus on backend engineering, building scalable web applications, APIs, and data-driven systems.
              </p>

              <p>
                My experience includes working with Node.js and Python to design efficient backend architectures, while also developing complete end-to-end applications when needed.
              </p>

              <p>
                I have a background in AI and machine learning, which I apply to build intelligent systems and automation solutions.
              </p>

              <p>
                My long-term goal is to specialize in cloud engineering, focusing on building scalable, reliable, and production-ready systems.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <FeatureItem
                icon={<CheckCircle className="w-4 h-4" />}
                text="Backend API Development (FastAPI, Node.js)"
              />
              <FeatureItem
                icon={<Brain className="w-4 h-4" />}
                text="AI & Machine Learning Integration"
              />
              <FeatureItem
                icon={<Rocket className="w-4 h-4" />}
                text="Full-Stack Development (Backend-Focused)"
              />
              <FeatureItem
                icon={<Cloud className="w-4 h-4" />}
                text="Cloud-Ready Application Design"
              />
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
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}