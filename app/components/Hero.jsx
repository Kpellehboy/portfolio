"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Elijah
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-2">
           a Python Backend Developer
          </h2>

          <p className="mt-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            Specializing in Python, FastAPI, and PostgreSQL, I develop scalable REST APIs and backend systems for real-world applications, with a focus on performance and clean architecture.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-md shadow hover:bg-gray-800 hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              View Projects
            </a>

            <a
              href="/Elijah-M-Flomo_Resume.pdf"
              download
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Gradient Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 blur-xl opacity-30" />

            {/* Avatar */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <Image
                src="/homepic.jpg"
                alt="Elijah M. Flomo"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}