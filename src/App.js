import './App.scss'

import { Hero, About, Works, Skills,Testimonials, Contact } from './containers';
import { NavBar, Footer } from './components';

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Works/>
    <Skills/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
