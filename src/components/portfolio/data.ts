export const profile = {
  name: "Monmon Ghosh",
  role: "Computer Science & Engineering Student",
  tagline: "Learn. Build. Innovate.",
  intro:
    "B.Tech CSE student at Adamas University (2023–2027), focused on software development, AI and problem-solving. I learn new technologies quickly and enjoy turning academic knowledge into practical, working projects.",
  email: "monmonghosh18@gmail.com",
  phone: "9436588695",
  linkedin: "https://linkedin.com/in/monmon-ghosh-386950290",
  // Placeholder — replace with the real GitHub profile URL when available
  github: "",
  status: "Currently pursuing B.Tech CSE • Graduation 2027",
};

export const heroTechLabels = ["Python", "C++", "AI", "ML", "Computer Vision", "Web Development"];

export const aboutHighlights = [
  { value: "B.Tech CSE", label: "Adamas University" },
  { value: "2027", label: "Expected Graduation" },
  { value: "Multiple Internships", label: "Industry Exposure" },
  { value: "Technical Projects", label: "AI • Software • Technology" },
];

export const languages = ["English", "Hindi"];

export const services = [
  { title: "Web Development", body: "Build clean, responsive and modern websites." },
  { title: "Python Development", body: "Develop Python-based applications, automation and software projects." },
  { title: "AI & Machine Learning", body: "Create AI/ML-based solutions and prototypes." },
  { title: "Computer Vision", body: "Develop computer vision applications using image and video processing." },
  { title: "UI/UX Design", body: "Create clean, intuitive and user-friendly digital interfaces." },
  { title: "Software & Project Development", body: "Build academic, prototype and software-based projects." },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];


export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Adamas University, West Bengal",
    period: "2023 – 2027",
    note: "Expected graduation: 2027",
  },
  {
    degree: "Secondary & Higher Secondary Education",
    school: "Assam Rifles Public School, Agartala, Tripura",
    period: "Completed",
    note: "Foundation in science and mathematics",
  },
];

export const internships = [
  {
    org: "National Institute of Technology, Agartala",
    role: "Intern",
    period: "1 June 2026 – 21 July 2026",
    responsibilities: [
      "Working on assigned technical project tasks in an academic research environment",
      "Applying programming and problem-solving skills under faculty guidance",
    ],
    tech: ["Python", "C/C++", "Research"],
    outcome: "Deeper hands-on exposure to structured technical project work.",
  },
  {
    org: "Indian Oil Corporation Ltd — Guwahati Refinery",
    role: "Intern",
    period: "1 January 2026 – 30 January 2026",
    responsibilities: [
      "Worked within an industrial IT/engineering environment on assigned intern tasks",
      "Studied operational systems and documented observations from the refinery workflow",
    ],
    tech: ["Technical Documentation", "Problem Solving"],
    outcome:
      "Gained exposure to how technology supports large-scale industrial operations.",
  },
  {
    org: "Ministry of Electronics and Information Technology",
    role: "Intern",
    period: "May 2025 – July 2025",
    responsibilities: [
      "Contributed to language-data work, including recording audio data in Bengali (Tripura dialects)",
      "Supported the creation of multilingual datasets for speech recognition use cases",
    ],
    tech: ["Speech Data", "Dataset Creation", "Python"],
    outcome:
      "Learned how quality datasets are built and why they matter for AI systems.",
  },
  {
    org: "University of Calcutta",
    role: "Intern",
    period: "April 2024 – July 2024",
    responsibilities: [
      "Assisted with academic technical work and applied programming fundamentals to assigned tasks",
      "Collaborated with peers and mentors in a research-oriented setting",
    ],
    tech: ["C/C++", "Python", "Teamwork"],
    outcome:
      "First hands-on experience translating coursework into real project work.",
  },
];

export const skillGroups = [
  { title: "Programming", items: ["C", "C++", "Python", "SQL"] },
  { title: "Web Development", items: ["HTML", "CSS"] },
  { title: "AI / Machine Learning", items: ["AI Fundamentals", "Speech & Audio Datasets", "AI/ML Concepts"] },
  { title: "Computer Vision", items: ["Sensor-Based Gesture Recognition", "Real-Time Signal Processing"] },
  { title: "Databases", items: ["SQL", "Relational Data Basics"] },
  { title: "Development Tools", items: ["Flutter (App Development)", "Web Crawling with Python"] },
  {
    title: "Professional Skills",
    items: ["Problem Solving", "Teamwork & Collaboration", "Quick Learner", "Creativity & Innovation", "Multilingual Communication"],
  },
];

export const projects = [
  {
    title: "STUDBUD",
    subtitle: "AI-powered academic support platform",
    overview:
      "An academic support platform that uses AI to help students organise study material and get assistance with their coursework.",
    problem:
      "Students juggle scattered notes, deadlines and study resources with no single place to get quick academic help.",
    features: [
      "AI-assisted academic support for students",
      "Centralised study and coursework assistance",
      "Student-first, simple interface",
    ],
    tech: ["Python", "AI/ML", "Web"],
    contribution:
      "Worked on the concept and development of the platform as a core academic project.",
  },
  {
    title: "Real-Time Hand-Sign Translator",
    subtitle: "Sensor gloves for sign-language translation",
    overview:
      "A wearable system using sensor gloves that reads hand signs and translates them into readable output in real time.",
    problem:
      "Everyday communication is difficult for sign-language users when the people around them do not understand signs.",
    features: [
      "Real-time capture of hand gestures via sensor gloves",
      "Signal processing to map gestures to their meaning",
      "Instant translated output for practical, everyday use",
    ],
    tech: ["Sensor Gloves", "Python", "Real-Time Processing", "AI"],
    contribution:
      "Contributed to building and testing the gesture capture and translation pipeline.",
  },
  {
    title: "Python Web Crawler",
    subtitle: "Automated website analysis",
    overview:
      "A Python-based web crawler that automatically visits websites and analyses them for technical issues.",
    problem:
      "Manually checking websites for technical problems is slow and easy to get wrong.",
    features: ["Automated crawling of web pages", "Detection of technical issues", "Reusable Python scripting"],
    tech: ["Python", "Web Crawling", "Automation"],
    contribution: "Built the crawler and its analysis logic.",
  },
  {
    title: "Bengali (Tripura Dialect) Speech Dataset",
    subtitle: "Multilingual data for ASR & chatbots",
    overview:
      "Recorded and organised audio data in Bengali Tripura dialects to build multilingual datasets for automated speech recognition and audio-based chatbots.",
    problem:
      "Regional dialects are underrepresented in speech datasets, so speech systems struggle to understand them.",
    features: ["Dialect-specific audio recording", "Structured multilingual dataset", "Supports ASR and chatbot use cases"],
    tech: ["Speech Data", "Dataset Creation", "ASR"],
    contribution: "Recorded and curated audio data for the dataset.",
  },
];

export const certifications = [
  { name: "C Language Certificate", issuer: "Great Learning", topic: "Programming fundamentals in C" },
  { name: "AI/ML Webinar", issuer: "GTL Academy", topic: "Artificial intelligence & machine learning basics" },
  { name: "Mobile App Development using Flutter", issuer: "Infosys", topic: "Cross-platform app development" },
  { name: "Cyber Job Simulation", issuer: "Deloitte", topic: "Cybersecurity workflows and analysis" },
  { name: "AI for Entrepreneurship", issuer: "Intel Technology", topic: "Applied AI and innovation" },
  { name: "Clash of Coders", issuer: "GDSC", topic: "Competitive programming & problem solving" },
];

export const expertise = [
  { title: "Software Development", body: "Building applications with C, C++ and Python fundamentals." },
  { title: "Web Development", body: "Structuring and styling clean, responsive web pages with HTML and CSS." },
  { title: "Artificial Intelligence", body: "Applying AI concepts to academic and practical student projects." },
  { title: "Machine Learning", body: "Working with datasets, speech data and ML fundamentals." },
  { title: "Computer Vision & Sensing", body: "Real-time gesture capture and signal-to-meaning translation." },
  { title: "Problem Solving", body: "Breaking down problems and learning new tools quickly to solve them." },
];
