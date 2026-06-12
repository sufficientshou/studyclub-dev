import Home from '@/components/home/Home';
import About from '@/components/home/About';
import Learning from '@/components/home/Learning';
import Journey from '@/components/home/Journey';
import Mentor from '@/components/home/Mentor';
import Daftar from '@/components/home/Daftar';

export default function HomePage() {
  return (
    <main>
      <Home />
      <About />
      <Learning />
      <Mentor />
      <Journey />
      <Daftar />
    </main>
  );
}

