import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientText from './GradientText';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cert-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.cert-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const certs = [
    { title: 'Six Sigma', provider: 'KPMG' },
    { title: 'Power BI', provider: 'Ducat' },
    { title: 'Artificial Intelligence', provider: 'Udemy' },
    { title: 'Web Development Workshop', provider: 'Wipro' }
  ];

  return (
    <section id="certifications" ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto z-10 relative border-t border-[#1C1C1C]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        <div className="shrink-0 md:w-24 cert-header">
          <h2 className="text-white text-sm tracking-[0.3em] uppercase flex flex-col gap-2 md:gap-4">
            <span className="text-white text-base md:text-lg">05</span>
            <span>CERTIFICATIONS</span>
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certs.map((cert, idx) => (
            <div key={idx} className="cert-item p-6 border border-[#1C1C1C] hover:border-[#333333] transition-colors duration-500 bg-[rgba(255,255,255,0.01)] group" style={{ borderRadius: '16px' }}>
              <div className="mb-3">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="text-xl font-light"
                >
                  {cert.title}
                </GradientText>
              </div>
              <p className="text-white text-xs tracking-widest uppercase" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{cert.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
