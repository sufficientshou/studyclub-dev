import Image from 'next/image';
import Link from 'next/link';

export default function FloatingButton() {
  return (
    <Link 
      href="https://himtika.cs.unsika.ac.id/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      title="Ke Homepage HIMTIKA"
    >
      <Image
        src="/studyclub/images/himtika.png"
        alt="HIMTIKA Logo"
        width={28}
        height={28}
        className="w-6 h-6 md:w-7 md:h-7 object-contain group-hover:rotate-12 transition-transform duration-300"
      />
    </Link>
  );
}
