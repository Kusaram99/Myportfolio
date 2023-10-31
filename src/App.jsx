import React, { useEffect, useState } from 'react';
import './index.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <div>

      <Header /> 
      <Nav />
        <About />
        <Skills />
        {/* <Services /> */}
        <Portfolio />
        <Contact />
        {/* <Footer /> */}
    </div>
  )
}

export default App