import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BorderGlow from './BorderGlow';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.edu-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
      
      gsap.from('.edu-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      institute: 'ITS College of Professional Studies',
      year: '2024 — 2027'
    },
    {
      degree: 'Senior Secondary (12th)',
      institute: 'Baghel Uch Vidya Mandir',
      year: '2022 — 2024'
    }
  ];

  return (
    <section id="education" ref={containerRef} className="py-16 md:py-28 px-6 md:px-12 max-w-7xl mx-auto z-10 relative border-t border-[#1C1C1C]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        <div className="shrink-0 md:w-24 edu-header">
          <h2 className="text-white text-sm tracking-[0.3em] uppercase flex flex-col gap-2 md:gap-4">
            <span className="text-white text-base md:text-lg">04</span>
            <span>EDUCATION</span>
          </h2>
        </div>
        
        <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col gap-6 md:gap-8">
          {education.map((edu, idx) => (
            <div key={idx} className="edu-item">
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="rgba(255,255,255,0.01)"
                borderRadius={16}
                glowRadius={20}
                glowIntensity={1.0}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl md:text-3xl text-white font-bold transition-colors">{edu.degree}</h3>
                    <p className="text-base md:text-lg text-white font-bold">{edu.institute}</p>
                  </div>
                  <div className="text-white font-bold text-sm md:text-base tracking-widest uppercase">
                    {edu.year}
                  </div>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
