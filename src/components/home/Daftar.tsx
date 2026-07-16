import Image from 'next/image';
import Link from 'next/link';

export default function Daftar() {
  return (
    <section id="daftar" className="relative w-full bg-[#01031A] py-16 md:py-20 lg:py-28 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/studyclub/images/bg%20bintang.png"
          alt="Stars Background"
          fill
          className="object-cover object-center opacity-80"
        />
      </div>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 z-10">
        <div className="relative w-full max-w-5xl mx-auto rounded-[24px] md:rounded-[32px] overflow-hidden bg-no-repeat bg-gradient-to-b md:bg-gradient-to-r from-[rgba(214,75,183,0.55)] via-[rgba(95,92,236,0.55)] to-[rgba(15,8,51,0.55)] p-6 sm:p-8 md:py-12 md:px-12 lg:py-14 lg:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 shadow-2xl">
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
            <div className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] transition-transform duration-500 hover:scale-105 animate-float-reverse">
              <Image
                src="/studyclub/images/roket.png"
                alt="Rocket Mascot"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 240px, 350px"
              />
            </div>
          </div>

          <div className="relative z-10 w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight mb-3 sm:mb-4 tracking-wide text-white">
              <span className="text-[#FF8A8A]">Ready</span> to Unlock <br className="hidden md:block" />
              Your Potential?
            </h2>
            
            <p className="text-white/80 text-sm sm:text-base lg:text-[17px] font-light leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Mulai perjalanan belajarmu bersama Study Club dan kembangkan kemampuanmu di bidang teknologi bersama komunitas Informatika Unsika.
            </p>

            <Link
              href="/?status=closed"
              className="flex items-center justify-center gap-3 px-1.5 py-1.5 pl-6 bg-gradient-to-r from-[#8E51FF] to-[#D84693] text-white font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/20"
            >
              <span className="text-base font-semibold tracking-wide">Daftar</span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                <svg 
                  className="w-4 h-4 text-[#8E51FF]" 
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
        </div>
      </div>
    </section>
  );
}
