import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trending from './components/Trending'
import TopSelling from './components/TopSelling'
import Reviews from './components/Reviews'
import BestO2 from './components/BestO2'
import Footer from './components/Footer'

function App() {

  return (

    <div className="bg-[#041b11] overflow-hidden">

      <Navbar />

      <Hero />

      <Trending />

      <TopSelling />

      <Reviews />

      <BestO2 />

      <Footer />

    </div>

  )
}

export default App