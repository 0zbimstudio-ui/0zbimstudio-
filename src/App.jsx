import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BimWorkflow from './components/BimWorkflow';
import WhyUs from './components/WhyUs';
import Projects from './components/Projects';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/index.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <BimWorkflow />
        <WhyUs />
        <Projects />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
