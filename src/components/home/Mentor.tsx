import Image from 'next/image';
import Link from 'next/link';

export default function Mentor() {
  const mentors = [
    {
      name: "Mahesa Nabil",
      role: "UI/UX Design",
    },
    {
      name: "Aldi Wijaya",
      role: "Web Development",
    },
    {
      name: "Cakra Mukti H",
      role: "Data Science",
    }
  ];

  return (
    <section id="mentor" className="relative w-full bg-[#020413] py-24 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/studyclub/images/bg%20bintang.png"
          alt="Stars Background"
          fill
          className="object-cover object-center opacity-80"
        />
      </div>
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col items-center z-10">
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
              className="group relative flex flex-col justify-end w-full aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image 
                src="/studyclub/images/mentor%20web.png"
                alt={mentor.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#110729]/90 via-transparent to-transparent"></div>

              <div className="relative z-10 m-4 p-5 rounded-2xl bg-[#1A1832]/60 backdrop-blur-md border border-white/10 flex items-center justify-between transition-colors duration-300 group-hover:bg-[#1A1832]/80">
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-lg">{mentor.name}</span>
                  <span className="text-gray-300 text-sm">{mentor.role}</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#110729] transition-colors duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
