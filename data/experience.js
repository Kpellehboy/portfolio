// data/experience.js

const experience = [
  {
    id: 1,
    position: "Backend Engineer",
    company: "Innovation Matrix",
    employmentType: "Volunteer",
    location: "Remote",
    duration: "2025 – Present",
    current: true,

    description:
      "Designing and developing a scalable backend architecture for Innovation Matrix, a nonprofit organization, with a focus on security, performance, maintainability, and cloud deployment.",

    responsibilities: [
      "Designed a production-ready REST API using Node.js, Express.js, and TypeScript.",
      "Implemented JWT authentication with role-based access control (RBAC).",
      "Designed and optimized PostgreSQL database schemas using Prisma ORM.",
      "Integrated Redis caching for improved application performance.",
      "Developed reusable services following Clean Architecture principles.",
      "Documented APIs using Swagger/OpenAPI.",
      "Implemented secure file uploads and backend validation.",
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "JWT",
      "Swagger",
      "Cloudinary",
      "Docker",
      "GitHub",
    ],

    achievements: [
      "Built a scalable backend architecture from the ground up.",
      "Implemented secure authentication and authorization.",
      "Designed a maintainable repository and service-layer architecture.",
    ],
  },

  {
    id: 2,
    position: "Prompt Engineering Lead",
    company: "Excelerate",
    employmentType: "Internship",
    location: "Remote",
    duration: "2025",
    current: false,

    description:
      "Led prompt engineering initiatives and collaborated with cross-functional teams to improve AI-assisted workflows and solution quality.",

    responsibilities: [
      "Designed and optimized prompts for AI-powered applications.",
      "Collaborated with engineering teams on AI workflows.",
      "Evaluated prompt performance and improved response quality.",
      "Documented prompt engineering best practices.",
    ],

    technologies: [
      "OpenAI",
      "Prompt Engineering",
      "LLMs",
      "Python",
      "Git",
    ],

    achievements: [
      "Improved prompt consistency across AI workflows.",
      "Contributed to AI solution development within a collaborative team.",
    ],
  },

  {
    id: 3,
    position: "Software Engineering Intern",
    company: "HNG Tech",
    employmentType: "Internship",
    location: "Remote",
    duration: "2024",
    current: false,

    description:
      "Participated in collaborative software engineering projects, building backend services and gaining experience in agile development practices.",

    responsibilities: [
      "Developed backend features for team projects.",
      "Worked with REST APIs and databases.",
      "Collaborated using Git and GitHub.",
      "Participated in code reviews and sprint planning.",
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Git",
      "GitHub",
      "REST API",
    ],

    achievements: [
      "Successfully completed internship milestones.",
      "Worked effectively in distributed engineering teams.",
    ],
  },
];

export default experience;