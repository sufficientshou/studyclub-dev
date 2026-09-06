import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#140E3E] pt-16 pb-8 border-t border-white/5">
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-[30%]">
            <Link href="/" className="mb-4 lg:mb-6 block translate-x-3 sm:translate-x-4 lg:translate-x-6">
              <Image
                src="/studyclub/images/logo%20studyclub.svg"
                alt="Study Club Logo"
                width={220}
                height={220}
                className="w-[140px] md:w-[200px] lg:w-[240px] h-auto"
              />
            </Link>

            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-4">
              <a href="https://www.instagram.com/himtalks_?igsh=MW5tYm1iNG9udDB3dA==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#2B2171] flex items-center justify-center text-white hover:bg-[#8E51FF] hover:-translate-y-1 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/himtikaofficial/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#2B2171] flex items-center justify-center text-white hover:bg-[#8E51FF] hover:-translate-y-1 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.2235 0H1.772C0.792 0 0 0.7735 0 1.73V22.265C0 23.222 0.792 24 1.772 24H22.2235C23.2035 24 24 23.222 24 22.27V1.73C24 0.773 23.203 0 22.2235 0ZM7.12 20.4515H3.558V8.9955H7.1205L7.12 20.4515ZM5.339 7.435C5.06781 7.43546 4.79918 7.38246 4.54849 7.27903C4.29779 7.17559 4.06995 7.02376 3.87798 6.83221C3.686 6.64065 3.53367 6.41314 3.4297 6.16267C3.32572 5.9122 3.27213 5.64369 3.272 5.3725C3.27213 5.10131 3.32572 4.8328 3.4297 4.58233C3.53367 4.33186 3.686 4.10435 3.87798 3.91279C4.06995 3.72124 4.29779 3.56941 4.54849 3.46597C4.79918 3.36254 5.06781 3.30954 5.339 3.31C5.88601 3.31 6.41061 3.5273 6.79741 3.91409C7.1842 4.30089 7.4015 4.82549 7.4015 5.3725C7.4015 5.91951 7.1842 6.44411 6.79741 6.83091C6.41061 7.2177 5.88601 7.435 5.339 7.435ZM20.4515 20.452H16.894V14.883C16.894 13.5565 16.8705 11.8455 15.042 11.8455C13.1905 11.8455 12.9095 13.2935 12.9095 14.789V20.4515H9.356V8.9955H12.769V10.5605H12.8155C13.289 9.6605 14.4515 8.7095 16.181 8.7095C19.786 8.7095 20.4515 11.0815 20.4515 14.1655V20.452Z" /></svg>
              </a>
              <a href="https://www.youtube.com/@HimtikaOfficial" target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#2B2171] flex items-center justify-center text-white hover:bg-[#8E51FF] hover:-translate-y-1 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://www.tiktok.com/@himtika_unsika" target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#2B2171] flex items-center justify-center text-white hover:bg-[#8E51FF] hover:-translate-y-1 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=himtika@unsika.ac.id" target="_blank" rel="noopener noreferrer" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#2B2171] flex items-center justify-center text-white hover:bg-[#8E51FF] hover:-translate-y-1 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.66626 5.1665H23.3333C24.3403 5.1665 25.1661 5.99247 25.1663 6.99951V20.9995C25.1663 22.0067 24.3404 22.8335 23.3333 22.8335H4.66626C3.65922 22.8333 2.83325 22.0066 2.83325 20.9995V6.99951C2.83342 6.05552 3.55932 5.27085 4.47974 5.17627L4.66626 5.1665ZM23.0686 8.90869L13.9993 14.5767L4.93188 8.90869L4.16626 8.43115V21.4995H23.8333V8.43115L23.0686 8.90869ZM4.40161 7.42432L13.7346 13.2573L14.0002 13.4224L14.2649 13.2573L23.5979 7.42432L25.0764 6.49951H2.9231L4.40161 7.42432Z" fill="currentColor" stroke="currentColor"/></svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full lg:w-[70%] text-left mt-8 lg:mt-0">
            <div>
              <h3 className="text-white font-bold mb-4 lg:mb-6 tracking-wide text-base lg:text-lg">Tentang Kami</h3>
              <ul className="space-y-3 lg:space-y-4">
                <li><Link href="https://himtika.cs.unsika.ac.id/struktur-organisasi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Struktur Organisasi</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/sejarah-himtika" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Sejarah</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/logo-himtika" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Logo</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/galeri-himtika" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Galeri</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/grand-design-himtika" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Grand Design</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/visi-misi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Visi Misi</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/kontak-kami" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Kontak Kami</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 lg:mb-6 tracking-wide text-base lg:text-lg">Media</h3>
              <ul className="space-y-3 lg:space-y-4">
                <li><Link href="https://www.instagram.com/himtika_unsika/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Berita</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/hikode/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Artikel HIMTIKA</Link></li>
                <li><Link href="https://www.instagram.com/cnc_himtika/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Info Lomba</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 lg:mb-6 tracking-wide text-base lg:text-lg">Event</h3>
              <ul className="space-y-3 lg:space-y-4">
                <li><Link href="https://himtika.cs.unsika.ac.id/open-project/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Create and Compete</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/himtika-exchange/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Himtika Exchange</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/hgtc/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">HGTC</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/studyclub/" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Study Club</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/pekan-it/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Pekan IT: NIC</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/pekan-it/detail-semantik/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Pekan IT: Semantik IC</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/lkmmpd/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">LKMM-PD</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/diesnatalis/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Diesnatalis</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/it-bootcamp/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">IT Bootcamp</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 lg:mb-6 tracking-wide text-base lg:text-lg">Aplikasi Publik</h3>
              <ul className="space-y-3 lg:space-y-4">
                <li><Link href="https://himtalks.vercel.app/himtalks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Himtalks</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/himtika-awards/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Himtika Award</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/media-partner/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Media Partner</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/corporation/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Corporation</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/kalender/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Kalender</Link></li>
                <li><Link href="https://himtika.cs.unsika.ac.id/dosen/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Profil Tenaga Pendidik</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="w-full border-t border-white/20 mb-8" />
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <p className="text-gray-300 text-sm">
            Licensed, Registered, and authorized by
          </p>
          <div className="flex items-center gap-2">
            <Image
              src="/studyclub/images/himtika.png"
              alt="HIMTIKA Logo"
              width={24}
              height={24}
              className="w-5 h-5 md:w-6 md:h-6 object-contain"
            />
            <span className="text-white font-semibold text-sm tracking-wider">HIMTIKA 2026</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
