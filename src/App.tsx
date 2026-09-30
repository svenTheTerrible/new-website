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
import './styles/portfolio.css'

function SiteFooter({ year }: { year: number }) {
  const { config } = useConfig()

  if (!config) {
    return null
  }

  return (
    <footer className="site-footer">
      <span className="footer-text">
        © {year} {config.name} — BUILT WITH PIXELS
      </span>
    </footer>
  )
}

export default function App() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <ConfigProvider>
        <ThemeHost>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Resume />
          <Marquee />
        </ThemeHost>
        <Scanlines />
        <SiteFooter year={currentYear} />
      </ConfigProvider>
    </>
  )
}
