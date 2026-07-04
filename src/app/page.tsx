import Home from '@/components/home/Home';
import About from '@/components/home/About';
import Learning from '@/components/home/Learning';
import Mentor from '@/components/home/Mentor';
import Journey from '@/components/home/Journey';
import Daftar from '@/components/home/Daftar';
import Faq from '@/components/home/Faq';

export default function RootPage() {
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
