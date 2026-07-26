import { ArrowRight } from "lucide-react";

const skillGroups = [
  ["Languages", "Python · JavaScript · TypeScript · Java · SQL · HTML/CSS"],
  ["Frontend", "React · Next.js · Tailwind CSS"],
  ["Backend", "Flask · Django · Laravel · REST APIs"],
  ["Data & Tools", "MySQL · SQLAlchemy · Firebase · Git · Linux"],
];

export default function Skills() {
  return (
    <section id="skills" className="skills shell card-panel">
      <div>
        <h2>Technical Skills</h2>
        <div className="skill-grid">
          {skillGroups.map(([name, items]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{items}</p>
            </article>
          ))}
        </div>
      </div>
      <aside>
        <h2>Currently Learning</h2>
        <p>Product discovery · System design · FastAPI · AI-assisted software engineering · Cloud architecture</p>
        <h2>Field Notes</h2>
        <a href="#contact">
          What I’m learning from my first customer interviews <ArrowRight size={14} />
        </a>
      </aside>
    </section>
  );
}
