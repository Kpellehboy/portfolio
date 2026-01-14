"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-5xl md:text-6xl font-extrabold leading-[1.1] text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Elijah
            </span>
            ,<br />
            a Computer Science Student
          </h3>

          <p className="mt-8 max-w-xl text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Passionate about developing intelligent systems, with a strong interest
            in backend development and machine learning, and committed to continuous
            learning within the tech ecosystem.
          </p>

          <div className="mt-12 flex gap-4">
            <a
              href="#projects"
              className="
                bg-gray-900 text-white
                px-7 py-3
                text-sm font-semibold
                rounded-lg
                shadow-sm
                hover:bg-gray-800 hover:shadow-md
                transition
              "
            >
              View Projects
            </a>

            <a
              href="/Elijah_M_Flomo.pdf"
              download
              className="
                px-7 py-3
                text-sm font-semibold
                rounded-lg
                border border-gray-900 dark:border-gray-700
                text-gray-900 dark:text-white
                hover:bg-gray-100 dark:hover:bg-gray-800
                transition
              "
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
            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl animate-float">
              <Image
                src="/homepic.jpg"
                alt="Elijah M. Flomo"
                fill
                priority
                className="object-cover object-top animate-fadeIn"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
