import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Shuffle from './Shuffle';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.5
      });
      
      gsap.from('.hero-social', {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 1.2
      });

      gsap.from('.hero-scroll', {
        opacity: 0,
        duration: 1,
        delay: 1.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-20 pb-32 md:pb-0">
      
      {/* Scroll Indicator */}
      <div className="absolute right-6 md:right-12 bottom-12 hidden md:flex flex-col items-center gap-4 hero-scroll z-20">
        <span className="text-[10px] tracking-[0.3em] text-white rotate-180" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse"></div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute right-6 md:right-12 bottom-12 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col gap-6 text-white z-20">
        <a href="https://github.com/Sonu53445" target="_blank" rel="noreferrer" className="hero-social hover:text-white transition-colors"><FaGithub size={18} /></a>
        <a href="https://linkedin.com/in/sonu-kumar-8a2683401" target="_blank" rel="noreferrer" className="hero-social hover:text-white transition-colors"><FaLinkedin size={18} /></a>
        <a href="#" target="_blank" rel="noreferrer" className="hero-social hover:text-white transition-colors"><FaInstagram size={18} /></a>
        <a href="mailto:sonu8409566@gmail.com" className="hero-social hover:text-white transition-colors"><FaEnvelope size={18} /></a>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start z-10 md:pl-12 lg:pl-20 text-left">
        <div className="overflow-hidden mb-4">
          <p className="hero-reveal tracking-[0.3em] text-xs uppercase font-medium text-white">I Build</p>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-reveal text-5xl md:text-7xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] text-white">
            SONU<br />KUMAR
          </h1>
        </div>
        <div className="overflow-hidden mt-6 md:mt-8">
          <p className="hero-reveal text-base md:text-xl font-medium flex flex-wrap items-center justify-start gap-4 text-white">
            <Shuffle text="Web Developer" />
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <Shuffle text="AI UI Designer" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
