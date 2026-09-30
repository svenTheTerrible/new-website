import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import { Marquee } from './components/Marquee'
import { Scanlines } from './components/Scanlines'
import { ThemeHost } from './components/ThemeHost'
import { ConfigProvider } from './components/ConfigProvider'
import { useConfig } from './components/config-context'
import { LoadingSpinner } from './components/LoadingSpinner'
import type { SiteConfig } from './config'
import './styles/portfolio.css'

function AppBody({ config }: { config: SiteConfig }) {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <ThemeHost>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Marquee />
      </ThemeHost>
      <Scanlines />
      <footer className="site-footer">
        <span className="footer-text">
          © {currentYear} {config.name} — BUILT WITH PIXELS
        </span>
      </footer>
    </>
  )
}

function AppInner() {
  const { config, isLoading, error } = useConfig()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error || !config) {
    return (
      <div className="loader">
        <div className="loader-error">Failed to load config.</div>
      </div>
    )
  }

  return <AppBody config={config} />
}

export function App() {
  return (
    <ConfigProvider>
      <AppInner />
    </ConfigProvider>
  )
}
