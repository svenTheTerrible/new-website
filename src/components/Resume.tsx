import { useConfig } from './config-context'

export function Resume() {
  const { config, isLoading } = useConfig()

  if (isLoading || !config) {
    return null
  }

  return (
    <section className="resume-section" id="resume">
      <div className="resume-card">
        <h2 className="resume-title">READY PLAYER ONE?</h2>
        <p className="resume-sub">
          Grab my resume and let&apos;s team up for the next mission.
        </p>
        <a href="/resume.pdf" download className="btn-primary btn-lg">
          ⬇ DOWNLOAD_RESUME.PDF
        </a>
        <div className="social-links">
          <a href={config.socials.github} className="nav-link">
            GITHUB
          </a>
          <a href={config.socials.linkedin} className="nav-link">
            LINKEDIN
          </a>
          <a href={config.socials.email} className="nav-link">
            EMAIL
          </a>
        </div>
      </div>
    </section>
  )
}
