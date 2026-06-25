'use client';

import Image from 'next/image';
import { useState } from 'react';

const kelasOptions = [
  {
    id: 'UI/UX',
    label: 'UI/UX',
    icon: (
      <svg className="w-12 h-12 lg:w-16 lg:h-16 mb-4" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5A9.5 9.5 0 1 1 38 28.5A9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19V47.5A9.5 9.5 0 1 1 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0L9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19H19V0Z" fill="#F24E1E"/>
        <path d="M19 19L9.5 19C4.25329 19 0 23.2533 0 28.5C0 33.7467 38 9.5 38H19V19Z" fill="#A259FF"/>
        <path d="M38 9.5C38 14.7467 33.7467 19 28.5 19H19V0H28.5C33.7467 0 38 4.25329 38 9.5Z" fill="#FF7262"/>
      </svg>
    )
  },
  {
    id: 'Web Dev',
    label: 'Web Dev',
    icon: (
      <svg className="w-12 h-12 lg:w-16 lg:h-16 mb-4" viewBox="0 0 384 512" fill="currentColor">
        <path fill="#E34F26" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0z"/>
        <path fill="#EF652A" d="M192 448.2L323 411.5l26.7-298.5H192V448.2z"/>
        <path fill="#EBEBEB" d="M192 208.1h-85.6l-5.5-61H192V94.3H49.8l16.7 187.6h125.5v-73.8zM192 374l-64.8-17.5-4.1-46H70.7l9.4 105.1L192 448.2V374z"/>
        <path fill="#FFFFFF" d="M192 208.1h86.7l-8.3 92.6-78.4 21.2v72.1l111.4-30.9 14.6-163h-126v-73.8h132.6l4.6-52.8H192v52.8z"/>
      </svg>
    )
  },
  {
    id: 'Data Science',
    label: 'Data Science',
    icon: (
      <svg className="w-12 h-12 lg:w-16 lg:h-16 mb-4" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.882 0C30.612 0 31.06 14.444 31.06 14.444V30.298H64.808V34.568H20.407C20.407 34.568 0 32.222 0 65.234C0 98.246 17.514 96.062 17.514 96.062H28.795V80.308C28.795 80.308 28.455 60.101 49.336 60.101H65.856C65.856 60.101 84.801 60.366 84.801 41.365V15.021C84.801 15.021 86.974 0 63.882 0ZM46.924 9.479C50.605 9.479 53.591 12.464 53.591 16.146C53.591 19.827 50.605 22.812 46.924 22.812C43.242 22.812 40.257 19.827 40.257 16.146C40.257 12.464 43.242 9.479 46.924 9.479Z" fill="#3776AB"/>
        <path d="M64.118 127.999C97.388 127.999 96.94 113.555 96.94 113.555V97.701H63.192V93.431H107.593C107.593 93.431 128 95.777 128 62.765C128 29.753 110.486 31.937 110.486 31.937H99.205V47.691C99.205 47.691 99.545 67.898 78.664 67.898H62.144C62.144 67.898 43.199 67.633 43.199 86.634V112.978C43.199 112.978 41.026 127.999 64.118 127.999ZM81.076 118.52C77.395 118.52 74.409 115.535 74.409 111.853C74.409 108.172 77.395 105.187 81.076 105.187C84.758 105.187 87.743 108.172 87.743 111.853C87.743 115.535 84.758 118.52 81.076 118.52Z" fill="#FFD43B"/>
      </svg>
    )
  }
];

export default function FormPendaftaran() {
  const [angkatan, setAngkatan] = useState('2024');
  const [kelas1, setKelas1] = useState('UI/UX');
  const [kelas2, setKelas2] = useState('UI/UX');
  const [bersedia, setBersedia] = useState('Ya');

  return (
    <section id="form-pendaftaran" className="relative w-full bg-[#01031A] py-24 lg:py-32 flex flex-col items-center overflow-hidden min-h-screen">
      
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col">
        <div className="relative w-full h-1/2">
          <Image
            src="/studyclub/images/bg%20bintang.png"
            alt="Stars Background Top"
            fill
            className="object-cover object-top opacity-80"
          />
        </div>
        
        {/* Background Bawah */}
        <div className="relative w-full h-1/2">
          <Image
            src="/studyclub/images/bg%20bintang.png"
            alt="Stars Background Bottom"
            fill
            className="object-cover object-bottom opacity-80"
          />
        </div>
      </div>

      <div className="absolute left-8 lg:left-32 top-32 lg:top-40 z-0 pointer-events-none">
        <Image 
          src="/studyclub/images/asteroid.png" 
          alt="Asteroid" 
          width={150}
          height={150}
          className="w-20 lg:w-[150px] h-auto object-contain drop-shadow-2xl opacity-90" 
        />
      </div>

      <div className="absolute right-8 lg:right-40 top-16 lg:top-24 z-0 pointer-events-none">
        <Image 
          src="/studyclub/images/planet pendaftaran.png" 
          alt="Planet Right" 
          width={200}
          height={200}
          className="w-28 lg:w-[200px] h-auto object-contain drop-shadow-2xl opacity-90" 
        />
      </div>

      <div className="absolute left-0 lg:left-12 bottom-40 lg:bottom-1/3 z-0 pointer-events-none">
        <Image 
          src="/studyclub/images/planet pendaftaran.png" 
          alt="Planet Left" 
          width={400}
          height={400}
          className="w-40 lg:w-[350px] h-auto object-contain drop-shadow-2xl opacity-90" 
        />
      </div>

      <div className="max-w-4xl w-full mx-auto px-6 flex flex-col items-center z-10 relative">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 text-center text-white tracking-wide whitespace-nowrap">
          Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A]">Registration</span>
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 lg:mb-16 text-center text-white">
          67 Juni - 69 Juli 2026
        </p>
        
        <form className="flex flex-col gap-6 lg:gap-8 w-full">
          <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true">
            <defs>
              <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A259FF" />
                <stop offset="100%" stopColor="#FF8A8A" />
              </linearGradient>
            </defs>
          </svg>

          {/* Card 1 */}
          <div className="w-full bg-[#191A30]/40 border border-white/10 rounded-xl p-6 lg:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2A2045] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="url(#icon-grad)">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
              </div>
              <label htmlFor="nama" className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A] font-medium text-lg md:text-[22px]">Nama Lengkap</label>
            </div>
            <p className="text-gray-200 text-sm md:text-base mb-6">Masukkan nama lengkap sesuai identitas anda.</p>
            <input 
              type="text" 
              id="nama" 
              className="w-full px-4 py-3 lg:px-5 lg:py-4 bg-[#222230] border border-transparent rounded-lg text-white text-base md:text-lg focus:outline-none focus:border-[#A259FF] transition-colors placeholder:text-gray-500" 
              placeholder="Contoh: Gojo Satoru" 
            />
          </div>

          {/* Card 2 */}
          <div className="w-full bg-[#191A30]/40 border border-white/10 rounded-xl p-6 lg:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2A2045] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 576 512" fill="url(#icon-grad)">
                  <path d="M0 96l576 0c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm0 32L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-288L0 128zM64 405.3c0-29.5 23.9-53.3 53.3-53.3l117.3 0c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7L74.7 416c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
                </svg>
              </div>
              <label htmlFor="npm" className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A] font-medium text-lg md:text-[22px]">NPM</label>
            </div>
            <p className="text-gray-200 text-sm md:text-base mb-6">Masukkan nomor pokok mahasiswa anda.</p>
            <input 
              type="text" 
              id="npm" 
              className="w-full px-4 py-3 lg:px-5 lg:py-4 bg-[#222230] border border-transparent rounded-lg text-white text-base md:text-lg focus:outline-none focus:border-[#A259FF] transition-colors placeholder:text-gray-500" 
              placeholder="Contoh: 2410XXXXXXXXX" 
            />
          </div>

          {/* Card 3 */}
          <div className="w-full bg-[#191A30]/40 border border-white/10 rounded-xl p-6 lg:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2A2045] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 640 512" fill="url(#icon-grad)">
                  <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                </svg>
              </div>
              <label className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A] font-medium text-lg md:text-[22px]">Angkatan</label>
            </div>
            <p className="text-gray-200 text-sm md:text-base mb-6">Pilih angkatan anda.</p>
            
            <div className="flex flex-col gap-4">
              {['2024', '2025', '2026'].map((year) => (
                <label key={year} className="flex items-center gap-4 cursor-pointer group w-fit">
                  <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full border-[2.5px] flex items-center justify-center transition-colors ${angkatan === year ? 'border-[#EB4688]' : 'border-gray-400 group-hover:border-gray-300'}`}>
                    {angkatan === year && (
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#EB4688]" />
                    )}
                  </div>
                  <span className="text-gray-200 text-base md:text-lg lg:text-xl">{year}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full bg-[#191A30]/40 border border-white/10 rounded-xl p-6 lg:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2A2045] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="url(#icon-grad)">
                  <path d="M4 4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  <path fill="#2A2045" d="M8 4h3v7H8z" />
                </svg>
              </div>
              <label className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A] font-medium text-lg md:text-[22px]">Pilihan Kelas Pertama</label>
            </div>
            <p className="text-gray-200 text-sm md:text-base mb-6">Pilih bidang yang ingin kamu pelajari.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              {kelasOptions.map((opt) => (
                <div 
                  key={opt.id} 
                  onClick={() => setKelas1(opt.id)}
                  className={`cursor-pointer flex flex-col items-center justify-center p-6 lg:p-8 rounded-2xl transition-all border-[1.5px] ${
                    kelas1 === opt.id 
                      ? 'bg-gradient-to-br from-[#A259FF]/20 to-[#FF8A8A]/20 border-[#EB4688]' 
                      : 'bg-[#222230] border-transparent hover:border-gray-500'
                  }`}
                >
                  {opt.icon}
                  <span className="text-white font-medium text-base md:text-lg lg:text-xl mb-6">{opt.label}</span>
                  <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full border-[2.5px] flex items-center justify-center transition-colors ${kelas1 === opt.id ? 'border-[#EB4688]' : 'border-gray-500'}`}>
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${kelas1 === opt.id ? 'bg-[#EB4688]' : 'bg-gray-300'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5 */}
          <div className="w-full bg-[#191A30]/40 border border-white/10 rounded-xl p-6 lg:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2A2045] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="url(#icon-grad)">
                  <path d="M4 4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  <path fill="#2A2045" d="M8 4h3v7H8z" />
                </svg>
              </div>
              <label className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A] font-medium text-lg md:text-[22px]">Pilihan Kelas Kedua</label>
            </div>
            <p className="text-gray-200 text-sm md:text-base mb-6">Pilih bidang yang ingin kamu pelajari.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              {kelasOptions.map((opt) => (
                <div 
                  key={opt.id} 
                  onClick={() => setKelas2(opt.id)}
                  className={`cursor-pointer flex flex-col items-center justify-center p-6 lg:p-8 rounded-2xl transition-all border-[1.5px] ${
                    kelas2 === opt.id 
                      ? 'bg-gradient-to-br from-[#A259FF]/20 to-[#FF8A8A]/20 border-[#EB4688]' 
                      : 'bg-[#222230] border-transparent hover:border-gray-500'
                  }`}
                >
                  {opt.icon}
                  <span className="text-white font-medium text-base md:text-lg lg:text-xl mb-6">{opt.label}</span>
                  <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full border-[2.5px] flex items-center justify-center transition-colors ${kelas2 === opt.id ? 'border-[#EB4688]' : 'border-gray-500'}`}>
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${kelas2 === opt.id ? 'bg-[#EB4688]' : 'bg-gray-300'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Card 6 */}
          <div className="w-full bg-[#191A30]/40 border border-white/10 rounded-xl p-6 lg:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2A2045] flex items-center justify-center shrink-0">
                {/* Chat Bubble Icon */}
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="url(#icon-grad)">
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.323 0 9.625-3.926 9.625-8.75s-4.302-8.75-9.625-8.75-9.625 3.926-9.625 8.75c0 2.364 1.057 4.515 2.8 6.134.124.116.249.231.376.345a.3.3 0 01.074.225l-.42 2.69z" clipRule="evenodd" />
                  <path fill="#2A2045" d="M8 10h8v2H8zM8 14h5v2H8z" />
                </svg>
              </div>
              <label className="text-white font-medium text-lg md:text-[22px]">
                Apa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A]">alasan</span> kamu memilih bidang-bidang tersebut?
              </label>
            </div>
            <p className="text-gray-200 text-sm md:text-base mb-6">Ceritakan motivasi dan tujuanmu mengikuti Study Club</p>
            <input 
              type="text"
              className="w-full px-4 py-3 lg:px-5 lg:py-4 bg-[#222230] border border-transparent rounded-lg text-white text-base md:text-lg focus:outline-none focus:border-[#A259FF] transition-colors placeholder:text-gray-500" 
              placeholder="Tulis jawabanmu di sini..." 
            />
          </div>

          {/* Card 7 */}
          <div className="w-full bg-[#191A30]/40 border border-white/10 rounded-xl p-6 lg:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2A2045] flex items-center justify-center shrink-0">
                {/* Handshake Icon */}
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 640 512" fill="url(#icon-grad)">
                  <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352l41.8 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-76 0-4 0-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48-80 0c-26.5 0-48 21.5-48 48L0 304c0 26.5 21.5 48 48 48l108.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z" />
                </svg>
              </div>
              <label className="text-white font-medium text-lg md:text-[22px]">
                Apakah kamu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A]">bersedia</span> mengikuti acara Study Club ini dengan aktif dari awal sampai akhir?
              </label>
            </div>
            <p className="text-gray-200 text-sm md:text-base mb-8">Komitmen mu sangat berarti bagi kelancaran kegiatan</p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              {/* Option Ya */}
              <div 
                onClick={() => setBersedia('Ya')}
                className={`cursor-pointer flex-1 p-[1.5px] rounded-full transition-all ${
                  bersedia === 'Ya' ? 'bg-gradient-to-r from-[#A259FF] to-[#EB4688] shadow-lg shadow-[#A259FF]/20' : 'bg-gradient-to-r from-[#A259FF] to-[#EB4688] opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`w-full h-full flex items-center justify-center gap-3 px-4 py-3 md:py-3.5 rounded-full transition-all ${
                  bersedia === 'Ya' ? 'bg-transparent text-white' : 'bg-[#191A30] text-gray-300'
                }`}>
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-[2px] flex items-center justify-center transition-colors ${bersedia === 'Ya' ? 'border-white' : 'border-gray-400'}`}>
                    {bersedia === 'Ya' && <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white" />}
                  </div>
                  <span className="font-medium text-base md:text-lg">Ya, Saya Bersedia</span>
                </div>
              </div>

              {/* Option Tidak */}
              <div 
                onClick={() => setBersedia('Tidak')}
                className={`cursor-pointer flex-1 p-[1.5px] rounded-full transition-all ${
                  bersedia === 'Tidak' ? 'bg-gradient-to-r from-[#A259FF] to-[#EB4688] shadow-lg shadow-[#A259FF]/20' : 'bg-gradient-to-r from-[#A259FF] to-[#EB4688] opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`w-full h-full flex items-center justify-center gap-3 px-4 py-3 md:py-3.5 rounded-full transition-all ${
                  bersedia === 'Tidak' ? 'bg-transparent text-white' : 'bg-[#191A30] text-gray-300'
                }`}>
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-[2px] flex items-center justify-center transition-colors ${bersedia === 'Tidak' ? 'border-white' : 'border-gray-400'}`}>
                    {bersedia === 'Tidak' && <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white" />}
                  </div>
                  <span className="font-medium text-base md:text-lg">Tidak</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start mt-2">
            <button type="button" className="flex items-center justify-center gap-3 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-[#A259FF] to-[#EB4688] text-white font-medium text-base md:text-lg rounded-full hover:scale-[1.02] transition-transform shadow-lg shadow-[#A259FF]/25">
              Submit Registration
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#A259FF]" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                </svg>
              </div>
            </button>
          </div>
          
        </form>
      </div>
    </section>
  );
}
