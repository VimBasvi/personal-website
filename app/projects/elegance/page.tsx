import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  MapPin,
  Search,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Project Elegance | Vimbisai Basvi",
  description:
    "An ongoing product-discovery project exploring how people find and build trust with textured-hair stylists.",
};

const origin = [
  {
    number: "01",
    title: "CoCo came first",
    copy: (
      <>
        While at Yale, I contributed to the website for CoCo, a student
        organization working in this problem space. We published the
        application for a short period before the project changed hands.
        <a
          className="elegance-inline-link"
          href="https://github.com/VimBasvi/cco"
          target="_blank"
          rel="noreferrer"
        >
          View CoCo on GitHub <ArrowRight aria-hidden="true" size={14} />
        </a>
      </>
    ),
  },
  {
    number: "02",
    title: "France deepened the issue",
    copy: (
      <>
        Living in France made the problem more personal. Finding someone I
        trusted with my hair was difficult; a recommendation through my church
        community eventually helped me find care.
      </>
    ),
  },
  {
    number: "03",
    title: "I returned with better questions",
    copy: (
      <>
        In July and August 2026, I chose to revisit the problem—this time by
        learning from people&apos;s real experiences before deciding what to
        build.
      </>
    ),
  },
];

const researchScope = [
  { icon: Search, label: "Finding the last stylist" },
  { icon: ClipboardList, label: "Information considered" },
  { icon: ShieldCheck, label: "Signals of trust" },
  { icon: TriangleAlert, label: "Frustrations" },
  { icon: MapPin, label: "Finding care somewhere new" },
];

const themes = [
  {
    title: "Discovery is fragmented",
    copy: "Participants described using combinations of Instagram, Facebook groups, stylist websites, personal referrals, and word of mouth. Finding someone could become especially difficult after moving somewhere new.",
  },
  {
    title: "Trust goes beyond the finished style",
    copy: "Photos of previous work mattered, alongside communication, transparent pricing, professionalism, reliability, hair-care practices, and whether a stylist listened to them.",
  },
  {
    title: "Hair care can be deeply relational",
    copy: "Several participants described finding stylists through family and community and valued an ongoing relationship with someone who understood their hair.",
  },
];

const process = ["Listen", "Synthesize", "Define", "Prototype", "Test", "Build"];

export default function ElegancePage() {
  return (
    <main className="elegance-page">
      <section className="elegance-hero">
        <div className="shell elegance-hero-inner">
          <p className="elegance-kicker">Project Elegance</p>
          <h1>
            Exploring how people find and build trust with textured-hair
            stylists<span>.</span>
          </h1>
          <p className="elegance-hero-copy">
            Project Elegance is an ongoing exploration of how people find,
            evaluate, and build relationships with the people who care for
            their hair.
          </p>
          <ul className="elegance-labels" aria-label="Project details">
            <li>Product Discovery</li>
            <li>User Research</li>
            <li>In Progress</li>
          </ul>
        </div>
      </section>

      <section className="shell elegance-origin">
        <p className="elegance-section-label">Where It Started</p>
        <div className="elegance-origin-grid">
          {origin.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="elegance-research">
        <div className="shell">
          <p className="elegance-section-label">Listening Before Building</p>
          <div className="elegance-interview-heading">
            <strong>5</strong>
            <div>
              <h2>exploratory customer interviews</h2>
              <p>
                Rather than immediately choosing a product and beginning
                development, I started with conversations about participants&apos;
                actual experiences finding and choosing hairstylists.
              </p>
            </div>
          </div>

          <div className="elegance-scope">
            <p className="elegance-mini-label">Research Scope</p>
            <ul>
              {researchScope.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon aria-hidden="true" strokeWidth={1.5} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="elegance-themes-heading">
            <p className="elegance-mini-label">Early Themes</p>
            <span>What began to recur across the conversations</span>
          </div>
          <div className="elegance-theme-grid">
            {themes.map((theme) => (
              <article key={theme.title}>
                <h3>{theme.title}</h3>
                <p>{theme.copy}</p>
              </article>
            ))}
          </div>
          <p className="elegance-qualifier">
            Early themes from five exploratory client interviews—not
            conclusions about all consumers.
          </p>
        </div>
      </section>

      <section className="elegance-questions">
        <div className="shell elegance-questions-grid">
          <div>
            <p className="elegance-section-label elegance-section-label-light">
              Still Asking Questions
            </p>
            <h2>The client perspective is just the beginning.</h2>
            <p>
              These first conversations represent only the client side of the
              experience. I do not want to define or build a solution based on
              one side of the relationship.
            </p>
          </div>
          <aside>
            <span>Next</span>
            <h3>Stylist Interviews</h3>
            <p>
              I plan to speak with stylists to understand their experiences
              finding and retaining clients, communicating services, setting
              prices and policies, managing bookings, and building client
              relationships.
            </p>
          </aside>
        </div>
      </section>

      <section className="shell elegance-process">
        <p className="elegance-section-label">Discovery Process</p>
        <ol>
          {process.map((step, index) => (
            <li className={index === 0 ? "is-current" : undefined} key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
              {index === 0 && <small>Current</small>}
            </li>
          ))}
        </ol>
        <Link className="elegance-back" href="/projects">
          <ArrowLeft aria-hidden="true" size={15} /> Back to Projects
        </Link>
      </section>
    </main>
  );
}
