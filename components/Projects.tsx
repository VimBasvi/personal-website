import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  { status: "Research Phase", title: "Elegance", copy: "Exploring a platform that helps people discover trusted professionals experienced in textured hair.", tags: ["Product Research", "Interviews", "In Progress"] },
  { status: "In Progress", title: "Personal Website", copy: "A living digital home for my engineering work, international journey, current learning, and writing.", tags: ["Next.js", "TypeScript", "Design"] },
  { status: "To Be Selected", title: "Selected Work", copy: "A completed technical project will be chosen after reviewing depth, presentation, and impact.", tags: ["Coming Soon"] },
];

export default function Projects() {
  return (
    <section id="projects" className="section shell">
      <div className="section-heading">
        <h2>Featured Projects</h2>
        <a href="/projects">View all projects <ArrowRight size={14} /></a>
      </div>
      <div className="project-grid">
        {projects.map(p => (
          <article className="project-card" key={p.title}>
            <div className="project-visual" />
            <div className="project-body">
              <span className="badge">{p.status}</span>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
              <div className="tags">
                {p.tags.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a href="#contact">View project <ArrowRight size={14} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
