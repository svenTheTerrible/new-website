import { useConfig } from './config-context'

export function Hero() {
  const { config, isLoading } = useConfig()

  if (isLoading || !config) {
    return null
  }

  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="hero-sprite">
        <span className="hero-pixel" />
      </div>

      <div className="hero-copy">
        <h1 className="hero-title">{config.name}</h1>
        <div className="hero-role">FULLSTACK ENGINEER</div>
        <div className="hero-stack">
          {config.stack.map((item, index) => (
            <span key={item}>
              {index > 0 && '\u00A0·\u00A0'}
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          ▶ VIEW PROJECTS
        </a>
        <a href="#resume" className="btn-outline">
          ⬇ RESUME
        </a>
      </div>

      <div className="hero-prompt">▸ PRESS START</div>

      <span className="hero-arrow">▼</span>
    </section>
  )
}
