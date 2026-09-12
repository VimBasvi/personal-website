import type { Project } from "@/data/projects";
import { ArrowUpRight, GitBranch } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className={`project-visual project-visual-${project.slug}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            fill
            priority={priority}
            sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="project-body">
        <span className="badge">{project.status}</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tags" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-links">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <GitBranch size={15} />
              View code
            </a>
          ) : (
            <span className="project-note">Case study coming soon</span>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live site <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}