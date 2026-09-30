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
        <a href="/custom/resume.pdf" download className="btn-primary btn-lg">
          ⬇ DOWNLOAD_RESUME.PDF
        </a>
        <div className="social-links">
          {config.socials.map((link, index) => (
            <a href={link.url} key={index} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
