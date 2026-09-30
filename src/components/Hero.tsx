export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="hero-sprite">
        <span className="hero-pixel" />
      </div>

      <div className="hero-copy">
        <h1 className="hero-title">YOUR NAME</h1>
        <div className="hero-role">FULLSTACK ENGINEER</div>
        <div className="hero-stack">{'Java \u00A0·\u00A0Go \u00A0·\u00A0Python \u00A0·\u00A0React \u00A0·\u00A0TypeScript'}</div>
      </div>

      <div className="hero-actions">
        <a href="#projects" className="btn-primary">▶ VIEW PROJECTS</a>
        <a href="#resume" className="btn-outline">⬇ RESUME</a>
      </div>

      <div className="hero-prompt">▸ PRESS START</div>

      <span className="hero-arrow">▼</span>
    </section>
  )
}
