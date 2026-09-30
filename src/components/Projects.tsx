import type { Project } from '../config'
import { useConfig } from './config-context'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-art">
        <span className="project-stage">STAGE {project.stage}</span>
        <span className="project-artpixel" />
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {(project.demo || project.code) && (
          <div className="project-links">
            {project.demo && (
              <a
                href={project.demo}
                className="card-link"
                target="_blank"
                rel="noopener"
              >
                ▶ DEMO
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                className="card-link"
                target="_blank"
                rel="noopener"
              >
                {'</>'} CODE
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  const { config, isLoading } = useConfig()

  if (isLoading || !config) {
    return null
  }

  return (
    <section className="section" id="projects">
      <div className="section-head">
        <span className="section-label">// PROJECTS</span>
        <span className="section-rule" />
        <span className="section-sublabel">▸ SELECT A STAGE</span>
      </div>

      <div className="projects-grid">
        {config.projects.map((project) => (
          <ProjectCard key={project.stage} project={project} />
        ))}
      </div>
    </section>
  )
}
