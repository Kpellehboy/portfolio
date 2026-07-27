"use client";

import personal from "../../data/personal";
import navigation from "../../data/navigation";

import Link from "next/link";

import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-slate-950 text-white dark:border-gray-800">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold">

              {personal.name}

            </h2>

            <p className="mt-4 leading-7 text-slate-400">

              {personal.footer.tagline}

            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">

              Navigation

            </h3>

            <ul className="space-y-3">

              {navigation.map((item) => (

                <li key={item.id}>

                  <Link
                    href={item.href}
                    className="text-slate-400 transition hover:text-blue-400"
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">

              Connect

            </h3>

            <div className="space-y-4">

              <a
                href={`mailto:${personal.contact.email}`}
                className="flex items-center gap-3 text-slate-400 transition hover:text-blue-400"
              >
                <Mail className="h-5 w-5" />

                {personal.contact.email}

              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 transition hover:text-blue-400"
              >
                <Github className="h-5 w-5" />

                GitHub

              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 transition hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />

                LinkedIn

              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-slate-800" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-center text-sm text-slate-500">

            {personal.footer.copyright}

          </p>

         

          <a
            href="#home"
            className="rounded-full bg-blue-600 p-3 transition hover:bg-blue-700"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </a>

        </div>

      </div>

    </footer>
  );
}