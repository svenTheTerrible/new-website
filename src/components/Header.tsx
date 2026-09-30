import { useEffect, useState } from 'react'

const START_SCORE = 13370
const INCREMENT = 10
const INTERVAL_MS = 900

export function Header() {
  const [score, setScore] = useState(START_SCORE)

  useEffect(() => {
    const id = setInterval(() => {
      setScore((current) => current + INCREMENT)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const padded = String(score).padStart(8, '0')

  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-logo">1UP</span>
        <span className="brand-score">{padded}</span>
      </div>
      <nav className="site-nav">
        <a href="#about" className="nav-link">
          ABOUT
        </a>
        <a href="#projects" className="nav-link">
          PROJECTS
        </a>
        <a href="#resume" className="nav-link">
          RESUME
        </a>
      </nav>
      <div className="credit-row">
        <span className="pixel-dot" />
        <span className="pixel-dot" />
        <span className="pixel-dot" />
        <span className="credit-label">CREDIT 02</span>
      </div>
    </header>
  )
}
