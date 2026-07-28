"use client";

import Link from "next/link";
import personal from "../../data/personal";
import navigation from "../../data/navigation";

import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        {/* Main Footer */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              {personal.name}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Graduate Computer Science student passionate about Artificial
              Intelligence, Backend Engineering, Computer Vision, and Cloud
              Computing.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Research
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>Edge AI</li>
              <li>Computer Vision</li>
              <li>Trustworthy AI</li>
              <li>Cloud Computing</li>
              <li>Network Security</li>
            </ul>
          </div>

          {/* Connect */}

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Connect
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.contact.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-blue-400"
              >
                <Mail size={18} />
                {personal.contact.email}
              </a>

              <div className="flex gap-3 pt-2">

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800"
                >
                  <Github
                    size={20}
                    className="text-slate-300 transition-colors group-hover:text-blue-400"
                  />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800"
                >
                  <Linkedin
                    size={20}
                    className="text-slate-300 transition-colors group-hover:text-blue-400"
                  />
                </a>

                <a
                  href={`mailto:${personal.contact.email}`}
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800"
                >
                  <Mail
                    size={20}
                    className="text-slate-300 transition-colors group-hover:text-blue-400"
                  />
                </a>

              </div>

            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 border-t border-slate-800" />

        {/* Bottom */}

        <div className="relative flex flex-col items-center justify-center gap-3 py-4">

          <p className="text-sm text-slate-500 text-center">
            © {year} {personal.name}. All rights reserved.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="absolute right-0 flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
          >
            <ArrowUp
              size={18}
              className="text-white"
              strokeWidth={2.5}
            />
          </a>

        </div>
      </div>
    </footer>
  );
}