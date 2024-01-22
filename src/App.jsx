import './app.scss'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import Parallax from '@/components/parallax/Parallax'
import Services from '@/components/services/Services'

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id='Services'>
        <Parallax type='services'></Parallax>
      </section>
      <section>
        <Services></Services>
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio'></Parallax>
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>
    </div>
  )
}

export default App
