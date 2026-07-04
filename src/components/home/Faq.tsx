'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const faqData = [
  {
    question: "Apa itu Study Club HIMTIKA?",
    answer: "Study Club HIMTIKA adalah ruang kolaboratif dan inspiratif yang dirancang untuk memberikan mahasiswa informatika UNSIKA kesempatan mendalami ilmu di bidang IT. Melalui kegiatan ini, peserta dapat mengembangkan keterampilan teknis, berbagi wawasan, dan menjalin koneksi."
  },
  {
    question: "Kelas apa saja yang tersedia?",
    answer: "Kami membuka berbagai kelas yang relevan dengan industri saat ini, seperti Web Development, UI/UX Design, dan Data Science."
  },
  {
    question: "Siapa saja yang boleh mengikuti?",
    answer: "Kegiatan ini terbuka untuk seluruh mahasiswa aktif Informatika UNSIKA yang ingin mendalami keterampilan teknis, berkolaborasi, dan berbagi wawasan di bidang teknologi informasi."
  },
  {
    question: "Bagaimana sistem pembelajarannya?",
    answer: "Pembelajaran dilakukan secara kolaboratif melalui sesi hybrid (online dan offline) dengan bimbingan mentor. Fokus utamanya adalah pada praktik langsung dan pengerjaan proyek untuk membangun keterampilan teknis."
  },
  {
    question: "Apakah ada biaya pendaftaran?",
    answer: "Tidak ada. Study Club HIMTIKA 100% gratis dan tidak dipungut biaya apapun, sebagai bentuk dedikasi kami untuk kemajuan bersama."
  },
  {
    question: "Apa yang didapat setelah menyelesaikan kelas?",
    answer: "Anda akan mendapatkan portofolio proyek (keterampilan teknis), e-sertifikat, serta kesempatan berharga untuk menjalin koneksi dan berbagi wawasan dengan para mentor dan sesama peserta."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-[#01031A] py-20 lg:py-28 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/studyclub/images/bg%20bintang.png"
          alt="Stars Background"
          fill
          className="object-cover object-center opacity-80"
        />
      </div>

      <div className="absolute left-[-50px] lg:left-0 top-1/3 z-0 pointer-events-none opacity-90 animate-float">
        <Image 
          src="/studyclub/images/neptun.png" 
          alt="Planet Kiri" 
          width={300}
          height={300}
          className="w-[150px] md:w-[250px] lg:w-[300px] h-auto object-contain" 
        />
      </div>
      <div className="absolute right-4 lg:right-20 top-20 z-0 pointer-events-none opacity-90 animate-float-delayed">
        <Image 
          src="/studyclub/images/uranus.png" 
          alt="Planet Kanan" 
          width={100}
          height={100}
          className="w-[60px] md:w-[80px] lg:w-[100px] h-auto object-contain" 
        />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 z-10 flex flex-col items-center">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-wide leading-[1.2] mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E51FF] to-[#D84693]">Questions?</span> <span className="text-white">We&apos;ve</span>
            <br />
            <span className="text-white">Got</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E51FF] to-[#D84693]">Answers</span>
          </h2>
        </div>

        <p className="text-white/80 text-sm md:text-base lg:text-lg text-center max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Temukan jawaban dari pertanyaan yang paling sering <br className="hidden md:block" /> ditanyakan seputar Study Club.
        </p>

        <Link
          href="https://www.instagram.com/studyclub_id?igsh=MW1pZnM2amR5MHF1aA=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-2.5 mb-16 bg-gradient-to-r from-[#8E51FF] to-[#D84693] text-white font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#D84693]/20"
        >
          <span className="text-[15px] font-medium tracking-wide">Kontak Kami</span>
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
            <svg 
              className="w-3.5 h-3.5 text-[#8E51FF]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </Link>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="w-full"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full bg-white hover:bg-gray-50 transition-colors duration-200 rounded-[32px] px-8 py-5 md:py-6 flex justify-between items-center shadow-lg group"
              >
                <span className="text-[#1A1A1A] font-bold text-base md:text-lg text-left pr-4">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 shrink-0 rounded-full bg-[#020413] flex justify-center items-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden min-h-0">
                  <div className="pt-3 pb-2 px-1">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[20px] p-5 md:p-6 text-white/90 text-sm md:text-[15px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
