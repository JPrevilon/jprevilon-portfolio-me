export type ExperienceItem = {
  title: string;
  company: string;
  employmentType: string;
  dates: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Founder & Full-Stack Software Engineer",
    company: "Duorya",
    employmentType: "Freelance",
    dates: "2026 - Present",
    bullets: [
      "Built and launched responsive websites, including Aeterna Spa, with HTML, CSS, and JavaScript.",
      "Developed cinematic previews for Deer Creek and LYC using scroll-driven media and responsive interfaces.",
    ],
  },
  {
    title: "Web Developer",
    company: "Pulse Interactive",
    employmentType: "Contract",
    dates: "Nov 2024 - Nov 2025",
    bullets: [
      "Developed and maintained responsive web interfaces with React and TypeScript.",
    ],
  },
  {
    title: "Full-Stack Engineer",
    company: "White Sapphire",
    employmentType: "Full-time",
    dates: "2020 - 2024",
    bullets: [
      "Developed and maintained web application features using Node.js, TypeScript, and PostgreSQL.",
    ],
  },
  {
    title: "Music Producer — Production Deal",
    company: "Sony",
    employmentType: "Contract",
    dates: "2017 - 2020",
    bullets: [
      "Music production under a Sony production deal.",
    ],
  },
  {
    title: "Intern",
    company: "Republic Records",
    employmentType: "Internship",
    dates: "2016 - 2017",
    bullets: [
      "Internship experience at Republic Records.",
    ],
  },
];
