import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VariableProximity from './VariableProximity';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        <div className="about-text shrink-0 md:w-24">
          <h2 className="text-[#A1A1AA] text-sm tracking-[0.3em] uppercase flex flex-col gap-2 md:gap-4">
            <span className="text-white text-base md:text-lg">01</span>
            <span>ABOUT</span>
          </h2>
        </div>
        <div className="flex flex-col gap-8 md:gap-12 max-w-4xl">
          <p className="about-text text-2xl md:text-4xl lg:text-5xl font-light leading-[1.2] text-white cursor-default">
            <VariableProximity
              label="I'm Sonu Kumar, a BCA student passionate about building modern web experiences, AI-powered interfaces, and data-driven solutions."
              fromFontVariationSettings="'wght' 300, 'opsz' 9"
              toFontVariationSettings="'wght' 800, 'opsz' 40"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
            />
          </p>
          <p className="about-text text-lg md:text-2xl text-[#A1A1AA] font-light leading-[1.4]">
            I enjoy transforming ideas into elegant digital products that combine functionality with minimal design.
          </p>
          <p className="about-text text-lg md:text-2xl text-[#A1A1AA] font-light leading-[1.4]">
            Currently pursuing my Bachelor's in Computer Applications while continuously improving my skills in frontend development, UI design, and business analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
