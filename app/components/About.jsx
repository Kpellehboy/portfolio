"use client";

import Image from "next/image";
import { CheckCircle, Brain, Rocket, Cloud } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Decorative background */}
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
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                About Menuo Tech Solutions
              </span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full" />

            <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Menuo Tech Solutions is a modern software development brand focused on helping startups and businesses build scalable web applications, backend systems, and AI-powered solutions.
              </p>
              <p>
                Founded by Elijah M. Flomo, an MSc Computer Science student, the goal is to deliver practical, efficient, and cloud-ready solutions that solve real-world problems.
              </p>
              <p>
                With a strong foundation in Python, Node.js, and modern web technologies, we focus on building reliable systems that are easy to scale and maintain.
              </p>
            </div>

            {/* HIGHLIGHTS – simple inline list, no boxes */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <FeatureItem icon={<CheckCircle className="w-4 h-4" />} text="Backend API Development (FastAPI, Node.js)" />
              <FeatureItem icon={<Brain className="w-4 h-4" />} text="AI Chatbot & Automation Solutions" />
              <FeatureItem icon={<Rocket className="w-4 h-4" />} text="Startup Website & MVP Development" />
              <FeatureItem icon={<Cloud className="w-4 h-4" />} text="Cloud Deployment & Optimization" />
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