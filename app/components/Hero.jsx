"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";

import personal from "../../data/personal";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("GjB9PWWj0U5PrVEly");
  }, []);

  const sendCVRequest = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_04fw6qu",
        "template_2xyv3bh",
        {
          name: e.target.name.value,
          email: e.target.email.value,
          subject: "CV Request",
          message: "User requested your CV",
        }
      );

      alert("Request sent successfully.");

      e.target.reset();

      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert("Unable to send request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-white/5 opacity-20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2">

          {/* Left */}
          <div className="space-y-6 text-center md:text-left">

            <h1 className="animate-fade-in text-4xl font-bold leading-tight text-white md:text-5xl">
              {`I'm ${personal.firstName},`}
            </h1>

            <h2 className="animate-fade-in text-lg text-gray-300 delay-100 md:text-xl">
              {personal.title}
            </h2>

            <p className="animate-fade-in max-w-xl text-gray-400 delay-200">
              {personal.heroDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {personal.heroTags.map((tag, index) => (
                <span
                  key={tag}
                  className="animate-fade-in rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300 transition hover:bg-blue-600 hover:text-white"
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-2 md:justify-start">

              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-6 py-3 text-white shadow-lg transition hover:bg-blue-700 hover:shadow-blue-500/30"
              >
                View Projects
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 text-white transition hover:bg-gray-700"
              >
                <Download size={16} />
                Resume
              </button>

            </div>

            {/* Social */}
            <div className="flex justify-center gap-4 pt-4 md:justify-start">

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-3 text-gray-300 transition hover:scale-110 hover:bg-black hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-900/30 p-3 text-blue-400 transition hover:scale-110 hover:bg-blue-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="rounded-full bg-red-900/30 p-3 text-red-400 transition hover:scale-110 hover:bg-red-600 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <div className="group relative">

              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl opacity-50 transition group-hover:opacity-80" />

              <div className="h-64 w-64 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 p-[5px] shadow-2xl md:h-80 md:w-80">

                <div className="relative h-full w-full overflow-hidden rounded-full">

                  <Image
                    src={personal.profileImage}
                    alt={personal.name}
                    fill
                    priority
                    className="object-cover object-center"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CV Request Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

          <div className="relative w-[90%] max-w-md animate-scale-in rounded-2xl border border-gray-700 bg-gray-900 p-8 text-white">

            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4"
              aria-label="Close"
            >
              <X />
            </button>

            <h3 className="mb-4 text-xl font-semibold">
              Request My CV
            </h3>

            <form
              onSubmit={sendCVRequest}
              className="space-y-4"
            >

              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 py-3 transition hover:bg-blue-700 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
}