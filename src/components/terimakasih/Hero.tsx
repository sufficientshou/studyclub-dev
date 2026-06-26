'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020413]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/studyclub/images/bg%20pendaftaran.png"
          alt="Hero Background"
          fill
          className="w-full h-full object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute bottom-0 left-0 w-full h-48 lg:h-64 bg-gradient-to-t from-[#01031A] to-transparent pointer-events-none"></div>
      </div>

      <div className="absolute top-20 sm:top-32 lg:top-48 left-4 sm:left-8 md:left-24 lg:left-32 w-16 sm:w-28 md:w-40 lg:w-48 animate-float-delayed z-0 opacity-50 sm:opacity-90">
        <Image
          src="/studyclub/images/ungu%20merah.png"
          alt="Planet Ungu Merah"
          width={200}
          height={200}
          className="w-full h-auto object-contain drop-shadow-2xl opacity-90 animate-spin-slow-reverse"
        />
      </div>

      <div className="absolute bottom-32 sm:bottom-24 lg:bottom-40 right-4 sm:right-8 md:right-24 lg:right-32 w-16 sm:w-24 md:w-32 lg:w-40 animate-float z-0 opacity-50 sm:opacity-90">
        <Image
          src="/studyclub/images/planet%20ungu.png"
          alt="Planet Ungu"
          width={180}
          height={180}
          className="w-full h-auto object-contain drop-shadow-2xl opacity-90 animate-spin-slow"
        />
      </div>

      <main className="relative z-10 w-full px-6 lg:px-24 flex flex-col items-center justify-center text-white text-center mt-8 lg:mt-0">
        <h1 className="font-bold mb-6 tracking-tight drop-shadow-xl leading-[1.2]">
          <span className="block text-[32px] sm:text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[3rem] mb-2 font-semibold">
            Registration Completed
          </span>
          <span className="block text-[44px] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8A] to-[#A259FF] px-2 leading-tight">
            Welcome to Study Club
          </span>
        </h1>
        
        <p className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl mb-2 text-gray-200 drop-shadow max-w-3xl font-light leading-relaxed">
          Terima kasih telah melakukan pendaftaran Study Club HIMTIKA 2026.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-10 text-gray-200 drop-shadow max-w-3xl font-light leading-relaxed">
          Langkah selanjutnya adalah bergabung ke grup WhatsApp sesuai pilihan kelas yang kamu daftarkan.
        </p>
        
        <button
          onClick={() => {
            const element = document.getElementById('grup');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex items-center justify-center gap-3 px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-[#B05BFF] to-[#EB4688] text-white font-medium text-sm md:text-base rounded-full hover:scale-[1.02] transition-transform shadow-lg shadow-[#A259FF]/25"
        >
          <span>See Next Step</span>
          <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center shrink-0">
            <svg 
              className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B05BFF]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </button>
      </main>
    </div>
  );
}
