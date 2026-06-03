import { profile } from "../data/portfolioData";

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="heroContent">
        <p className="smallTitle">Hello, I am</p>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p>{profile.summary}</p>

        <div className="heroButtons">
          <a href="#projects" className="btn primaryBtn">
            View Projects
          </a>

          <a
            href={profile.resume}
            className="btn secondaryBtn"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="heroImageBox">
        <div className="imageCircle">
          <img
            src={profile.image}
            alt={profile.name}
            className="heroImage"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <span className="imageFallback">SB</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;