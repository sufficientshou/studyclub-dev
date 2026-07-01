import Image from 'next/image';
import Link from 'next/link';

export default function FloatingButton() {
  return (
    <Link 
      href="https://himtika.cs.unsika.ac.id/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      title="Ke Homepage HIMTIKA"
    >
      <Image
        src="/studyclub/images/himtika.png"
        alt="HIMTIKA Logo"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:rotate-12 transition-transform duration-300"
      />
    </Link>
  );
}
