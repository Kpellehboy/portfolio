const projects = [
  {
    id: 1,
    slug: "innovation-matrix-backend",

    title: "Innovation Matrix Backend API",

    category: "Backend Engineering",
    type: "Open Source",

    featured: true,

    status: "In Progress",

    year: 2026,

    role: "Backend Engineer",

    icon: "server",

    hoverGradient: "from-emerald-500 to-teal-500",

    description:
      "A production-grade REST API for a nonprofit organization built using Clean Architecture, Prisma ORM, PostgreSQL, JWT authentication, Redis caching, and comprehensive API documentation.",

    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "JWT",
      "Swagger",
      "Docker",
      "Cloudinary",
    ],

    features: [
      "Clean Architecture",
      "Repository Pattern",
      "REST API",
      "JWT Authentication",
      "Role-Based Access Control",
      "Redis Caching",
      "Swagger Documentation",
      "Cloud File Uploads",
    ],

    highlights: [
      "Designed a scalable backend architecture",
      "Implemented role-based authentication",
      "Integrated Redis caching for improved performance",
      "Documented APIs using OpenAPI (Swagger)",
    ],

    github:
      "https://github.com/Kpellehboy/innovation-matrix-backend",

    live: "",

    image: "/projects/innovation-matrix.png",

    repositoryVisibility: "Public",
  },

  {
    id: 2,
    slug: "personal-portfolio",

    title: "Personal Portfolio",

    category: "Web Development",

    type: "Personal",

    featured: true,

    status: "Active",

    year: 2026,

    role: "Full-Stack Developer",

    icon: "database",

    hoverGradient: "from-indigo-500 to-blue-500",

    description:
      "A modern research-focused portfolio built with Next.js featuring publications, education, experience, projects, certifications, and reusable data-driven architecture.",

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vercel",
    ],

    features: [
      "Responsive Design",
      "SEO Optimization",
      "Dark Mode",
      "Dynamic Components",
      "Reusable Data Layer",
    ],

    highlights: [
      "Optimized for performance",
      "Fully responsive across devices",
      "Centralized data architecture",
      "Designed for future scalability",
    ],

    github:
      "https://github.com/Kpellehboy/portfolio-",

    live:
      "https://elijahmflomo.vercel.app",

    image: "/projects/portfolio.png",

    repositoryVisibility: "Public",
  },

  {
    id: 3,
    slug: "edge-ai-research",

    title: "Edge AI Research Project",

    category: "Artificial Intelligence",

    type: "Research",

    featured: true,

    status: "Research",

    year: 2026,

    role: "Researcher",

    icon: "bot",

    hoverGradient: "from-blue-500 to-cyan-500",

    description:
      "Research exploring efficient deep learning models for deployment on resource-constrained edge devices with emphasis on performance, efficiency, and practical deployment.",

    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "NumPy",
      "Computer Vision",
    ],

    features: [
      "Edge AI",
      "Computer Vision",
      "Model Optimization",
      "Performance Evaluation",
    ],

    highlights: [
      "Focused on efficient inference",
      "Investigated lightweight neural networks",
      "Explored deployment on constrained hardware",
    ],

    github: "",

    live: "",

    image: "/projects/edge-ai.png",

    repositoryVisibility: "Private",
  },

  {
    id: 4,
    slug: "distributed-cloud-application",

    title: "Distributed Cloud Application",

    category: "Cloud Computing",

    type: "Academic",

    featured: false,

    status: "Planned",

    year: 2026,

    role: "Backend Engineer",

    icon: "cloud",

    hoverGradient: "from-sky-500 to-blue-500",

    description:
      "Cloud-native distributed application demonstrating scalable services, containerization, service communication, and distributed system principles.",

    technologies: [
      "Docker",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Cloud Computing",
    ],

    features: [
      "Containerization",
      "Distributed Services",
      "Caching",
      "Scalable Architecture",
    ],

    highlights: [
      "Microservice-oriented architecture",
      "Cloud-native deployment",
      "Scalable backend services",
    ],

    github: "",

    live: "",

    image: "/projects/cloud.png",

    repositoryVisibility: "Private",
  },

  {
    id: 5,
    slug: "computer-vision-application",

    title: "Computer Vision Application",

    category: "Computer Vision",

    type: "Research",

    featured: false,

    status: "Research",

    year: 2026,

    role: "Researcher",

    icon: "bot",

    hoverGradient: "from-purple-500 to-pink-500",

    description:
      "Computer vision application exploring image classification and object recognition using deep learning models and modern vision pipelines.",

    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "TensorFlow",
    ],

    features: [
      "Image Classification",
      "Object Recognition",
      "Visualization",
      "Inference Pipeline",
    ],

    highlights: [
      "Explored CNN architectures",
      "Built end-to-end vision pipeline",
      "Evaluated model performance",
    ],

    github: "",

    live: "",

    image: "/projects/computer-vision.png",

    repositoryVisibility: "Private",
  },

  {
    id: 6,
    slug: "network-security-toolkit",

    title: "Network Security Toolkit",

    category: "Cybersecurity",

    type: "Learning",

    featured: false,

    status: "Learning",

    year: 2026,

    role: "Developer",

    icon: "shield",

    hoverGradient: "from-orange-500 to-red-500",

    description:
      "Collection of security-focused backend utilities demonstrating authentication, authorization, encryption, and secure software engineering practices.",

    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "JWT",
      "Security",
    ],

    features: [
      "Authentication",
      "Authorization",
      "Encryption",
      "Security Best Practices",
    ],

    highlights: [
      "Implemented secure authentication",
      "Explored encryption techniques",
      "Applied backend security principles",
    ],

    github: "",

    live: "",

    image: "/projects/security.png",

    repositoryVisibility: "Private",
  },
];

export default projects;