"use client";

import { Bot, Globe, Server, Cloud, ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI Chatbot Development",
    desc: "Build intelligent chatbots for automation and customer support.",
    icon: Bot,
    gradient: "from-blue-500 to-sky-400",
  },
  {
    title: "Startup Website",
    desc: "Modern websites and landing pages using Next.js.",
    icon: Globe,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Backend APIs",
    desc: "Secure and scalable APIs with FastAPI & Node.js.",
    icon: Server,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Cloud Deployment",
    desc: "Deploy apps on cloud platforms with performance optimization.",
    icon: Cloud,
    gradient: "from-cyan-500 to-sky-500",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-grid-slate-800/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
            Solutions designed to help startups build and scale efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-transparent hover:scale-105"
                style={{
                  background: "linear-gradient(145deg, white, #f9fafb)",
                }}
              >
                {/* Gradient border on hover (pseudo-element) */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-r from-blue-500 to-sky-500 blur-md" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-2.5 flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Optional: subtle learn more link */}
                  <div className="mt-5 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}