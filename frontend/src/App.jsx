import './App.css'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Achievements from './components/Achievements/Achievements'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import PortfolioAI from './components/PortfolioAI/PortfolioAI'

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills/>

      <Projects/>

      <Achievements/>

      <Education/>

      <Contact/>

      <PortfolioAI />
    </>
  )
}

export default App