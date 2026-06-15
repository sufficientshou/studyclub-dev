"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const scrollDiff = Math.abs(currentScrollY - lastScrollY);

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (scrollDiff > 8) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
          setIsOpen(false);
        } else {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-[transform,background-color,padding,border-color,box-shadow] duration-300 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-[#020413]/90 backdrop-blur-md shadow-lg border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      } px-6 lg:px-24`}
    >
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image 
              src="/studyclub/images/logo studyclub.svg" 
              alt="Study Club Logo" 
              width={40} 
              height={40} 
              className="w-full h-full object-contain" 
            />
          </div>
          <span className="text-white text-xl md:text-2xl font-medium tracking-wide">Study Club</span>
        </Link>
        
        <button 
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors text-xl font-medium">
            Home
          </Link>
          <a href="#about" className="text-white hover:text-gray-300 transition-colors text-xl font-medium">
            About Us
          </a>
          <a href="#journey" className="text-white hover:text-gray-300 transition-colors text-xl font-medium">
            Timeline
          </a>
          <a href="#class" className="text-white hover:text-gray-300 transition-colors text-xl font-medium">
            Class
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#020413]/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 flex flex-col p-3 gap-1 animate-in slide-in-from-top-4 fade-in duration-300">
          <Link href="/" className="w-full px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-all text-base font-medium tracking-wide" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <a href="#about" className="w-full px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-all text-base font-medium tracking-wide" onClick={() => setIsOpen(false)}>
            About Us
          </a>
          <a href="#journey" className="w-full px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-all text-base font-medium tracking-wide" onClick={() => setIsOpen(false)}>
            Timeline
          </a>
          <a href="#class" className="w-full px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-all text-base font-medium tracking-wide" onClick={() => setIsOpen(false)}>
            Class
          </a>
        </div>
      )}
    </nav>
  );
}
