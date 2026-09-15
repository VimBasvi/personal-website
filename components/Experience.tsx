
import { Heart } from "lucide-react";

const experience = [
  {
    role: "Tech Developer Intern",
    org: "SEO Career",
    copy:
      "Completed 300+ hours of software-engineering training and worked in a Scrum team to design and build a web application using Python, HTML, CSS, and MySQL.",
  },
  {
    role: "Undergraduate Learning Assistant",
    org: "Full-Stack Web Development · Yale University",
    copy:
      "Supported more than 100 students learning full-stack development with Python, Flask, SQL, HTML, and CSS.",
  },
  {
    role: "CodePath Tech Fellow",
    org: "CodePath",
    copy:
      "Guided students through data structures, algorithms, problem-solving strategies, and collaborative technical learning.",
  },
  {
    role: "Student Coordinator",
    org: "AI4ALL",
    copy:
      "Led weekly Python and artificial-intelligence workshops for more than 30 students and mentored small teams through computational projects.",
  },
  {
    role: "U.S. Grant Teaching Fellow",
    org: "Ulysses S. Grant Foundation · Dwight Hall at Yale",
    copy:
      "Designed and taught computer science and STEM learning experiences for middle-school students using Scratch and HTML.",
  },
  {
    role: "English Language Assistant",
    org: "TAPIF · Poitiers, France",
    copy:
      "Supported 19 primary-school classes across three schools, developing lessons for students ages 3–11.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section shell experience-layout">
      <div>
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map(x => (
            <article key={x.role}>
              <h3>{x.role}</h3>
              <p className="org">{x.org}</p>
              <p>{x.copy}</p>
            </article>
          ))}
        </div>
      </div>
      <aside className="beyond">
        <Heart />
        <h2>Beyond Engineering</h2>
        <p>Beyond software, I care deeply about teaching, faith, language, community, and creating spaces where people feel encouraged to grow. I enjoy writing, cooking, traveling, and learning from the people around me.</p>
      </aside>
    </section>
  );
}
