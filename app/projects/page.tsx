import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Vimbisai Basvi",
  description:
    "Selected software, product, and human-computer interaction projects by Vimbisai Basvi.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="projects-hero shell">
        <p className="section-kicker">My Work</p>
        <h1>
          Projects shaped by
          <br />
          curiosity and care<span>.</span>
        </h1>
        <p>
          A selection of software, product, and research work—from early
          full-stack experiments to collaborative systems and products still
          evolving through real conversations.
        </p>
      </section>

      <section className="projects-collection shell" aria-label="All projects">
        <div className="projects-summary">
          <p>Selected work</p>
          <span>{projects.length.toString().padStart(2, "0")} projects</span>
        </div>
        <div className="project-grid project-grid-full">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              key={project.slug}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <section className="projects-closing shell">
        <p className="section-kicker">Still Building</p>
        <h2>This collection will grow with me.</h2>
        <p>
          I’m continuing to document the process behind these projects, add
          interface images, and build new work at the intersection of
          engineering, education, and thoughtful product design.
        </p>
      </section>
    </main>
  );
}