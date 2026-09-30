import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import { Marquee } from './components/Marquee'
import { Scanlines } from './components/Scanlines'
import { ThemeHost } from './components/ThemeHost'
import './styles/portfolio.css'

export default function App() {
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
        <span className="footer-text">© 2026 YOUR_NAME — BUILT WITH PIXELS</span>
      </footer>
    </>
  )
}
