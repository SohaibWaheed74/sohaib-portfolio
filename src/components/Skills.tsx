import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="sectionHeader">
        <p>Skills</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skillsGrid">
        {skills.map((skill) => (
          <div className="skillCard" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;