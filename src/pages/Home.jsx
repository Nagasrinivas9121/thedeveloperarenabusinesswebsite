import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Pricing from '../components/Pricing'
import Services from '../components/Services'
import Support from '../components/Support'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Pricing />
      <Services />
      <Support />
      <Footer />
    </div>
  )
}

export default Home