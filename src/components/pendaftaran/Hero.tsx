import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020413]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/studyclub/images/bg%20hero.png"
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
            <span className="block text-[28px] sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.5rem] lg:whitespace-nowrap mb-1 lg:mb-2">
              Embark on Your
            </span>
            <span className="block text-[28px] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8A] to-[#A259FF]">
              Study Club Journey
            </span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-[28px] mb-4 sm:mb-6 text-gray-100 drop-shadow max-w-3xl mx-auto lg:mx-0 font-light leading-relaxed px-2 lg:px-0">
            &quot;Upgrade Your Skills, Unlock Your Potential&quot;
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-[22px] mb-8 sm:mb-12 text-gray-200 drop-shadow max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed px-2 lg:px-0">
            Silakan isi data dengan benar dan lengkap. Pastikan nomor WhatsApp aktif untuk informasi selanjutnya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mb-8 sm:mb-24 lg:mb-0 w-full sm:w-auto px-4 sm:px-0">
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-1.5 py-1.5 pl-6 bg-gradient-to-r from-[#B05BFF] to-[#EB4688] text-white font-medium rounded-full hover:scale-105 transition-transform duration-300"
            >
              <span>Start Registration</span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                <svg 
                  className="w-4 h-4 text-[#EB4688]" 
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
        
        <div className="flex-1 w-full relative flex justify-center lg:justify-end mb-16 lg:mb-0">
          <Image
            src="/studyclub/images/planet pendaftaran.png"
            alt="Planet Pendaftaran"
            width={1000}
            height={1000}
            className="w-[70%] sm:w-[80%] h-auto max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] object-contain drop-shadow-2xl lg:-translate-x-2 xl:-translate-x-4"
            priority
          />
        </div>
      </main>
    </div>
  );
}
