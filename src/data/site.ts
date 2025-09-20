export const personalInfo = {
  name: "NITESH R",
  role: "Full Stack Developer | AI Enthusiast | Cybersecurity Learner",
  location: "Bengaluru, India – 560023",
  phone: "+91 99029 72191",
  email: "niteshtheceo@gmail.com",
  linkedin: "https://www.linkedin.com/in/nitesh-ram-6027621b4/",
  github: "https://github.com/niteshram69",
  summary:
    "Multidisciplinary and results-driven Full Stack Developer with hands-on experience in Artificial Intelligence, Cybersecurity, and modern web development. Proven expertise in building real-time applications, AI-powered agents, and automation tools. Passionate about delivering secure, scalable, and user-centric software solutions.",
  resumeUrl: "/resume.pdf",
};

export const skills = {
  languages: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
  frameworks: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "TensorFlow",
    "OpenCV",
    "Scikit-learn",
    "Pandas",
  ],
  databases: ["MongoDB", "MySQL"],
  tools: [
    "Git",
    "GitHub",
    "REST APIs",
    "Docker",
    "LiveKit",
    "mem0",
    "WebSockets",
  ],
  cybersecurity: [
    "OWASP Top 10",
    "Input Validation",
    "Authentication & Authorization",
    "Secure Coding Practices",
  ],
  softSkills: [
    "Communication",
    "Team Collaboration",
    "Analytical Thinking",
    "Time Management",
    "Leadership",
    "Growth Mindset",
  ],
  languagesSpoken: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native" },
    { name: "Kannada", level: "Native" },
  ],
};

export const education = [
  {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    institution: "Karavali Institute of Technology, Mangalore",
    cgpa: "8.8 CGPA",
  },
];

export const experience = [
  {
    title: "Junior Python Developer Intern",
    org: "Coders Boutique, San Francisco Bay Area",
    period: "Aug 2025 – Present",
    bullets: [
      "Assisted in backend development with reusable Python modules.",
      "Collaborated on REST APIs, unit testing, and Git version control.",
      "Contributed to agile sprints and project planning.",
    ],
  },
  {
    title: "AI/ML Intern",
    org: "IBM, Bengaluru",
    period: "Oct 2024 – Apr 2025",
    bullets: [
      "Built a sentiment analysis pipeline using NLP and Python.",
      "Applied ML models using Scikit-learn and visualized data with Matplotlib.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  links: { live?: string; github?: string };
  media?: { image?: string; video?: string };
};

export const projects: Project[] = [
  {
    title: "LinkedIn Automation Tool",
    description:
      "Python tool to automate LinkedIn interactions with configurable messaging and logging.",
    features: [
      "Automated connection requests",
      "Reusable configuration and templates",
      "CSV logs and robust error handling",
    ],
    tech: ["Python", "Selenium/Playwright", "CSV"],
    links: {
      live: "#",
      github: "https://github.com/niteshram69/Linkedin-automation",
    },
  },
  {
    title: "Nr_ChatSupport – AI-Powered Real-Time Chat Agent",
    description:
      "Real-time AI chat support system with memory-augmented RAG and modular LLM integration.",
    features: [
      "LiveKit Agents SDK real-time communication",
      "Memory-augmented RAG (mem0) for context",
      "Integrates OpenAI, Groq, OpenRouter",
      "Responsive frontend with WebSockets",
    ],
    tech: ["Next.js", "LiveKit", "WebSockets", "mem0", "OpenAI/Groq/OpenRouter"],
    links: {
      live: "#",
      github: "https://github.com/niteshram69/Nr_ChatSupport",
    },
  },
  {
    title: "Superbikes Web App",
    description:
      "Full-stack app for bike listings and registrations with forms and RESTful APIs.",
    features: [
      "Listings and registrations",
      "Form validation",
      "Modular frontend and backend",
    ],
    tech: ["React", "Next.js", "Node.js", "REST APIs"],
    links: { live: "#", github: "https://github.com/niteshram69/bike_registration" },
  },
  {
    title: "Traffic Sign Recognition System",
    description:
      "Computer vision project recognizing traffic signs with ML pipelines.",
    features: ["Image preprocessing", "Model training", "Evaluation and visualization"],
    tech: ["Python", "OpenCV", "Scikit-learn", "TensorFlow"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Sentiment Analysis with IBM",
    description:
      "NLP pipeline performing sentiment analysis with visualization.",
    features: ["Data cleaning", "Modeling with Scikit-learn", "Matplotlib charts"],
    tech: ["Python", "NLP", "Scikit-learn", "Matplotlib"],
    links: { live: "#", github: "#" },
  },
];

export const testimonials = [];

export const certificates = [
  { title: "IBM Internship Certificate", link: "#" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];


