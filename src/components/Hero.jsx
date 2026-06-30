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
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
      
      {/* Scroll Indicator */}
      <div className="absolute left-6 md:left-12 bottom-12 hidden md:flex flex-col items-center gap-4 hero-scroll">
        <span className="text-[10px] tracking-[0.3em] text-[#A1A1AA] rotate-180" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
        <div className="w-[1px] h-12 bg-[#1C1C1C] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse"></div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute left-6 md:left-12 bottom-12 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col gap-6 text-zinc-600">
        <a href="#" className="hero-social hover:text-black transition-colors"><FaGithub size={18} /></a>
        <a href="https://linkedin.com/in/sonu-kumar-8a2683401" target="_blank" rel="noreferrer" className="hero-social hover:text-black transition-colors"><FaLinkedin size={18} /></a>
        <a href="#" className="hero-social hover:text-black transition-colors"><FaInstagram size={18} /></a>
        <a href="mailto:sonu8409566@gmail.com" className="hero-social hover:text-black transition-colors"><FaEnvelope size={18} /></a>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-end z-10 pr-0 md:pr-12 text-right">
        <div className="overflow-hidden mb-4">
          <p className="hero-reveal text-zinc-600 tracking-[0.3em] text-xs uppercase font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">I Build</p>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-reveal text-5xl md:text-7xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] text-zinc-800 drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
            SONU<br />KUMAR
          </h1>
        </div>
        <div className="overflow-hidden mt-6 md:mt-8">
          <p className="hero-reveal text-base md:text-xl text-zinc-600 font-medium flex items-center justify-end gap-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            <Shuffle text="Web Developer" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            <Shuffle text="AI UI Designer" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
