import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section id="projects" className="section shell">
      <div className="section-heading">
        <h2>Featured Projects</h2>

        <Link href="/projects">
          View all projects <ArrowRight size={14} />
        </Link>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <article className="project-card" key={project.slug}>
            <div className="project-visual" />

            <div className="project-body">
              <span className="badge">{project.status}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}