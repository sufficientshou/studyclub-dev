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
        <div className="absolute bottom-0 left-0 w-full h-48 lg:h-64 bg-gradient-to-t from-[#01031A] via-[#01031A]/80 to-transparent pointer-events-none"></div>
      </div>

      <main className="relative z-10 w-full px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between text-white pt-24 pb-12 lg:py-0 mt-4 lg:mt-12 gap-8 lg:gap-12">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="font-bold mb-4 sm:mb-8 tracking-tight drop-shadow-xl leading-[1.1]">
            <span className="block text-[32px] sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.5rem] lg:whitespace-nowrap mb-1 lg:mb-2">
              Embark on Your
            </span>
            <span className="block text-[44px] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] lg:whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8A] to-[#A259FF] leading-tight">
              Study Club Journey
            </span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-[28px] mb-4 sm:mb-6 text-gray-100 drop-shadow max-w-3xl mx-auto lg:mx-0 font-light leading-relaxed px-2 lg:px-0">
            &quot;Upgrade Your Skills, Unlock Your Potential&quot;
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mb-8 sm:mb-24 lg:mb-0 w-full sm:w-auto px-4 sm:px-0">
            <button
              onClick={() => {
                const element = document.getElementById('form-pendaftaran');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-[#B05BFF] to-[#EB4688] text-white font-medium text-base md:text-lg rounded-full hover:scale-[1.02] transition-transform shadow-lg shadow-[#A259FF]/25"
            >
              <span>Start Registration</span>
              <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center shrink-0">
                <svg 
                  className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#EB4688]" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full flex justify-center lg:justify-end mb-16 lg:mb-0">
          <div className="relative flex items-center justify-center w-[85%] sm:w-full aspect-square max-w-[400px] sm:max-w-[500px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[650px] translate-x-0 md:translate-x-16 lg:translate-x-16 xl:translate-x-20">
            <Image
              src="/studyclub/images/uranus.png"
              alt="Planet Uranus"
              width={800}
              height={800}
              className="w-[75%] h-auto object-contain drop-shadow-2xl animate-spin-slow"
              priority
            />
            
            <div className="absolute top-[8%] left-[15%] w-[18%] animate-float-delayed">
              <Image
                src="/studyclub/images/piton.png"
                alt="Python"
                width={150}
                height={150}
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
            
            <div className="absolute top-[-2%] left-[50%] -translate-x-1/2 w-[16%] animate-float-reverse">
              <Image
                src="/studyclub/images/code.png"
                alt="Code"
                width={150}
                height={150}
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
            
            <div className="absolute top-[10%] right-[15%] w-[18%] animate-float-horizontal">
              <Image
                src="/studyclub/images/figma.png"
                alt="Figma"
                width={150}
                height={150}
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
            
            <div className="absolute bottom-[10%] -left-[2%] w-[45%] animate-float">
              <Image
                src="/studyclub/images/roket.png"
                alt="Rocket"
                width={300}
                height={300}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
