import Image from 'next/image';
import Link from 'next/link';

export default function Learning() {
  return (
    <section id="class" className="relative w-full bg-[#0A001F] overflow-hidden flex flex-col items-center justify-center min-h-screen py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/studyclub/images/bg%20learning.png"
          alt="Learning Background"
          fill
          className="object-cover object-center w-full h-full"
          quality={100}
        />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0A001F] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0A001F] to-transparent"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center mt-8 lg:-mt-24">
        <div className="max-w-7xl w-full mx-auto px-6 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white tracking-wide">
          Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A]">Learning Path</span>
        </h2>
        
        <p className="text-gray-200 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed mb-20 px-4">
          Temukan bidang yang sesuai dengan minatmu dan mulai berkembang
          bersama komunitas belajar yang suportif.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-[24px] bg-[#23355C]/40 backdrop-blur-md border border-white/10 hover:bg-[#23355C]/60 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-5 h-16 w-16 relative flex items-center justify-center">
               <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[36px] h-[54px]">
                  <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" fill="#0ACF83"/>
                  <path d="M0 47.5C0 52.7467 4.25329 57 9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.25329 38 0 42.2533 0 47.5Z" fill="#1ABCFE"/>
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.2533 0 9.5Z" fill="#F24E1E"/>
                  <path d="M19 0H28.5C33.7467 0 38 4.2533 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
                  <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5Z" fill="#A259FF"/>
               </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A]">UI/UX</h3>
            <p className="text-gray-300 mb-5 text-sm leading-relaxed px-1">
              UI/UX Design berfokus pada pembuatan tampilan...
            </p>
            <Link href="#" className="text-[#FF8A8A] font-medium hover:text-white transition-colors mt-auto text-sm">
              Lihat selengkapnya
            </Link>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-[24px] bg-[#23355C]/40 backdrop-blur-md border border-white/10 hover:bg-[#23355C]/60 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-5 h-16 w-16 relative flex items-center justify-center">
               <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" className="w-[42px] h-[54px]">
                  <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-99 27.4-99-27.4-6.7-75.2h47.7l3.4 38.3 54.6 14.7 54.6-14.7 5.7-62.6H114.8L100.6 112h182.9l-4.3 47.9z" fill="#E34F26"/>
               </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A]">Web Development</h3>
            <p className="text-gray-300 mb-5 text-sm leading-relaxed px-1">
              Web Development adalah bidang yang mempelajari...
            </p>
            <Link href="#" className="text-[#FF8A8A] font-medium hover:text-white transition-colors mt-auto text-sm">
              Lihat selengkapnya
            </Link>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-[24px] bg-[#23355C]/40 backdrop-blur-md border border-white/10 hover:bg-[#23355C]/60 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-5 h-16 w-16 relative flex items-center justify-center">
               <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60px] h-[60px]">
                  <path d="M53.8055 3.33331C26.0416 3.33331 22.8471 15.6597 22.8471 15.6597V27.4652H55.0208V29.5486H17.2916C17.2916 29.5486 3.33331 28.5069 3.33331 55.4514C3.33331 82.3958 14.5138 80.5903 14.5138 80.5903H24.2361V68.7847C24.2361 68.7847 24.2361 53.0208 39.8611 53.0208H65.2083C65.2083 53.0208 77.0138 52.8819 77.0138 40.5208V17.0486C77.0138 17.0486 78.4027 3.33331 53.8055 3.33331ZM40.0971 11.6666C43.1527 11.6666 45.6527 14.1666 45.6527 17.2222C45.6527 20.2778 43.1527 22.7778 40.0971 22.7778C37.0416 22.7778 34.5416 20.2778 34.5416 17.2222C34.5416 14.1666 37.0416 11.6666 40.0971 11.6666Z" fill="#387EB8"/>
                  <path d="M55.5763 106.667C83.3402 106.667 86.5346 94.3403 86.5346 94.3403V82.5347H54.361V80.4513H92.0895C92.0895 80.4513 106.048 81.493 106.048 54.5486C106.048 27.6041 94.8673 29.4097 94.8673 29.4097H85.145V41.2152C85.145 41.2152 85.145 56.9791 69.52 56.9791H44.1728C44.1728 56.9791 32.3673 57.118 32.3673 69.4791V92.9513C32.3673 92.9513 30.9784 106.667 55.5763 106.667ZM69.2846 98.3333C66.2291 98.3333 63.7291 95.8333 63.7291 92.7777C63.7291 89.7222 66.2291 87.2222 69.2846 87.2222C72.3402 87.2222 74.8402 89.7222 74.8402 92.7777C74.8402 95.8333 72.3402 98.3333 69.2846 98.3333Z" fill="#FFE052"/>
               </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF8A8A]">Data Science</h3>
            <p className="text-gray-300 mb-5 text-sm leading-relaxed px-1">
              Data Science adalah bidang yang mempelajari...
            </p>
            <Link href="#" className="text-[#FF8A8A] font-medium hover:text-white transition-colors mt-auto text-sm">
              Lihat selengkapnya
            </Link>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
