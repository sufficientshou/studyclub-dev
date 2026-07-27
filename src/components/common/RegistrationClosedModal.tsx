'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface RegistrationClosedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationClosedModal({ isOpen, onClose }: RegistrationClosedModalProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleGoHome = () => {
    onClose();
    router.push('/');
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[92vw] sm:max-w-lg bg-[#020413] rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-b from-[#B05BFF] via-[#EB4688] to-[#FF8A8A] shadow-2xl z-10 animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        <div className="w-full bg-[#020413] rounded-[15px] sm:rounded-[23px] p-5 sm:p-8 flex flex-col items-center text-center relative overflow-y-auto max-h-[88vh]">
          
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-colors z-20"
            aria-label="Tutup"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative mb-4 sm:mb-6 mt-1 sm:mt-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#B05BFF]/20 to-[#EB4688]/20 flex items-center justify-center border border-white/10">
              <Image 
                src="/studyclub/images/logo studyclub.svg" 
                alt="Study Club Logo" 
                width={48} 
                height={48} 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-[#FF8A8A] to-[#EB4688] text-white p-1 sm:p-1.5 rounded-full">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-wide">
            Pendaftaran Telah Ditutup
          </h2>
          
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md font-light px-1 sm:px-0">
            Mohon maaf, pendaftaran <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8A] to-[#A259FF]">Study Club HIMTIKA 2026</span> telah resmi ditutup. Terima kasih banyak atas antusiasme luar biasa dari teman-teman! Pantau terus informasi terbaru mengenai kegiatan Study Club melalui sosial media kami.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full justify-center">
            <button
              onClick={handleGoHome}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#B05BFF] to-[#EB4688] text-white font-medium rounded-full hover:scale-105 active:scale-95 transition-all duration-300 text-xs sm:text-sm md:text-base"
            >
              Kembali ke Beranda
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-medium rounded-full transition-all duration-300 border border-white/10 text-xs sm:text-sm md:text-base"
            >
              Tutup
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
