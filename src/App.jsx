import Hero from './components/Hero'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-stone-50">
      <Navbar />
      <div className="main-scroll w-full max-w-6xl mx-auto px-6 overflow-y-auto h-screen scroll-snap-y">
        <Hero />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </div>
  )
}

export default App
