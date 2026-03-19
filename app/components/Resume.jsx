import { FaExternalLinkAlt } from "react-icons/fa";

/* Reusable Section Wrapper */
function Section({ title, children }) {
  return (
    <div className="mb-14">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-red-600">
        {title}
      </h3>
      <div className="border-t pt-8">{children}</div>
    </div>
  );
}

/* Timeline Item */
function TimelineItem({ title, subtitle, date, description, link }) {
  return (
    <div className="relative mb-10 pl-8">
      <span className="absolute left-0 top-1 h-full w-px bg-gray-300" />

      <div className="space-y-1">
        <h4 className="font-semibold text-gray-900">{title}</h4>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            {subtitle} <FaExternalLinkAlt className="h-3 w-3" />
          </a>
        ) : (
          <p className="text-sm text-gray-600">{subtitle}</p>
        )}

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
        <h2 className="text-center text-3xl font-bold mb-16 text-gray-900">
          Resume
        </h2>

        {/* Education */}
        <Section title="EDUCATION">
          <TimelineItem
            title="Master of Science in Computer Science"
            subtitle="SR University, India"
            link="https://sru.edu.in/"
            date="Aug 2025 – Present"
            description="Focused on Data Science for Intelligent Systems and Artificial Intelligence, with experience in cloud technologies, operating systems, and advanced database management."
          />

          <TimelineItem
            title="Bachelor of Computer Applications (BCA)"
            subtitle="RIMT University, India"
            link="https://rimt.ac.in/"
            date="Aug 2022 – Jul 2025"
            description="Strong academic foundation in Python programming, data structures, object-oriented programming, and database management systems."
          />

          <TimelineItem
            title="Associate Degree in Environmental Science"
            subtitle="Stella Maris Polytechnic University, Liberia"
            link="https://sm-pu.edu.lr/"
            date="Aug 2018 – Aug 2022"
            description="Built a strong analytical foundation with emphasis on data handling, research, and environmental systems."
          />
        </Section>

        <Section title="EXPERIENCE">
          <TimelineItem
            title="Backend Developer Intern"
            subtitle="HNG (Remote)"
            link="https://hng.tech/"
            date="Oct 2025 – Dec 2025"
            description="Developed scalable RESTful APIs using FastAPI and Flask. Designed and optimized MySQL/PostgreSQL databases, implementing secure CRUD operations and improving query performance."
          />

          <TimelineItem
            title="Data Analytics Intern"
            subtitle="SkillsFied Mentor (Remote)"
            link="https://skillfiedmentor.com/"
            date="Jun 2025 – Aug 2025"
            description="Performed data cleaning, exploratory data analysis, and reporting using Python, SQL, and Excel to generate actionable insights and support business decision-making."
          />
        </Section>

        <Section title="CERTIFICATIONS">
          <TimelineItem
            title="Full Stack Software Developer Professional Certificate"
            subtitle="IBM (Coursera)"
            link="https://coursera.org/share/3754328b78167dab9f8a415c9866abac"
            date="April 11, 2025"
            description="Built backend applications with Python, Node.js, Express, and Django. Deployed scalable solutions using containers, microservices, and serverless technologies."
          />

          <TimelineItem
            title="Python Training"
            subtitle="IIT Bombay – Spoken Tutorial"
            link="https://spoken-tutorial.org/software-training/test/participant/certificate/122325/3809048/"
            date="Nov 2024"
            description="Trained in core Python concepts including data structures and file handling, applying problem-solving skills to backend development."
          />

          <TimelineItem
            title="AWS Cloud Technical Essentials"
            subtitle="AWS (Coursera)"
            link="https://www.coursera.org/account/accomplishments/verify/FMBYPXN0IGWB"
            date="March 31, 2025"
            description="Learned AWS fundamentals including IAM, EC2, S3, and VPC. Gained understanding of Regions, Availability Zones, and cloud infrastructure."
          />

          <TimelineItem
            title="Google Data Analytics"
            subtitle="Coursera (Google)"
            link="https://coursera.org/share/8459859a25b4cbb450d80fd58fb53339"
            date="June 29, 2025"
            description="Applied SQL and Python for data analysis, visualization, and dashboard creation to generate actionable insights."
          />
        </Section>

        {/* Download Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="/Elijah-M-Flomo_Resume.pdf"
            download
            className="rounded bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Download Resume (PDF)
          </a>
        </div>

      </div>
    </section>
  );
}