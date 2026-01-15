/* Reusable Section Wrapper */
function Section({ title, children }) {
  return (
    <div className="mb-14">
      <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-700">
        {title}
      </h3>
      <div className="border-t pt-8">
        {children}
      </div>
    </div>
  );
}

/* Timeline Item */
function TimelineItem({ title, subtitle, date, description }) {
  return (
    <div className="relative mb-10 pl-8">
      {/* Vertical Line */}
      <span className="absolute left-0 top-1 h-full w-px bg-gray-300" />

      {/* Content */}
      <div className="space-y-1">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{subtitle}</p>
        <p className="text-xs text-gray-500">{date}</p>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="bg-slate-100 py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Title */}
        <h2 className="text-center text-3xl font-extrabold mb-16 text-gray-900">
          Resume
        </h2>

        {/* Education */}
        <Section title="Education">
          <TimelineItem
            title="Bachelor of Computer Applications (BCA)"
            subtitle="RIMT University, India"
            date="Aug 2022 – Jul 2025"
            description="Focused on computer applications, software development, databases, and modern web technologies."
          />
          <TimelineItem
            title="Associate Degree in Environmental Science"
            subtitle="Stella Maris Polytechnic University, Liberia"
            date="Aug 2018 – Aug 2022"
            description="Built a strong analytical foundation with emphasis on data handling, research, and environmental systems."
          />
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <TimelineItem
            title="Backend Developer Intern"
            subtitle="HNG (Remote)"
            date="Oct 2025 – Present"
            description="Developing and maintaining RESTful APIs using Python, FastAPI, and Flask. Managing databases, implementing CRUD operations, version control, and deployment."
          />
          <TimelineItem
            title="Data Analyst Intern"
            subtitle="Excelerate (Remote)"
            date="Sep 2025 – Oct 2025"
            description="Prepared datasets, performed statistical analysis, and created reports and visualizations for data-driven enrolment optimization."
          />
          <TimelineItem
            title="Data Analytics Intern"
            subtitle="SkillsFied Mentor (Remote, India)"
            date="Jun 2025 – Present"
            description="Assisting with data cleaning, exploratory analysis, dashboard creation, and reporting using Python, SQL, and Excel."
          />
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <ul className="space-y-4 text-sm text-gray-700">
            <li>Google Data Analytics Professional Certificate (Coursera)</li>
            <li>IBM Full Stack Software Developer (Coursera)</li>
            <li>Python for Data Science & AI Development – IBM</li>
            <li>Cybersecurity Compliance Frameworks & Standards</li>
            <li>Spoken Tutorial Python – IIT Bombay</li>
          </ul>
        </Section>

        {/* Download Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="/ELIJAH_RESUME.pdf"
            download
            className="rounded bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}
