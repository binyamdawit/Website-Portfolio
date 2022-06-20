import './App.scss'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import NavMenue from './components/NavMenu'
import Particle from './Particle'


function App() {

  const location = useLocation()
  console.log(location)

  const renderParticleJsInHomePage = location.pathname === '/'
  return (
    <div className='App'>

      {
        renderParticleJsInHomePage && 
        <Particle />
      }

      {/* Navbar Menue */}
      <NavMenue/>

      {/* Page directories */}
      <div className="App_main-page-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
