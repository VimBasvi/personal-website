const milestones = [
  "Zimbabwe",
  "United States",
  "Yale",
  "France",
  "Now",
];

export default function JourneyPreview() {
  return (
    <section id="journey" className="journey">
      <div className="shell journey-inner">
        <div>
          <p className="gold">My Journey</p>
          <h2>
            Where I’ve been.
            <br />
            What I’ve learned.
          </h2>
        </div>

        <ol>
          {milestones.map((milestone, index) => (
            <li key={milestone}>
              <span>{index + 1}</span>
              <strong>{milestone}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}