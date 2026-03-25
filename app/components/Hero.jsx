"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Download, Github, Linkedin, Mail, X } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    emailjs.init("GjB9PWWj0U5PrVEly");
  }, []);

  const sendCVRequest = async (e) => {
    e.preventDefault();

    await emailjs.send("service_04fw6qu", "template_2xyv3bh", {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: "CV Request",
      message: "User requested your CV",
    });

    alert("Request sent successfully");
    setShowModal(false);
    e.target.reset();
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]"
      >
        {/* BACKGROUND EFFECT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-white/5 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-6 text-center md:text-left">

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight animate-fade-in">
              I'M Elijah,
            </h1>

            <h2 className="text-lg md:text-xl text-gray-300 animate-fade-in delay-100">
             A Full-Stack Developer (Backend-Focused) | AI & Cloud Engineering Enthusiast
            </h2>

            <p className="text-gray-400 max-w-lg animate-fade-in delay-200">
              I design and build scalable backend systems, REST APIs, and AI-powered applications.
              Focused on creating reliable, cloud-ready solutions using Python, Node.js, and modern technologies.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["APIs", "AI Systems", "Cloud Apps", "Backend"].map((item, i) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition animate-fade-in"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 justify-center md:justify-start flex-wrap pt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30"
              >
                View Projects
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 bg-gray-800 text-white rounded-full flex items-center gap-2 hover:bg-gray-700 transition"
              >
                <Download size={16} /> Resume
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://github.com/Kpellehboy"
                target="_blank"
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-black hover:text-white transition hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/elijah-m-flomo-a7a253267/"
                target="_blank"
                className="p-3 rounded-full bg-blue-900/30 text-blue-400 hover:bg-blue-600 hover:text-white transition hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:elijahmflomo@gmail.com"
                className="p-3 rounded-full bg-red-900/30 text-red-400 hover:bg-red-600 hover:text-white transition hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative group">

              {/* GLOW */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl opacity-50 group-hover:opacity-80 transition" />

              {/* BORDER */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-[5px] bg-gradient-to-r from-blue-500 to-sky-400 shadow-2xl">

                {/* IMAGE */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/hero.jpeg"
                    alt="Elijah"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-gray-900 text-white p-8 rounded-2xl w-[90%] max-w-md relative animate-scale-in border border-gray-700">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            <h3 className="text-xl font-semibold mb-4">
              Request My CV
            </h3>

            <form onSubmit={sendCVRequest} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              />

              <button className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition">
                Send Requests
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}