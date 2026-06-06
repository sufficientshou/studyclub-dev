import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A001F]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/studyclub/images/bg%20hero.png"
          alt="Hero Background"
          fill
          className="w-full h-full object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0A001F] via-[#0A001F]/80 to-transparent"></div>
      </div>

      <main className="relative z-10 max-w-5xl w-full px-6 flex flex-col items-center text-center text-white mt-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight drop-shadow-xl leading-tight">
          Grow Together Through <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A]">
            Study Club
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-100 drop-shadow max-w-3xl mx-auto font-light leading-relaxed px-2">
          &quot;Upgrade Your Skills, Unlock Your Potential&quot;
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-24 w-full sm:w-auto px-4 sm:px-0">
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
            <Link
              href="#about"
              className="flex items-center justify-center px-8 py-3 bg-[#0A001F] rounded-full text-white font-medium h-full w-full"
            >
              Learn more
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
