import './App.css'
import NavBar from './components/Nav'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ComparisonInfographic from './components/ComparisonInfographic'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Benefits />
        <ComparisonInfographic />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App
