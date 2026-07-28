// data/projects.js

const projects = [
  /* ==========================================================
   * FEATURED PROJECTS
   * ========================================================== */

  {
    id: 1,
    title: "Plant Disease Detection using MobileNetV2",
    category: "Research • Computer Vision • Deep Learning",
    featured: true,

    icon: "bot",
    hoverGradient: "from-emerald-500 via-green-500 to-lime-500",

    description:
      "A lightweight deep learning research project for automated plant disease identification using MobileNetV2. The work focuses on efficient computer vision models for agricultural disease classification and has been accepted for publication in an IEEE conference.",

    technologies: [
      "Python",
      "TensorFlow",
      "MobileNetV2",
      "Computer Vision",
      "Deep Learning",
      "Image Classification",
    ],

    highlights: [
      "Accepted IEEE Conference Paper",
      "Efficient MobileNetV2 architecture",
      "Agricultural disease classification",
      "Computer vision research",
    ],

    github:
      "https://github.com/Kpellehboy/Plant-disease-detection-mobilenetv2",

    live: "",

    image: "/projects/plant-disease.png",

    status: "IEEE Paper Accepted",
  },

  {
    id: 2,
    title: "RAG Document Intelligence API",
    category: "Generative AI • Backend Engineering",
    featured: true,

    icon: "database",
    hoverGradient: "from-violet-600 via-indigo-600 to-blue-600",

    description:
      "An AI-powered Retrieval-Augmented Generation (RAG) backend for intelligent document search, contextual question answering, and enterprise knowledge retrieval using modern Large Language Model workflows.",

    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "LLMs",
      "Vector Database",
      "PostgreSQL",
      "Docker",
    ],

    highlights: [
      "Retrieval-Augmented Generation",
      "Semantic document search",
      "Context-aware question answering",
      "Scalable AI backend",
    ],

    github:
      "https://github.com/Kpellehboy/rag-document-intelligence-api",

    live: "",

    image: "/projects/rag-document-intelligence.png",

    status: "In Progress",
  },

  {
    id: 3,
    title: "AI-Commerce Assistant API",
    category: "Artificial Intelligence • Backend Engineering",
    featured: true,

    icon: "bot",
    hoverGradient: "from-orange-500 via-amber-500 to-yellow-500",

    description:
      "A production-ready AI-powered backend enabling natural language interaction with an e-commerce product catalog through intelligent RESTful APIs and conversational product discovery.",

    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "REST API",
      "AI Integration",
    ],

    highlights: [
      "Natural language product search",
      "RESTful backend architecture",
      "AI-assisted product discovery",
      "Scalable API design",
    ],

    github:
      "https://github.com/Kpellehboy/AI-Commerce-Assistant-API",

    live:
      "https://drive.google.com/file/d/1wJsAl3yLAOa84v0XgrLH48BFdqaQbk03/view",

    image: "/projects/ai-commerce.png",

    status: "Completed",
  },

  {
  id: 4,

  title: "AI Spend Audit",

  category: "AI SaaS • Product Engineering",

  status: "Deployed SaaS",

  featured: true,

  icon: "cloud",

  hoverGradient: "from-indigo-600 via-blue-600 to-cyan-500",

  description:
    "An AI-powered SaaS platform that helps startups optimize AI software spending through deterministic audit rules and LLM-generated executive summaries.",

  technologies: [
    "Next.js",
    "TypeScript",
    "Supabase",
    "Anthropic API",
    "Tailwind CSS",
    "Vercel",
  ],

  highlights: [
    "Built a deterministic audit engine for transparent cost optimization.",
    "Integrated Anthropic AI to generate executive audit summaries.",
    "Developed a responsive SaaS dashboard with persistent reports.",
  ],

  github: "https://github.com/Kpellehboy/ai-spend-audit",

  live: "https://ai-spend-audit-five.vercel.app",
},

  /* ==========================================================
   * ADDITIONAL PROJECTS
   * ========================================================== */

  {
    id: 5,
    title: "AI Research Agent",
    category: "Artificial Intelligence",

    featured: false,

    icon: "shield",
    hoverGradient: "from-fuchsia-500 via-purple-500 to-pink-500",

    description:
      "An AI-powered research assistant designed to automate literature exploration, knowledge synthesis, intelligent information retrieval, and research workflow support using modern Large Language Models.",

    technologies: [
      "Python",
      "LLMs",
      "Prompt Engineering",
      "AI Agents",
      "Automation",
    ],

    highlights: [
      "Research workflow automation",
      "Large Language Models",
      "Prompt engineering",
      "Knowledge synthesis",
    ],

    github:
      "https://github.com/Kpellehboy/AI-Research-Agent",

    live: "",

    image: "/projects/research-agent.png",

    status: "Active Development",
  },
];

export default projects;