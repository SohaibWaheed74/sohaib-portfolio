import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="sectionHeader">
        <p>Experience</p>
        <h2>Work & Internship</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <div className="timelineCard" key={item.company}>
            <h3>{item.role}</h3>
            <h4>{item.company}</h4>
            <p className="muted">
              {item.location} | {item.duration}
            </p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;