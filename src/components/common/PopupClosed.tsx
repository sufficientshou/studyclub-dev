"use client";

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function PopupContent() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('status') === 'closed') {
      setIsOpen(true);
    }
  }, [searchParams]);

  const closeModal = () => {
    setIsOpen(false);
    // Remove query param without reloading page
    router.replace('/', { scroll: false });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
      <div className="relative bg-[#0F1123] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-2xl shadow-[#B05BFF]/20 animate-in fade-in zoom-in-95 duration-300">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-500/10 mb-6">
            <svg className="h-8 w-8 text-[#FF8A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Pendaftaran Ditutup</h3>
          <p className="text-gray-300 mb-8 text-sm sm:text-base">
            Mohon maaf, pendaftaran Study Club saat ini sudah ditutup. Nantikan batch selanjutnya ya!
          </p>
          <button
            onClick={closeModal}
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#B05BFF] to-[#EB4688] text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#EB4688]/20"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PopupClosed() {
  return (
    <Suspense fallback={null}>
      <PopupContent />
    </Suspense>
  );
}
