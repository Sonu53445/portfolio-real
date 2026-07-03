import React, { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import HeroBackground from './components/HeroBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-primary transition-colors duration-500">
        <ThemeToggle />
        <HeroBackground />
        
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
