import { useConfig } from './config-context'

export function About() {
  const { config, isLoading } = useConfig()

  if (isLoading || !config) {
    return null
  }

  return (
    <section className="section" id="about">
      <div className="section-head">
        <span className="section-label">// ABOUT_ME</span>
        <span className="section-rule" />
      </div>

      <div className="about-grid">
        <div className="about-photo-col">
          <div className="photo-frame">
            <span className="photo-pixel" />
            <span className="photo-tag">DROP_PHOTO.PNG</span>
          </div>
          <div className="player-name">
            PLAYER 01
            <br />
            <span className="player-sub">YOUR NAME</span>
          </div>
        </div>

        <div className="about-text-col">
          <div className="block">
            <p className="about-para">
              I&apos;m a fullstack engineer who ships resilient backends in{' '}
              <b style={{ color: 'var(--glow)' }}>Java, Go &amp; Python</b> and
              crafts fast, fully-typed frontends in{' '}
              <b style={{ color: 'var(--glow)' }}>React + TypeScript</b>. I like
              clean APIs, observable systems, and interfaces that feel instant.
            </p>
            <p className="about-para" style={{ color: 'var(--muted)' }}>
              From distributed queues to realtime UIs — I take features from
              schema to ship. Currently leveling up and looking for the next
              co-op.
            </p>
          </div>

          <div className="block">
            <span className="block-label">▸ STATS</span>
            {config.stats.map((stat) => (
              <div className="stat-row" key={stat.label}>
                <span className="stat-label">{stat.label}</span>
                <div className="stat-bar">
                  <div className="stat-fill" style={{ width: stat.width }} />
                </div>
                <span className="stat-level">{stat.level}</span>
              </div>
            ))}
          </div>

          <div className="block">
            <span className="block-label">▸ INVENTORY</span>
            <div className="skills">
              {config.inventory.map((skill) => (
                <span className="skill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
