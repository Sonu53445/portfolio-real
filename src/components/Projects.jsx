import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import MagicBento from './MagicBento';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
      
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'FX.STUDIO',
      desc: 'Interactive animation website featuring live effects, copy-ready code snippets, and Anime.js-powered motion.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Anime.js']
    },
    {
      title: 'NEXARA',
      desc: 'Premium IT Agency website featuring modern layouts and AI-assisted UI design.',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Power BI Sales Dashboard',
      desc: 'Interactive dashboard analyzing monthly sales, regional performance, top products, and profit trends.',
      tech: ['Power BI', 'Excel', 'Data Analysis']
    },
    {
      title: 'Dropshipping Store',
      desc: 'Product Research, Store Management, and Digital Marketing.',
      tech: ['E-Commerce']
    }
  ];

  return (
    <section id="projects" ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto z-10 relative border-t border-[#1C1C1C]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        <div className="shrink-0 md:w-24 project-header">
          <h2 className="text-[#A1A1AA] text-sm tracking-[0.3em] uppercase flex flex-col gap-2 md:gap-4">
            <span className="text-white text-base md:text-lg">03</span>
            <span>PROJECTS</span>
          </h2>
        </div>
        
        <div className="w-full">
          <MagicBento 
            items={projects}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="255, 255, 255"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
