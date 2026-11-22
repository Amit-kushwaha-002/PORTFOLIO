export const portfolioData = {
  personal: {
    name: "Amit Kushwaha",
    initials: "AK",
    avatar: "/avatar.jpg",
    photo: "/profile.jpg",
    resume: "/Amit_Kushwaha_Resume.pdf",
    role: "Full Stack Developer (MERN Stack)",
    status: "Available for Opportunities",
    location: "India",
    tagline: "Solving real-world problems with clean full-stack architecture and applied AI tools.",
    bio: "Hi, I'm Amit Kushwaha, a Full Stack Developer specializing in the MERN stack (React, Node.js, Express, MongoDB). I focus on building scalable web applications, secure RESTful APIs, and integrating AI models into practical, real-world solutions. With a strong foundation in C++, OOPs, and Data Structures, I enjoy writing clean, efficient code and solving complex engineering problems—whether developing healthcare tools like Pulmo AI or architecting secure authentication systems.",
    collaboration: "Comfortable coordinating development sprints, code reviews, and version control using Git and GitHub.",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Malwa Institute of Technology",
      period: "Aug 2023 – Jun 2027",
      status: "Currently Pursuing",
      description: "Focusing on core Computer Science disciplines, Object-Oriented Programming (OOPs), Data Structures, Algorithms, and Modern Web Architectures."
    }
  ],

  skills: [
    {
      category: "Languages",
      items: ["C", "C++", "JavaScript", "Python"]
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "React", "Tailwind"]
    },
    {
      category: "Backend",
      items: ["Node.js"]
    },
    {
      category: "Database",
      items: ["MongoDB"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub"]
    }
  ],

  projectCategories: ["All", "Full Stack", "Backend", "Python", "AI"],

  projects: [
    {
      id: "pulmo-ai",
      title: "Pulmo AI: Early Lung Disease Detection",
      subtitle: "AI-Powered Medical Diagnostic Platform",
      categories: ["Full Stack", "AI"],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Python"],
      bullets: [
        "Full-stack web app where users upload medical scans (chest X-rays) and get a lung disease prediction",
        "Trained a deep learning model for disease prediction",
        "React frontend and Node.js backend that handles image uploads and connects to the model",
        "Stores user data and past scan reports in MongoDB"
      ],
      githubUrl: "https://github.com/Amit-kushwaha-002"
    },
    {
      id: "auth-system",
      title: "Complete Authentication Backend System",
      subtitle: "Enterprise-Ready JWT & Role Security Engine",
      categories: ["Backend"],
      techStack: ["Node.js", "Express", "MongoDB", "Mongoose"],
      bullets: [
        "User registration, email verification and secure login",
        "JWT-based authentication with bcrypt password hashing",
        "MongoDB with Mongoose for user and role-based data, MVC structure",
        "Designed to be extended with password recovery and easy frontend integration"
      ],
      githubUrl: "https://github.com/Amit-kushwaha-002"
    },
    {
      id: "jarvis-assistant",
      title: "Jarvis: Python Voice Assistant",
      subtitle: "Speech Recognition & Media Control System",
      categories: ["Python", "AI"],
      techStack: ["Python", "Speech Recognition"],
      bullets: [
        "Voice assistant that takes spoken commands and controls a built-in music player hands-free"
      ],
      githubUrl: "https://github.com/Amit-kushwaha-002"
    }
  ],

  extracurricular: {
    title: "Hackathons, Tech Fests & Team Collaboration",
    badge: "Extracurricular & Leadership",
    description: "Participated in coding events and tech fests, building apps in a team and coordinating work using Git and GitHub.",
    highlights: [
      "Collaborative agile development in competitive collegiate coding events",
      "Git workflow coordination: branch management, PR reviews, and conflict resolution",
      "Building practical solutions under rapid development timelines"
    ]
  },

  contact: {
    email: "amit01golu@gmail.com",
    linkedin: "https://www.linkedin.com/in/amit-kushwaha-connect",
    github: "https://github.com/Amit-kushwaha-002",
    note: "Feel free to reach out for software engineering opportunities, collaborative projects, or technical inquiries."
  },

  footer: {
    copyright: "© 2026 Amit Kushwaha. All rights reserved.",
    tagline: "Design with modern institutional precision and accessible architecture."
  }
};
