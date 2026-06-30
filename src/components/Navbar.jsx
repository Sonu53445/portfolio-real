import React, { useEffect, useState } from 'react';
import PillNav from './PillNav';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#HOME' },
    { label: 'ABOUT', href: '#ABOUT' },
    { label: 'PROJECTS', href: '#PROJECTS' },
    { label: 'SKILLS', href: '#SKILLS' },
    { label: 'EDUCATION', href: '#EDUCATION' },
    { label: 'CONTACT', href: '#CONTACT' }
  ];

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-center py-8 ${scrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'}`}>
      <PillNav
        logo={<span className="text-2xl font-bold tracking-tighter text-black">SK</span>}
        items={navItems}
        baseColor="rgba(255, 255, 255, 0.7)" 
        pillColor="rgba(255, 255, 255, 1)"
        hoveredPillTextColor="#000"
        pillTextColor="#000"
        initialLoadAnimation={true}
      />
    </div>
  );
};

export default Navbar;
