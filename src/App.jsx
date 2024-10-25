import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import OurVison from './components/OurVison'
import Services from './components/Services'
import Design from './components/Design'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Form from './components/Form'
import Footer from './components/Footer'
const App  = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <OurVison/>
      <Services/>
      <Design/>
      <Portfolio/>
      <Testimonial/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App