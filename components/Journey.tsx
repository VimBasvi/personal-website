import { Compass } from "lucide-react";

function ZimbabweOutline() {
  return (
    <svg viewBox="0 0 100 80" aria-hidden="true">
      <path d="M13 18 82 13l7 35-15 9-3 13-25 1-17-8-12-17Z" />
    </svg>
  );
}

function UnitedStatesOutline() {
  return (
    <svg viewBox="0 0 120 76" aria-hidden="true">
      <path d="M7 15 23 13l8 6 20-5 23 3 17-5 21 9-8 10-9 1-4 10-8-1-1 10-9-3-8 7-3 14-8-6-2-12-11-4-9-9-10 3-8-9-7-1Z" />
    </svg>
  );
}

function YaleTower() {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <path d="M20 68h40M25 68V35h30v33M31 35V24h18v11M36 24V13h8v11M40 6v7M34 43h12M34 51h12M34 59h12M20 35h40M18 30h44" />
    </svg>
  );
}

function FranceOutline() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <path d="m47 8 20 10 7 13 13 12-8 20-14 11-6 17-17-4-12-13-16-8 5-18-8-14 19-12 8-10Z" />
    </svg>
  );
}

const milestones = [
  { label: "Zimbabwe", icon: ZimbabweOutline },
  { label: "United States", icon: UnitedStatesOutline },
  { label: "Yale", icon: YaleTower },
  { label: "France", icon: FranceOutline },
  { label: "Now", icon: Compass },
];

export default function JourneyPreview() {
  return (
    <section id="journey" className="journey">
      <div className="shell journey-inner">
        <div className="journey-heading">
          <p className="gold">My Journey</p>

          <h2>Places that shaped me.</h2>

          <p className="journey-copy">
            From Zimbabwe to the United States, Yale, and France, each chapter has
            shaped how I learn, teach, build, and belong.
          </p>
        </div>

        <ol>
          <svg
            className="journey-path"
            viewBox="0 0 1000 110"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M 24 54 C 120 18, 180 88, 252 60 S 410 12, 500 35 S 660 88, 750 60 S 900 18, 976 43"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="7 8"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;

            return (
              <li
                key={milestone.label}
                aria-label={`Step ${index + 1} of ${milestones.length}: ${milestone.label}`}
              >
                <span className="journey-icon">
                  <Icon aria-hidden="true" strokeWidth={1.5} />
                </span>
                <strong>{milestone.label}</strong>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
