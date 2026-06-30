import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
      
      gsap.from('.contact-content', {
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

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Replace placeholders with real EmailJS IDs
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setStatus('Message sent successfully.');
          e.target.reset();
      }, (error) => {
          setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto z-10 relative border-t border-[#1C1C1C]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        <div className="shrink-0 md:w-24 contact-header">
          <h2 className="text-white text-sm tracking-[0.3em] uppercase flex flex-col gap-2 md:gap-4">
            <span className="text-white text-base md:text-lg">06</span>
            <span>CONTACT</span>
          </h2>
        </div>
        
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 contact-content">
          <div className="flex flex-col gap-8 flex-1">
            <div>
              <p className="text-[#A1A1AA] text-xs tracking-widest uppercase mb-2">Email</p>
              <a href="mailto:sonu8409566@gmail.com" className="text-lg md:text-2xl text-white font-light hover:text-[#A1A1AA] transition-colors">sonu8409566@gmail.com</a>
            </div>
            <div>
              <p className="text-[#A1A1AA] text-xs tracking-widest uppercase mb-2">Phone</p>
              <p className="text-lg md:text-2xl text-white font-light">+91 8409566298</p>
            </div>
            <div>
              <p className="text-[#A1A1AA] text-xs tracking-widest uppercase mb-2">Location</p>
              <p className="text-lg md:text-2xl text-white font-light">Greater Noida</p>
            </div>
            <div>
              <p className="text-[#A1A1AA] text-xs tracking-widest uppercase mb-2">Social</p>
              <a href="https://linkedin.com/in/sonu-kumar-8a2683401" target="_blank" rel="noreferrer" className="text-lg md:text-2xl text-white font-light hover:text-[#A1A1AA] transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div className="flex-1">
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-8">
              <input type="text" name="user_name" placeholder="Name" required className="bg-transparent border-b border-[#1C1C1C] py-3 text-white text-lg font-light focus:outline-none focus:border-white transition-colors placeholder:text-[#A1A1AA]" />
              <input type="email" name="user_email" placeholder="Email" required className="bg-transparent border-b border-[#1C1C1C] py-3 text-white text-lg font-light focus:outline-none focus:border-white transition-colors placeholder:text-[#A1A1AA]" />
              <input type="text" name="subject" placeholder="Subject" required className="bg-transparent border-b border-[#1C1C1C] py-3 text-white text-lg font-light focus:outline-none focus:border-white transition-colors placeholder:text-[#A1A1AA]" />
              <textarea name="message" placeholder="Message" rows="4" required className="bg-transparent border-b border-[#1C1C1C] py-3 text-white text-lg font-light focus:outline-none focus:border-white transition-colors resize-none placeholder:text-[#A1A1AA]"></textarea>
              
              <button type="submit" className="mt-2 border border-[#1C1C1C] py-4 px-8 text-white tracking-widest text-xs hover:bg-white hover:text-black transition-colors duration-500 w-fit uppercase">
                Send Message
              </button>
              {status && <p className="text-[#A1A1AA] text-sm mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
