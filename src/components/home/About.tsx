"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      title: "UI/UX",
      images: [
        "/studyclub/images/ui1.jpg",
        "/studyclub/images/ui2.jpg",
        "/studyclub/images/ui3.jpg"
      ]
    },
    {
      title: "Web Development",
      images: [
        "/studyclub/images/web1.jpg",
        "/studyclub/images/web2.jpg",
        "/studyclub/images/web3.jpg"
      ]
    },
    {
      title: "Cyber Security",
      images: [
        "/studyclub/images/cy1.jpg",
        "/studyclub/images/cy2.jpg",
        "/studyclub/images/cy3.jpg"
      ]
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="relative w-full bg-[#01031A] py-24 flex flex-col items-center overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/studyclub/images/bg%20bintang.png"
          alt="Stars Background"
          fill
          className="object-cover object-center opacity-80"
        />
      </div>

      <div className="absolute left-8 lg:left-40 top-24 lg:top-28 z-0">
        <Image 
          src="/studyclub/images/asteroid.png" 
          alt="Asteroid" 
          width={150}
          height={150}
          className="w-16 lg:w-[120px] h-auto object-contain drop-shadow-2xl opacity-90" 
        />
      </div>

      <div className="absolute right-0 lg:right-16 bottom-0 lg:-bottom-4 z-0 pointer-events-none">
        <Image 
          src="/studyclub/images/galaksi.png" 
          alt="Galaxy" 
          width={800}
          height={800}
          className="w-[350px] lg:w-[700px] h-auto object-contain opacity-90" 
        />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col items-center z-10 relative">
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-white tracking-wide">
          A Space to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A]">Learn</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A]">Grow</span>
        </h2>
        
        <p className="text-gray-200 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed mb-16">
          Study Club adalah kegiatan belajar bersama bagi mahasiswa Informatika 
          UNSIKA untuk berbagi, berdiskusi, dan mengembangkan kemampuan di 
          bidang IT secara aktif dan berkelanjutan sesuai minat masing-masing.
        </p>
        
        <div className="flex items-center justify-center mb-20">
          <Link
            href="https://www.instagram.com/studyclub_id?igsh=MW1pZnM2amR5MHF1aA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-[#A259FF] to-[#EB4688] text-white font-medium rounded-full hover:scale-105 transition-transform duration-300"
          >
            <span>See More</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg 
                className="w-3 h-3 text-[#A259FF]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center mb-12">
          
          <div className="relative w-full flex items-center justify-center">

            <button 
              onClick={handlePrev} 
              className="absolute left-0 md:-left-4 lg:-left-12 z-20 p-2 text-white bg-white/10 hover:bg-[#A259FF] rounded-full backdrop-blur-md transition-all border border-white/20 hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full px-12 md:px-4">

              <div className="about-card w-full max-w-[320px] aspect-[4/3] transform -rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer">
                <div className="about-card-inner rounded-xl shadow-xl">

                  <div className="about-card-front bg-gray-800 rounded-xl overflow-hidden relative">
                    {categories.map((cat, idx) => (
                      <Image
                        key={idx}
                        src={cat.images[0]}
                        alt={`${cat.title} 1`}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className={`object-cover transition-opacity duration-500 absolute inset-0 ${
                          activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      />
                    ))}
                  </div>
                  

                  <div className="about-card-back bg-[#151515] rounded-xl overflow-hidden">
                    <div className="about-card-circle about-card-circle-purple"></div>
                    <div className="about-card-circle about-card-circle-pink"></div>
                    <div className="about-card-circle about-card-circle-cyan"></div>
                    <div className="about-card-back-content flex flex-col items-center justify-center">
                      <div className="text-center">
                        <p className="text-[10px] uppercase tracking-widest text-[#A259FF] font-semibold mb-1">Study Club 2025</p>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">{categories[activeIndex].title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              <div className="about-card w-full max-w-[320px] aspect-[4/3] transform rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer z-10 md:-mt-8">
                <div className="about-card-inner rounded-xl shadow-xl">

                  <div className="about-card-front bg-gray-800 rounded-xl overflow-hidden relative">
                    {categories.map((cat, idx) => (
                      <Image
                        key={idx}
                        src={cat.images[1]}
                        alt={`${cat.title} 2`}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className={`object-cover transition-opacity duration-500 absolute inset-0 ${
                          activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      />
                    ))}
                  </div>
                  

                  <div className="about-card-back bg-[#151515] rounded-xl overflow-hidden">
                    <div className="about-card-circle about-card-circle-purple"></div>
                    <div className="about-card-circle about-card-circle-pink"></div>
                    <div className="about-card-circle about-card-circle-cyan"></div>
                    <div className="about-card-back-content flex flex-col items-center justify-center">
                      <div className="text-center">
                        <p className="text-[10px] uppercase tracking-widest text-[#EB4688] font-semibold mb-1">Study Club 2025</p>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">{categories[activeIndex].title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              <div className="about-card w-full max-w-[320px] aspect-[4/3] transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer">
                <div className="about-card-inner rounded-xl shadow-xl">

                  <div className="about-card-front bg-gray-800 rounded-xl overflow-hidden relative">
                    {categories.map((cat, idx) => (
                      <Image
                        key={idx}
                        src={cat.images[2]}
                        alt={`${cat.title} 3`}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className={`object-cover transition-opacity duration-500 absolute inset-0 ${
                          activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      />
                    ))}
                  </div>
                  

                  <div className="about-card-back bg-[#151515] rounded-xl overflow-hidden">
                    <div className="about-card-circle about-card-circle-purple"></div>
                    <div className="about-card-circle about-card-circle-pink"></div>
                    <div className="about-card-circle about-card-circle-cyan"></div>
                    <div className="about-card-back-content flex flex-col items-center justify-center">
                      <div className="text-center">
                        <p className="text-[10px] uppercase tracking-widest text-[#00D2FF] font-semibold mb-1">Study Club 2025</p>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">{categories[activeIndex].title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <button 
              onClick={handleNext} 
              className="absolute right-0 md:-right-4 lg:-right-12 z-20 p-2 text-white bg-white/10 hover:bg-[#A259FF] rounded-full backdrop-blur-md transition-all border border-white/20 hover:scale-110"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2 mt-8">
            {categories.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'bg-[#EB4688] w-6' : 'bg-[#3d236b] w-2 hover:bg-[#A259FF]'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
