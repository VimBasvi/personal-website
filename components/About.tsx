import {
  ArrowRight,
  BookOpen,
  Code2,
  Globe2,
  Heart,
} from "lucide-react";

const pillars = [
  {
    icon: Globe2,
    title: "Global Perspective",
    copy: "Born in Zimbabwe, educated in the United States, and shaped by a year teaching in France.",
  },
  {
    icon: Code2,
    title: "Problem Solver",
    copy: "I enjoy breaking complex problems into clear, practical, and thoughtful solutions.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learner",
    copy: "I continually expand my technical knowledge while learning from people and unfamiliar experiences.",
  },
  {
    icon: Heart,
    title: "Purpose Driven",
    copy: "I want my work to create meaningful opportunities and improve everyday experiences.",
  },
];

export default function About() {
  return (
    <section id="about" className="about shell card-panel">
      <div className="about-intro">
        <p className="section-kicker">About Me</p>

        <p>
          I’m a Yale Computer Science graduate working at the intersection of
          software engineering, education, and product development. Across
          Zimbabwe, the United States, and France, I’ve learned to approach
          problems with curiosity, adaptability, faith, and care.
        </p>

        <a href="#journey">
          More about my journey
          <ArrowRight size={14} />
        </a>
      </div>

      {pillars.map(({ icon: Icon, title, copy }) => (
        <article className="pillar" key={title}>
          <Icon />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </section>
  );
}