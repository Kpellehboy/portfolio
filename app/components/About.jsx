import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            About Me
          </h2>
          <div className="mt-2 h-1 w-16 bg-gray-900" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/profile.jpeg"
              alt="Profile photo"
              width={300}
              height={380}
              className="rounded-lg object-cover shadow-md"
              priority
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              I am a Computer Science student passionate about developing intelligent
              systems, with a strong interest in backend development and machine
              learning. I enjoy working on data-driven solutions and building
              efficient, scalable applications that solve real-world problems.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              I am committed to continuous learning within the tech ecosystem and
              aim to start my career as a backend-focused software developer, growing
              into a professional who builds impactful and intelligent digital solutions.
            </p>

            {/* Info Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold text-gray-800">Location:</span>
                <p className="text-gray-600">India</p>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Status:</span>
                <p className="text-gray-600">Student</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
