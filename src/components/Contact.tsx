import { profile } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="section contactSection">
      <div className="sectionHeader">
        <p>Contact</p>
        <h2>Get In Touch</h2>
      </div>

      <div className="contactCard">
        <p>
          I am open to internships, junior developer roles, React Native
          development, frontend development, and software development
          opportunities.
        </p>

        <div className="contactInfo">
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phone}
          </p>
        </div>

        <div className="contactLinks">
          <a href={`mailto:${profile.email}`}>Email Me</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;