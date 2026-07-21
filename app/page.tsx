import { ArrowRight, Heart} from "lucide-react";

import Hero from "@/components/Hero";
import About from "@/components/About";



const milestones = ["Zimbabwe", "United States", "Yale", "France", "Now"];

const projects = [
  { status: "Research Phase", title: "Elegance", copy: "Exploring a platform that helps people discover trusted professionals experienced in textured hair.", tags: ["Product Research", "Interviews", "In Progress"] },
  { status: "In Progress", title: "Personal Website", copy: "A living digital home for my engineering work, international journey, current learning, and writing.", tags: ["Next.js", "TypeScript", "Design"] },
  { status: "To Be Selected", title: "Selected Work", copy: "A completed technical project will be chosen after reviewing depth, presentation, and impact.", tags: ["Coming Soon"] },
];

const experience = [
  { role: "Undergraduate Learning Assistant", org: "Full-Stack Web Development · Yale University", copy: "Supported more than 100 students learning full-stack development with Python, Flask, SQL, HTML, and CSS." },
  { role: "CodePath Tech Fellow", org: "CodePath", copy: "Guided students through data structures, algorithms, problem-solving strategies, and collaborative technical learning." },
  { role: "U.S. Grant Teaching Fellow", org: "Yale Office of International Affairs", copy: "Designed and taught computer science and STEM learning experiences for middle-school students using Scratch and HTML." },
  { role: "English Language Assistant", org: "TAPIF · Poitiers, France", copy: "Supported 19 primary-school classes across three schools, developing lessons for students ages 3–11." },
];

const skillGroups = [
  ["Languages", "Python · JavaScript · TypeScript · Java · SQL · HTML/CSS"],
  ["Frontend", "React · Next.js · Tailwind CSS"],
  ["Backend", "Flask · Django · Laravel · REST APIs"],
  ["Data & Tools", "MySQL · SQLAlchemy · Firebase · Git · Linux"],
];

export default function Home() {
  return <main>

    <Hero />

    <About />

    <section id="journey" className="journey">
      <div className="shell journey-inner"><div><p className="gold">My Journey</p><h2>Where I’ve been.<br />What I’ve learned.</h2></div><ol>{milestones.map((m, i) => <li key={m}><span>{i + 1}</span><strong>{m}</strong></li>)}</ol></div>
    </section>

    <section id="projects" className="section shell"><div className="section-heading"><h2>Featured Projects</h2><a href="#projects">View all projects <ArrowRight size={14} /></a></div><div className="project-grid">{projects.map(p => <article className="project-card" key={p.title}><div className="project-visual" /><div className="project-body"><span className="badge">{p.status}</span><h3>{p.title}</h3><p>{p.copy}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><a href="#contact">View project <ArrowRight size={14} /></a></div></article>)}</div></section>

    <section id="experience" className="section shell experience-layout"><div><h2>Experience</h2><div className="timeline">{experience.map(x => <article key={x.role}><h3>{x.role}</h3><p className="org">{x.org}</p><p>{x.copy}</p></article>)}</div></div><aside className="beyond"><Heart /><h2>Beyond Engineering</h2><p>Beyond software, I care deeply about teaching, faith, language, community, and creating spaces where people feel encouraged to grow. I enjoy writing, cooking, traveling, and learning from the people around me.</p></aside></section>

    <section id="skills" className="skills shell card-panel"><div><h2>Technical Skills</h2><div className="skill-grid">{skillGroups.map(([name, items]) => <article key={name}><h3>{name}</h3><p>{items}</p></article>)}</div></div><aside><h2>Currently Learning</h2><p>Product discovery · System design · FastAPI · AI-assisted software engineering · Cloud architecture</p><h2>Field Notes</h2><a href="#contact">What I’m learning from my first customer interviews <ArrowRight size={14} /></a></aside></section>

    <section id="contact" className="contact shell"><div><h2>Let’s build something meaningful together.</h2><p>I’m open to thoughtful opportunities, collaborations, and conversations about technology, education, and product development.</p></div><a className="button button-dark" href="mailto:vimbisai.basvi@yale.edu">Get In Touch <ArrowRight size={16} /></a></section>
  </main>;
}
