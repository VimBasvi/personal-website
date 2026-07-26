
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="contact shell">
      <div>
        <h2>Let’s build something meaningful together.</h2>
        <p>I’m open to thoughtful opportunities, collaborations, and conversations about technology, education, and product development.</p>
      </div>
      <a className="button button-dark" href="mailto:basvi.vimbisai@gmail.com">
        Get In Touch <ArrowRight size={16} />
      </a>
    </section>
  );
}