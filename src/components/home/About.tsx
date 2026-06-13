import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#110729] py-24 flex flex-col items-center overflow-hidden">
      
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

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full px-4 mb-12">
          <div className="relative w-full max-w-[320px] aspect-[4/3] bg-gray-800 rounded-xl border-4 border-white shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
             <div className="w-full h-full flex items-center justify-center text-gray-400">
               Image 1
             </div>
          </div>
          
          <div className="relative w-full max-w-[320px] aspect-[4/3] bg-gray-800 rounded-xl border-4 border-white shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300 overflow-hidden z-10 md:-mt-8">
             <div className="w-full h-full flex items-center justify-center text-gray-400">
               Image 2
             </div>
          </div>
          
          <div className="relative w-full max-w-[320px] aspect-[4/3] bg-gray-800 rounded-xl border-4 border-white shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 overflow-hidden">
             <div className="w-full h-full flex items-center justify-center text-gray-400">
               Image 3
             </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-[#EB4688]"></div>
          <div className="w-2 h-2 rounded-full bg-[#3d236b]"></div>
          <div className="w-2 h-2 rounded-full bg-[#3d236b]"></div>
          <div className="w-2 h-2 rounded-full bg-[#3d236b]"></div>
        </div>

      </div>
    </section>
  );
}
