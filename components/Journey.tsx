import { Compass } from "lucide-react";

function ZimbabweOutline() {
  return (
    <svg className="country-mark" viewBox="0 0 100 70" aria-hidden="true">
      <path d="M69.6 65.8 53.4 64.3 40.5 58.8 37.8 49.8 33.9 48.8 23.5 38.7 15.2 24.4 31.6 26.3 49 8.9 61.2 4 61.8 7.4 69.4 7.2 84.7 15.1 83 48Z" />
    </svg>
  );
}

function UnitedStatesOutline() {
  return (
    <svg
      className="country-mark country-mark-us"
      viewBox="0 0 100 70"
      aria-hidden="true"
    >
      <path d="M6.9 16.2 51.6 15.6 61.9 17.4 71.2 22.1 70.9 27.9 83.4 22.6 88.8 22.6 92.4 18.7 94.7 19.3 96 22.9 91 24.7 91.2 28 82.4 31.4 81.7 35 81 31.9 82 37.7 73.1 44.2 74.6 54.2 69.3 46.6 65 45.9 60.6 46 60.2 47.9 51.8 47.4 47.9 50 47.3 53.2 41.8 47.5 37.1 47.7 33 43.7 16 42.5 10.5 39.2 4.5 30.1 4 17.5 7.3 19.3Z" />
    </svg>
  );
}

function YaleMark() {
  return (
    <span className="yale-mark" aria-hidden="true">
      Y
    </span>
  );
}

function FranceOutline() {
  return (
    <svg className="country-mark" viewBox="0 0 100 70" aria-hidden="true">
      <path d="M81.2 15.9 94.7 19 90.2 28.8 85.1 29.4 80.2 35.1 80.1 38.3 83.4 37.2 85.8 40.3 87.6 44.9 85.2 47.1 87 52.5 90.8 53.4 90 56.5 83.6 60.5 69.7 58.6 59.5 60.8 58.7 65.1 50.5 66 27.1 61.1 24.3 58.4 27.9 54.2 29.2 40.1 16.8 29.2 6 26.5 5.3 21.4 14.4 19.8 26.3 21.6 24 13.7 30.7 16.7 47.1 11.2 49.2 5.4 55.4 4 67.8 12.7Z" />
    </svg>
  );
}

const milestones = [
  { label: "Zimbabwe", icon: ZimbabweOutline },
  { label: "United States", icon: UnitedStatesOutline },
  { label: "Yale", icon: YaleMark },
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
            From Zimbabwe to the United States, Yale, and France, each chapter
            has shaped how I learn, teach, build, and belong.
          </p>
        </div>

        <ol>
          <svg
            className="journey-path"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M 26 62 C 130 24, 182 94, 258 66 S 414 18, 500 40 S 655 94, 750 67 S 900 24, 974 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="7 9"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;

            return (
              <li
                key={milestone.label}
                aria-label={`Stop ${index + 1} of ${milestones.length}: ${
                  milestone.label
                }`}
              >
                <span className="journey-icon" aria-hidden="true">
                  <Icon />
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