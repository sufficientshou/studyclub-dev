import Home from '@/components/home/Home';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/home/About'), { ssr: true });
const Learning = dynamic(() => import('@/components/home/Learning'), { ssr: true });
const Mentor = dynamic(() => import('@/components/home/Mentor'), { ssr: true });
const Journey = dynamic(() => import('@/components/home/Journey'), { ssr: true });
const Daftar = dynamic(() => import('@/components/home/Daftar'), { ssr: true });
const Faq = dynamic(() => import('@/components/home/Faq'), { ssr: true });

export default function HomePage() {
  return (
    <main>
      <Home />
      <About />
      <Learning />
      <Mentor />
      <Journey />
      <Daftar />
      <Faq />
    </main>
  );
}

