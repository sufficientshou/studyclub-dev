'use client';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Survey bidang yang ingin ditetapkan',
    date: '9 – 16 Maret 2026',
    side: 'right',
    bg: '#705DF2',
  },
  {
    id: 2,
    title: 'Open Recruitment Kepanitiaan',
    date: '12 – 20 April 2026',
    side: 'left',
    bg: '#705DF2',
  },
  {
    id: 3,
    title: 'Sosialisasi Study Club',
    date: '19 Juni 2026',
    side: 'right',
    bg: 'linear-gradient(to bottom, #705DF2, #C846A3)',
  },
  {
    id: 4,
    title: 'Pendaftaran Peserta',
    date: '22 Juni – 2 Juli 2026',
    side: 'left',
    bg: '#E23D80',
  },
  {
    id: 5,
    title: 'Pelaksanaan Study Club',
    date: '20 Juli – 25 Oktober 2026',
    side: 'right',
    bg: '#EB498D',
  },
];

export default function Journey() {
  return (
    <>
      <style>{`
        .journey-item {
          opacity: 1;
        }
        .journey-card {
          position: relative;
          background: linear-gradient(#222121, #222121) padding-box,
                      linear-gradient(135deg, #705DF2 0%, #EB498D 100%) border-box;
          border: 1.5px solid transparent;
          border-radius: 12px;
          padding: 16px 20px;
          width: 100%;
          max-width: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        @media (min-width: 768px) {
          .journey-card {
            padding: 22px 26px;
            max-width: 380px;
          }
        }
        .journey-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(112, 93, 242, 0.15);
        }
        .journey-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 14px;
          flex-shrink: 0;
          z-index: 10;
          position: relative;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }
        .timeline-line {
          position: absolute;
          left: calc(1rem + 18px);
          top: 36px;
          bottom: 36px;
          width: 2px;
          background: linear-gradient(to bottom, #705DF2 0%, #705DF2 30%, #C846A3 60%, #E23D80 85%, #EB498D 100%);
          transform: translateX(-50%);
        }
        @media (min-width: 640px) {
          .timeline-line {
            left: calc(1.5rem + 18px);
          }
        }
        @media (min-width: 768px) {
          .timeline-line {
            left: 50%;
            top: 56px;
            bottom: 44px;
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section
        id="journey"
        className="relative w-full bg-[#110729] py-16 md:py-24 flex flex-col items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/studyclub/images/bg%20bintang.png"
            alt="Stars Background"
            fill
            className="object-cover object-center opacity-80"
          />
        </div>
        <div className="absolute left-[-20px] lg:left-10 top-[30%] lg:top-[35%] z-0 pointer-events-none">
          <Image 
            src="/studyclub/images/planet%20merah.png" 
            alt="Planet Merah" 
            width={200}
            height={200}
            className="w-[120px] md:w-[160px] lg:w-[200px] h-auto object-contain drop-shadow-2xl opacity-90" 
          />
        </div>
        <div className="absolute right-[-20px] lg:right-10 top-10 lg:top-16 z-0 pointer-events-none">
          <Image 
            src="/studyclub/images/planet%20ungu.png" 
            alt="Planet Ungu" 
            width={180}
            height={180}
            className="w-[100px] md:w-[150px] lg:w-[180px] h-auto object-contain drop-shadow-2xl opacity-90" 
          />
        </div>
        <div className="absolute right-4 lg:right-20 bottom-10 lg:bottom-20 z-0 pointer-events-none">
          <Image 
            src="/studyclub/images/meteor.png" 
            alt="Meteor" 
            width={250}
            height={250}
            className="w-[150px] md:w-[200px] lg:w-[250px] h-auto object-contain drop-shadow-2xl opacity-80" 
          />
        </div>
        <div className="text-center mb-12 md:mb-20 z-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide leading-tight">
            Your Journey
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#815DF2] to-[#F56F7E]">
            Starts Here
          </h2>
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <div className="timeline-line" />

          <div className="flex flex-col gap-8 md:gap-16 relative">
            {steps.map((step) => (
              <div
                key={step.id}
                className="journey-item w-full grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-12"
              >
                <div className="hidden md:flex justify-end w-full">
                  {step.side === 'left' && (
                    <div className="journey-card text-left">
                      <h3 className="text-white font-medium text-[16px] sm:text-[18px] md:text-[22px] leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-[13px] sm:text-[14px] md:text-[16px] font-normal mt-2 md:mt-3">
                        {step.date}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex justify-center items-center">
                  <div
                    className="journey-badge"
                    style={{ background: step.bg }}
                  >
                    {step.id}
                  </div>
                </div>

                <div className="flex justify-start w-full">
                  <div className="hidden md:block w-full">
                    {step.side === 'right' && (
                      <div className="journey-card text-left">
                        <h3 className="text-white font-medium text-[19px] md:text-[22px] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-[14px] md:text-[16px] font-normal mt-3">
                          {step.date}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="block md:hidden w-full">
                    <div className="journey-card text-left">
                      <h3 className="text-white font-medium text-[16px] sm:text-[18px] md:text-[22px] leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-[13px] sm:text-[14px] md:text-[16px] font-normal mt-2 md:mt-3">
                        {step.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
