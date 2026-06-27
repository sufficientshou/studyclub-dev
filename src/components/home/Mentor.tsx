"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Mentor() {
  const [activePopup, setActivePopup] = useState<number | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const mentors = [
    {
      name: "Mahesa Nabil",
      role: "UI/UX Design",
      socials: {
        linkedin: "#",
        instagram: "#",
        website: "#",
        github: "#"
      }
    },
    {
      name: "Aldi Wijaya",
      role: "Web Development",
      socials: {
        linkedin: "#",
        instagram: "#",
        website: "#",
        github: "#"
      }
    },
    {
      name: "Cakra Mukti H",
      role: "Data Science",
      socials: {
        linkedin: "#",
        instagram: "#",
        website: "#",
        github: "#"
      }
    }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setActivePopup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="mentor" className="relative w-full bg-[#01031A] py-24 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/studyclub/images/bg%20bintang.png"
          alt="Stars Background"
          fill
          className="object-cover object-center opacity-80"
        />
      </div>
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col items-center z-10" ref={popupRef}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-white tracking-wide">
          Guided By
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#815DF2] to-[#F56F7E] tracking-wide">
          Experienced Mind
        </h2>
        
        <p className="text-gray-300 text-base md:text-lg text-center max-w-2xl mx-auto leading-relaxed mb-20">
          Belajar bersama mentor yang siap membimbing, berbagi pengalaman, dan
          membantu peserta berkembang sesuai bidang yang diminati.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl mx-auto">
          {mentors.map((mentor, index) => (
            <div 
              key={index} 
              className={`group relative flex flex-col justify-end w-full aspect-[3/4] rounded-3xl overflow-visible cursor-pointer ${activePopup === index ? 'z-50' : 'z-10'}`}
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <Image 
                  src="/studyclub/images/mentor%20web.png"
                  alt={mentor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110729]/90 via-transparent to-transparent pointer-events-none"></div>
              </div>

              <div className="relative z-10 m-4 p-5 rounded-2xl bg-[#1A1832]/60 backdrop-blur-md border border-white/10 flex items-center justify-between transition-colors duration-300 group-hover:bg-[#1A1832]/80">
                <div className="flex flex-col pointer-events-none">
                  <span className="text-white font-semibold text-lg">{mentor.name}</span>
                  <span className="text-gray-300 text-sm">{mentor.role}</span>
                </div>
                
                <div className="relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePopup(activePopup === index ? null : index);
                    }}
                    className={`relative z-20 w-10 h-10 rounded-full border border-white flex items-center justify-center text-white transition-all duration-300 shadow-md ${activePopup === index ? 'bg-white text-[#110729] rotate-90' : 'group-hover:bg-white group-hover:text-[#110729]'}`}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className={`w-5 h-5 transition-transform duration-300 ${activePopup === index ? 'rotate-45' : ''}`}
                    >
                      {activePopup === index ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      )}
                    </svg>
                  </button>

                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${activePopup === index ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                    <a 
                      href={mentor.socials.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`absolute w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-500 shadow-lg ${activePopup === index ? 'translate-x-[45px] -translate-y-[45px] scale-100' : 'translate-x-0 translate-y-0 scale-50 opacity-0'}`}
                      style={{ transitionDelay: activePopup === index ? '50ms' : '0ms' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a 
                      href={mentor.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className={`absolute w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-500 shadow-lg ${activePopup === index ? 'translate-x-[60px] translate-y-[10px] scale-100' : 'translate-x-0 translate-y-0 scale-50 opacity-0'}`}
                      style={{ transitionDelay: activePopup === index ? '100ms' : '0ms' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a 
                      href={mentor.socials.website}
                      target="_blank"
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className={`absolute w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-500 shadow-lg ${activePopup === index ? 'translate-x-[30px] translate-y-[65px] scale-100' : 'translate-x-0 translate-y-0 scale-50 opacity-0'}`}
                      style={{ transitionDelay: activePopup === index ? '150ms' : '0ms' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                    </a>
                    <a 
                      href={mentor.socials.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`absolute w-12 h-12 bg-[#181717] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-500 shadow-lg ${activePopup === index ? '-translate-x-[25px] translate-y-[65px] scale-100' : 'translate-x-0 translate-y-0 scale-50 opacity-0'}`}
                      style={{ transitionDelay: activePopup === index ? '200ms' : '0ms' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
