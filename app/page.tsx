import { ArrowRight, Heart} from "lucide-react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


const experience = [
  { role: "Undergraduate Learning Assistant", org: "Full-Stack Web Development · Yale University", copy: "Supported more than 100 students learning full-stack development with Python, Flask, SQL, HTML, and CSS." },
  { role: "CodePath Tech Fellow", org: "CodePath", copy: "Guided students through data structures, algorithms, problem-solving strategies, and collaborative technical learning." },
  { role: "U.S. Grant Teaching Fellow", org: "Yale Office of International Affairs", copy: "Designed and taught computer science and STEM learning experiences for middle-school students using Scratch and HTML." },
  { role: "English Language Assistant", org: "TAPIF · Poitiers, France", copy: "Supported 19 primary-school classes across three schools, developing lessons for students ages 3–11." },
];



export default function Home() {
  return <main>

    <Hero />

    <About />

    <Journey/>

    <Projects />

    <section id="experience" className="section shell experience-layout"><div><h2>Experience</h2><div className="timeline">{experience.map(x => <article key={x.role}><h3>{x.role}</h3><p className="org">{x.org}</p><p>{x.copy}</p></article>)}</div></div><aside className="beyond"><Heart /><h2>Beyond Engineering</h2><p>Beyond software, I care deeply about teaching, faith, language, community, and creating spaces where people feel encouraged to grow. I enjoy writing, cooking, traveling, and learning from the people around me.</p></aside></section>

    <Skills />
    
    <section id="contact" className="contact shell"><div><h2>Let’s build something meaningful together.</h2><p>I’m open to thoughtful opportunities, collaborations, and conversations about technology, education, and product development.</p></div><a className="button button-dark" href="mailto:vimbisai.basvi@yale.edu">Get In Touch <ArrowRight size={16} /></a></section>
  </main>;
}
