import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020413]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/studyclub/images/bg%20hero.png"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="w-full h-full object-cover object-center"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#01031A] via-[#01031A]/80 to-transparent pointer-events-none"></div>
      </div>

      <main className="relative z-10 w-full px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between text-white pt-24 pb-12 lg:py-0 mt-4 lg:mt-12 gap-8 lg:gap-12">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="font-bold mb-4 sm:mb-8 tracking-tight drop-shadow-xl leading-[1.1]">
            <span className="block text-[28px] sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.5rem] lg:whitespace-nowrap mb-1 lg:mb-2">
              Grow Together Through
            </span>
            <span className="block text-[44px] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8A] to-[#A259FF]">
              Study Club
            </span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-[28px] mb-8 sm:mb-12 text-gray-100 drop-shadow max-w-3xl mx-auto lg:mx-0 font-light leading-relaxed px-2 lg:px-0">
            &quot;Upgrade Your Skills, Unlock Your Potential&quot;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mb-8 sm:mb-24 lg:mb-0 w-full sm:w-auto px-4 sm:px-0">
            <Link
              href="/pendaftaran"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-1.5 py-1.5 pl-6 bg-gradient-to-r from-[#B05BFF] to-[#EB4688] text-white font-medium rounded-full hover:scale-105 transition-transform duration-300"
            >
              <span>Join Study Club</span>
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
            </Link>
            <div className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#B05BFF] to-[#EB4688] p-[1px] hover:scale-105 transition-transform duration-300">
              <a
                href="#about"
                className="flex items-center justify-center px-8 py-3 bg-[#020413] rounded-full text-white font-medium h-full w-full"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full relative flex justify-center lg:justify-end mb-16 lg:mb-0">
          <div className="relative w-[85%] sm:w-full h-auto max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[850px] xl:max-w-[1000px] lg:translate-x-8 xl:translate-x-16 hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/studyclub/images/orbit home.png"
              alt="Study Club App Mockup"
              width={1000}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
            
            <div className="absolute inset-0">

              <Image
                src="/studyclub/images/komp kiri.png"
                alt="Komputer Kiri"
                width={228}
                height={150}
                className="absolute w-[32.95%] h-auto animate-float drop-shadow-xl z-10"
                style={{ left: '3.32%', top: '54.38%' }}
                priority
              />
              

              <Image
                src="/studyclub/images/komp atas.png"
                alt="Komputer Atas"
                width={141}
                height={141}
                className="absolute w-[20.38%] h-auto animate-float-delayed drop-shadow-xl z-10"
                style={{ left: '21.97%', top: '14.49%' }}
                priority
              />
              

              <Image
                src="/studyclub/images/komp kanan.png"
                alt="Komputer Kanan"
                width={130}
                height={179}
                className="absolute w-[18.79%] h-auto animate-float-reverse drop-shadow-xl z-10"
                style={{ left: '73.12%', top: '32.74%' }}
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
