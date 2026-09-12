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
      <section className="projects-hero">
        <div className="projects-hero-watermark" aria-hidden="true">
          WORK
        </div>

        <div className="projects-hero-inner shell">
          <div className="projects-hero-grid">
            <div className="projects-hero-copy">
              <h1>
                What I’ve built—and what it taught me<span>.</span>
              </h1>

              <p>
                A selection of projects spanning early full-stack experiments,
                collaborative systems, and products still evolving through
                research and real conversations.
              </p>
            </div>

            <aside
              className="projects-index"
              aria-label={`${projects.length} selected projects`}
            >
              <strong>
                {projects.length.toString().padStart(2, "0")}
              </strong>

              <p>Selected projects</p>

              <span>
                Software · Product
                <br />
                AI · HCI
              </span>
            </aside>
          </div>

          <div className="projects-hero-meta">
            <span>Explore the collection ↓</span>
          </div>
        </div>
      </section>

      <section className="projects-collection shell" aria-label="All projects">
        <div className="projects-summary">
          <p>Selected work</p>
          <span>
            {projects.length.toString().padStart(2, "0")} projects
          </span>
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