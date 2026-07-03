import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-category', {
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

  const skillData = [
    {
      title: 'Programming',
      items: ['C', 'C++', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Tools',
      items: ['Power BI', 'Microsoft Excel', 'Git', 'GitHub', 'VS Code', 'Antigravity']
    },
    {
      title: 'Soft Skills',
      items: ['Communication', 'Teamwork', 'Research', 'Project Management']
    }
  ];

  return (
    <section id="skills" ref={containerRef} className="py-16 md:py-28 px-6 md:px-12 max-w-7xl mx-auto z-10 relative border-t border-[#1C1C1C]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        <div className="shrink-0 md:w-24 skill-category">
          <h2 className="text-white text-sm tracking-[0.3em] uppercase flex flex-col gap-2 md:gap-4">
            <span className="text-white text-base md:text-lg">03</span>
            <span>SKILLS</span>
          </h2>
        </div>
        <div className="w-full lg:w-[55%] xl:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {skillData.map((category, idx) => (
            <div key={idx} className="skill-category flex flex-col gap-6">
              <h3 className="text-lg md:text-xl text-white font-medium tracking-wide">{category.title}</h3>
              <ul className="flex flex-col gap-4">
                {category.items.map((item, i) => (
                  <li key={i} className="text-white text-base md:text-lg font-medium flex items-center gap-4 group cursor-default" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 group-hover:scale-150 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                    <span className="transition-all duration-300 group-hover:tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
