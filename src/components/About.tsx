import { profile } from "../data/portfolioData";

function About() {
    return (
        <section id="about" className="section">
            <div className="sectionHeader">
                <p>About</p>
                <h2>About Me</h2>
            </div>

            <div className="aboutCard">
                <p>
                    Motivated Computer Science graduate with a strong interest in mobile and web
                    development. I am eager to work in a dynamic environment that encourages
                    continuous learning, professional growth, and practical problem-solving.
                </p>

                <p>
                    My main final year project is the Computer Architecture Toolkit. It is
                    an educational React Native application that helps students understand
                    CPU architecture, instruction execution, registers, memory, stack,
                    flags, and addressing modes through visualization.
                </p>

                <div className="aboutGrid">
                    <div>
                        <h3>Location</h3>
                        <p>{profile.location}</p>
                    </div>

                    <div>
                        <h3>Focus</h3>
                        <p>Mobile & Web Development</p>
                    </div>

                    <div>
                        <h3>Main Stack</h3>
                        <p>React Native, React JS, C#, SQL Server</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;