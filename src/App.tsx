import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import { Marquee } from './components/Marquee'
import { Scanlines } from './components/Scanlines'
import { ThemeHost } from './components/ThemeHost'
import { ConfigProvider } from './components/ConfigProvider'
import './styles/portfolio.css'

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
      </ConfigProvider>
      <Scanlines />
      <footer className="site-footer">
        <span className="footer-text">
          © {currentYear} SVEN STAFFL — BUILT WITH PIXELS
        </span>
      </footer>
    </>
  )
}
