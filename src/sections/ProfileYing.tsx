import SectionLabel from '@/components/SectionLabel';
import profileData from '@/data/profile.json';

const profileLines = [
  'Sono Arianna, ho 12 anni e pratico Sanda.',
  'Determinata, curiosa e sempre pronta',
  'a mettermi alla prova.',
  'Ogni giorno scelgo di migliorare',
  'e superare i miei limiti.',
];

const yingLines = [
  "Ho scelto Ying perche l'aquila vola in alto,",
  'vede lontano e non smette mai di allenarsi.',
  'Rappresenta la liberta, la forza interiore',
  'e la capacita di superare ogni limite.',
];

export default function ProfileYing() {
  return (
    <section id="profilo" className="paper-panel border-b border-satin-gold/40">
      <div className="grid min-h-[430px] lg:grid-cols-2">
        <div className="grid min-h-[430px] grid-cols-1 md:grid-cols-[47%_53%]">
          <div className="relative min-h-[340px] overflow-hidden">
            <img
              src="/assets/profile-left.jpg"
              alt="Arianna Milano in tenuta Kasoria Kombat & Fly"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#eee4d7]/65" />
            <div className="absolute bottom-9 left-[26%] text-center">
              <span className="block text-[1.65rem] font-black leading-none tracking-[0.04em] text-satin-gold">KASORIA</span>
              <span className="block text-[0.85rem] font-black tracking-[0.08em] text-satin-gold">KOMBAT & FLY</span>
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-center px-6 py-10 md:px-10">
            <SectionLabel number="01" title="CHI È ARIANNA" dark underline />
            <p className="mt-8 max-w-full text-[0.88rem] font-medium leading-7 text-ink/82 md:max-w-[360px] md:text-[0.95rem] md:leading-8" aria-label={profileData.bio}>
              {profileLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <svg viewBox="0 0 230 58" className="mt-6 h-auto w-[150px]" aria-label="Firma Arianna">
              <path
                d="M8 42 C24 20 39 17 43 32 C47 45 28 46 25 38 C21 28 43 26 68 32 C84 36 94 42 104 34 C111 28 112 20 107 19 C101 18 94 28 92 39 C91 47 101 48 112 38 C124 27 135 23 138 30 C141 38 130 43 125 39 C118 32 134 25 158 31 C176 36 188 38 210 28"
                fill="none"
                stroke="#a68b4b"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path d="M19 47 C61 51 119 50 190 43" fill="none" stroke="#c9a962" strokeLinecap="round" strokeWidth="1.4" opacity=".55" />
            </svg>
            <a href="#profilo" className="mt-6 inline-flex items-center gap-4 text-[0.72rem] font-black uppercase tracking-[0.13em] text-ink transition-colors hover:text-lacquer-red">
              SCOPRI IL MIO PROFILO <span className="text-lacquer-red">-&gt;</span>
            </a>
          </div>
        </div>

        <div id="ying" className="relative grid min-h-[430px] overflow-hidden border-t border-satin-gold/45 lg:border-l lg:border-t-0">
          <img src="/assets/eagle-flying.jpg" alt="Aquila in volo" className="absolute inset-0 h-full w-full object-cover object-[66%_50%] opacity-78" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f2e9de] via-[#efe4d7]/86 to-[#efe4d7]/20" />
          <div className="relative z-10 flex min-w-0 flex-col justify-center px-6 py-10 md:px-12">
            <SectionLabel number="02" title="YING · 鷹" dark />
            <p className="mt-2 text-[0.9rem] font-black uppercase tracking-[0.48em] text-satin-gold">AQUILA</p>
            <p className="mt-8 max-w-full text-[0.88rem] font-medium leading-7 text-ink/82 md:max-w-[440px] md:text-[0.95rem] md:leading-8" aria-label={profileData.ying.description}>
              {yingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <a href="#ying" className="mt-8 inline-flex items-center gap-4 text-[0.72rem] font-black uppercase tracking-[0.13em] text-ink transition-colors hover:text-lacquer-red">
              SCOPRI IL SIGNIFICATO <span className="text-lacquer-red">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
