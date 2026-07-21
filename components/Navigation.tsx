import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navigation() {
  return (
    <header className="nav shell">
      <Link
        className="monogram"
        href="/"
        aria-label="Vimbisai Basvi home"
      >
        VB
      </Link>

      <nav aria-label="Primary navigation">
        <Link href="/#about">About</Link>
        <Link href="/#journey">Journey</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#skills">Skills</Link>
        <Link href="/#contact">Contact</Link>
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