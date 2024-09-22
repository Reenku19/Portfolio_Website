

import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Skills } from './components/Skills'
import Footer from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Certifications } from './components/Certifications' 
import { Achievements } from './components/Achievements'

function App() {
 

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Certifications></Certifications> 
      <Achievements></Achievements>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
