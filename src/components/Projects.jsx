import { Asset, SafeLink } from './Shared.jsx';
import { ProjectPreview } from './ProjectPreview.jsx';

export function Projects({ projects, t, language, apiStatus, onRetry }) {
  return (
    <section
      className="projects container divided"
      id="projects"
      data-source={apiStatus}
      aria-labelledby="projects-title"
    >
      <Asset name="divider-projects.svg" className="design-divider" />
      <h2 id="projects-title">{t.projects}</h2>
      {apiStatus === 'offline' && (
        <div className="api-notice" role="status">
          <span>{t.apiOffline}</span>
          <button type="button" onClick={onRetry}>
            {t.retry}
          </button>
        </div>
      )}
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <ProjectPreview project={project} t={t} />
            <h3>{project.title}</h3>
            <p>{project.description[language]}</p>
            <ul className="tags" aria-label={t.technologies}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="project-links">
              <SafeLink href={project.repository}>Github</SafeLink>
              {project.site && <SafeLink href={project.site}>{t.viewSite}</SafeLink>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
