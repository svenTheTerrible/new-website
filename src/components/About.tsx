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
            <span className="photo-tag">
              <video
                style={{ width: 190, height: 190 }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/custom/profile.webm" type="video/webm" />
              </video>
            </span>
          </div>
          <div className="player-name">
            PLAYER 01
            <br />
            <span className="player-sub">{config.name}</span>
          </div>
        </div>

        <div className="about-text-col">
          <div className="block">
            <p className="about-para">{config.aboutMe.text1}</p>
            <p className="about-para" style={{ color: 'var(--muted)' }}>
              {config.aboutMe.text2}
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
