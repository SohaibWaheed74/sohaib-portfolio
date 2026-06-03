import { education } from "../data/portfolioData";

function Education() {
  return (
    <section id="education" className="section">
      <div className="sectionHeader">
        <p>Education</p>
        <h2>Academic Background</h2>
      </div>

      <div className="educationGrid">
        {education.map((item) => (
          <div className="educationCard" key={item.degree}>
            <h3>{item.degree}</h3>

            {item.instituteLink ? (
              <a
                href={item.instituteLink}
                target="_blank"
                rel="noreferrer"
                className="instituteLink"
              >
                {item.institute} ↗
              </a>
            ) : (
              <h4>{item.institute}</h4>
            )}

            <p className="muted">{item.duration}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;