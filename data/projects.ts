export type Project = {
  title: string;
  slug: string;
  status: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Project Elegance",
    slug: "elegance",
    status: "In Development",
    description:
      "Exploring a platform that helps people discover trusted professionals experienced in textured hair.",
    technologies: ["Product Research", "Next.js", "TypeScript"],
    featured: true,
  },
  {
    title: "Serencity",
    slug: "serencity",
    status: "Award-Winning Class Project",
    description:
      "A collaborative platform for discovering, saving, and sharing peaceful local spaces through interactive maps and calendar integrations.",
    technologies: [
      "Flask",
      "SQLAlchemy",
      "Google Maps API",
      "Google OAuth",
    ],
    githubUrl: "https://github.com/VimBasvi/Serencity",
    featured: true,
  },
  {
    title: "YaliePlan",
    slug: "yalieplan",
    status: "Team Project",
    description:
      "An AI-assisted scheduling application. I built core Django authentication and user-storage functionality, developed interface controls, and helped integrate the React frontend with the backend.",
    technologies: ["React", "Django", "REST API", "Gemini API"],
    featured: true,
  },
  {
    title: "Claim Parser",
    slug: "claim-parser",
    status: "Completed",
    description:
      "A document-processing application that extracts and compares claim information using generative AI and fuzzy matching.",
    technologies: ["Next.js", "TypeScript", "Gemini", "Fuzzy Matching"],
    githubUrl: "https://github.com/VimBasvi/claim-parser-app",
  },
  {
    title: "FlashLearn",
    slug: "flashlearn",
    status: "Senior Thesis",
    description:
      "A learning application that explores spaced-repetition techniques using SM-2 and Leitner algorithms to support long-term retention.",
    technologies: ["Python", "Flask", "Firebase", "SM-2", "Leitner System"],
    githubUrl: "https://github.com/VimBasvi/FlashLearn",
  },
  {
    title: "CampusFinder",
    slug: "campusfinder",
    status: "HCI Project",
    description:
      "A body-based interactive experience that helps Yale students discover campus resources through physical movement.",
    technologies: ["JavaScript", "HCI", "Interactive Systems"],
    githubUrl: "https://github.com/VimBasvi/CPSC484-Final-Project",
  },
  {
    title: "Plants on Demand",
    slug: "plants-on-demand",
    status: "Foundational Project",
    description:
      "A full-stack plant marketplace and scheduling application—the project where the pieces of full-stack development first began coming together for me.",
    technologies: [
      "Flask",
      "SQLite",
      "Google OAuth",
      "Google Calendar API",
    ],
    githubUrl: "https://github.com/VimBasvi/Public-PlantsOnDemand",
  },
];