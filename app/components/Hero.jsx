"use client";

import Image from "next/image";
import { useState } from "react";
import { Cloud } from "lucide-react";

export default function Hero() {
  const [logoError, setLogoError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-300/20 to-sky-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN – TEXT */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                Menuo
              </span>{" "}
              <span className="relative inline-block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-500 after:bottom-0 after:left-0">
                Tech
              </span>{" "}
              <span className="text-gray-900 dark:text-white">
                Solutions
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
              Cloud & AI Backend Solutions for Startups
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0">
              We help startups build scalable APIs, AI-powered systems, and modern cloud applications using Python, Node.js, and Next.js.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Founded by Elijah M. Flomo
            </p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-medium shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN – IMAGE */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-sky-400 blur-2xl opacity-30 rounded-full animate-pulse" />

              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-500">
                {!logoError ? (
                  <Image
                    src="/logo.png"
                    alt="Menuo Tech Solutions"
                    fill
                    priority
                    className="object-cover"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-sky-100 dark:from-gray-800 dark:to-gray-900 text-4xl font-bold text-blue-600">
                    MTS
                  </div>
                )}
              </div>

              {/* Floating cloud icon */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <Cloud className="w-10 h-10 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}