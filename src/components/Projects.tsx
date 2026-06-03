import { projects } from "../data/portfolioData";

function Projects() {
    return (
        <section id="projects" className="section">
            <div className="sectionHeader">
                <p>Projects</p>
                <h2>My Projects</h2>
            </div>

            <div className="projectsGrid">
                {projects.map((project) => (
                    <div className="projectCard" key={project.title}>
                        <div className="projectTop">
                            <h3>{project.title}</h3>
                            <span>{project.type}</span>
                        </div>

                        <p>{project.description}</p>

                        <h4>Technologies</h4>
                        <div className="techList">
                            {project.tech.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>

                        <h4>Features</h4>
                        <ul>
                            {project.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>

                        {project.publicationTitle && project.publicationLink && (
                            <div className="projectPublication">
                                <h4>Publication</h4>
                                <p>{project.publicationTitle}</p>

                                <a
                                    href={project.publicationLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="paperLink"
                                >
                                    View Published Paper ↗
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;