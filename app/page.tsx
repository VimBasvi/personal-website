import Image from "next/image";
import { ArrowRight, BookOpen, Code2, GitBranch, Globe2, Heart, Link, Mail, MapPin } from "lucide-react";

const pillars = [
  { icon: Globe2, title: "Global Perspective", copy: "Born in Zimbabwe, educated in the United States, and shaped by a year teaching in France." },
  { icon: Code2, title: "Problem Solver", copy: "I enjoy breaking complex problems into clear, practical, and thoughtful solutions." },
  { icon: BookOpen, title: "Lifelong Learner", copy: "I continually expand my technical knowledge while learning from people and unfamiliar experiences." },
  { icon: Heart, title: "Purpose Driven", copy: "I want my work to create meaningful opportunities and improve everyday experiences." },
];

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
    <header className="nav shell">
      <a className="monogram" href="#top" aria-label="Vimbisai Basvi home">VB</a>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a><a href="#journey">Journey</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
      </nav>
      <button className="button button-dark">Résumé <ArrowRight size={15}/></button>
    </header>

    <section id="top" className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow">Hi, I’m</p>
        <h1>Vimbisai<br/>Basvi<span>.</span></h1>
        <p className="role">Engineer. Educator. Builder.</p>
        <p className="lede">I build thoughtful software and learning experiences that solve meaningful problems and empower people.</p>
        <div className="actions"><a className="button button-dark" href="#projects">View My Work <ArrowRight size={16}/></a><a className="button button-light" href="#contact">Get In Touch <Mail size={16}/></a></div>
        <div className="socials"><span><GitBranch/>GitHub</span><span><Link/>LinkedIn</span><span><Mail/>Email</span><span><MapPin/>New Haven, CT</span></div>
      </div>
      <div className="portrait"><Image src="/vimbisai-outdoors.jpg" alt="Vimbisai Basvi smiling outdoors" fill priority sizes="(max-width: 800px) 100vw, 48vw"/></div>
    </section>

    <section id="about" className="about shell card-panel">
      <div className="about-intro"><p className="section-kicker">About Me</p><p>I’m a Yale Computer Science graduate working at the intersection of software engineering, education, and product development. Across Zimbabwe, the United States, and France, I’ve learned to approach problems with curiosity, adaptability, faith, and care.</p><a href="#journey">More about my journey <ArrowRight size={14}/></a></div>
      {pillars.map(({icon:Icon,title,copy})=><article className="pillar" key={title}><Icon/><h3>{title}</h3><p>{copy}</p></article>)}
    </section>

    <section id="journey" className="journey">
      <div className="shell journey-inner"><div><p className="gold">My Journey</p><h2>Where I’ve been.<br/>What I’ve learned.</h2></div><ol>{milestones.map((m,i)=><li key={m}><span>{i+1}</span><strong>{m}</strong></li>)}</ol></div>
    </section>

    <section id="projects" className="section shell"><div className="section-heading"><h2>Featured Projects</h2><a href="#projects">View all projects <ArrowRight size={14}/></a></div><div className="project-grid">{projects.map(p=><article className="project-card" key={p.title}><div className="project-visual"/><div className="project-body"><span className="badge">{p.status}</span><h3>{p.title}</h3><p>{p.copy}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a href="#contact">View project <ArrowRight size={14}/></a></div></article>)}</div></section>

    <section id="experience" className="section shell experience-layout"><div><h2>Experience</h2><div className="timeline">{experience.map(x=><article key={x.role}><h3>{x.role}</h3><p className="org">{x.org}</p><p>{x.copy}</p></article>)}</div></div><aside className="beyond"><Heart/><h2>Beyond Engineering</h2><p>Beyond software, I care deeply about teaching, faith, language, community, and creating spaces where people feel encouraged to grow. I enjoy writing, cooking, traveling, and learning from the people around me.</p></aside></section>

    <section id="skills" className="skills shell card-panel"><div><h2>Technical Skills</h2><div className="skill-grid">{skillGroups.map(([name,items])=><article key={name}><h3>{name}</h3><p>{items}</p></article>)}</div></div><aside><h2>Currently Learning</h2><p>Product discovery · System design · FastAPI · AI-assisted software engineering · Cloud architecture</p><h2>Field Notes</h2><a href="#contact">What I’m learning from my first customer interviews <ArrowRight size={14}/></a></aside></section>

    <section id="contact" className="contact shell"><div><h2>Let’s build something meaningful together.</h2><p>I’m open to thoughtful opportunities, collaborations, and conversations about technology, education, and product development.</p></div><a className="button button-dark" href="mailto:vimbisai.basvi@yale.edu">Get In Touch <ArrowRight size={16}/></a></section>
    <footer><div className="shell"><span className="monogram">VB</span><p>© 2026 Vimbisai Basvi</p><p>Built with care, Next.js, and TypeScript.</p></div></footer>
  </main>;
}
