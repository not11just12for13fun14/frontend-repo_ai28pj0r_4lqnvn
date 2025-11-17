import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

export default App
