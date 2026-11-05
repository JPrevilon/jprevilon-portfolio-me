export type ExperienceItem = {
  title: string;
  company: string;
  employmentType: string;
  dates: string;
  projectPath?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    "title": "Founder & Full-Stack Software Engineer",
    "company": "Duorya",
    "dates": "2026 - Present",
    "bullets": [
      "Built and launched Aeterna Spa's responsive HTML, CSS, and JavaScript website with treatment tabs, comparison sliders, and enquiry form validation.",
      "Developed Deer Creek's multi-page website preview with a Vite build, canvas/video transitions, and mobile and reduced-motion navigation fallbacks."
    ],
    "employmentType": "Freelance"
  },
  {
    "title": "Founder & Full-Stack Developer",
    "company": "Pulse Interactive",
    "dates": "Nov 2024 - Nov 2025",
    "bullets": [
      "Built a city-based venue-streaming application with Next.js, React, TypeScript, Node.js/Express APIs, and PostgreSQL.",
      "Implemented JWT-protected API routes and Socket.IO updates for venue-streaming and activity workflows."
    ],
    "employmentType": "Self-employed",
    "projectPath": "/projects/pulse"
  },
  {
    "title": "Founder & Web Developer",
    "company": "White Sapphire",
    "dates": "2020 - 2024",
    "bullets": [
      "Created websites and web pages for businesses, artists, and creators based on their content and audience goals.",
      "Planned and produced promotional content and publishing schedules for YouTube, Twitch, and Kick."
    ],
    "employmentType": "Self-employed"
  },
  {
    "title": "Music Producer - Production Deal",
    "company": "Sony Music Entertainment",
    "employmentType": "Contract",
    "dates": "2017 - 2020",
    "bullets": [
      "Music production under a Sony production deal."
    ]
  },
  {
    "title": "Intern",
    "company": "Republic Records",
    "employmentType": "Internship",
    "dates": "2016 - 2017",
    "bullets": [
      "Internship experience at Republic Records."
    ]
  }
];
