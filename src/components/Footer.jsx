import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#1C1C1C] py-10 px-6 md:px-12 z-10 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[#A1A1AA] text-xs tracking-widest uppercase">
        <div className="text-white font-bold text-xl tracking-tighter">SK</div>
        <div className="text-center flex flex-col items-center">
          <p>© 2026 Sonu Kumar</p>
          <p className="mt-1 text-[#444444] text-[10px]">All Rights Reserved.</p>
        </div>
        <button 
          onClick={scrollToTop}
          className="hover:text-white transition-colors flex items-center gap-2 group"
        >
          BACK TO TOP <span className="group-hover:-translate-y-1 transition-transform">↑</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
