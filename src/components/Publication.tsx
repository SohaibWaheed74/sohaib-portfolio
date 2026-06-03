import { publication } from "../data/portfolioData";

function Publication() {
  return (
    <section id="publication" className="section">
      <div className="sectionHeader">
        <p>Publication</p>
        <h2>Research Paper</h2>
      </div>

      <div className="publicationCard">
        <span className="publicationBadge">Published Paper</span>

        <h3>{publication.title}</h3>

        <p className="publicationJournal">{publication.journal}</p>

        <div className="publicationMeta">
          <div>
            <strong>Issue</strong>
            <span>{publication.issue}</span>
          </div>

          <div>
            <strong>Section</strong>
            <span>{publication.section}</span>
          </div>

          <div>
            <strong>Published</strong>
            <span>{publication.publishedDate}</span>
          </div>
        </div>

        <div className="authorsBox">
          <strong>Authors</strong>
          <p>{publication.authors.join(", ")}</p>
        </div>

        <p>{publication.description}</p>

        <a
          href={publication.link}
          target="_blank"
          rel="noreferrer"
          className="paperLink"
        >
          View Published Paper ↗
        </a>
      </div>
    </section>
  );
}

export default Publication;