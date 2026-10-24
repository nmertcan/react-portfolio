import { Asset } from './Shared.jsx';

export function ProjectPreview({ project, t }) {
  return (
    <div
      className={`project-image project-preview preview-${project.id}`}
      role="img"
      aria-label={`${project.title} ${t.projectPreview}`}
    >
      <Asset name={project.preview} className="project-screenshot" loading="lazy" />
    </div>
  );
}
