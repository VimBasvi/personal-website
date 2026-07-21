import { ArrowRight } from "lucide-react";

export default function Navigation() {
  return (
    <header className="nav shell">
      <a
        className="monogram"
        href="/"
        aria-label="Vimbisai Basvi home"
      >
        VB
      </a>

      <nav aria-label="Primary navigation">
        <a href="/#about">About</a>
        <a href="/#journey">Journey</a>
        <a href="/#projects">Projects</a>
        <a href="/#experience">Experience</a>
        <a href="/#skills">Skills</a>
        <a href="/#contact">Contact</a>
      </nav>

      <a
        className="button button-dark"
        href="/vimbisai-basvi-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Résumé
        <ArrowRight size={15} />
      </a>
    </header>
  );
}