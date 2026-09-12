import Image from "next/image";
import {
  ArrowRight,
  GitBranch,
  Link as LinkIcon,
  Mail,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow">Hi, I’m</p>

        <h1>
          Vimbisai
          <br />
          Basvi<span>.</span>
        </h1>

        <p className="role">Engineer. Educator. Builder.</p>

        <p className="lede">
          I build thoughtful software and learning experiences that solve
          meaningful problems and empower people.
        </p>

        <div className="actions">
          <a className="button button-dark" href="#projects">
            View My Work
            <ArrowRight size={16} />
          </a>

          <a className="button button-light" href="#contact">
            Get In Touch
            <Mail size={16} />
          </a>
        </div>

        <div className="socials">
          <a
            href="https://github.com/VimBasvi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vimbisai-b-6387b9191/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon />
            LinkedIn
          </a>

          <a href="mailto:basvi.vimbisai@gmail.com">
            <Mail />
            Email
          </a>

          <span>
            <MapPin />
            West New York, NJ
          </span>
        </div>
      </div>

      <div className="portrait">
        <Image
          src="/hero-image.jpeg"
          alt="Vimbisai Basvi smiling outdoors"
          fill
          priority
          sizes="(max-width: 800px) 100vw, 48vw"
        />
      </div>
    </section>
  );
}