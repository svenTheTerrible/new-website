interface Project {
  stage: string
  title: string
  description: string
  tags: string[]
}

const PROJECTS: Project[] = [
  { stage: '01', title: 'DISTRIBUTED TASK QUEUE', description: 'High-throughput job scheduler processing 50k tasks/sec with at-least-once delivery.', tags: ['GO', 'gRPC', 'REDIS'] },
  { stage: '02', title: 'REALTIME CHAT', description: 'Low-latency messaging with presence, typing indicators, and offline sync.', tags: ['TYPESCRIPT', 'REACT', 'WS'] },
  { stage: '03', title: 'PAYMENTS API', description: 'PCI-aware payment orchestration with idempotent retries and double-entry ledgering.', tags: ['JAVA', 'SPRING', 'POSTGRES'] },
  { stage: '04', title: 'ML FEATURE STORE', description: 'Online/offline feature serving with point-in-time correctness and low-latency reads.', tags: ['PYTHON', 'FASTAPI', 'KAFKA'] },
  { stage: '05', title: 'DEVOPS DASHBOARD', description: 'Cluster health, deploy pipelines, and cost insights unified in a single pane.', tags: ['REACT', 'GO', 'K8S'] },
  { stage: '06', title: 'OPEN SOURCE CLI', description: 'Developer tool with 2k+ stars for scaffolding production-ready microservices.', tags: ['GO', 'COBRA', 'OSS'] },
]

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
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href="#" className="card-link">▶ DEMO</a>
          <a href="#" className="card-link">{'</>'} CODE</a>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-head">
        <span className="section-label">// PROJECTS</span>
        <span className="section-rule" />
        <span className="section-sublabel">▸ SELECT A STAGE</span>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.stage} project={project} />
        ))}
      </div>
    </section>
  )
}
