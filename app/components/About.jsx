import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-3 h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image with subtle frame */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-2xl blur opacity-30" />
              <Image
                src="/profile.jpeg"
                alt="Elijah M. Flomo"
                width={320}
                height={400}
                className="relative rounded-2xl object-cover shadow-xl"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I am a Python Backend Developer specializing in FastAPI and PostgreSQL, with experience building scalable REST APIs and backend systems. I have developed real-world projects including an e-commerce backend, student management system, and a financial API.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
             I focus on writing efficient, production-ready code and designing clean, scalable architectures. Currently, I am seeking opportunities to apply my skills and contribute to impactful backend development projects.
            </p>

            {/* Info Cards with Emojis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <span className="text-xl">🎓</span>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Status</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Student</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}