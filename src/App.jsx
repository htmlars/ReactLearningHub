import React from 'react'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import Pricing from './Components/Pricing'
import Features from './Components/Features'
import CTA from './Components/CTA'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <Stats/>
      <Features/>
      <CTA/>
      <Testimonials/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App