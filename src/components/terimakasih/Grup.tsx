'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const GRUP_LINKS = {
  'UI/UX': 'https://chat.whatsapp.com/UIUX_GROUP_LINK',
  'Web Dev': 'https://chat.whatsapp.com/WEBDEV_GROUP_LINK',
  'Data Science': 'https://chat.whatsapp.com/DATASCIENCE_GROUP_LINK',
};

function GrupContent() {
  const searchParams = useSearchParams();
  const kelas1 = searchParams.get('kelas1');
  const kelas2 = searchParams.get('kelas2');

  const selectedClasses = [kelas1, kelas2].filter(Boolean) as string[];

  if (selectedClasses.length === 0) {
    return (
      <Link
        href="#"
        className="flex items-center justify-center gap-3 px-1.5 py-1.5 pl-6 bg-gradient-to-r from-[#8E51FF] to-[#D84693] text-white font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/20 mt-6"
      >
        <span className="text-base font-semibold tracking-wide">Gabung Grup WhatsApp</span>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-[#8E51FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </Link>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6">
      {selectedClasses.map((kelas, index) => {
        const link = GRUP_LINKS[kelas as keyof typeof GRUP_LINKS] || '#';
        return (
          <Link
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-1.5 py-1.5 pl-6 bg-gradient-to-r from-[#8E51FF] to-[#D84693] text-white font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/20"
          >
            <span className="text-base font-semibold tracking-wide">Grup {kelas}</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-[#8E51FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function Grup() {
  return (
    <section id="grup" className="relative w-full bg-[#01031A] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/studyclub/images/bg%20bintang.png"
          alt="Stars Background"
          fill
          className="object-cover object-center opacity-80"
        />
      </div>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 z-10">
        <div className="relative w-full max-w-5xl mx-auto rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#644BE8]/55 p-6 sm:p-8 md:py-12 md:px-12 lg:py-14 lg:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 shadow-2xl border border-white/10">
          <div className="absolute top-[-50px] right-[-50px] md:top-[-80px] md:right-[-80px] z-0 pointer-events-none opacity-80 animate-float-delayed">
            <Image
              src="/studyclub/images/neptunus.png"
              alt="Neptune Planet"
              width={350}
              height={350}
              className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px] h-auto object-contain"
            />
          </div>
          <div className="absolute bottom-[-30px] left-[-30px] md:bottom-[-50px] md:left-[-50px] z-0 pointer-events-none opacity-80 animate-float">
            <Image
              src="/studyclub/images/si%20gelap.png"
              alt="Dark Planet"
              width={250}
              height={250}
              className="w-[150px] sm:w-[180px] md:w-[250px] lg:w-[300px] h-auto object-contain"
            />
          </div>

          <div className="relative z-10 w-full md:w-[40%] flex justify-center shrink-0">
            <div className="relative w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] transition-transform duration-500 hover:scale-105 animate-float-reverse">
              <Image
                src="/studyclub/images/wa.png"
                alt="WhatsApp"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 240px, 350px"
              />
            </div>
          </div>

          <div className="relative z-10 w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight mb-3 sm:mb-4 tracking-wide text-white">
              <span className="text-[#FF8A8A]">Join</span> Our <br className="hidden md:block" />
              WhatsApp Group
            </h2>
            
            <p className="text-white/80 text-sm sm:text-base lg:text-[17px] font-light leading-relaxed max-w-xl">
              Langkah selanjutnya adalah bergabung ke grup WhatsApp sesuai pilihan kelas yang kamu daftarkan untuk informasi terbaru.
            </p>

            <Suspense fallback={<div className="mt-6 text-white">Memuat grup...</div>}>
              <GrupContent />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
