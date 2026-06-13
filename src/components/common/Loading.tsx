import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#110729]/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-24 h-24 bg-[#00D2FF]/30 rounded-full blur-xl animate-pulse"></div>
        <div className="relative animate-spin duration-[3000ms] ease-in-out">
          <Image 
            src="/studyclub/images/logo studyclub.svg" 
            alt="Study Club Logo" 
            width={80} 
            height={80} 
            className="object-contain drop-shadow-[0_0_15px_rgba(162,89,255,0.5)]"
          />
        </div>
      </div>
    </div>
  );
}
